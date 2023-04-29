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
    // send email function
    
    function sendEmail(){
       
        Email.send({
            SecureToken:"3c6a9427-eb03-4d69-8749-4f7013e5c927",
            To : "godeajit71@gmail.com",
            From :"godeajit99@gmail.com",
            Subject : "Contact Form Enquiry",
            Body : "<b>Name: </b>" +document.getElementById("name").value
            + "<br> <b>Email :</b>" +document.getElementById("email").value
            + "<br> <b>Mobile No :</b>" +document.getElementById("mobile").value
            + "<br> <b>Message :</b>" +document.getElementById("message").value
        }).then(
          message => Swal.fire(
            'Message Send Successfully!',
            'You clicked the button!',
            'success'
          )
        ).catch(
            message =>Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        )
    }