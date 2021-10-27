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
var contactsBtn = document.querySelector('#contacts_btn');
var contacts = document.querySelector('#contacts');

advantagesBtn.addEventListener('click', () => {
    scrollTo(advantages);
})

aboutBtn.addEventListener('click', () => {
    scrollTo(about);
})

contactsBtn.addEventListener('click', () => {
    scrollTo(contacts);
})