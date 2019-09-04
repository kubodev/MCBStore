// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

if (!(isEdge || isIE)) {
    $('select').css('background', 'none');
}