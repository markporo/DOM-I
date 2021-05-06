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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};


// Create selectors to point your data into elements
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Getting all Nav Links
const allNavLinks = document.querySelectorAll("a");

// Getting all cta elements
const header = document.querySelector(".cta h1");
const ctaButton = document.querySelector(".cta button");
const ctaImage = document.getElementById("cta-img");

// Getting Main Content Elements
const mainContent = document.querySelector(".main-content");
const topContenth4 = document.querySelectorAll(".top-content .text-content h4");
const topContentText = document.querySelectorAll(".top-content .text-content p");
const middleImage = document.getElementById("middle-img");
const btmContentH4 = document.querySelectorAll(".bottom-content .text-content h4");
const btmContentText = document.querySelectorAll(".bottom-content .text-content p");

// Getting Contact Elements
const contactH4 = document.querySelector(".contact h4");
const contactText = document.querySelectorAll(".contact p");

// Getting Footer Text
const footer = document.querySelector("footer > p");



//Append Child
const navigation = document.querySelector("nav");
const testimonialsNav = document.createElement("a");
testimonialsNav.textContent = "Testimonials"
navigation.appendChild(testimonialsNav);

//prpend child
const homeNav = document.createElement("a");
homeNav.textContent = "Home"
navigation.prepend(homeNav);



//Setting innter text content for nav links
for (let i = 0; i < allNavLinks.length; i++) {
  allNavLinks[i].textContent = siteContent.nav["nav-item-" + (i + 1)];
  allNavLinks[i].style.color = "green";
  allNavLinks[i].style.textDecoration = "none";
}
homeNav.style.color = "green";
homeNav.style.textDecoration = "none";
testimonialsNav.style.color = "green";
testimonialsNav.style.textDecoration = "none";

//allNavLinks[0].textContent = siteContent.nav["nav-item-1"];


// Setting cta elements
header.innerText = siteContent.cta["h1"];
ctaButton.innerText = siteContent.cta["button"];
ctaImage.src = siteContent.cta["img-src"];

// Setting Top Content of Main Content
topContenth4[0].innerText = siteContent["main-content"]["features-h4"];
topContentText[0].innerText = siteContent["main-content"]["features-content"];
topContenth4[1].innerText = siteContent["main-content"]["about-h4"];
topContentText[1].innerText = siteContent["main-content"]["about-content"];

// Setting Middle Image
middleImage.src = siteContent["main-content"]["middle-img-src"];

btmContentH4[0].innerText = siteContent["main-content"]["services-h4"];
btmContentH4[1].innerText = siteContent["main-content"]["product-h4"];
btmContentH4[2].innerText = siteContent["main-content"]["vision-h4"];
btmContentText[0].innerText = siteContent["main-content"]["services-content"];
btmContentText[1].innerText = siteContent["main-content"]["product-content"];
btmContentText[2].innerText = siteContent["main-content"]["vision-content"];

// Setting Contact section
contactH4.innerText = siteContent.contact["contact-h4"];
contactText[0].innerText = siteContent.contact["address"];
contactText[1].innerText = siteContent.contact["phone"];
contactText[2].innerText = siteContent.contact["email"];

// Setting Footer Text
footer.innerText = siteContent.footer["copyright"];


// Adding New Content
// change nav text to be green in for loop
// appending and prepending above for loop 


//My changes
//changed text decoration to none in for loop
//updated year to current year
let date = new Date();
let currentYear = date.getFullYear();
footer.innerText = `Copyright Great Idea! ${currentYear}`;

// change background color to whitesmoke
document.body.style.backgroundColor = "whitesmoke";




