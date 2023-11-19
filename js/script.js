
    // JavaScript code here


/*==================== toggle icon navbar ====================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.togglemenu = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
}
/*==================== sticky navbar ====================*/

let header = document.querySelector('header')
header.classList.toggle('sticky', window.scrollY > 100);
  
  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/


 
  menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


/*==================== scroll reveal ====================*/


ScrollReveal({
    reset: true,
    distance: '800px',
    duration: 2000,
    delay: 200

});
/* for animation*/
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.portfolio-box,', { origin: 'bottom' });
ScrollReveal().reveal('.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });


/*====================typed js ====================*/

const typed = new Typed('.multiple-text', {
    strings: ["Junior Developer","Web Developer","Flutter Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});


const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting initially

    // Get input elements and error elements
    const nameInput = document.getElementById('Name');
    const emailInput = document.getElementById('Email');
    const numberInput = document.getElementById('Number');
    const subjectInput = document.getElementById('emailSubject');
    const messageInput = document.getElementById('message');

    ///for error messge
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const numberError = document.getElementById('numberError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Reset error messages and styles for all fields
    nameError.textContent = '';
    emailError.textContent = '';
    numberError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';

   
    // Define a flag to track errors
    let hasError = false;

    // Validate Name
    if (!nameInput.value) {
        nameError.textContent = 'Name is required';
        nameInput.classList.add('error-input');
        hasError = true;
    } else {
        nameInput.classList.remove('error-input');
    }

    // Validate Email
if (!emailInput.value) {
    emailError.textContent = 'Email is required';
    emailInput.classList.add('error-input');
    hasError = true;
} else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = 'Invalid email format';
    emailInput.classList.add('error-input');
    hasError = true;
} else {
    emailInput.classList.remove('error-input');
}

function isValidEmail(email) {
    // Regular expression for a valid email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}


    // Validate Phone Number
    if (!numberInput.value) {
        numberError.textContent = 'Phone number is required';
        numberInput.classList.add('error-input');
        hasError = true;
    } else if (!isValidPhoneNumber(numberInput.value)) {
    numberError.textContent = 'Invalid phone number format';
    numberInput.classList.add('error-input');
    hasError = true;
} else {
        numberInput.classList.remove('error-input');
    }


    
function isValidPhoneNumber(phoneNumber) {
    // Regular expression for a valid phone number format (US format)
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phoneNumber);
}

    // Validate Email Subject
    if (!subjectInput.value) {
        subjectError.textContent = 'Email subject is required';
        subjectInput.classList.add('error-input');
        hasError = true;
    } else {
        subjectInput.classList.remove('error-input');
    }

    // Validate Message
    if (!messageInput.value) {
        messageError.textContent = 'Message is required';
        messageInput.classList.add('error-input');
        hasError = true;
    } else {
        messageInput.classList.remove('error-input');
    }

    // If there are errors, prevent form submission
    if (hasError) {
        return;
    }

    // If no errors, you can submit the form
    contactForm.submit();
 
});

// Event listener to clear the form on page refresh

window.addEventListener('beforeunload', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.reset();
});



/*==================== For hiding the button ====================*/
var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
       menuList.style.maxHeight = "130px";
    } else {
        
   }
}


// this is the code for the button
function send() {
    console.log("Clicked")

    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "derickpatrickjohn2001@gmail.com",
    Password : "31C30B10E1A84BBB78E5B32F15D6115714E0",
    To : 'derickpatrickjohn2001@gmail.com',
    From : "derickpatrickjohn2001@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}