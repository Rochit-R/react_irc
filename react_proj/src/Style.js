function funval()
{
var n=document.Form1.username.value;
var m=document.Form1.password.value;
var l=document.Form1.password.value;
    if(n==="")
    {
     window.alert("ENTER YOUR NAME");
     return false;
    }
    if(m==="")
    {
        window.alert("Enter Your Password");
        return false;
    }
    else if(l.length<6)
    {
        window.alert("The Password Must be atleast 6 characters");
        return false;
    }
    else
    {
    window.alert("SUBMITED");
    }
}