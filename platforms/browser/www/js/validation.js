$(function(){
    $("#txtpassword").keypress(function(event){
    
        var ew = event.which;
        if(ew == 32)
            return true;
        if(48 <= ew && ew <= 57)
            return true;
        if(65 <= ew && ew <= 90)
            return true;
        if(97 <= ew && ew <= 122)
            return true;
            else
            {
                $("#spanpassword").val('no special Charactor allowed!');
           
        return false;
            }
    });
});
function ValidateEmailAd(email)
{
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    return regex.test(email);

}
function validateMobilenumber(mobileNumber)
{
    var regex=/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return regex.test(mobileNumber);
}
