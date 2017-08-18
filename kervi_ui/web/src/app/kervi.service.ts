// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Injectable , EventEmitter} from '@angular/core';
import {KerviSpine} from "../kervi-spine";
import {BehaviorSubject, Subject} from 'rxjs/Rx';
import {IComponent} from './models/IComponent.model'
import { ComponentFactory } from './models/factory'
declare var kerviSocketAddress : any;

@Injectable()
export class KerviService {
  spine: KerviSpine = null;
  private appInfo=null;
  public  application$: BehaviorSubject<any>;
  private components : IComponent[] = [];
  private components$: BehaviorSubject<IComponent[]> = new  BehaviorSubject<IComponent[]>([]);
  public doAuthenticate: boolean = false;
  connected$: BehaviorSubject<Boolean> = new  BehaviorSubject<Boolean>(false);
  authenticationFailed$: BehaviorSubject<Boolean> = new  BehaviorSubject<Boolean>(false);
  

  constructor() 
  { 
    console.log("kervi service constructor");
    var self=this;
    this.connected$ = new BehaviorSubject<Boolean>(false);
    this.application$= new BehaviorSubject<any>(null);
    
    setInterval(function(){
      if (self.connected$.value){
        //self.refreshComponents()  
        
      }
    },10000);

     var s1=this.connected$.subscribe(function(connected){
            if (connected){
                self.spine.addEventHandler("dynamicValueChanged","",function(id, value){
                    for (let component of self.components){
                        if (component.id==value.id){
                            if (component.componentType == "sensor"){
                              var dynamicValue = component as any;
                            
                              dynamicValue.value.valueTS=new Date(this.timestamp + " utc");
                              dynamicValue.value.value$.next(value.value);
                              var spl=dynamicValue.value.sparkline$.value;
                              spl.push(value.value);
                              if (spl.length>10)
                                  spl.shift();
                              dynamicValue.value.sparkline$.next(spl);  
                            } else {
                              var dynamicValue = component as any;
                              
                              //console.log("dvc", value, dynamicValue);
                              dynamicValue.valueTS=new Date(this.timestamp + " utc");
                              dynamicValue.value$.next(value.value);
                              /*var spl=dynamicValue.sparkline$.value;
                              spl.push(value.value);
                              if (spl.length>10)
                                  spl.shift();
                              dynamicValue.sparkline$.next(spl);*/
                            }
                        }
                    }
                });
            }
        });

  }

  private refreshComponents(){
    var self=this;
    self.spine.sendQuery("getComponentInfo",function(message){
          console.log("refresh component info",message);
          var components = ComponentFactory.createComponents(message);
          console.log("refresh components",components);
          for (var c of components){
            var found = false;
            for(var component of self.components){
              if (component.id == c. id){
                found=true;
                component.reload(c);
                break;
              }
            }
            if (!found){
              self.components.push(c);
              console.log("add c", c);
            }
          }
          console.log("delete hanging components")
          var deleteComponents:IComponent[]=[]
          for (var component of self.components){
            var found = false;
            for(var c of components){
              if (component.id == c. id){
                found = true;
                break;
              }
            }
            if (!found)
              deleteComponents.push(component);
          }
          console.log("dc", deleteComponents);
          for(var component of deleteComponents){
            self.components.splice( self.components.indexOf(component), 1 );
          }
          console.log("refresh done");
          self.components$.next(self.components);
        });
  }

  public getComponents$(){
    return this.components$.asObservable();
  }


  public getComponent(id:string){
    for (var component of this.components){
      if (component.id == id)
        return component;
    }
    return null;
  }

  public getComponentsByType(type:string){
    var result = []
    for (var component of this.components){
      if (component.componentType == type)
        result.push(component);
    }
    return result;
  }

  public connect(){
    var address = null;
    try{
      if (kerviSocketAddress)
      {
        address = kerviSocketAddress
      }
    } catch(e) {
      address = "localhost:9000";
    }
    console.log("ks", address);
    this.spine = new KerviSpine({
      address: address,
      onOpen: this.onOpen,
      onClose:this.onClose,
      onAuthenticate:this.onAuthenticate,
      onAuthenticateFailed:this.onAuthenticateFailed,
      targetScope:this,
     });
  }

  authenticate(userName, password){
    this.authenticationFailed$.next(false);
    this.spine.authenticate(userName, password);
  }

  private onAuthenticate(){
    this.doAuthenticate = true;
    this.onClose();
  }

  private onAuthenticateFailed(){
    console.log("af");
    this.authenticationFailed$.next(true);
  }

  private onOpen(){
    console.log("kervice service on open",this);
    var self=this;
    this.spine.sendQuery("GetApplicationInfo",function(message){
		  console.log("appinfo",message);
		  this.spine.sendQuery("getComponentInfo",function(message){
        console.log("component info",message);
        self.components = ComponentFactory.createComponents(message);
        self.components$.next(self.components);
        self.application$.next(message);
        self.connected$.next(true);
        console.log("components",self.components); 
      });  
	  });
    this.spine.addEventHandler("moduleStarted","",function(){
        console.log("module loaded",self.components); 
        self.refreshComponents(); 
    });           
    
    this.spine.addEventHandler("moduleStopped","",function(){
        console.log("module unloaded"); 
        setTimeout(function() {
          console.log("module unloaded, refresh");
        
          self.refreshComponents()
      }, 5000);           
    });
    
  }

  private onClose(){
    this.components = [];
    this.components$.next(this.components);

    this.connected$.next(false);
  }

  private onHeartbeat(){

  }

  private onConnect(){

  }

}
