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





// Slideshow

let slideIndex = 0;
let slideInterval;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
}

function startSlideshow() {
    slideInterval = setInterval(showSlides, 4000); // Change slide every 4 seconds
    document.body.classList.add('playing');
}

function pauseSlideshow() {
    clearInterval(slideInterval);
    document.body.classList.remove('playing');
}

showSlides();
startSlideshow();


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
