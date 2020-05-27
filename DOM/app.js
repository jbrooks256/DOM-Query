document.addEventListener("DOMContentLoaded", function() {
    let niceButton = document.createElement("button");
    niceButton.innerText = "Click Me";
    document.body.appendChild(niceButton);
    niceButton.addEventListener("click", function() {
        alert("Hello World!");
    })

    let typedMessage = document.getElementById("textBox").innerText;
    let displayTextButton = document.getElementById("displayButton");
    displayTextButton.addEventListener("click", function() {
        alert(typedMessage);
    })

})