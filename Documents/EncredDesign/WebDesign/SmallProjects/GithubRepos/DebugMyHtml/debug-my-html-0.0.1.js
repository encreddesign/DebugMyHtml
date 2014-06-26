//debug-my-html-0.0.1.js 0.0.1
//(c) 2014 JoshuaGrierson, EncredDesign
//For all documentation and api goto
//http://github.com/encreddesign/DebugMyHtml

//configuration for whole lib
var config = {
	c : console,
	w : window,
	d : document,
	db : 'debug',
	cssf : 'dmh-style.css',
	csscls : 'error-debug'
};

//create link tag for reference of stylesheet
var ctag = function(t, c){
	lt = config.d.createElement(t.toUpperCase());
	if(arguments[1]){
		ht = config.d.getElementsByTagName(c.toUpperCase())[0];
		ht.appendChild(lt);
	}else{
		config.d.body.appendChild(lt);
	}
	return lt;
};

//set properties/attributes for a tag
var props = function(t, key, val){
	for(i=0;i<key.length;i++)t.setAttribute(key[i], '');
	for(j=0;j<val.length;j++)t.setAttribute(key[j], val[j]);
};

//get elements with debug property/attribute
var dbes = function(){
	els = config.d.body.getElementsByTagName('*');
	dbs = [];
	for(i=0;i<els.length;i++){
		if(els[i].getAttribute(config.db))dbs.push(els[i]);
	}
	return dbs;
};

//DMH function
//Need to create new instance of this function
function DMH(){
	if(!config.w||!config.d)throw 'Page not loaded';
	
	//add dom loaded event listener, so as not to receive errors
	config.d.addEventListener('DOMContentLoaded', function(){
		ltag = 'link';
		ltags = config.d.getElementsByTagName(ltag.toUpperCase());
		if(ltags.length>0){
			for(i=0;i<ltags.length;i++){
				if(ltags[i].getAttribute('href')!=config.cssf)props(ctag(ltag, 'head'), ['rel','href'], ['stylesheet',config.cssf]);
			}
		}else{
			props(ctag(ltag, 'head'), ['rel','href'], ['stylesheet',config.cssf]);
		}
	});
	
	//debug only the elements specified within params
	this.debugElement = function(type){
		!arguments[0]?config.c.error('debugElement()-> args to short'):true;
		els = config.d.body.getElementsByTagName(type.toUpperCase());
		if(els.length<=0)throw 'debugElement()-> Element does not exist';
		for(i=0;i<els.length;i++)els[i].className += config.csscls;
	};
	
	//debug all elements with debug property set to true
	this.debugElements = function(){
		els = dbes();
		if(els.length<=0)throw 'debugElements()-> No debug elements exist';
		for(i=0;i<els.length;i++){
			if(els[i].getAttribute(config.db)!='false'){
				if(!els[i].classList.contains(config.csscls)) els[i].classList.add(config.csscls);
			}
		}
	};
	
	//debug all elements no matter with debug property or not
	this.debugAll = function(){
		els = config.d.body.getElementsByTagName('*');
		if(els.length<=0)throw 'debugAll()-> No elements to debug';
		for(i=0;i<els.length;i++){
			els[i].setAttribute(config.db, true);
			if(els[i].getAttribute(config.db)){
				els[i].setAttribute(config.db, true);
			}
			if(!els[i].classList.contains(config.csscls)) els[i].classList.add(config.csscls);
		}
	};
}

//static switch for DMH
var DMHS = {
	Switch : {
		//switch the debugger on for quick debug
		ON : function(){
			els = config.d.body.getElementsByTagName('*');
			if(els.length<=0)throw 'DMHS.Switch.ON()-> No elements to debug';
			for(i=0;i<els.length;i++){
				if(els[i].getAttribute(config.db)){
					els[i].setAttribute(config.db, 'true');
				}
			}
		},
		//switch the debugger off, user can then call new instance of DMH
		OFF : function(){
			els = config.d.body.getElementsByTagName('*');
			if(els.length<=0)throw 'DMHS.Switch.OFF()-> No elements to debug';
			for(i=0;i<els.length;i++){
				if(els[i].getAttribute(config.db)){
					if(els[i].getAttribute(config.db)!='false'){
						els[i].setAttribute(config.db, 'false');
						els[i].classList.remove(config.csscls);
					}
				}
			}
		}
	}
};