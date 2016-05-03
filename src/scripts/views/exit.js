var tplExit = require('../tpl/exit.string');

SPA.defineView("exit",{
  html:tplExit,
  plugins:["delegated"],
  bindActions:{
    "tap.back":function(){
      this.hide();
    }

  }


});
