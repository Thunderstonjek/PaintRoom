// create PaintRoom object and implement functions
var pr = {}

// do things only when document has finished loading
$("document").ready(function(){
    // use paint.js
    var drawspace = document.getElementById("drawspace");
    pr.paint = new Paint(drawspace);

    drawspace.addEventListener("userdrawing", function (event) {
        console.log(event);
        // console.log(event.type);
        // console.log(event.drawing);
    });
    console.log("ready");
    console.log(pr.paint);
});