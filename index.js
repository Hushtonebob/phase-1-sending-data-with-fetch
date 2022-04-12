// Add your code here
const nameData = {
    name: "Steve",
    email: "steve@steve.com",  
};
const message = ("Unauthorized Access");

function submitData(){
const blam = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(nameData)        
    }

return fetch("http://localhost:3000/users", blam)
.then(res => res.json())
.then(body => addNewContact(body.id))
.catch(response => "Unauthorized Access");

function addNewContact(newID){
    document.getElementsByTagName("body")[0].innerHTML = newID;
    document.body.append(message)
}}