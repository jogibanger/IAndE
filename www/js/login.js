function RegisterUser()
{
    window.location.href = "signup.html";
}


//Global Veriables
var temptxtpassword='';
var temptxtEmailId='';


function validationRecords()
{
  
   temptxtpassword=  $("#txtpassword").val().trim();
   temptxtEmailId=$("#EmailId").val().trim();
 
  if(temptxtEmailId=='' || temptxtpassword==''|| temptxtEmailId==undefined || temptxtpassword==undefined || temptxtpassword.length< 8|| temptxtpassword.length> 10)
  {
    if(temptxtEmailId=='' || !ValidateEmailAd(temptxtEmailId))
    {
      $("#lblValidationSummary").text('Required Email Address');
      $("#btnLoginSubmit").removeAttr("disabled");
      return false;
    }
    else
    if(temptxtpassword=='' || temptxtpassword.length< 8 || temptxtpassword.length> 10 )
    {

      $("#lblValidationSummary").text('Required valid Password, Password length should be 8 charactors to 10 characotrs.');
      $("#btnLoginSubmit").removeAttr("disabled");
      return false;
    }
   
  }
  window.localStorage.setItem("IsLogin", "true");
  window.location.href = "home.html";
  return true;
}



function deviceReady() {
 
    	//disable the button so we can't resubmit while we wait
      $("#btnLoginSubmit").attr("disabled","disabled");
      if(validationRecords()==true)
      {
     // window.location.href = "home.html";
      // Create session.
      debugger 
var today = new Date();
var expirationDate = new Date();
expirationDate.setTime(today.getTime() + '120');
BookIt.Session.getInstance().set({
    userProfileModel: '1141',
    sessionId: '54564',
    expirationDate: expirationDate,
    keepSignedIn:true
});
       
        if(temptxtpassword != '' && temptxtEmailId!= '') {
        	$.post("https://www.coldfusionjedi.com/demos/2011/nov/10/service.cfc?method=login&returnformat=json", {username:temptxtEmailId,password:temptxtpassword}, function(res) {
        
          if(res == true) {            

        		
        		} else {
        			navigator.notification.alert("Your login failed", function() {});
        		}
	        	$("#btnLoginSubmit").removeAttr("disabled");
        	},"json");
        }
        return false;
      }
    

}

$(document).ready(function(){
  
 var IsUserLogin=window.localStorage.getItem("IsLogin");
 if(IsUserLogin=="true")
 {
   HideDivLoading();
  window.location.href = "home.html";
 }
 else
 {
  HideDivLoading();
 }
});



