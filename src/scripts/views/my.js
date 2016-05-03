var tplMy = require('../tpl/my.string');

SPA.defineView("my",{
  html:tplMy,
  plugins:["delegated"],

  bindActions:{
    "tap.login":function(e){
        SPA.open("login");
    },
    "tap.reg":function(e){

        SPA.open("register");
    },
    "switch":function(e,data){


        this.parentView.modules.indexModules.launch("cart");

    },
    "tap.collect":function(){
        SPA.open("collect");
    },
    "tap.exit":function(){
        SPA.open("exit");
    }

  }


});
