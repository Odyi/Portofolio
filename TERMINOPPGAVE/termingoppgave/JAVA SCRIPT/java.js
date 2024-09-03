// java.js

// Funksjon for å endre teksten når knappen klikkes
function changeText() {
  const introText = document.getElementById('intro-text');
  introText.textContent = "This is the updated text!";
}

// Event-lytter som legger til lightbox-effekt på bildene når de klikkes
document.addEventListener('DOMContentLoaded', function () {
  const galleryItems = document.querySelectorAll('.gallery-item img');

  galleryItems.forEach(item => {
      item.addEventListener('click', function () {
          const lightbox = document.createElement('div');
          lightbox.classList.add('lightbox');

          const image = document.createElement('img');
          image.src = item.src;

          lightbox.appendChild(image);
          document.body.appendChild(lightbox);

          // Lukk lightbox når det klikkes utenfor bildet
          lightbox.addEventListener('click', function () {
              lightbox.remove();
          });
      });
  });
});

// Toggle navigasjonsmenyen ved klikk på toggle-knappen
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// Filtrer elementene i porteføljen basert på kategorier
filterSelection("all") // Kjør funksjonen og vis alle kolonnene
function filterSelection(c) {
var x, i;
x = document.getElementsByClassName("column");
if (c == "all") c = "";
// Legg til "show" klassen (display:block) på de filtrerte elementene, og fjern "show" klassen fra elementene som ikke er valgt
for (i = 0; i < x.length; i++) {
  w3RemoveClass(x[i], "show");
  if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
}
}

// Vis filtrerte elementer
function w3AddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  if (arr1.indexOf(arr2[i]) == -1) {
    element.className += " " + arr2[i];
  }
}
}

// Skjul elementer som ikke er valgt
function w3RemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);
  }
}
element.className = arr1.join(" ");
}

// Legg til aktiv klasse på gjeldende knapp (marker den)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(){
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
});
}

// Event-lytter for prosjektene med hover-effekt
document.addEventListener('DOMContentLoaded', function() {
  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
      project.addEventListener('mouseover', function() {
          this.style.transform = 'scale(1.05)';
      });

      project.addEventListener('mouseout', function() {
          this.style.transform = 'scale(1)';
      });
  });
});
