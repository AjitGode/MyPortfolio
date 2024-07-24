//import Swal from 'sweetalert2/dist/sweetalert2.js'
var typed = new Typed('.multiple-text',{
    strings:["Frontend Developer","Test Engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

//toggle icon navbar//

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// Scroll Section

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// console.log(sections);
// console.log(navLinks);

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
             navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
             });
        };
    });
    //  sticky navbar //

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    //remove togggle icon and navbar when clic navbar link // 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll reval //
ScrollReveal({
    //  reset: true,
     distance:'80px',
     duration:2000,
     delay:200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });


      // Current Year

      document.getElementById("year").innerHTML = (new Date().getFullYear());


    //   Preloader

    let loader = document.getElementById('preloader');

    window.addEventListener("load",function(){
        loader.style.display="none";
    })
    //scrolltop button
    const scrollTop = document.getElementById('scrolltop')

// When the page is loaded, hide the scroll-to-top button
window.onload = () => {
    scrollTop.style.visibility = "hidden";
    scrollTop.style.opacity = 0;
}

// If the page is scrolled more than 200px,
// show the scroll-to-top button
// Otherwise hide the button
window.onscroll = () => {
    if (window.scrollY > 200) {
        scrollTop.style.visibility = "visible";
        scrollTop.style.opacity = 1;
    } else {
        scrollTop.style.visibility = "hidden";
        scrollTop.style.opacity = 0;
    }
};
// title Change when tab change

let docTitle = document.title;
window.addEventListener("blur",()=>{
     document.title ="Come back :(";
})
window.addEventListener("focus",()=>{
    document.title =docTitle;
})
    // send email function
    
    // function sendEmail(){
       
    //     Email.send({
    //          SecureToken :"6f21f854-545c-4777-8260-add40faf591f",
    //         // Host : "smtp.elasticemail.com",
    //         // Username : "godeajit95@gmail.com",
    //         // Password : "AD9A209A23D06F21671327BC6103D1B64695",
    //         To : 'godeajit95@gmail.com',
    //         From :'godeajit95@gmail.com',
    //         Subject : "Contact Form Enquiry",
    //         Body : "<b>Name: </b>" +document.getElementById("name").value
    //         + "<br> <b>Email :</b>" +document.getElementById("email").value
    //         + "<br> <b>Mobile No :</b>" +document.getElementById("mobile").value
    //         + "<br> <b>Message :</b>" +document.getElementById("message").value
    //     }).then(
    //       message => Swal.fire(
    //         'Message Send Successfully!',
    //         'You clicked the button!',
    //         'success'
    //       )
    //     ).catch(
    //         message =>Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: 'Something went wrong!',
    //           })
    //     )
    // }

    function sendEmail() {
        // Check if all fields are available
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let mobile = document.getElementById("mobile").value;
        let message = document.getElementById("message").value;
    
        if (!name || !email || !mobile || !message) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'All fields are required!',
            });
            return;
        }
    
        // Load Email.js SDK (if not already loaded)
        if (typeof Email === "undefined") {
            console.error("Email.js SDK not loaded!");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email.js SDK not loaded!',
            });
            return;
        }
    
        // Send email
        Email.send({
            SecureToken: "b48dc3e9-2c8c-435d-b6e4-d7b702ce78a1",
            To:   'godeajit71@gmail.com',
            From: 'godeajit71@gmail.com',
            Subject: "Contact Form Enquiry",
            Body: `<b>Name: </b>${name}<br>
                   <b>Email: </b>${email}<br>
                   <b>Mobile No: </b>${mobile}<br>
                   <b>Message: </b>${message}`
        }).then(
            message => {
                console.log("Email sent successfully:", message);
                Swal.fire(
                    'Message Sent Successfully!',
                    'Your email has been sent.',
                    'success'
                );
            }
        ).catch(
            error => {
                console.error("Email sending failed:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong while sending the email!',
                });
            }
        );
    }
    