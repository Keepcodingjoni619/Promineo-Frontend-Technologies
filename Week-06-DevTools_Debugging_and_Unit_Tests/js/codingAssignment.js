
// Step 1 - Create arrays to hold different cards
// Step 2 - create classes for Card, Deck, And Players
// Step 3 - Inside Deck Class we want to store all the cards 
// into a cards array by looping and holding it in an object.
// Step 4 - need to be able to deal 26 card out of a whole deck of 52 cards
// Step 5 - Iterate through turns for each player plays a card
// Step 6 - Player who gets the highest card is awarded a point or + 1
// Ties result in 0 points
// Step 7 - After all cards are display, display the scores and declare a winner
// Uniting testing


//Array of Cards
const SUITS = ['Clubs', 'Diamond', 'Hearts', 'Spades'];
const VALUES = ["A", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const cardValueMap = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
}

class Card {

    constructor(suit, value) {
      this.suit = suit;
      this.value = value;
    }
  }
  
  class Player {
  
    constructor(name) {
      this.name = name;
      this.playerDeck = [];
      this.playerScore = 0;
    }
  
    addNewDeck(deck) {
      this.playerDeck = deck;
    }
  }
  
  class Deck {
    constructor(cards = freshDeck()) {
      this.cards = cards;
    }
  
    get numberOfCards() {
      return this.cards.length;
    }
    shuffle() {
  
      for (let i = this.numberOfCards - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (this.numberOfCards));
        const oldValue = this.cards[newIndex];
        this.cards[newIndex] = this.cards[i];
        this.cards[i] = oldValue;
      }
    }
  }
  
  
  function freshDeck() {
    return SUITS.flatMap(suit => {
      return VALUES.map(value => {
        return new Card(suit, value);
      });
    });
  }
  
  
  function startNewGame(playerOne, playerTwo) {
    //create a deck 
    const deck = new Deck();
    //shuffles cards
    deck.shuffle();
  
    
    const middleOfDeck = (deck.numberOfCards / 2);
    playerOne.addNewDeck(deck.cards.slice(0, middleOfDeck));
    playerTwo.addNewDeck(deck.cards.slice(middleOfDeck, deck.numberOfCards));
  
  } 
  
  
  function roundOutput(playerOne, playerTwo, roundNum) {
    console.log(`${playerOne.name} plays: ${playerOne.playerDeck[roundNum].value} of ${playerOne.playerDeck[roundNum].suit}
    `);
    console.log(`${playerTwo.name} plays: ${playerTwo.playerDeck[roundNum].value} of ${playerTwo.playerDeck[roundNum].suit}
    `);
  }
  
  
  function thisRoundResults(playerOne, playerTwo) {
    for (let i = 0; i < playerOne.playerDeck.length; i++) {
        roundOutput(playerOne, playerTwo, i);
      if (cardValueMap[playerOne.playerDeck[i].value] > cardValueMap[playerTwo.playerDeck[i].value]) {
        playerOne.playerScore += 1;
        console.log(`${playerOne.name} has won this round`);
      } else if (cardValueMap[playerOne.playerDeck[i].value] < cardValueMap[playerTwo.playerDeck[i].value]) {
        playerTwo.playerScore += 1;
        console.log(`${playerTwo.name} has won this round`);
      } else {
        console.log("This is a tie, no points rewarded");
      }
    }
  }
  
  
  function finalScore(player1, player2) {
    if (player1.playerScore > player2.playerScore) {
      console.log(`${player1.name} has won this round with a score of: ${player1.playerScore}`);
    } else if (player1.playerScore < player2.playerScore) {
      console.log(`${player2.name} has won this round with a score of: ${player2.playerScore}`);
    } else {
      console.log(`${player1.name} and ${player2.name} have tied!`);
    }
  } 
  
  let Johnnie = new Player("Johnnie");
  let Kristine = new Player("Kristine");
  
  startNewGame(Johnnie, Kristine);
  thisRoundResults(Johnnie, Kristine);
  finalScore(Johnnie, Kristine);
  