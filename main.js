// create PaintRoom object and implement functions
var pr = {}

pr.logpaint = () => {
    console.log(pr.paint);
}
pr.fireDrawing = () => {
    pr.paint.addUserDrawing({
        type: "line",
        x: 230,
        y: 230,
        x1: 1350,
        y1: 230,
        size: 30,
        color: tinycolor("red"),
    });
}
pr.outputCanvas = () => {
    console.log(pr.paint.localDrawings);
    console.log(pr.paint.localUserPaths);
}

// do things only when document has finished loading
$("document").ready(function(){
    // use paint.js
    var drawspace = document.getElementById("drawspace");
    pr.paint = new Paint(drawspace);

    pr.paint.addEventListener("userdrawing", function (event) {
        console.log(event);
    });
    pr.paint.addEventListener("startuserpath", (event) => {
        console.log("user started drawing:");
        console.log(event);
    });
    pr.paint.addEventListener("enduserpath", (event) => {
        console.log("user stopped drawing:");
        console.log(event);
    });
    console.log("ready");
    console.log(pr.paint);

    $("#testbox").append("<button onClick='pr.logpaint()'>log paint</button>")
    $("#testbox").append("<button onClick='pr.fireDrawing()'>fire draw event</button>")
    $("#testbox").append("<button onClick='pr.outputCanvas()'>output canvas</button>")
    $("#testbox").append("<button onClick='pr.paint.clear()'>clear canvas</button>")
});