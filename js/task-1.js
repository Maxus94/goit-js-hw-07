const ul=document.querySelector('#categories');
console.log('Number of categories:', ul.children.length);
[...ul.children].forEach(element => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
});
