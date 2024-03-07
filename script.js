 // JavaScript to show/hide menu on hover
 document.getElementById("navbar").addEventListener("mouseover", function() {
    document.getElementById("menu").style.display = "block";
  });

  document.getElementById("navbar").addEventListener("mouseout", function() {
    document.getElementById("menu").style.display = "none";
  });

  