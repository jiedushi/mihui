var tplTest=require("../tpl/test.string");



SPA.defineView("test",{
  html:tplTest,
  plugins:["delegated"],
  bindActions:{
      "tap.back":function(){
        this.hide();
      }
  }
});
// getNewArr(arr){
//     var newArr=[];
//     var count=0;
//     for(var i=0;i<arr.length/3;i++){
//       newArr[i]=[];
//       for(var j=0;j<3;j++){
//           newArr[i][j]=arr[count++];
//       }
//     }
// }
