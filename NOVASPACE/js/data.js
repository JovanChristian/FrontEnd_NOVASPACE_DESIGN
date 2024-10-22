const hamburger = document.querySelector(".hamburger")
const hamburger_menu = document.querySelector(".hamburger-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    hamburger_menu.classList.toggle("active")
})

function formValidation(e){
    e.preventDefault();

    var name = document.getElementById("name")
    var DoB = document.getElementById("DoB")
    var gender = document.getElementById("gender")
    var country = document.getElementById("country")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    if(name.value.length < 6){
        alert("Name must be more than 6 characters")
    }else if(!DoB.value){
        alert("Please select your Birthday")
    }else if(!gender.value){
        alert("Please select your Gender")
    }else if(!country.value){
        alert("Please select your Country")
    }else if(email.value.endsWith("@gmail.com")){
        alert("Email must using Gmail")
    }else if(password.value < 6){
        alert("Password must containt 6 letters")
    }else{
        alert("Register Success")
        window.location.href= "index.html"
    }

}
function animateNumberOnScroll(element, targetValue) {
    let isAnimated = false;
  
    function animateNumber() {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (!isAnimated && elementTop - windowHeight <= 0) {
        isAnimated = true;
        const duration = 1000; // Durasi animasi dalam milidetik
        const frameDuration = 1000 / 60; // Durasi setiap frame dalam milidetik
        const totalFrames = Math.round(duration / frameDuration); // Jumlah total frame animasi
        const countIncrement = Math.ceil(targetValue / totalFrames); // Nilai increment per frame
        let currentValue = 0;
  
        const numberAnimation = setInterval(() => {
          if (currentValue >= targetValue) {
            clearInterval(numberAnimation);
            currentValue = targetValue; // Memastikan angka akhir yang tepat
          }
  
          element.innerText = currentValue;
          currentValue += countIncrement;
        }, frameDuration);
      }
    }
  
    animateNumber();
    window.addEventListener('scroll', animateNumber);
  }
  
  const launchesCounter = document.getElementById('launchs-counter');
  const landingsCounter = document.getElementById('landings-counter');
  const reflightsCounter = document.getElementById('reflights-counter');
  
  animateNumberOnScroll(launchesCounter, 139); // Angka target untuk Total Launches
  animateNumberOnScroll(landingsCounter, 102); // Angka target untuk Total Landings
  animateNumberOnScroll(reflightsCounter, 94); // Angka target untuk Total Reflights