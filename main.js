// header_galery
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const prevSlide = () => {
    if (index === slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  }

  const nextSlide = () => {
    if (index === 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
    } else {
      index--;
      prepareCurrentSlide(index);
    }
  }

  dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot;
      prepareCurrentSlide(index);
    });
  });

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

setInterval( prevSlide, 5000 );
// header_galery

// toggle-lines
function toggleLines() {
    const toggleButton = document.querySelector('.toggle-lines');
    const header_body = document.querySelector('.header-body');
    const dots_wrapper = document.querySelector('.dots-wrapper');
    const header_item_2 = document.querySelector('.header-item-2');
    const toggle_social_links = document.querySelector('.toggle_social_links');
    toggleButton.classList.toggle('cross');
    header_body.classList.toggle('active');
    dots_wrapper.classList.toggle('active');
    header_item_2.classList.toggle('active');
    toggle_social_links.classList.toggle('active');
    
  }

// toggle-lines

const accordion = document.getElementsByClassName('contentBx');
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}
const beth = document.getElementsByClassName('beth');
for (i = 0; i < beth.length; i++) {
    beth[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

function sendEmail() {
    const name = document.getElementById("nameInput").value;
    const phone = document.getElementById("phoneInput").value;

    if (!name) {
        alert("Please enter your name");
        return;
    }

    if (!phone) {
        alert("Please enter your phone number");
        return;
    }

    const emailContent = "Name: " + name + "\nPhone: " + phone;

    const mailtoLink = "mailto:abibullaev.nursultan@mail.ru?subject=Contact Form Submission&body=" + encodeURIComponent(emailContent);
    const mailtoLinkWithReplyTo = mailtoLink + "&reply-to=" + encodeURIComponent(name + "<abibullaev.nursultan@mail.ru>");

    window.location.href = mailtoLinkWithReplyTo;
}