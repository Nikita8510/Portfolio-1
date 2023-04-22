document.querySelector('.hamburger').addEventListener('click', function() {
    var elementOne = document.getElementById('one');
    
    
    if (elementOne.classList.contains("menu__box-active")) {
      elementOne.classList.remove("menu__box-active");
   
    } else {
      elementOne.classList.add("menu__box-active");
   
    }
  })