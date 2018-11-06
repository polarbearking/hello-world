function SayHello() {
  console.log("Hello, World!");
}
function HelloPopup() {
  alert ("Hello, World!");
}
function HelloBrowser() {
  var p=document.getElementById("hello");
  p.innerHTML="Hello, World!";
}
function Hello() {
  var person = prompt ("Please enter your name");
  if (person !=null) {
    document.getElementById("Stranger").innerHTML = "Hello " + person;
}
}
