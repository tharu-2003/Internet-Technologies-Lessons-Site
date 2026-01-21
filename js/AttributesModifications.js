console.log("AttributesModifications is loaded..!");

const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href' , 'https://facebook.com');
console.log(link.getAttribute('href'));

link.setAttribute('target' , '_blank');

link.removeAttribute('target');
