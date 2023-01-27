let expect = chai.expect;

describe('MyFunction', function() {
    describe('freshDeck', function() {
        it('should create a card deck', function() {
            const testDeck = new Deck();
            expect(testDeck.cards.length).to.equal(52);
        }); 
        it('numberOfCards property should be defined', function() {
            const testDeck = new Deck();
            expect(testDeck.numberOfCards).to.equal(52);
        });
    });
});
describe("My Function", function() {
    describe("startNewGame", function() {
        it("Starts a new game of war with the two players and gives part of the deck to King", function() {
            let King = new Player('King');
            let Greg = new Player('Greg');
            startNewGame(King, Greg);
            expect(King.playerDeck).to.be.a('array');
        });
        it('We will not start without a player 1 or player 2', function() {
            expect(function() {
                startNewGame();
            }).to.throw(Error);
        });
    });
});


