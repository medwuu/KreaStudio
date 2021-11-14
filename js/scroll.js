function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var aboutBtn = document.querySelector('#about_btn');
var about = document.querySelector('#about');
var contactsBtn = document.querySelector('#contacts_btn');
var contacts = document.querySelector('#contacts');

aboutBtn.addEventListener('click', () => {
    scrollTo(about);
})

contactsBtn.addEventListener('click', () => {
    scrollTo(contacts);
})