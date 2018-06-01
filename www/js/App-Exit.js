var lastTimeBackPress=0;
var timePeriodToExit=2000;

function onBackKeyDown(){
   
   var CurrentPathName= window.location.pathname;
   if(CurrentPathName=='/login.html'|| CurrentPathName=='/home.html')
   {
    
   }
   
    
};

function Onload(){

    document.addEventListener("deviceready", onDeviceReady, false);
    };
    function onDeviceReady() {
        

        setTimeout(HideDivLoading, 2000);

        document.addEventListener("backbutton", onBackKeyDown, false);
        }
