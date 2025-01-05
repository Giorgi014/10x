// document.addEventListener("DOMContentLoaded", () => {
//     const slider = document.querySelector(".section-container");
//     const slides = document.querySelectorAll(".slide");
//     const prev = document.getElementById("prev");
//     const next = document.getElementById("next");
  
//     let currentIndex = 0;
  
//     const updateSlider = () => {
//       slider.style.transform = `translateX(-${currentIndex * 100}%)`;
//     };
  
//     next.addEventListener("click", () => {
//       if (currentIndex < slides.length - 1) {
//         currentIndex++;
//         updateSlider();
//       }
//     });
  
//     prev.addEventListener("click", () => {
//       if (currentIndex > 0) {
//         currentIndex--;
//         updateSlider();        
//       }
//     });
//   });
  
const slider = document.querySelector(".section-container");
    const slides = document.querySelectorAll(".slide");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const numberOfSlides = slides.length
  
    let currentIndex = 0;
  
    // const updateSlider = () => {
    //   slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    // };
  
    // next.addEventListener("click", () => {
    //   if (currentIndex < slides.length - 1) {
    //     currentIndex++;
    //     updateSlider();
    //   }
    // });
    next.onclick = () => {
      currentIndex++
      if(currentIndex > (numberOfSlides - 1)){
        currentIndex = 0
      }
      slides[currentIndex].classList.add('slide')
      console.log("+");
      
    }
  
    prev.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();        
      }
    });