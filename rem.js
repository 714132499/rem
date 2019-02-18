(function(doc, win) {
    var htmlFont = function() {
        var docEl = doc.documentElement,
            l = docEl.clientWidth,
            f;
        f = l / 7.2;
        l > 720 ? docEl.style.fontSize = 100 + "px" : docEl.style.fontSize = f + "px";
        console.log(docEl.style.fontSize)
    };
    htmlFont();
    win.addEventListener("resize", htmlFont, false);
})(document, window);

//设计图尺寸除100， 得出rem值