console.log("ElementsHandling is loaded..!");

const newDiv = document.createElement("div");
console.log(newDiv);

newDiv.id = "alert-success";
newDiv.className = "alert alert-success";
newDiv.textContent = "Successfully Created!";
newDiv.style.backgroundColor = "green"
newDiv.style.color = "white"
newDiv.style.borderRadius = "12px";
newDiv.style.padding = "10px";
newDiv.style.margin = "10px";
console.log(newDiv);

const card = document.querySelector(".card");
card.append(newDiv);


const newDiv2 = document.createElement("div");
newDiv2.id = 'alert-error'
newDiv2.className = "alert alert-error"
newDiv2.textContent = "Somthing is wrong..!"

newDiv2.style.backgroundColor = 'red';
newDiv2.style.color = 'white';
newDiv2.style.borderRadius ='12px';
newDiv2.style.padding ='10px';
newDiv2.style.margin = '10px';

const card2 = document.querySelector(".card");
card2.append(newDiv2);

const clonedDiv = newDiv2.cloneNode(true);
card.append(clonedDiv);

console.log(card.hasChildNodes());