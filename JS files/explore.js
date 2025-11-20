document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("explore-map-btn").addEventListener("click", () => {
        const destinationInput = document.getElementById("destination-search").value.trim().toLowerCase();
        const mapIframe = document.getElementById("map");
        const mapMessage = document.getElementById("map-message");
        const mapContainer = document.getElementById("map-container");

        const destinationUrls = {
            "paris": "https://www.google.com/maps?q=Paris&output=embed",
            "new york": "https://www.google.com/maps?q=New+York&output=embed",
            "tokyo": "https://www.google.com/maps?q=Tokyo&output=embed",
            "london": "https://www.google.com/maps?q=London&output=embed",
        };

        if (destinationUrls[destinationInput]) {
            mapIframe.src = destinationUrls[destinationInput];
            mapContainer.style.display = "block"; 
            mapMessage.style.display = "none";    
        } else {
            mapIframe.src = "";                  
            mapContainer.style.display = "none"; 
            mapMessage.style.display = "block";  
            mapMessage.textContent = "Destination not recognized. Please try a popular destination!";
        }
    });

    const budgetSlider = document.getElementById("budget-slider");
    const budgetDisplay = document.getElementById("budget-display");
    
    budgetSlider.addEventListener("input", function() {
        const budgetValue = budgetSlider.value;
        budgetDisplay.textContent = `Rs.${budgetValue}`;
    });

    const packingListBtn = document.getElementById("packing-list-btn");
    const packingListItems = document.getElementById("packing-list-items");
    
    packingListBtn.addEventListener("click", function() {
        packingListItems.style.display = packingListItems.style.display === "none" ? "block" : "none";
    });

    const insurancePlansBtn = document.getElementById("insurance-plans-btn");
    const insurancePlansList = document.getElementById("insurance-plans-list");
    
    insurancePlansBtn.addEventListener("click", function() {
        insurancePlansList.style.display = insurancePlansList.style.display === "none" ? "block" : "none";
    });

    let selectedInsurancePlan = "None";

    window.optIn = function(plan) {
        selectedInsurancePlan = plan; 
        const insuranceDisplay = document.getElementById("insurance-display");
        insuranceDisplay.style.display = "block";
        insuranceDisplay.textContent = `You have opted for: ${plan}`;
    };

    const generateSummaryBtn = document.getElementById("generate-summary-btn");
    const summaryDisplay = document.getElementById("summary-display");

    generateSummaryBtn.addEventListener("click", function() {
        const destination = document.getElementById("destination-search").value.trim();
        const startDate = document.getElementById("start-date").value;
        const endDate = document.getElementById("end-date").value;
        const budget = budgetSlider.value;
        const travelers = document.getElementById("num-travelers").value;

        const selectedPreferences = [];
        if (document.getElementById("adventure").checked) selectedPreferences.push("Adventure");
        if (document.getElementById("relaxation").checked) selectedPreferences.push("Relaxation");
        if (document.getElementById("cultural").checked) selectedPreferences.push("Cultural");

        const selectedAccommodation = document.getElementById("accommodation-type").value;
        const selectedTransport = document.getElementById("transport-mode").value;

        const summary = `
            <h3>Trip Summary</h3>
            <p><strong>Destination:</strong> ${destination}</p>
            <p><strong>Travel Dates:</strong> ${startDate} to ${endDate}</p>
            <p><strong>Budget:</strong> $${budget}</p>
            <p><strong>Number of Travelers:</strong> ${travelers}</p>
            <p><strong>Preferences:</strong> ${selectedPreferences.length > 0 ? selectedPreferences.join(", ") : "None"}</p>
            <p><strong>Accommodation Type:</strong> ${selectedAccommodation}</p>
            <p><strong>Transport Mode:</strong> ${selectedTransport}</p>
            <p><strong>Opted Insurance Plan:</strong> ${selectedInsurancePlan}</p>
        `;

        summaryDisplay.innerHTML = summary;
        const submitTripBtn = document.getElementById('submit-trip-btn');
        submitTripBtn.style.display = 'block'; 
        
        submitTripBtn.addEventListener('click', function() {
            alert("Redirecting to Payment Gateway!");
        });
    });
});
