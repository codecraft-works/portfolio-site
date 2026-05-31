const hamburgerBtn = document.querySelector (".hamburger-btn");
const hamburgerMenu = document.querySelector (".hamburger-menu");
const hamburgerLinks = document.querySelectorAll (".hamburger-menu a");

hamburgerBtn.addEventListener ("click", () => {
    hamburgerMenu.classList.toggle("active");
});

hamburgerLinks.forEach ((hamburgerLink) => {
    hamburgerLink.addEventListener ("click", () => {
        hamburgerMenu.classList.remove("active");
    });
});


const tabButtons = document.querySelectorAll (".tab-button");
const tabContents = document.querySelectorAll (".tab-content");

tabButtons.forEach ((tabButton,index) => {
    tabButton.addEventListener ("click", () => {
        
        tabButtons.forEach ((button) => {
            button.classList.remove ("active");
        });

        tabContents.forEach ((content) => {
            content.classList.remove ("active");
        });

        tabButton.classList.add("active");
        tabContents[index].classList.add("active");

    });
});




const accordionQuestions = document.querySelectorAll (".accordion-question");

accordionQuestions.forEach ((accordionQuestion) => {
    accordionQuestion.addEventListener ("click", () => {
        const accordionAnswer = accordionQuestion.nextElementSibling;
        accordionAnswer.classList.toggle("active");
    })
});


const modalBtn = document.querySelector (".modal-btn");
const modal = document.querySelector (".modal");
const modalBackground = document.querySelector (".modal-background");
const closeBtn = document.querySelector (".close-btn");

modalBtn.addEventListener ("click", () => {
    modal.classList.add("active");
});

modalBackground.addEventListener ("click", () => {
    modal.classList.remove("active");
});

closeBtn.addEventListener ("click", () => {
    modal.classList.remove("active");
});