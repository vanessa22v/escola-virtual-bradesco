'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')

    var ClassName = document.body.ClassName;
    if(ClassName== "light-theme") {
        this.textContent= "Dark";
    }
    else{
        this.textContent="light";
    }
    console.log('current class name: '+ ClassName)
});