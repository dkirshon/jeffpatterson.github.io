var old_element = document.getElementsByClassName("lg")[0].getElementsByTagName("a")[1];
var new_element = old_element.cloneNode(true);
old_element.parentNode.replaceChild(new_element, old_element);

new_element.onclick = function() {
    window.open('https://jeffpatterson.github.io/html/offerup-mobile.html', '_blank', 'location=no,height=880,width=550,scrollbars=no,status=no,top=139,left=290');
}