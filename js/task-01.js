const list = document.querySelectorAll('.item')


console.log('Numbers of category: ' + list.length)

list.forEach(element => {
    const listItem = element.children
    console.log('Category: ' + listItem[0].textContent);  
    console.log('Elements: ' + listItem[1].children.length);
})