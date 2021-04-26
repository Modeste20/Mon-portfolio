
const headerPortfolio = document.getElementById('header-portfolio');
const headerPortfolioLinks = document.getElementById("header-portfolio-links");
const headerBars = document.getElementById("header-bars")
const headerTimes = document.getElementById("header-times")

let sidebarIsOpen = false;
const closeSidebar = (e) =>{
    e.preventDefault()
    headerPortfolioLinks.classList.remove("sidebar-is-open")
    sidebarIsOpen = false;
}

headerBars.addEventListener("click",(e) =>{
    e.preventDefault();
    if(!sidebarIsOpen){
        e.stopPropagation()
    }
    sidebarIsOpen = true;
    headerPortfolioLinks.classList.add("sidebar-is-open")
})


headerTimes.addEventListener("click",(e) =>{
    e.preventDefault();
    headerPortfolioLinks.classList.remove("sidebar-is-open");
    sidebarIsOpen = false;
})

    document.body.addEventListener('click',(e) =>{
        if(sidebarIsOpen){
            closeSidebar(e)
        }
    })

    headerPortfolioLinks.addEventListener('click',(e) =>{
        e.stopPropagation()
    })

const menuHeaderLinks = document.querySelectorAll("header.header-portfolio .nav-header-portfolio-links a");
const activeLink = document.querySelector('header.header-portfolio .nav-header-portfolio-links li.active-link a')

for(let i of menuHeaderLinks){
    const {pathname} = window.location
    if(i.getAttribute("href") === pathname ){
        i.parentNode.classList.add('active-link')
    }
    if(i.parentNode.classList.value.includes("active-link")){
        i.addEventListener("click",function (e){
            e.preventDefault()
        })
    }
}

