class Book {
    constructor(name){
        this.name = name;
    }
    describe(){
        return `${this.name}`;
    }
}

class BookOrder {
    constructor(name){
        this.name = name;
        this.items = [];
    }
    addBook(books){
        if(books instanceof Book){
            this.items.push(books)
        }else {
            throw new Error(`You can only add instance of Books. Argument is not book ${items}`)
        }
    }
}

class BookMenu {
    constructor(){
        this.order = [];
        this.selectedBook = null;
    }
    //This is where I created a method under Book Menu Class
    start(){
        //Creating a variable that holds the main menu
        let selection = this.showMainMenuOptions;
        console.log('This is my selection',selection);

        //Create a while loop to see if selection 
        while(selection != 0){
            switch(selection){
                case '1': 
                    this.showBookMenu();
                    break;
                case '2':
                    this.createBookOrder();
                    break;
                case '3': 
                    this.viewBookOrder();
                    break;
                case '4': 
                    this.deleteBookOrder();
                    break;
                case '5': 
                    this.displayBookOrders();
                    break;
                    // 0 index is to exit the Main Menu
                default: 
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert("Goodbye! Come back again for some good read!")
    }

    //Creating The Main Menu Options for Customers
    showMainMenuOptions(){
        return prompt(`
        Welcome to 'BOOKS R US' where we have special edition books! '\n'
        ------------------------------
            0) Exit Online Book Store
            1) Show Menu
            2) Create New Book Order
            3) View Book Order
            4) Delete Your Book Order
            5) Display Book Orders
        -------------------------------
        `)
    }

    // This Shows the Book Menu And Were Able to add new books or delete books
    showBookMenu(bookInfo){
        return prompt(`
        0) Go Back
        1) Add Book New Book:
        2) Delete Book
                                Book Menu: 
        ------------------------------------------------------------------
        Best Selling:                                 New Releases: 
        - Can't Hurt Me                             - The Meta Verse 
        - The Alchemist                             - The Escape Artist
        - The Great Gatsby                          - Ducks 
        - Atomic Habits                             - In Love 

        ${bookInfo}
        `)
    }

    //This Displays The Book Order
    displayBookOrders(){
        let bookItems = '';
        for(let i = 0; i < this.order.length; i++){
            bookItems += i + ') ' + this.order[i].name + '\n';
        }
        alert(bookItems);
    }

    // Creating a Book Order
    createBookOrder(){
        let name = prompt('Enter Your Book Name Here....');
        this.order.push(new BookOrder(name));
    }

    //View Book Order
    viewBookOrder(){
        let index = prompt('Enter the order number to want to view');
        if(index > -1 && index < this.order.length){
            this.selectedBook = this.order[index];
            let description = 'Book Order Name: ' + this.selectedBook.name + '\n';

            for(let i = 0; i < this.selectedBook.items.length; i++){
                description += i + ') ' + this.selectedBook.items[i].name 
                + " - " + this.selectedBook.items[i] + "\n";
            }
            let selection = this.showBookMenu(description);
            switch(selection){
                case '1': 
                    this.addBook();
                    break;
                case '2': 
                    this.deleteBook();
            }
        }

    }

    //Add Book
    addBook(){
        let name = prompt('Enter Book Name');
        this.selectedBook.items.push(new Book(name))
    }

    //Delete Book
    deleteBook(){
        let index = prompt('Enter the book number you want to delete');
        // console.log("What is the index", index)
        // console.log(index < this.selectedBook.items.length)
        // console.log('Is index -1', index > -1)
        if(index > -1 && index < this.selectedBook.items.length){
            this.selectedBook.items.splice(index, 1)
        }
    }
}


let menu = new BookMenu();
menu.start();

