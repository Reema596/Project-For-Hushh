
function initializeCountdown() {
    const countdownElements = document.querySelectorAll('.countdown');
    const eventDates = [
        new Date("January 15, 2025 09:00:00").getTime(),
        new Date("December 10, 2024 10:00:00").getTime(),
        new Date("November 15, 2024 11:00:00").getTime(),
        new Date("November 05, 2025 08:00:00").getTime(),
        new Date("October 12, 2025 07:00:00").getTime()
    ];

    const updateCountdowns = () => {
        const now = new Date().getTime();
        countdownElements.forEach((countdownElement, index) => {
            const distance = eventDates[index] - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                countdownElement.innerHTML = "Event has started!";
            } else {
                countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        });
    };

    updateCountdowns();
    setInterval(updateCountdowns, 1000);
}

const eventCards = document.querySelectorAll('.event-card');
eventCards.forEach(card => {
    card.addEventListener('click', function() {
        alert(`You booked : ${this.querySelector('h3').innerText}`);
    });
});

initializeCountdown();
