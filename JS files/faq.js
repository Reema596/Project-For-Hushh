const faqData = {
    cancellation: "Our cancellation policy allows free cancellation up to 24 hours before the scheduled start of your trip.",
    booking: "To make a booking, browse our available destinations, select your preferred dates, and proceed to checkout.",
    "group-discount": "Yes, we offer discounts for group bookings of 10 or more people. Contact support for more details."
};

function openFAQModal() {
    document.getElementById('faqModal').style.display = 'flex';
}

function closeFAQModal() {
    document.getElementById('faqModal').style.display = 'none';
}

function displayAnswer() {
    const selectedQuestion = document.getElementById('questionSelect').value;
    const answerBox = document.getElementById('answerBox');

    if (faqData[selectedQuestion]) {
        answerBox.textContent = faqData[selectedQuestion];
        answerBox.style.display = 'block';
    } else {
        answerBox.style.display = 'none';
    }
}

function findAnswer() {
    const typedQuestion = document.getElementById('typedQuestion').value.toLowerCase();
    const typedAnswerBox = document.getElementById('typedAnswerBox');

    let foundAnswer = "";
    for (const question in faqData) {
        if (typedQuestion.includes(question) || typedQuestion.includes(faqData[question].slice(0, 10).toLowerCase())) {
            foundAnswer = faqData[question];
            break;
        }
    }

    if (foundAnswer) {
        typedAnswerBox.textContent = foundAnswer;
        typedAnswerBox.style.display = 'block';
    } else {
        typedAnswerBox.style.display = 'none';
    }
}
