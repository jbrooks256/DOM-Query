document.addEventListener("DOMContentLoaded", function() {
    // number 1
    let niceButton = document.createElement("button");
    niceButton.innerText = "Click Me";
    document.body.appendChild(niceButton);
    niceButton.addEventListener("click", function() {
        alert("Hello World!");
    })

    let typedMessage = document.getElementById("textBox").innerText;
    let displayTextButton = document.getElementById("displayButton");
    displayTextButton.addEventListener("click", function() {
        alert(typedMessage.value);
    })

    let div = document.createElement("div");
    div.addEventListener("mouseover", function() {
        getRandomColor();
    })

    document.body.appendChild(div);

})
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }