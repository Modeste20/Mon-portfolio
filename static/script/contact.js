function debounce(callback, delay){
    var timer;
    return function(){
        var args = arguments;
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(context, args);
        }, delay)
    }
}

const inputDivInput = document.querySelectorAll('section.section-contact-form .input-div input,section.section-contact-form .input-div textarea');
for(let i of inputDivInput){
    i.addEventListener('focus',(e) =>{
        e.target.parentNode.classList.add('is-focus')
    })

    i.addEventListener('blur',(e) =>{
        if(!e.target.value){
            e.target.previousElementSibling.querySelector('span').style.display="inline-block"
            e.target.parentNode.classList.remove('is-focus')
        } else{
            e.target.previousElementSibling.querySelector('span').style.display="none"
        }
    })
}

//textarea-autogrow components

class AutoGrow extends HTMLTextAreaElement {
    constructor (){
        super();
        this.onFocus = this.onFocus.bind(this);
        this.autogrow = this.autogrow.bind(this);
        this.onresize = debounce(this.onresize.bind(this),300);
    }

    connectedCallback (){
        this.addEventListener("focus",this.onFocus);
        this.addEventListener("input",this.autogrow)
    }

    disconnectedCallback () {
        window.removeEventListener("resize",this.onresize)
    }
    onFocus (){
        window.addEventListener("resize",this.onresize)
        this.autogrow();
    }
    autogrow (){
        this.style.height = "auto";
        this.style.overflow = "hidden";       
        this.style.height = this.scrollHeight + "px";
    }

    onresize(){
        this.autogrow();
    }

}

customElements.define('textarea-autogrow',AutoGrow,{extends:"textarea"});