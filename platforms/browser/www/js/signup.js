var SMSAPIMethod=" ";
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


