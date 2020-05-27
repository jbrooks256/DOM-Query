document.addEventListener("DOMContentLoaded", function() {
    // number 1
    let niceButton = document.createElement("button");
    niceButton.innerText = "Click Me";
    document.body.appendChild(niceButton);
    niceButton.addEventListener("click", function() {
        alert("Hello World!");
    })
    // number 2
    let typedMessage = document.getElementById("textBox");
    let displayTextButton = document.getElementById("displayButton");
    displayTextButton.addEventListener("click", function() {
        alert(typedMessage.value);
    })

    // number 3
    let div1 = document.createElement("div");
    div1.innerText = "Hover Here";
    div1.addEventListener("mouseover", function() {
        div1.style.backgroundColor = getRandomColor();
    });
    document.body.appendChild(div1);

    // number 4
    let para4 = document.createElement("p");
    para4.innerText = "Random Paragraph Text";
    para4.addEventListener("click", function() {
        para4.style.color = getRandomColor();
    })
    document.body.appendChild(para4);

    // number 5
    
})
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }