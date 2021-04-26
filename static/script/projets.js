
        const ActivePaginateClass = localStorage.getItem("paginate-class-active") || ".projet-1";
        document.querySelector("main.main .projets .projet.active").classList.remove("active");
        document.querySelector("main.main .pagination nav ul li.uk-active").classList.remove("uk-active")
        document.querySelector(ActivePaginateClass).classList.add("active")

const linkPagination = document.querySelectorAll("main.main .pagination .link-pagination")
const precButton = document.querySelector("main.main .pagination nav ul .button-precedent");
const nextButton = document.querySelector("main.main .pagination nav ul .next-button");

for(let element of linkPagination){
    if(element.parentNode.getAttribute("value") == ActivePaginateClass){
        element.parentNode.classList.add("uk-active")
    }
    element.addEventListener("click",function (e){
        const activeElement = e.target;
        const parent = activeElement.parentNode;
        const value = parent.getAttribute("value");
        localStorage.setItem("paginate-class-active",value)
        e.preventDefault();
        if(!parent.classList.value.includes("uk-active")){
            document.querySelector("main.main .pagination nav ul li.uk-active").classList.remove("uk-active")
            parent.classList.add("uk-active");
            document.querySelector("main.main .projets .projet.active").classList.remove("active");
            document.querySelector(value).classList.add("active");
        }
    })
}


precButton.addEventListener("click",function (e){
    e.preventDefault();
    const ukActiveElement =  document.querySelector("main.main .pagination nav ul li.uk-active");
     ukActiveElement.classList.remove("uk-active");
     if(!ukActiveElement.previousElementSibling.classList.value.includes("precedent")){
     ukActiveElement.previousElementSibling.classList.add("uk-active");
     document.querySelector("main.main .projets .projet.active").classList.remove("active");
     document.querySelector((ukActiveElement.previousElementSibling.getAttribute("value"))).classList.add("active")     
     localStorage.setItem("paginate-class-active",ukActiveElement.previousElementSibling.getAttribute("value"))
    } else{
         ukActiveElement.classList.add("uk-active");
     }
    })


    
nextButton.addEventListener("click",function (e){
    e.preventDefault();
    const ukActiveElement =  document.querySelector("main.main .pagination nav ul li.uk-active");
     ukActiveElement.classList.remove("uk-active");
     if(!ukActiveElement.nextElementSibling.classList.value.includes("next")){
     ukActiveElement.nextElementSibling.classList.add("uk-active");
     document.querySelector("main.main .projets .projet.active").classList.remove("active");
     document.querySelector((ukActiveElement.nextElementSibling.getAttribute("value"))).classList.add("active")     
     localStorage.setItem("paginate-class-active",ukActiveElement.nextElementSibling.getAttribute("value"))
    } else{
         ukActiveElement.classList.add("uk-active");
     }
    })
    
