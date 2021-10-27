function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var advantagesBtn = document.querySelector('#advantages_btn');
var advantages = document.querySelector('#advantages');
var aboutBtn = document.querySelector('#about_btn');
var about = document.querySelector('#about');
var galleryBtn = document.querySelector('#gallery_btn');
var gallery = document.querySelector('#gallery');
var galleryBtnCenter = document.querySelector('#gallery_btn_center');
var galleryCenter = document.querySelector('#gallery_center');
var contactsBtn = document.querySelector('#contacts_btn');
var contacts = document.querySelector('#contacts');

advantagesBtn.addEventListener('click', () => {
    scrollTo(advantages);
})

aboutBtn.addEventListener('click', () => {
    scrollTo(about);
})

galleryBtn.addEventListener('click', () => {
    scrollTo(gallery);
})

galleryBtnCenter.addEventListener('click', () => {
    scrollTo(galleryCenter);
})

contactsBtn.addEventListener('click', () => {
    scrollTo(contacts);
})