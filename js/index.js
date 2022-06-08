

const navMenu  = document.getElementById('nav-menu'),
navToggle =  document.getElementById('nav-toggle'),
navClose =  document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
const navMenu = document.getElementById('nav-menu')
// When we click on each nav__link, we remove the show-menu class
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const skillsContent = document.getElementsByClassName('skills_content'),
 skillsHeader = document.querySelectorAll('.skills_header')
function toggleSkills(){
let itemClass = this.parentNode.className

for(i = 0;i< skillsContent.length; i++){
    skillsContent[i].className ='skills_content skills_close'
}
if(itemClass === 'skills_content skills_close'){
    this.parentNode.className = 'skills_content skills_open'
}
}

skillsHeader.forEach((el)=>{
el.addEventListener('click',toggleSkills)
})

const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
tab.addEventListener('click',()=>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent =>{
        tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    tabs.forEach(tab =>{
        tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')

})
})  

const modalViews = document.querySelectorAll('.services_modal'),
  modalBtns = document.querySelectorAll('.services_button'),
  modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i) =>{
modalBtns.addEventListener('click', ()=>{
    modal(i)
})
})

modalCloses.forEach((modalCloses)=>{
modalCloses.addEventListener('click', () =>{
    modalViews.forEach((modalView)=>{
        modalView.classList.remove('active-modal')
    })
})
});

let swiper = new Swiper(".portfolio_container", {
cssMode: true,
loop:true,

navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
pagination: {
  el: ".swiper-pagination",
  clickable:true,
},

});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
const scrollY = window.pageYOffset

sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
})
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
const nav = document.getElementById('header')
// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 

function scrollup(){
const scrollup = document.getElementById('scroll-up');
// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)