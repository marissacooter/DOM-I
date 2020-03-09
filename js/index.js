const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// updating the nav bar:
let navbar = document.querySelector('nav');
Array.from(navbar.children).forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i + 1}`]
})

// TASK TWO:

const childElementOne = document.createElement('a');
childElementOne.textContent = 'hi!'
const parentElement = document.querySelector('nav')
parentElement.prepend(childElementOne);


const childElementTwo = document.createElement('a');
childElementTwo.textContent = 'bye!'
parentElement.appendChild(childElementTwo);


const navcolor = document.querySelectorAll('nav a');
console.log(navcolor);
for ( let i = 0; i < navcolor.length; i++) {
  navcolor[i].style.color ='green';
}

// // updating CTA h1:
let ctah1 = document.querySelector('h1');
ctah1.textContent = siteContent.cta.h1;

// updating CTA button: 
let button = document.querySelector('button');
button.textContent = siteContent.cta.button;

//updating code snippet image:
let codeimg = document.getElementById('cta-img');
codeimg.setAttribute('src', siteContent['cta']['img-src']);

// updating middle content img:
let middleimg = document.getElementById('middle-img');
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// updating text content h4's:
let txttitles = document.querySelectorAll('h4')
txttitles[0].textContent = siteContent['main-content']['features-h4']
txttitles[1].textContent = siteContent['main-content']['about-h4']
txttitles[2].textContent = siteContent['main-content']['services-h4']
txttitles[3].textContent = siteContent['main-content']['product-h4']
txttitles[4].textContent = siteContent['main-content']['vision-h4']

// trying to write a forEach loop for h4s ^ 
// let txttitles = document.querySelector('h4');
// Array.from(txttitles.children).forEach((h4, i) => {
//   h4.textContent = siteContent.main-content[`${i}-h4-${i + 1}`]
// })

// updating text content p's:
let txtcontent = document.querySelectorAll('p')
txtcontent[0].textContent = siteContent['main-content']['features-content']
txtcontent[1].textContent = siteContent['main-content']['about-content']
txtcontent[2].textContent = siteContent['main-content']['services-content']
txtcontent[3].textContent = siteContent['main-content']['product-content']
txtcontent[4].textContent = siteContent['main-content']['vision-content']

//updating contact:
let contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent['contact']['contact-h4'];

let contactp = document.querySelectorAll('.contact p');
contactp[0].textContent = siteContent['contact']['address']
contactp[1].textContent = siteContent['contact']['phone']
contactp[2].textContent = siteContent['contact']['email']

let copyright = document.querySelector('footer')
copyright.textContent = siteContent['footer']['copyright']

// STRETCH:











