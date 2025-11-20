
(function() {
    let slideIndex = 0;
    function showSlides() {
        const slides = document.getElementsByClassName("slide");

        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        
        slideIndex++;

        
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        
        slides[slideIndex - 1].style.display = "block";

        
        setTimeout(showSlides, 3000); 
    }

    
    showSlides();
})();


(function() {
    let quizSlideIndex = 0;
    const quizSlides = document.getElementsByClassName("quiz-slide");
    const nextButton = document.getElementById("quiz-next");
    const prevButton = document.getElementById("quiz-prev");
    const submitButton = document.getElementById("quiz-submit");
    const resultContainer = document.getElementById("quiz-result");
    const resultText = document.getElementById("result-text");

    function showSlide(index) {
        
        for (let i = 0; i < quizSlides.length; i++) {
            quizSlides[i].style.display = "none";
        }
        
        quizSlides[index].style.display = "block";

        
        prevButton.disabled = (index === 0);
        nextButton.style.display = (index === quizSlides.length - 1) ? "none" : "inline-block";
        submitButton.style.display = (index === quizSlides.length - 1) ? "inline-block" : "none";
    }

    function nextSlide() {
        
        const currentQuestion = `q${quizSlideIndex + 1}`;
        const selectedOption = document.querySelector(`input[name="${currentQuestion}"]:checked`);

        if (!selectedOption) {
            alert("Please select an answer before proceeding.");
            return;
        }

        
        if (quizSlideIndex < quizSlides.length - 1) {
            quizSlideIndex++;
            showSlide(quizSlideIndex);
        }
    }

    function prevSlide() {
        
        if (quizSlideIndex > 0) {
            quizSlideIndex--;
            showSlide(quizSlideIndex);
        }
    }

    function showQuizResult() {
        const answers = {
            q1: document.querySelector('input[name="q1"]:checked')?.value,
            q2: document.querySelector('input[name="q2"]:checked')?.value,
            q3: document.querySelector('input[name="q3"]:checked')?.value
        };

        if (!answers.q1 || !answers.q2 || !answers.q3) {
            alert("Please answer all questions before submitting.");
            return;
        }

        
        let result;
        if (answers.q1 === "adventure" && answers.q2 === "solo" && answers.q3 === "warm") {
            result = "A tropical island adventure just for you!";
        } else if (answers.q1 === "culture" && answers.q2 === "family" && answers.q3 === "cool") {
            result = "A historical tour in Europe!";
        } else if (answers.q1 === "relaxing" && answers.q2 === "friends" && answers.q3 === "warm") {
            result = "A fun beach destination with lots of nightlife!";
        } else {
            result = "A customized trip to match your unique preferences!";
        }

        
        resultText.textContent = result;
        resultContainer.style.display = "block";
    }

    
    nextButton.onclick = nextSlide;
    prevButton.onclick = prevSlide;
    submitButton.onclick = showQuizResult;

    
    showSlide(quizSlideIndex);
})();


(function() {
    document.getElementById("budget-submit").addEventListener("click", calculateBudget);

    function calculateBudget() {
        const destination = document.getElementById("budget-destination").value;
        const budgetAmount = parseFloat(document.getElementById("budget-amount").value);
        const days = parseInt(document.getElementById("budget-days").value);

        
        if (!destination || isNaN(budgetAmount) || isNaN(days) || budgetAmount <= 0 || days <= 0) {
            alert("Please enter valid values for all fields.");
            return;
        }

        
        const dailyBudget = budgetAmount / days;

        
        let recommendation;
        if (dailyBudget > 200) {
            recommendation = "You have a comfortable budget for your trip to " + destination + "! Enjoy luxury accommodations and fine dining.";
        } else if (dailyBudget > 100) {
            recommendation = "Your budget for " + destination + " allows for a nice stay with mid-range accommodations and dining.";
        } else if (dailyBudget > 50) {
            recommendation = "You can enjoy a budget-friendly trip to " + destination + ". Consider economical lodging and dining options.";
        } else {
            recommendation = "Your budget for " + destination + " is tight. Plan for basic accommodations and try local, affordable meals.";
        }

        
        const resultDiv = document.getElementById("trip-result");
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `
            <h3>Trip to ${destination}</h3>
            <p>Total Budget: $${budgetAmount.toFixed(2)}</p>
            <p>Number of Days: ${days}</p>
            <p>Daily Budget: $${dailyBudget.toFixed(2)}</p>
            <p><strong>Recommendation:</strong> ${recommendation}</p>
        `;
    }
})();

function openFAQModal() {
    document.getElementById('faqModal').style.display = 'flex';
}


function closeFAQModal() {
    document.getElementById('faqModal').style.display = 'none';
    document.getElementById('faqSelect').selectedIndex = 0; 
    document.getElementById('answerBox').style.display = 'none'; 
}


function showAnswer(value) {
    const answerBox = document.getElementById('answerBox');

    
    const answers = {
        1: "The best time to travel depends on the destination. Generally, spring and fall are ideal for many locations.",
        2: "You can book a trip through our website or contact our travel advisors for personalized assistance.",
        3: "Always check the weather and pack accordingly. Essentials include clothing, toiletries, and any necessary documents.",
        4: "Yes, we frequently offer last-minute deals. Check our promotions section for current offers.",
        5: "We recommend comprehensive travel insurance that covers cancellations, medical emergencies, and lost luggage.",
        6: "Yes, you can change your travel dates, but it may incur additional fees depending on the terms of your booking.",
        7: "Cancellation policies vary by provider. Please refer to your booking confirmation for specific details.",
        8: "Yes, we offer group discounts for bookings of 10 or more travelers. Contact us for more details.",
        9: "Stay updated on vaccinations and health advisories for your destination. Carry a basic medical kit.",
        10: "You can reach our customer support via email, phone, or through the contact form on our website.",
        11: "Many airlines allow snacks, but check the specific airline's policy regarding food items.",
        12: "Report the loss to local authorities and contact your country’s embassy or consulate for assistance."
    };

    
    if (value) {
        answerBox.innerText = answers[value];
        answerBox.style.display = 'block'; 
    } else {
        answerBox.style.display = 'none'; 
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".testimonials-track");
    const testimonials = document.querySelectorAll(".testimonial");
    const testimonialCount = testimonials.length;
    let currentIndex = 0;

    function moveCarousel() {
        currentIndex = (currentIndex + 1) % testimonialCount;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    
    setInterval(moveCarousel, 3000);
});

function handleNewsletterSignup(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById("emailInput");
    
    

    
    document.getElementById("confirmationDialog").style.display = "flex";
    emailInput.value = ""; 
}

function closeDialog() {
    document.getElementById("confirmationDialog").style.display = "none";
}
