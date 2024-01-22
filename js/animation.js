
// About Section Scroll Animation
function aboutSectionScrollAnim(){

    const aboutImg = document.querySelector('.col-1');
    const aboutText = document.querySelector('.col-2');

    if(window.scrollY >= 290) {
        aboutImg.style.transform = 'translateX(0)';
        aboutImg.style.opacity = 1;
        aboutText.style.transform = 'translateX(0)';
        aboutText.style.opacity = 1;
    }
    else {
        aboutImg.style.transform = 'translateX(-500px)';
        aboutImg.style.opacity = 0;
        aboutText.style.transform = 'translateX(500px)';
        aboutText.style.opacity = 0;
    }
}

// Home Section Scroll Animation
function HomeSectionScrollAnim(){

    // Header
    const header = document.querySelector('header');
    header.style.transform = 'translateX(0px)';
    header.style.opacity = 1;

    // Main Section
    const mainSection = document.querySelector('.home-section');
    mainSection.style.transform = 'translateX(0px)';
    mainSection.style.opacity = 1;
}

// Journey Section Scroll Animation
function journeySectionScrollAnim(){

    const eduCol = document.querySelector('.educ-col');
    const expCol = document.querySelector('.exp-col');

    if(window.scrollY >= 1000) {
        eduCol.style.transform = 'translateX(0)';
        eduCol.style.opacity = 1;
        expCol.style.transform = 'translateX(0)';
        expCol.style.opacity = 1;
    }
    else {
        eduCol.style.transform = 'translateX(-500px)';
        eduCol.style.opacity = 0;
        expCol.style.transform = 'translateX(500px)';
        expCol.style.opacity = 0;
    }
}

// Skills Section Scroll Animation
// function skillSectionScrollAnim(){

//     const skillCards = document.querySelectorAll('.skill-card');

//     if (window.scrollY >= 2020)
//         for (let i = 6; i < 9; i++)
//             skillCards[i].style.opacity = 1;
    
//     else if (window.scrollY >= 1765)
//         for (let i = 3; i < 6; i++)
//             skillCards[i].style.opacity = 1;
    
//     else if (window.scrollY >= 1550)
//         for (let i = 0; i < 3; i++)
//             skillCards[i].style.opacity = 1;

//     else {
//         skillCards.forEach(card => {
//             card.style.opacity = 0;
//         });
//     }
   
// }

// ---------- Main Scroll Animation ------


document.addEventListener('DOMContentLoaded', function(){
    // Home Section
    HomeSectionScrollAnim();

    window.addEventListener('scroll', function(){
        
        // About Section Animation
        aboutSectionScrollAnim();
        journeySectionScrollAnim();

        // About Section Animation
        // skillSectionScrollAnim();
        
    });
});