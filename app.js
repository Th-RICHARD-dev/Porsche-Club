document.getElementById("menu_button").addEventListener("click", function(event) {
    event.preventDefault();
    var element = document.getElementById("menu");
    element.classList.toggle("active");
    var element_2 = document.getElementById("menu_button");
    element_2.classList.toggle("active");
  });