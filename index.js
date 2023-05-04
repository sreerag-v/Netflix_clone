
function show(){
    let channel=document.getElementById("welcome")
    if(channel.value===""){
        alert("Enter Your Username or Email Address")
    }else{
        alert("Welcome " +channel.value)
    }
}