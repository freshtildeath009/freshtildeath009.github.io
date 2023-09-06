// Menu
const menu = document.querySelector('.menu-logo');
const menuContainer = document.querySelector('.nav-links');

menu.addEventListener('click',()=>{
    menuContainer.classList.toggle('nav-link-active');
})
const closeProject = document.querySelector('.project-one-hidden-container');
const btnEcommerce = document.querySelector('.btn-e-commerce');

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

