var tplRegister=require('../tpl/register.string');
SPA.defineView("register",{
  html:tplRegister,
  plugins:["delegated"],
  bindActions:{
    "tap.back":function(){
      this.hide();
    }
  }



});
