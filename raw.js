
$("document").ready(function () {
    var container = document.getElementById("drawspace");
    var paint = new Paint(container);

    paint.addEventListener("userdrawing", function (event) {
        console.log(event.type);
        console.log(event.drawing);
    });
});