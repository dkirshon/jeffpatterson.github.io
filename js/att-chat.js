setTimeout(function() { var old_element = document.getElementById("tcWirelessMobileC2CB");
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    new_element.onclick = function() {
        window.open('https://jeffpatterson.github.io/html/att-mobile.html', '_blank', 'location=no,height=850,width=520,scrollbars=no,status=no,top=139,left=290');
    }
}, 5000);
