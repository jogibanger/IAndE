var SMSAPIMethod="http://103.16.101.52:8080/bulksms/bulksms?username=sse-hsrphr&password=hsrphr&type=0&dlr=1&destination=8447172743&source=HRHSRP&message= Received Rs. 372 against HSRP For Reg No. HR39D9219 RECEIPT No. HSRR/1819/06609 dated  25/05/2018-HSRP Team ";
var isOTPNumberValid=false

function SubmitDataOnSignup()
{
    debugger
   
    UserDetails.FirstName=$('#txtFirstName').val().trim();
    UserDetails.LastName=$('#txtLastName').val().trim();
    UserDetails.EmailAddres=$('#txtEmailId').val().trim();
    UserDetails.mobileNumber=$('#txtMobileNumber').val().trim();
    UserDetails.FirstAddress=$('#txtFirstAddress').val().trim();
    UserDetails.Address=$('#txtSecondAddress').val().trim();
    UserDetails.FkStateId=$('#region').val().trim();
    UserDetails.FkCityId=$('#city').val().trim();
    UserDetails.OTP=$('#txtOtpNumber').val().trim();
    debugger
    if(UserDetails.FirstName==''||UserDetails.mobileNumber==''|| UserDetails.EmailAddres==''|| UserDetails.OTP=='')
    {
        $('#spanErrorMsg').text('Please Validate the input');
         return;
    }

    $.post(TempAPIAddress+"SendOTPNumber", UserDetails ,function(data){

        if(data.msg!='')
        {            
      window.location.href = "home.html";
        }
    });
    
}
function loginUsers()
{
    window.location.href = "login.html";
}
function SendOTP()
{
   var tempMobileNumber= $('#txtMobileNumber').val().trim();
   if(tempMobileNumber.length!=10)
   {
    displayErrorMsg('Please the Valid number');
   }
   else
   {
    $.get(SMSAPIMethod+'/resource.jsonp', function(response){ 
     alert("success");
     $("#mypar").html(response.amount);
});
   }
}
function displayErrorMsg(msg)
{
    $("#lblError").text(msg);
}

function ValidateOTPNumber(_mobileNuber,OtpNumber)
{ 
    
    UserDetails.mobileNumber=_mobileNuber;
    UserDetails:OtpNumber;
         
    $.post(TempAPIAddress+"SendOTPNumber", UserDetails ,function(data){
        if(data!='')
        {
            isOTPNumberValid=true;

        }

    });
    return isOTPNumberValid;
};


