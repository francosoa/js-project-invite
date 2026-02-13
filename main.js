// variável global
let slideAtual = 0;

emailjs.init("SwfcvOAHLL0_RHWed");

function confirmar() {
    const nome = prompt("Digite seu nome:");
    const email = prompt("Digite seu e-mail:");

    if (!nome || !email) {
        alert("Preencha todos os campos.");
        return;
    }

    // 🔹 1 - Enviar email
    emailjs.send("service_h5l46ib", "template_f5lws5s", {
        nome: nome,
        email: email
    });

    // 🔹 2 - Enviar para Google Forms
    fetch("https://docs.google.com/forms/d/e/1FAIpQLScBMUDcje2Wkknsvrdtb0GdZzFgSg3Hz3tqNIriteZyg2aHVw/formResponse", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `entry.90200523=${nome}&entry.1448041123=${email}`
    });

    alert("Presença confirmada! 🎉");
}


const dataEvento = new Date("March 14, 2026 12:00:00").getTime();

const contador = setInterval(() => {
  const agora = new Date().getTime();
  const diferenca = dataEvento - agora;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;

}, 1000);

function mudarSlide(direcao) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-track img');
    const totalSlides = slides.length;

    slideAtual += direcao;

    if (slideAtual < 0) {
        slideAtual = totalSlides - 1;
    }

    if (slideAtual >= totalSlides) {
        slideAtual = 0;
    }

    const larguraSlide = document.querySelector('.carousel').clientWidth;

    track.style.transform = `translateX(-${slideAtual * larguraSlide}px)`;
}

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});


