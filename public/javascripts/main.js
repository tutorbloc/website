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
