let aish = document.createElement("p");
//aish.textContent = "I m Chitti";
aish.innerHTML = "Memory 1 Tera Byte";
aish.style.color = "blue";
aish.style.fontSize = "20px";
document.getElementById("Vasi").appendChild(aish);

let sana = document.getElementByClass
if(sana) {
    sana.remove();
}

setTimeout(() => {
    let re = document.getElementsByClassName("list")[4];
    if (re) {
        re.remove();
    }
}, 2000);

let newHeading = document.createElement("h2");
newHeading.innerHTML = "this is a new heading added by javascript";
newHeading.style.color = "purple";
newHeading.style.fontSize = "24px";
document.body.appendChild(newHeading);

setTimeout(() => {
    let newText = document.createElement("p");
    newText.textContent = "This text is added after 3 seconds!";
    newText.style.color = "green";
    document.body.appendChild(newText);
}, 3000);
let tagText=document.createElement("p");
tagTexttextConent="This text is appended to the tag!";
tagText.style.color="orange";
document.getElementById("vasi").appendChild(tagText);
let myList = document.createElement("ul");
for(let i = 1; i <= 3; i++){
    let listitems = document.createElement("li");
    listitems.textContent = "item +i";
    listitems.style.color = "blue";
    listitems.style.fontsize = "18px";
    myList.appendChild(li);
    document.body.appendChild(mylist);
}