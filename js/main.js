/*--------------navigation menu -----------------*/
(()=>{
  const hamburgerBtn = document.querySelector(".hamburger-btn"),
  navMenu = document.querySelector(".nav-menu"),
  closNavBtn = navMenu.querySelector(".close-nav-menu");

  hamburgerBtn.addEventListener("click", showNavMenu);
  closNavBtn.addEventListener("click", hideNavMenu);

  function showNavMenu(){
    navMenu.classList.add("open");
    bodyScrollingToggle();
  }
  function hideNavMenu(){
    navMenu.classList.remove("open");
    fadeOutEffect();
    bodyScrollingToggle();
  }
  function fadeOutEffect(){
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(()=>{
      document.querySelector(".fade-out-effect").classList.remove("active")
    },300)
  }

  document.addEventListener("click" , (event)=>{
    if(event.target.classList.contains('link-items')){
     if(event.target.hash !==""){
       event.preventDefault();
       const hash = event.target.hash;
       document.querySelector(".section.active").classList.add("hide");
       document.querySelector(".section.active").classList.remove("active");
       document.querySelector(hash).classList.add("active");
       document.querySelector(hash).classList.remove("hide");
       navMenu.querySelector(".active").classList.add("outer-shadow" , "hover-in-shadow");
       navMenu.querySelector(".active").classList.remove("active" ,"inner-shadow");
       if(navMenu.classList.contains("open")){
         event.target.classList.add("active" , "inner-shadow");
         event.target.classList.remove("outer-shadow" , "hover-in-shadow");
         hideNavMenu();
       }
       else {
         let navItems = navMenu.querySelectorAll(".link-items");
         navItems.forEach((items) => {
           if(hash === items.hash){
             items.classList.add("active" , "inner-shadow");
             items.classList.remove("outer-shadow" , "hover-in-shadow");
           }
         })
         fadeOutEffect();
       }
       window.location.hash = hash;
     }
    }
  })

})();





/*---------------about section tabs------------*/
(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
      if(event.target.classList.contains("tab-items") &&
      !event.target.classList.contains("active")) {
      const target = event.target.getAttribute("data-target");
      tabsContainer.querySelector(".active").classList.remove("outer-shadow" , "active");
      event.target.classList.add("active" , "outer-shadow");
      aboutSection.querySelector(".tab-content.active").classList.remove("active");
      aboutSection.querySelector(target).classList.add("active");
           }
    })
})();
/*-----------------------hide all section except active------------------------*/
(()=>{
  const section = document.querySelectorAll(".section");
  section.forEach((section) => {
    if(!section.classList.contains("active")){
      section.classList.add("hide");
    }
  });

})();
