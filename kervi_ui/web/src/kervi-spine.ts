// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

export class  KerviSpine{

	public isConnected: Boolean = false;
	public doAuthenticate:boolean = false;
	sessionId = null;
	queryHandlers=[];
	commandHandlers=[];
	eventHandlers=[];
	rpcQueue={};
	ready=false;
	messageId=0;
	sensors={};
	controllers={};
	sensorTypes=[];
	controllerTypes=[];
	pointOfInterests=[];
	application=null;
	allowAnonymous = true;
		
	websocket = null;
	
	private options=  {
			userName: "anonymous",
			password: null,
			address:null,
			onOpen:null,
			onClose:null,
			onAuthenticate:null,
			onAuthenticateFailed:null,
			onLogOff: null,
			autoConnect:true,
			targetScope:null
	}
	
	constructor(public constructorOptions){
		console.log("Kervi spine init",this.options,constructorOptions);
		this.options = this.extend(this.options,constructorOptions);
		this.connect();
	}

	

	private extend(...p:any[])
	{
		for(var i=1; i<p.length; i++)
			for(var key in p[i])
				if(p[i].hasOwnProperty(key))
					p[0][key] = p[i][key];
		return p[0];
	}

	private addRPCCallback(id:string,callback)
	{
		if (callback)
			this.rpcQueue[id]=callback;
	}

	private handleRPCResponse(message){
		var callback=this.rpcQueue[message.id];
		if (callback){
			delete this.rpcQueue[message.id];
			callback.call(this.options.targetScope,message.response,message.response);
		}
	}

	private handleEvent(message){
		var eventName=message.event;
		var id=message.id;
		
		var eventPath=eventName;
		if (id){
			eventPath+="/"+id;
		}
		
		var value=null;
		if(message.args && message.args.length){
			value=message.args[0];
		}
		
		for(var n=0;(n<this.eventHandlers.length);n++)
		{
			var h=this.eventHandlers[n];
			if (h.eventName==eventPath)
				h.callback.call(value,id,value);
		}
	}

	private handleCommand(message){
		console.log("cmd",this,message);
		var command=message.command
		
		var args=null;
		if(message.args && message.args.length){
			args=message.args[0];
		}
		
		for(var n=0;(n<this.commandHandlers.length);n++)
		{
			var c=this.commandHandlers[n];
			if (c.command==command)
				c.callback.call(this,args);
		}
	}

	private connect(){
		if (this.isConnected){
			console.log("Kervi is connected");
			return
		}
		var self=this;
		this.websocket= new WebSocket("ws://" + this.options.userName + ":" + this.options.password + "@" +this.options.address);
		this.websocket.onopen = function(evt) { 
			self.onOpen(evt);
		};
		
		this.websocket.onclose = function(evt) { 
			self.onClose(evt) 
		};
		
		this.websocket.onmessage = function(evt) { 
			self.onMessage(evt) 
		};
		
		this.websocket.onerror = function(evt) {
			self.onError(evt) 
		};
	}

	

	private onOpen(evt){
		console.log("Kervi spine on open",this,evt);
		
		var self=this
		this.isConnected=true;
		
			
		console.log("Kervi spine ready")
	}

	private onClose(evt){
		console.log("Kervi spine on close",evt);
		this.isConnected=false;
		if (this.options.onClose)
			this.options.onClose.call(this.options.targetScope,evt);
		
		if (this.options.autoConnect){
			setTimeout(1000,this.connect());
		}
	}

	authenticate(userName, password){
		this.options.userName = userName;
		this.options.password = password;

		var cmd={id:this.messageId++,"messageType":"authenticate","userName":this.options.userName, "password": this.options.password};
		this.websocket.send(JSON.stringify(cmd));
	}

	logoff(){
		this.options.userName = this.allowAnonymous ? "anonymous" : null;
		this.options.password = null;

		var cmd={id:this.messageId++,"messageType":"logoff", "session": this.sessionId};
		this.sessionId = null;
		this.websocket.send(JSON.stringify(cmd));
	}

	onMessage(evt){
		//console.log("on m",evt.data);
		var message=JSON.parse(evt.data);
		var self = this;
		
		if (message.messageType=="authenticate"){
			console.log("authenticate");
			this.doAuthenticate = true;
			if (this.options.userName)
				this.authenticate(this.options.userName, this.options.password)
			else
				this.options.onAuthenticate.call(this.options.targetScope,evt);
		}
		else if (message.messageType=="authentication_failed"){
			console.log("authentication failed", this.options.userName);
			if (this.options.userName == "anonymous") {
				this.allowAnonymous = false;
				this.options.userName = null;
				this.options.password = null;
				this.sessionId = null;
				console.log("x", self.options)
				if (self.options.onLogOff){
					console.log("x1")
					self.options.onLogOff.call(self.options.targetScope,evt);
				}
			} else
				this.options.onAuthenticateFailed.call(this.options.targetScope,evt);
		}
		else if (message.messageType=="session_authenticated"){
			var date = new Date();
			
        	date.setTime(date.getTime() + (2*60*60*1000));
        	var expires = "; expires=" + date.toUTCString();
			this.sessionId = message.session;
			document.cookie = "kervisession" + "=" + message.session + expires + "; path=/";
			
			
			setTimeout(function(){
				if (self.options.onOpen)
					self.options.onOpen.call(self.options.targetScope,evt);
			}, 100
			);
		} else if (message.messageType == "session_logoff"){ 
			self.options.userName = this.allowAnonymous && this.options.userName != "anonymous" ? "anonymous" : null;
			self.options.password = null;
			self.sessionId = null;
			if (self.options.onLogOff)
				self.options.onLogOff.call(self.options.targetScope,evt);
		} else if (message.messageType=="response")
			this.handleRPCResponse(message);
		else if (message.messageType=="event")
			this.handleEvent(message);
		else if (message.messageType=="command")
			this.handleCommand(message);
		else
			console.log("Kervi spine message unknown",this.rpcQueue,evt);
	}

	onError(evt){
		console.log("Kervi on error",evt);
	}

	public addCommandHandler (command:string,callback){
		this.commandHandlers.push({command:command,callback:callback});
		var cmd={id:this.messageId++,"messageType":"registerCommandHandler","command":command};
		this.websocket.send(JSON.stringify(cmd));
	};

	public addQueryHandler(query:string,callback){
		this.queryHandlers.push({query:query,callback:callback});
		var cmd={id:this.messageId++,"messageType":"registerQueryHandler","query":query};
		this.websocket.send(JSON.stringify(cmd));
	};

	public addEventHandler=function(eventName:string,id:string,callback){
		if (id)
			this.eventHandlers.push({"eventName":eventName+"/"+id,callback:callback});
		else
			this.eventHandlers.push({"eventName":eventName,callback:callback});
		var cmd={id:this.messageId++,"messageType":"registerEventHandler","event":eventName,"eventId":id};
		console.log("add event handler",cmd);
		this.websocket.send(JSON.stringify(cmd));
	};

	public sendCommand(command:string,...p:any[]){
		console.log("sec",arguments);
		var args=[];
		
		var callback=null;

		for (var i=0;(i<p.length);i++){
			if (p[i] instanceof Function)
				callback=p[i];
			else
				args.push(p[i]);
		}
		
		/*if (p.length>1){
			var argOffset=1;
			if ( callback && callback instanceof Function )
				argOffset+=1;
			for (var i=argOffset;(i<arguments.length);i++){
				args.push(arguments[i]);
			}
		}*/
		var cmd={id:this.messageId++,"messageType":"command","command":command,"args":args};
		if (callback && callback instanceof Function)
			this.addRPCCallback(cmd.id.toString(),callback);
		console.log("sendCommand",this,cmd);
		this.websocket.send(JSON.stringify(cmd));
	};

	public sendQuery(query,...p:any[]){
		var args=[];
		var callback=null;

		for (var i=0;(i<p.length);i++){
			if (p[i] instanceof Function)
				callback=p[i];
			else
				args.push(p[i]);
		}
		 
		var cmd={id:this.messageId++,"messageType":"query","query":query,"args":args};
		this.addRPCCallback(cmd.id.toString(),callback);
		console.log("sendQuery",p,this,callback,cmd);
		this.websocket.send(JSON.stringify(cmd));
	};

	public triggerEvent(eventName:string,id:string){
		var e={id:this.messageId++,"messageType":"event","event":eventName,"args":arguments};
		this.websocket.send(JSON.stringify(e));
	};
}