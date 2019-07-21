var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  if (n == slides.length) {
    document.getElementsByTagName('body')[0].style = 'background-color:black;';
  } else {
    document.getElementsByTagName('body')[0].style = 'background-color:white;';
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


document.onkeydown = function(e) {
  console.log(e.code)
  switch (e.code) {
      case "ArrowLeft":
          //left
          e.preventDefault();
          slideIndex--;
          showSlides(slideIndex);
          break;
      case "ArrowRight":
          //right
          e.preventDefault();
          slideIndex++;
          showSlides(slideIndex);
          break;
        }
 };
