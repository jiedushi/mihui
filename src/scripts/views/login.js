var tplLogin=require('../tpl/login.string');
SPA.defineView("login",{
  html:tplLogin,
  plugins:["delegated"],
  bindActions:{
    "tap.back":function(){
      this.hide();
    },
    "tap.reg":function(){
      SPA.open("register");
    }
  }



});
