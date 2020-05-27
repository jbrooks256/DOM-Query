$("body").append("<button>");
$("button").click(function () {
  alert("Good Morning!");
});

let $button = $("#btnSubmit");
$button.click(function () {
  alert($("#text").val());
});

$("body").append($("<div>Hover Here</div>"));
$("div").hover(function () {
  $(this).css("background-color", "red");
});

$("body").append($("<p>Random Paragraph Text</p>"));
$("p").click(function() {
    $(this).css("color", getRandomColor());
})
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }