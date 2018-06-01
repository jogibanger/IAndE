var lastTimeBackPress=0;
var timePeriodToExit=2000;

function onBackKeyDown(){

   
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

function Onload(){

    document.addEventListener("deviceready", onDeviceReady, false);
    };
    function onDeviceReady() {

        setTimeout(HideDivLoading, 2000);

        document.addEventListener("backbutton", onBackKeyDown, false);
        }
