// Variables
// Display projects
const projectsContainerDOM = document.querySelector('.projects-container');
// Filter projects
const btnFilterProjects = document.querySelectorAll('.btn-technology-category');
// Blog menu
const btnBlogMenu = document.querySelector('.blog-menu-container');
const menuCategory = document.querySelector('.category-container');
const removeCategory = document.querySelector('.mini-projects');

document.addEventListener('DOMContentLoaded', () => {
    displayBlogProjects(blogProjectData)
    filterTechnologies()
})

// Display projects
function displayBlogProjects(projectss) {

    let result = projectss.map((projects) => {
        return `
            <div class="single-project" data-id="${projects.id}">
                <div class="title">${projects.title}</div>
                <div class="">
                    <ul class="project-datails">
                        <li>Tech: <span>${projects.technology}</span></li>
                        <li>Date: <span>${projects.date}</span> </li>
                    </ul>
                    <div class="single-project-photo-container"><img class="single-project-photo"
                            src="${projects.image}" alt=""></div>
    
                    <p>${projects.description}</p>
                </div>
            </div>
        `
    })
    result = result.join("");
    projectsContainerDOM.innerHTML = result;
}

// Filter projects
function filterTechnologies() {
    btnFilterProjects.forEach((buttons) => {
        buttons.addEventListener('click', (e) => {
            let item = e.target.dataset.id;
            const result = blogProjectData.filter((project) => {
                if (project.technology === item) {
                    return project;
                }
            })
            if (item === 'all') {
                displayBlogProjects(blogProjectData);
            } else {
                displayBlogProjects(result);
            }
        })
    })
}

// Blog menu
btnBlogMenu.addEventListener('click', () => {
    menuCategory.classList.toggle('category-container-active');
})
removeCategory.addEventListener('click', () => {
    menuCategory.classList.remove('category-container-active');
})