var options = {};
var renderMath = function () {
    renderMathInElement(document.body, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
        ]
    });
}
var slideshow = remark.create(options, renderMath);
var url_pure = document.URL.split("#")[0];
new QRCode(document.getElementById("qrcode"), {
    text: url_pure,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.L
});
document.getElementById("this-slide-url").innerHTML = url_pure;