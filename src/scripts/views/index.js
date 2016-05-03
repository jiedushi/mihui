var tplIndex = require('../tpl/index.string');

SPA.defineView("index",{
  html:tplIndex,
  plugins:["delegated"],
  modules:[{
    name:"indexModules",
    container:".m-index-content",
    views:["chance","story","cart","my"],
    defaultTag:"chance"


  }],
  bindActions:{
      "switch":function(el,data){
        //切换模块方法
        this.modules.indexModules.launch(data.tag);
        //获得img对象
        var _img=$(el.el).children("img");
        $("footer li img").each(function(){
            $(this).attr("src",$(this).attr("src").replace("_pressed","_normal"));

        });
        
        _img.attr("src",_img.attr("src").replace(/_normal/g,"_pressed"));

      }

  }
  ,
  bindEvents:{
    "beforeShow":function(){


    }

  }


});
