var lastTimeBackPress=0;
var timePeriodToExit=2000;

function onBackKeyDown(e){
    debugger
    e.preventDefault();
    e.stopPropagation();
    if(new Date().getTime() - lastTimeBackPress < timePeriodToExit){
        navigator.app.exitApp();
    }else{
        window.plugins.toast.showWithOptions(
            {
              message: "Press again to exit.",
              duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
              position: "bottom",
              addPixelsY: -40  // added a negative value to move it up a bit (default 0)
            }
          );
        
        lastTimeBackPress=new Date().getTime();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('App exit call');
    document.addEventListener("onBackKeyDown", function(e){
        alert(window.location.href)
        if($.mobile.activePage.is('#homepage')){
            e.preventDefault();
            navigator.app.exitApp();
        }
        else {
            navigator.app.backHistory();
        }
     }, false)
    
    });