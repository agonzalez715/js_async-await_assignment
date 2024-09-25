// Part 1: Request a single card from a newly shuffled deck using async/await
async function fetchSingleCard() {
    try {
        // Await the GET request to the Deck of Cards API to draw 1 card from a new, shuffled deck
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
        // Await the parsing of the response into a JSON object
        const data = await response.json();
        // Access the first (and only) card in the array from the data object
        const card = data.cards[0];
        // Log the value and suit of the card to the console, converting the suit to lowercase
        console.log(`${card.value} of ${card.suit.toLowerCase()}`);
    } catch (err) {
        // If there are any errors during the fetch or JSON parsing, catch and log the error
        console.error('Error fetching card:', err);
    }
}

// Execute the async function to fetch a single card
fetchSingleCard();

// Part 2: Draw two cards from the same deck using async/await
async function fetchTwoCards() {
    try {
        // Await the GET request to the Deck of Cards API to draw 1 card from a new, shuffled deck
        let response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
        let data = await response.json();
        // Store the deck_id from the response to use for the next request
        const deckId = data.deck_id;
        // Access the first card from the drawn cards
        const firstCard = data.cards[0];
        // Log the value and suit of the first card, converting the suit to lowercase
        console.log(`${firstCard.value} of ${firstCard.suit.toLowerCase()}`);

        // Await another GET request using the same deck ID to draw another card
        response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        data = await response.json();
        // Access the second card from the newly drawn cards
        const secondCard = data.cards[0];
        // Log the value and suit of the second card, converting the suit to lowercase
        console.log(`${secondCard.value} of ${secondCard.suit.toLowerCase()}`);
    } catch (err) {
        // Catch and log any errors that occurred during the fetch operations or data handling
        console.error('Error fetching cards:', err);
    }
}

// Execute the async function to fetch two cards from the same deck
fetchTwoCards();
