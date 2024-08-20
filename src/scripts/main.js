document.addEventListener('DOMContentLoaded', function(){
    const accordion = document.getElementsByClassName("characters__accordion");

    for(let i=0; i<accordion.length; i++){
        accordion[i].addEventListener("click", function(){
            let content = this.nextElementSibling;

            if (content.classList.contains('characters__accordion__content--active')) {
                content.classList.remove("characters__accordion__content--active");
                this.classList.remove("characters__accordion--active");
            } else {
                content.classList.add("characters__accordion__content--active");
                this.classList.add("characters__accordion--active");
            }
        })
    }
})