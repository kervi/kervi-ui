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
  
  connected$: BehaviorSubject<Boolean> = new  BehaviorSubject<Boolean>(false);
  

  constructor() 
  { 
    console.log("kervi service constructor");
    
    this.connected$ = new BehaviorSubject<Boolean>(false);
    this.application$= new BehaviorSubject<any>(null);
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
    console.log("ks", kerviSocketAddress);
    this.spine = new KerviSpine({
      address:"ws://" + kerviSocketAddress,
      onOpen: this.onOpen,
      onClose:this.onClose,
      targetScope:this,
     });
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
