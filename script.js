
// BURGER MENU
const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// CAROUSEL
const slides = [
    {
    tema: "INTROUGE",
    tema_nr: "TEMA 1",
    text: "Første uge på KEA handlede primært om at lærer hinanden bedre at kende. Derfor skulle vi i grupper, planlægge, optage og redigere en musikvideo.",
    button: "SE TEMA 1",
    link: "tema-1.html"
    },
    {
    tema: "GRUNDLÆGGENDE WEB",
    tema_nr: "TEMA 2",
    text: "I tema 2 startede vi for alvor med kode og design. Vi fik introduktion til Figma, HTML og CSS, og startede med simple opgaver, såsom 'Hello World'",
    button: "SE TEMA 2",
    link: "tema-2.html"
    },
    {
    tema: "GRUNDLÆGGENDE UX/UI",
    tema_nr: "TEMA 3",
    text: "I dette tema brugte vi størstedelen på Figma og design. Derudover blev vi introduceret til forskellige metoder og tests men kan bruge til at blive klogere og brugervenlighed og design.",
    button: "SE TEMA 3",
    link: "tema-3.html"
    },
    {
    tema: "GRUNDLÆGGENDE ANIMATION",
    tema_nr: "TEMA 4",
    text: "I tema 4 var fokus på animation og vi blev for første gang introduceret til Above Illustrator og JavaScript. Udover JavaScript arbejdede vi også videre på HTML og CSS. Her lærte mere advanceret kodning så som CSS animationer og HTML forms.",
    button: "SE TEMA 4",
    link: "tema-4.html"
    },
    {
    tema: "GRUNDLÆGGENDE INDHOLD",
    tema_nr: "TEMA 5",
    text: "I tema 5 blev vi introduceret til Adobe's Photoshop og After Effects, hvor vi redigerede billeder og lavede lottie files. Derudover arbejdede vi med vores første kunde og var ude og interviewe virksomheden, tage billeder og videoer til eget content, samt lave en hel hjemmeside til kunden.",
    button: "SE TEMA 5",
    link: "tema-5.html"
    },
  ];
  
  let currentSlideIndex = 0;

  const tema = document.querySelector(".card-tema");
  const tema_nr = document.querySelector(".card-tema_nr");
  const text = document.querySelector(".card-text");
  const button = document.querySelector(".cta-inverse");
  
  function showSlide(index) {
    const slide = slides[index];
    tema.textContent = slide.tema;
    tema_nr.textContent = slide.tema_nr;
    text.textContent = slide.text;
    button.textContent = slide.button;
    button.href = slide.link;
  }
  
  document.getElementById("prev").addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  });
  
  document.getElementById("next").addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  });
  
  showSlide(currentSlideIndex);