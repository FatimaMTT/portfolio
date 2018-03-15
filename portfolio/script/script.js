// make home circle visible when user is in home page
function home() {
    document.getElementById("home-circle").style.visibility = "visible";
}

// make about circle visible when user is in about page
function about() {
    document.getElementById("about-circle").style.visibility = "visible";
}

// make films circle visible when user is in films page
function films() {
    document.getElementById("films-circle").style.visibility = "visible";
}

// make contact circle visible when user is in contact page
function contact() {
    document.getElementById("contact-circle").style.visibility = "visible";
}

//Back to Top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top-button").style.display = "block";
    } else {
        document.getElementById("top-button").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}