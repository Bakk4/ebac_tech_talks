// DATA DO ANIVERSÁRIO
const birthdayDate = new Date("2026-03-03T19:00:00").getTime();

function updateCountdown() {
    const now = Date.now();
    const diff = birthdayDate - now;

    if (diff <= 0) {
        document.querySelector(".hero__text").innerHTML = "🎉 O aniversário começou! 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // INSERE OS VALORES NO HTML
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// ATUALIZA A CADA 1 SEGUNDO
setInterval(updateCountdown, 1000);
updateCountdown();
