

(() =>{
  const hamburgerBtn = document.querySelector(".hamburger-btn"),
  navMenu = document.querySelector(".nav-menu"),
  closeNavBtn = navMenu.querySelector(".close-nav-menu");
  hamburgerBtn.addEventListener("click",
  showNavMenu);
  closeNavBtn.addEventListener("click", hideNavMenu);

  function showNavMenu(){
  navMenu.classList.toggle("open");
  }
  function hideNavMenu(){
    navMenu.classList.toggle("open");
    }
  })();
(() =>{
  const aboutSection = document.querySelector(".about-section"),
  tabsContainer = document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", (event) =>{
   
   if(event. target.classList.contains("tab-item") &&
!event.target.classList.contains("active")){
const target = event. target.getAttribute("data-target");
// deactivate existing active 'tab-item
tabsContainer.querySelector(".active").classList.remove("outer-shadow"
,"active");
// activate new
event. target.classList.add("active",
"outer-shadow");
//deactivate existing active
"tab-item"
tabsContainer.querySelector(".active").classList.remove("outer-shadow"
,"active");
// activate new 'tab-item'
event.target.classList.add("active", "outer-shadow");
//deactivate existing active
"tab-content"
aboutSection.querySelector(".tab-content.active").classList.remove(
"active");
// activate new
"tab-content"
aboutSection.querySelector(target).classList.add("active");
}
  })
})


//------------portfolio filter and popup--------------/

(() =>{


  const filterContainer = document.querySelector(".portfolio-filter"),
portfolioItemsContainer = document.querySelector(".portfolio-items"),
portfolioItems = document.querySelectorAll(".portfolio-item") ,
popup = document.querySelector(".portfolio-popup"),
prevBtn = popup.querySelector(".pp-prev"),
nextBtn=popup.querySelector(".pp-next"),
closeBtn = popup.querySelector(".pp-close"),
projectDetailsContainer = popup.querySelector(".pp-details"),
projectDetailsBtn=popup.querySelector(".pp-project-details-btn");
let itemIndex,slideIndex,screenshots;
/* filter portfolio items*/
filterContainer.addEventListener("click",(event) =>{
  if(event.target.classList.contains("filter-item")&&
  !event.target.classList.contains("active")){
    console.log("true")
  }
})
 
  

})
(() =>{
 
  const sections = document.querySelectorAll(" .section");
  
  sections. forEach((section) =›{
  
  if(!section.classList.contains("active")){
  section.classList. add ("hide");
  }
  })