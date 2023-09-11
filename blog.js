// Variables
// Menu btn
const menu = document.querySelector('.fa-solid');
console.log(menu);
// Category
const categoryContainer = document.querySelector('.category-container');
const categoryBtns = document.querySelectorAll('.category-btn');
// Remove category container
const removeCategory = document.querySelector('article');
// Single project DOM
const singleProjectContainerDOM = document.querySelector('.single-project-container');

// Category
menu.addEventListener('click', () => {
    categoryContainer.classList.toggle('category-container-active');
})

// Remove category container
removeCategory.addEventListener('click', () => {
    categoryContainer.classList.remove('category-container-active');
})

// Display single projects
function displaySingleProduct(project) {
    let result = project.map((project) => {
        return `
        <div class="single-project-item">
                    <div class="single-project-title-container">
                        <h1 class="single-project-title">${project.title}</h1>
                    </div>
                    <div class="single-project-details">
                        <div class="single-project-technology-container">
                            <h1 class="single-project-technology">Technology: <span>${project.technology}</span></h1>
                        </div>
                        <div class="single-project-date-container">
                            <h1 class="single-project-date">Date: <span>${project.date}</span></h1>
                        </div>
                    </div>
                    <div class="single-project-image-container">
                        <img class="single-project-image" src="${project.image}" alt="">
                    </div>
                    <p class="single-project-dialog">${project.description}</p>
                </div>
        `
    })
    result = result.join("");
    singleProjectContainerDOM.innerHTML = result;
}

categoryBtns.forEach((buttons) => {
    buttons.addEventListener("click", (event) => {
        let id = event.currentTarget.dataset.id;
        let result = blogProjectData.filter((project) => {
            if (project.technology === id) {
                return project;
            }
        })
        if (id === 'all') {
            displaySingleProduct(blogProjectData);
        } else {
            displaySingleProduct(result)
        }
    })
})
document.addEventListener('DOMContentLoaded', () => {
    displaySingleProduct(blogProjectData)
})