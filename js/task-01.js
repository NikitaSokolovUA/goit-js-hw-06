const list = document.querySelectorAll('.item')


list.forEach(element => {
    console.log('Category: ' + element.firstElementChild.textContent);  
    console.log('Elements: ' + element.lastElementChild.children.length);
})