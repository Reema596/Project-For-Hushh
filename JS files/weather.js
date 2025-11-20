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