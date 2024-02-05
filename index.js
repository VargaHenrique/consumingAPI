document.addEventListener("DOMContentLoaded", function () {
    fetchBreakingBadQuote();
   
});

function showBreakingBadFact(character) {
    
    const messageElement = document.getElementById("showBreakingBadMessage");
    messageElement.innerHTML = '<strong><p>Loading...</p></strong>';


    fetchBreakingBadQuote(character);
}

function fetchBreakingBadQuote(character) {
    const breakingBadFactApiurl = "https://api.breakingbadquotes.xyz/v1/quotes";

    fetch(breakingBadFactApiurl)
        .then(response => response.json())
        .then(data => {
            const breakingBadFact = data[0].quote;
            displayBreakingBadFact(breakingBadFact, character);
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
            displayBreakingBadFact('Error fetching the quote. Please try again later.', character);
        });
}

function displayBreakingBadFact(quote, character) {
    const messageElement = document.getElementById("showBreakingBadMessage");
    messageElement.innerHTML = `<p><strong>${character}:</strong> ${quote}</p>`;
}

