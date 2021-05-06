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
const topContenth4 = document.querySelector(".top-content .text-content h4");
const topContentText = document.querySelector(".top-content .text-content p");

//Setting innter text content for nav links
for (let i = 0; i < allNavLinks.length; i++) {
  allNavLinks[i].textContent = siteContent.nav["nav-item-" + i];
  console.log(allNavLinks[0]);
}
//allNavLinks[0].textContent = siteContent.nav["nav-item-1"];


// Setting cta elements
header.innerText = siteContent.cta["h1"];
ctaButton.innerText = siteContent.cta["button"];
ctaImage.src = siteContent.cta["img-src"];

// Setting Main Content
topContenth4.innerText = siteContent["main-content"]["features-h4"];
topContentText.innerText = siteContent["main-content"]["features-content"];

