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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//* [ ] Create selectors by using any of the DOM element's methods
const allNavLinks = document.querySelectorAll("a");

allNavLinks[0].textContent = siteContent.nav["nav-item-1"];
allNavLinks[1].textContent = siteContent.nav["nav-item-2"];
allNavLinks[2].textContent = siteContent.nav["nav-item-3"];
allNavLinks[3].textContent = siteContent.nav["nav-item-4"];
allNavLinks[4].textContent = siteContent.nav["nav-item-5"];
allNavLinks[5].textContent = siteContent.nav["nav-item-6"];

//* [ ] Note that IDs have been used on all images. Use the IDs to update src path content


//CTA
const h1CTA = document.querySelector(".cta-text h1");
h1CTA.textContent = siteContent.cta.h1;

const buttonCTA = document.querySelector(".cta-text button");
buttonCTA.textContent = siteContent.cta.button;

const imgCTA = document.getElementById("cta-img");
imgCTA.setAttribute("src", siteContent.cta["img-src"]);

//Main Content
const h4Main = document.querySelector(".top-content h4");
h4Main.textContent = siteContent["main-content"]["features-h4"];

const pMain = document.querySelector(".top-content p");
pMain.textContent = siteContent["main-content"]["features-content"];

const h4About = document.querySelectorAll(".text-content h4")[1];
h4About.textContent = siteContent["main-content"]["about-h4"]

const pAbout = document.querySelectorAll(".text-content p")[1];
pAbout.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const servicesH4 = document.querySelectorAll(".bottom-content .text-content h4")[0];
servicesH4.textContent = siteContent["main-content"]["services-h4"];

const servicesp = document.querySelectorAll(".bottom-content .text-content p")[0];
servicesp.textContent = siteContent["main-content"]["services-content"];

const productH4 = document.querySelectorAll(".bottom-content .text-content h4")[1];
productH4.textContent = siteContent["main-content"]["product-h4"];

const productp = document.querySelectorAll(".bottom-content .text-content p")[1];
productp.textContent = siteContent["main-content"]["product-content"];

const visionH4 = document.querySelectorAll(".bottom-content .text-content h4")[2];
visionH4.textContent = siteContent["main-content"]["vision-h4"];

const visionp = document.querySelectorAll(".bottom-content .text-content p")[2];
visionp.textContent = siteContent["main-content"]["vision-content"];

// CONTACT
const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const address = document.querySelectorAll(".contact p")[0];
address.textContent = siteContent["contact"].address;
address
const phone = document.querySelectorAll(".contact p")[1];
phone.textContent = siteContent["contact"].phone;

const email = document.querySelectorAll(".contact p")[2];
email.textContent = siteContent["contact"].email;


const footer = document.querySelector("footer p");

footer.textContent = siteContent.footer.copyright;