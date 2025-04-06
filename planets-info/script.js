function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}


// search bar

function stopPropagation(event) {
    event.stopPropagation();
}

function search() {
    const searchBar = document.getElementById('search-bar');
    const searchQuery = searchBar.value.toLowerCase().trim();

    const Links = {
        'mercury': '/planets-info/mercury.html',
        'venus': '/planets-info/venus.html',
        'earth': '/planets-info/earth.html',
        'mars': '/planets-info/mars.html',
        'jupiter': '/planets-info/jupiter.html',
        'saturn': '/planets-info/saturn.html',
        'uranus': '/planets-info/uranus.html',
        'neptune': '/planets-info/neptune.html',
        'pluto': '/planets-info/pluto.html',
        'ceres': '/planets-info/ceres.html',
        'haumea': '/planets-info/haumea.html',
        'makemake': '/planets-info/makemake.html',
        'eris': '/planets-info/eris.html',
        'big bang': '/Other Pages/bigbang.html',
        'the big bang': '/Other Pages/bigbang.html',
        'evaluation of earth': '/Other Pages/evaluation.html',
        'evaluation': '/Other Pages/evaluation.html',
        'comets': '/Other Pages/comets.html',
        'comet': '/Other Pages/comets.html',
        'constellations': '/Other Pages/constellations.html',
        'constellation': '/Other Pages/constellations.html',
        'news': '/Other Pages/featured.html',
        'articals': '/Other Pages/featured.html',
        'discovery': '/Other Pages/featured.html',
    };

    if (Links[searchQuery]) {
        window.location.href = Links[searchQuery];
    } else {
        searchBar.value = '';
        searchBar.placeholder = 'Page not found.';
        setTimeout(() => {
            searchBar.placeholder = 'Search...';
        }, 3000);
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        search();
    }
}


// mini slide show

function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = element.src;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Existing slideshow JavaScript
var slideIndexMini = 0; // Slide index for the mini slideshow
var myTimerMini; // Timer for the mini slideshow

// Start the automatic mini slideshow when the page is loaded
window.addEventListener('load', function () {
    carouselMini();
});

// Function to control automatic mini slideshow for the mini slideshow
function carouselMini() {
    var i;
    var slidesMini = document.querySelectorAll('.mini-slide-show .mySlides');
    var textsMini = document.querySelectorAll('.mini-slide-show .mini-slide-show-text-container');

    for (i = 0; i < slidesMini.length; i++) {
        slidesMini[i].style.display = "none";
        textsMini[i].style.display = "none";  // Hide all text containers
    }

    slideIndexMini++;

    if (slideIndexMini > slidesMini.length) { slideIndexMini = 1; }

    slidesMini[slideIndexMini - 1].style.display = "block";
    textsMini[slideIndexMini - 1].style.display = "block";  // Display the corresponding text container

    myTimerMini = setTimeout(carouselMini, 2000); // Change slide every 2 seconds
}

// Function to navigate manually for the mini slideshow
function plusDivsMini(n) {
    showDivsMini(slideIndexMini += n);
    // Reset timer and start again
    clearTimeout(myTimerMini);
    myTimerMini = setTimeout(carouselMini, 2000);
}

// Function to display slides for the mini slideshow
function showDivsMini(n) {
    var i;
    var slidesMini = document.querySelectorAll('.mini-slide-show .mySlides');
    var textsMini = document.querySelectorAll('.mini-slide-show .mini-slide-show-text-container');

    if (n > slidesMini.length) { slideIndexMini = 1; }
    if (n < 1) { slideIndexMini = slidesMini.length; }

    for (i = 0; i < slidesMini.length; i++) {
        slidesMini[i].style.display = "none";
        textsMini[i].style.display = "none";  // Hide all text containers
    }

    slidesMini[slideIndexMini - 1].style.display = "block";
    textsMini[slideIndexMini - 1].style.display = "block";  // Display the corresponding text container
}


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
  // Scroll smoothly to the top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Define a function to scroll to the top
function scrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

// Call the function when the window is loaded
window.onload = function () {
  scrollToTop();
};

// Call the function when the page is reloaded
window.addEventListener('beforeunload', function () {
  scrollToTop();
});