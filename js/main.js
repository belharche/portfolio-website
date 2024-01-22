
// Whatssap Function
function WtsBtnSend() {
    // Get a reference to the button element
    const whatsappButton = document.getElementById("whatsappButton");

    whatsappButton.addEventListener("click", function(){

        const phoneNumber = "0601548990";
        const message = "Hello, this is a WhatsApp message From Your Portfolio!";
        
        // Generate the WhatsApp link
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        
        // Open the link in a new tab or window
        window.open(whatsappLink);
    });
}


// Func To Check is it Sun Or Moon Icon
function wordExistsCheck (word, string) {
    (string.includes(word)) ? true : false;
}


// Header Drop Down Handler
const headerList = document.getElementById('navLinks');
const menuBtn = document.getElementById('menuIcon');
const homeSection = document.querySelector('.home-section');

document.addEventListener('DOMContentLoaded', function(){
    // Menu Btn Click
    menuBtn.style.transform = 'rotate(0deg)';
    headerList.style.width = '0px';
    
    menuBtn.onclick = function(){
        if (headerList.style.width === '0px') {
            menuBtn.style.transform = 'rotate(90deg)';
            homeSection.style.zIndex = '-1000';
            headerList.style.width = '100%';
        }
        else {
            menuBtn.style.transform = 'rotate(0deg)';
            homeSection.style.zIndex = '0';
            headerList.style.width = '0px';
        }
    }
});

// Dark mode

const themeModeBtn = document.querySelector('.mode-logo');
const themeImg = document.querySelector('.mode-logo img');

document.addEventListener('DOMContentLoaded', function(){
    // Dark Theme

    // Session Storage Check first
    if(window.sessionStorage.getItem('dark-mode-img-src') != null) {
        if (wordExistsCheck('sun', window.sessionStorage.getItem('dark-mode-img-src'))) {
            document.body.classList.toggle('dark-mode');
            themeImg.src = 'images/moon.png';
        }
        else
            themeImg.src = 'images/sun.png';
    }

    themeModeBtn.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode');

        // Changing The Icon
        if (themeImg.src.includes('moon.png'))
            themeImg.src = 'images/sun.png';
        else
            themeImg.src = 'images/moon.png';

        // Session Storage
        window.sessionStorage.setItem('dark-mode-img-src', themeImg.src);

    });
});

// Scroll To Up Button
document.addEventListener('DOMContentLoaded', function(){

    const scrollUpBtn = document.getElementById('scrollUpBtn');

    window.onscroll = function(){
        if(window.scrollY >= 300)
            scrollUpBtn.style.display = 'block';
        else
            scrollUpBtn.style.display = 'none';
    }

    scrollUpBtn.addEventListener('click', function(){
        document.documentElement.scrollTop = 0;
    });

});

// Input Focus Handling
function handleInputFocus() {
    const contactInputs = document.querySelectorAll(".contactInput");
    const contactLabels = document.querySelectorAll(".contactLabel");

    contactInputs.forEach((input, selectedLabelIndex) => {
        
        input.addEventListener("focus", function() {
            contactLabels[selectedLabelIndex].style.transition = "0.5s";
            contactLabels[selectedLabelIndex].style.top = "-15px";
            contactLabels[selectedLabelIndex].style.fontSize = "12px";
            contactLabels[selectedLabelIndex].style.color = "#CFB20C";
        });

        input.addEventListener("blur", function() {
            if(this.value.trim() !== '') {
                contactLabels[selectedLabelIndex].style.transition = "0.5s";
                contactLabels[selectedLabelIndex].style.top = "-15px";
                contactLabels[selectedLabelIndex].style.fontSize = "12px";
                contactLabels[selectedLabelIndex].style.color = "#CFB20C";
            }
            else {
                contactLabels[selectedLabelIndex].style.transition = "0.5s";
                contactLabels[selectedLabelIndex].style.top = "-5px";
                contactLabels[selectedLabelIndex].style.fontSize = "15px";
                contactLabels[selectedLabelIndex].style.color = "#fff";
            }
        });
    });
}

// Quotes List
function quotesHandling() {
    const quoteContainer = document.getElementById("quote");
    const qoutesList = [
        "If it was easy, everyone would do it.",
        "Success is a journey on a winding road; if it were a straight path, everyone would reach the destination effortlessly.",
        "Success is a puzzle; easy pieces fit everyone.",
        "Easy tasks yield common results; greatness demands sweat equity."];

    const randomIndex = Math.floor(Math.random() * qoutesList.length);

    quoteContainer.textContent = `" ${qoutesList[randomIndex]} "`;
}

// Dates Calculation
function dates() {
    const agePlaceholder = document.getElementById("agePlaceholder");
    const copyrightYear = document.getElementById("copyrightYear");
    const date = new Date();

    const currYear = date.getFullYear();
    const currMonth = date.getMonth();

    agePlaceholder.textContent = Math.floor((currYear+currMonth/10) - 2002.3);
    copyrightYear.textContent = currYear;
}

dates();

// Quotes
quotesHandling();

// Whatssap Button Click
WtsBtnSend();

//
document.addEventListener("DOMContentLoaded",()=>{
    handleInputFocus();
});

