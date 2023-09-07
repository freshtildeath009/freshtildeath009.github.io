// Variables
// Menu
const menu = document.querySelector('.menu-logo');
const menuContainer = document.querySelector('.nav-links');
const all = document.querySelectorAll('.all');
console.log(all);
// project one live demo
const closeProject = document.querySelector('.project-one-hidden-container');
const btnEcommerce = document.querySelector('.btn-e-commerce');
// Animate project-one-title from the DOM
const projectOneTitle = document.querySelector('.project-one-title');
const projectOneContent = document.querySelector('.project-one-content');

// End variables



// Menu
menu.addEventListener('click',()=>{
    menuContainer.classList.toggle('nav-link-active');
})
all.forEach((all)=>{
    all.addEventListener('click',()=>{
        menuContainer.classList.remove('nav-link-active');
    })
})
// End Menu

// project one live demo
closeProject.addEventListener('click', (e)=>{
    let item = e.target;

    if(item.classList.contains('close-project')){
        closeProject.classList.add('project-hide')
        closeProject.classList.remove('project-display')
    }
})

btnEcommerce.addEventListener('click',()=>{
    closeProject.classList.add('project-display')
    closeProject.classList.remove('project-hide')
})
// End project one live demo

// Animate project-one-title from the DOM
let options = {
    root: null,
    rootMargin: "-50px 0px",
    threshold: 0.06
}

document.addEventListener('DOMContentLoaded', ()=>{
    const observerProjectOneTitle = new IntersectionObserver(function(entries, observe){
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                projectOneTitle.classList.add('active');
            }else{
                projectOneTitle.classList.remove('active');
            }
        })
    }, options)
    observerProjectOneTitle.observe(projectOneTitle);

    const observerProjectOneContent = new IntersectionObserver(function(entries, observe){
        entries.forEach(entry =>{
            
            if(entry.isIntersecting){
                projectOneContent.classList.add('active');
            }else{
                projectOneContent.classList.remove('active');
            }
        })
    },options)
    observerProjectOneContent.observe(projectOneContent);
})
// End Animate project-one-title from the DOM