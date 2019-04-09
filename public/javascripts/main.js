function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
        x.className += " responsive";
        x.style.width="100%";
    } else {
        x.className = "topnav";
    }
}

function openNav() {
    document.getElementById("menu").style.width = "100%";
    // console.log(document.getElementById("menu").style);
    // document.getElementById("menu").style.display = "inline";
}

function closeNav() {
    document.getElementById("menu").style.width = "0%";
    // document.getElementById("menu").style.display = "none";
}

$(document).ready(function() {
  var pathname = window.location.pathname;
  // #navbarText > ul.navbar-nav.ml-auto.w-100.justify-content-start > li:nth-child(2)
  $('#navbarText > ul > li > a[href^="' + pathname + '"]').addClass('active');

});
