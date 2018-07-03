
$(function(){
  document.getElementById("team-content").style.display = "none";
  document.getElementById("blog-content").style.display = "none";
});

function displayView(view) {

  switch (view) {
    case "about":
      // document.getElementById("about-content").style.display = "inherit";
      // document.getElementById("team-content").style.display = "none";
      // document.getElementById("blog-content").style.display = "none";


      $("#team-content").fadeOut(0);
      $("#blog-content").fadeOut(0);
      $("#about-content").fadeIn(1500);

      break;
    case "team":
      // document.getElementById("about-content").style.display = "none";
      // document.getElementById("team-content").style.display = "inherit";
      // document.getElementById("blog-content").style.display = "none";
      $("#about-content").fadeOut(0);
      $("#blog-content").fadeOut(0);
      $("#team-content").fadeIn(1500);
      break;
    case "blog":
      // document.getElementById("about-content").style.display = "none";
      // document.getElementById("team-content").style.display = "none";
      // document.getElementById("blog-content").style.display = "inherit";
      $("#about-content").fadeOut(0);
      $("#team-content").fadeOut(0);
      $("#blog-content").fadeIn(1500);
      break;
    default:

      break;

  }
}
