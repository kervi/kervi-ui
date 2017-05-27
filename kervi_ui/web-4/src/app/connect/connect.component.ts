// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit } from '@angular/core';
import { KerviService } from "../kervi.service"
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-connect',
  //providers: [ KerviService ],
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  private isConnected: boolean = false;
  private currentPage = null;
  private ts = new Date()
  constructor(private kerviService: KerviService, private router: Router, private route: ActivatedRoute) {
    var self = this;
  }

  private onConnectedChange(v) {

  }

  ngOnInit() {
    

  }

  ngOnDestroy() {
    //this.kerviService.Connected.unsubscribe()    
  }
}
