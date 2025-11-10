// Dark / Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => document.body.classList.toggle('dark'));

// Scroll to Contact Section
function scrollToContact() {
    const contact = document.getElementById('contact');
    contact.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Fade-in on Scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Initialize EmailJS
(function(){
    emailjs.init("okEf1rSz323Q2Fu78"); // replace with your public key
})();

// Handle form submit
document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    emailjs.sendForm('service_6s012ik', 'template_86xh3zh', this)
        .then(function() {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Oops! Something went wrong...', error);
        });
});
