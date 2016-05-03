var tplChance = require('../tpl/chance.string');

SPA.defineView("chance",{
  html:tplChance,

  plugins:["delegated",{
      name:"avalon",
      options:function(vm){
          vm.chanceData={};

      }
  }],
  init:{
    tabSwiper:null,

  },
  bindEvents:{
    "beforeShow":function(){
      var that=this;
      this.tabSwiper = new Swiper('.tab-container', {
            onSlideChangeStart:function(){
                  $(".nav-chance li").eq(that.tabSwiper.activeIndex).addClass("active").siblings().removeClass("active");
            }


      });
      var bannerSwiper = new Swiper('.section-swi', {
          autoplay: 5000,//可选选项，自动滑动
          pagination : '.swiper-pagination'
      });


      var touchSwiper = new Swiper('.touch-swi', {


          width:81,


          onTransitionStart:function(){

                if(touchSwiper.translate>=25){
                  touchSwiper.lockSwipeToPrev();

                }else{
                  touchSwiper.unlockSwipeToPrev();
                }
          },
          onTransitionEnd:function(){

                if(touchSwiper.translate>=25){
                  touchSwiper.lockSwipeToPrev();

                }else{
                  touchSwiper.unlockSwipeToPrev();
                }
          },
          onSliderMove:function(){
                console.log("a");
                if(touchSwiper.translate>=0){
                  touchSwiper.lockSwipeToPrev();

                }else{
                  touchSwiper.unlockSwipeToPrev();
                }
          }
      });

      $.ajax({
        url:"/mihui/api/dataList.do",
        type:"get",


        success:function(data){

            var vm=that.getVM();
            vm.chanceData=data;

        }
      });

    }

  },
  bindActions:{

      "tap.swiper":function(event){
        this.tabSwiper.slideTo( $(event.el).index());

      },
      "tap.deligot":function(){

        SPA.open("test");
      }



  }

});
