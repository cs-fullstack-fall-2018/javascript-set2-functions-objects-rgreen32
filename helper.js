
function myFunction() {
    window.location.href = "page2.html";

}

function secondFunction(){
    window.print()
}

function thirdFunction(){
    var d = window.innerWidth;
    var h = window.innerHeight;

    document.write(d.toString() + "<br>");
    document.write(h.toString());
}

function fourthFunction(){
    document.write(window.location)

}

function fifthFunction(){
    document.write(document.lastModified + "<br>");
    document.write(window.location + "<br>");
    document.write(document.title + "<br>");

}
