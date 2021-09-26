function adduser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "Hi My Name Is Mrityunjay"
    });
}