var tplCart = require('../tpl/shopping_cart.string');

SPA.defineView("cart",{
  html:tplCart,

  plugins:["delegated"],
  bindActions:{
    "switch":function(){

        // SPA.getView("index",function(view){
        //
        //     view.modules.indexModules.launch('index');
        // });

         this.parentView.modules.indexModules.launch('chance');
    }
  }

});
