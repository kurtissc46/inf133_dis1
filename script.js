var democontent = document.getElementById("democontent");
democontent.innerHTML = '<button id="mybutton" type="button">Click Me</button>';
var button = document.getElementById("mybutton");
button.addEventListener('click', function() {
    console.log('clicked!');
});