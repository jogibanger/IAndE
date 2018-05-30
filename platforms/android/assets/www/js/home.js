function navigateToLoginPage()
{
    window.localStorage.removeItem("IsLogin");
    window.location = "login.html";
}