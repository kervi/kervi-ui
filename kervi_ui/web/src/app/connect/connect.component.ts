// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit } from '@angular/core';
import { KerviService } from "../kervi.service"
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectedService} from '../connected.service'
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-connect',
  //providers: [ KerviService ],
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  private isConnected: boolean = false;
  private currentPage = null;
  invalidUser:Boolean = false;
  private ts = new Date()
  loginForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;
  
  constructor(fb: FormBuilder, private kerviService: KerviService, private connectedService:ConnectedService, private router: Router, private route: ActivatedRoute) {
    var self = this;
    this.loginForm = fb.group({  
    'userName':  ['', Validators.required],
    'password':  ['', Validators.required]  
    });
    
    this.userName = this.loginForm.controls['userName'];
    this.password = this.loginForm.controls['password']; 
    
  }

  private isAuthenticated(){
    return this.connectedService.isAuthenticated;
  }

  private doAuthenticate(){
    return this.kerviService.doAuthenticate;
  }

  private onConnectedChange(v) {

  }

  ngOnInit() {
    var self=this;
    this.kerviService.authenticationFailed$.subscribe(function(v){
      self.invalidUser = v;
    });

  }

  ngOnDestroy() {
    //this.kerviService.Connected.unsubscribe()    
  }

  onSubmit(value: any): void {  
    console.log('you submitted value: ', value);
    this.kerviService.authenticate(value.userName, value.password)  
  }
}
