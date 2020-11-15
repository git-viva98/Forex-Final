function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("home_header").style.marginLeft = "250px";
  document.getElementById("main_content").style.marginLeft = "250px";
  document.getElementById("footer").style.marginLeft = "250px";
  document.getElementById("footer").style.width = "85%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("home_header").style.marginLeft = "0";
  document.getElementById("main_content").style.marginLeft = "0";
  document.getElementById("footer").style.marginLeft = "0";
  document.getElementById("footer").style.width = "100%";
}

var dropdown = document.getElementById("dropdown-btn");
var i;



  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () 
    {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }