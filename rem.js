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

//���ͼ�ߴ��100�� �ó�remֵ