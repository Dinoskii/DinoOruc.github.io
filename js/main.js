function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  function openNavdva() {
    document.getElementById("mySidenavdva").style.width = "89%";
    document.getElementById("maindva").style.marginLeft = "89%";
  }

  function closeNavdva() {
    document.getElementById("mySidenavdva").style.width = "0";
    document.getElementById("maindva").style.marginLeft = "0";
  }

  window.addEventListener('mouseup', function(event){
    var sidenav = document.getElementById('mySidenav');
    var sidenav = document.getElementById('mySidenavdva');
    if(event.target != sidenav && event.target != mySidenavdva){
      closeNav();
      closeNavdva()
    }
  });

  /* Appearing */

function scrollAppear(){
    var boxTxt = document.querySelector('.box');
    var boxPosition = boxTxt.getBoundingClientRect().top;

    var containerSkill = document.querySelector('.container-skill');
    var containerSkillPosition = containerSkill.getBoundingClientRect().top;

    var screenPosition = window.innerHeight / 2;

    if(boxPosition < screenPosition){
        boxTxt.classList.add('appear');
    }

    if(containerSkillPosition < screenPosition){
        containerSkill.classList.add('appear');
    }

}

window.addEventListener('scroll', scrollAppear);


  /*Smooth scrolling */

 /*  const navbarLinks = document.querySelectorAll(".sidenav a");

  navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick )); */

  function navbarLinkClick(event){
   
    smoothScroll(event);
  }

  function smoothScroll (target, duration) {
      let point = document.querySelector(target);
      let pointPosition = point.getBoundingClientRect().top + window.pageYOffset;

    //const pointPositionOfTop = point.getBoundingClientRect().top;
  
    let startPosition = window.pageYOffset;
    let distance = pointPosition - startPosition;
  
    //let distance = pointPositionOfTop - startPosition;
  
    let startTime = null;
  
      function animationScroll (currentTime) {
      
          if (startTime === null) startTime = currentTime;
      
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, distance, duration);
      
          window.scrollTo(0, run);
      
          if (timeElapsed < duration) requestAnimationFrame(animationScroll);
      
      }
  
  
  function ease (t, b, c, d) {
    /*
      * ease 
    */
    
    t /= d / 2;
    
    if (t < 1) return c / 2 * t * t + b;
    
    t--;
    
    return -c / 2 * (t * (t - 2) - 1) + b;
      
      
    /*
      * ease-in-out
    
      t /= d/2;
    
      if (t < 1) return c/2*t*t*t*t + b;
    
      t -= 2;
      
      return -c/2 * (t*t*t*t - 2) + b;
    
    */
  }
  
  requestAnimationFrame(animationScroll);
  
}

  const links = document.querySelectorAll('a');

  links.forEach(item => item.addEventListener('click', () => {
    
    const terget = item.getAttribute('href');
    
    smoothScroll(terget, 1000);
    
  } ))

