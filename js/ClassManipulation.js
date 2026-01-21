console.log("ClassManipulation is loaded...!");

const heading = document.getElementById("heading");
console.log(heading.classList);

heading.classList.add('new-class' , 'highlight' , 'rounded');
console.log(heading.classList);

heading.classList.remove('new-class' , 'highlight' , 'rounded');
console.log(heading.classList);

heading.classList.toggle('active');
console.log(heading.classList);
heading.classList.toggle('active');
console.log(heading.classList);
