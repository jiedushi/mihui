var tplCollect=require('../tpl/collect.string');
SPA.defineView("collect",{
  html:tplCollect,
  plugins:["delegated"],
  bindActions:{
    "tap.back":function(){
      this.hide();
    }

  }



});
