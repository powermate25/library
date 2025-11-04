// Empty Library Object declaration
const myLibrary = [];

// Predefined Library div container
const libraryContainer = document.querySelector(".library-container")   

// declaring "add book" button
const buttonAddBook = document.querySelector(".add-book")

// Book constructor function below
function CreateBook (title, author, pageNumber, id) {
  if(!new.target){throw Error("Always remember to always use 'new'")};
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.id = id;

  newBook = {
    title: this.title,
    author: this.author,
    pages: this.pageNumber,
    id: this.id,
    readState: "unread"
    
  }
  myLibrary.push(newBook)

  return myLibrary;
}

// Function to add new book to library
function addBookToLibrary (title, author, pageNumber, uniqueId){
 const currentBook = new CreateBook(title, author, pageNumber, uniqueId)
}

// Declaring "Add book" button function and logic. Adds book to library object and display book card to document content
buttonAddBook.addEventListener(
  "click", () => {
    // adding book to objet library
    userBookTitle = prompt("Book's Title", "Ex: Hello World")
    userBookAuthor = prompt("Book's author", "Ex: Author Name")
    userBookPages = prompt("Book's page number", "Ex: 201")
    generateId = crypto.randomUUID()
    if (userBookTitle === undefined || userBookAuthor === undefined|| userBookPages === undefined) {alert("Please make sure all fields are provided!")}
    else if (userBookTitle === "" || userBookAuthor === ""|| userBookPages === "") {alert("Please make sure all fields are provided!")}
    else if (userBookTitle === null || userBookAuthor === null || userBookPages === null) {alert("Please make sure all fields are provided!")}
    else {
      addBookToLibrary(userBookTitle, userBookAuthor, userBookPages, generateId), alert( "New book added to your library.\n Soon (next commit for sure), you'll be able to add book via a proper form. 😉")
      myLibrary

      // Preparing container and adding book to display
      titleBox = document.createElement("div")
      titleBox.classList.add("book-title")
      authorBox = document.createElement("div")
      authorBox.classList.add("book-author")
      pagesBox = document.createElement("div")
      pagesBox.classList.add("book-pages")
      idBox = document.createElement("div")
      idBox.classList.add("book-id")
      readStateBtn = document.createElement("button")
      readStateBtn.classList.add("read-state-btn")
      deleteBookIcon = document.createElement("div")
      deleteBookIcon.classList.add("icon-box")
      //preparing buttons & icons and assigning id to book and card for unified DOM control
      readStateBtn.id = generateId
      deleteBookIcon.append(readStateBtn)
      delIcon = document.createElement("img")
      delIcon.classList.add("del-icon")
      delIcon.src = "./images/icons/delete-white.svg"
      delIcon.id = generateId
      delIcon.style.width = "18%"
      deleteBookIcon.append(delIcon)
      // deleteBookIcon.append("Del book?")
      titleBox.textContent = userBookTitle
      authorBox.textContent = userBookAuthor
      pagesBox.textContent = userBookPages + " pages"
      readStateBtn.textContent = "Unread"

      bookCard = document.createElement("div")
      bookCard.classList.add("book-card")
      bookCard.id = generateId
      // appending child divs to book card div 
      bookCard.append(titleBox, authorBox, pagesBox, idBox, deleteBookIcon)
      // appending book card div to document
      libraryContainer.append(bookCard)
      myLibrary
}
  }
)

//Loading initial page with some random book details using addBookToLibrary function (could be deleted by user anyway)
addBookToLibrary("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "193", crypto.randomUUID() )
addBookToLibrary("The Joy Luck Club", "Amy Tan", "288", crypto.randomUUID() )
addBookToLibrary("Fahrenheit 451", "Ray Bradbury", "158", crypto.randomUUID() )
addBookToLibrary("Mission Impossible", "Tom cruise", "102", crypto.randomUUID() )


// On-page book display logic
//Step 1: Initializing a function to handle book card and div containers
function bookContainer (){
  // Declaring divs
  titleBox = document.createElement("div")
  titleBox.classList.add("book-title")
  authorBox = document.createElement("div")
  authorBox.classList.add("book-author")
  pagesBox = document.createElement("div")
  pagesBox.classList.add("book-pages")
  idBox = document.createElement("div")
  idBox.classList.add("book-id")
  readStateBtn = document.createElement("button")
  readStateBtn.classList.add("read-state-btn")
  deleteBookIcon = document.createElement("div")
  deleteBookIcon.classList.add("icon-box")
  // preparing buttons & icons
  readStateBtn.id = myLibrary[i].id
  deleteBookIcon.append(readStateBtn)
  delIcon = document.createElement("img")
  delIcon.classList.add("del-icon")
  delIcon.src = "./images/icons/delete-white.svg"
  delIcon.id = myLibrary[i].id
  delIcon.style.width = "18%"
  deleteBookIcon.append(delIcon)
  /* deleteBookIcon.append("Del book?") */
  // Adding corresponding content to child divs
  titleBox.textContent = ` ${ myLibrary[i].title} `
  authorBox.textContent = ` ${ myLibrary[i].author} `
  pagesBox.textContent = `${ myLibrary[i].pages}` + " pages"
  readStateBtn.textContent = "Unread"
  // Preparing book container (parent) 
  bookCard = document.createElement("div")
  bookCard.classList.add("book-card")
  bookCard.id = myLibrary[i].id
  // Append child divs with their content to parent div
  bookCard.append(titleBox, authorBox, pagesBox, idBox, deleteBookIcon)
  // display book-cards in document's main book-container
  libraryContainer.append(bookCard)
  // It just feels safe to me to end this with a return don't know why :)
  return myLibrary
}

// Step 2: Using "for ... in" loop to set individual book to card using above function by iterating through library (book objects) 
for ( i in myLibrary ) {
  bookContainer ()
}


// Logic to remove book card and object data on click
// Step 1: Defining the function
function deleteBookData(){
  const groupOfDelIcon = document.querySelectorAll(".del-icon")
  groupOfDelIcon.forEach (
    i => i.addEventListener(
        "click", () => {
          console.log(myLibrary) 
          targetBookCard = document.getElementById(`${i.id}`)
          targetBookCard.remove()
          console.log("target card is:" + targetBookCard.id )
          console.log("i.id is:" + i.id )

          //removing book from library also
          for (book in myLibrary) {      
            if (myLibrary[book].id === i.id){
              delete myLibrary[book]
              console.log("book object also deleted from myLibrary")
              return myLibrary
            }
          }    
        }
      )
  )
}

// Step 2: initializing the function
deleteBookData()

// It feels safe to return the library often. I'm paranoid, sorry :)
myLibrary


/* const toggleButtons = document.querySelectorAll(".read-state-btn")
const groupOfDelIcon = document.querySelectorAll(".del-icon") */

// Logic for toggling book read status on click (both on screen and inside library objects)
// Succeeded updating ui with new book content and updating object but somehow buttons on new objects won't work
// This is where event delegation comes in to address a major wall I've hit during this project. after 24h questioning my existence here's what I've cooked

libraryContainer.addEventListener('click', (e) => {
  e.preventDefault()
        // Step 1: Solve book's read-state buttons functionality (Toggle read-unread both on card and in library object items)
        if (e.target.matches('.read-state-btn')) {
            console.log(e.target.textContent)
           if(e.target.textContent === "Finished reading") {e.target.textContent = "Unread"}
           else if(e.target.textContent === "Unread") {e.target.textContent = "Finished reading"}
           alsoToggleObjectReadState()
           }
           // Step 2: Making delete-icons "finally" delete their own card even on newly created elements
           console.log(e.target.id)
           if (e.target.matches('.del-icon')){
           // console.log("delIcon matched", e.target)
            bookToBeDeleted = document.getElementById(`${e.target.id}`)
            bookToBeDeleted !== null ? bookToBeDeleted.remove() : bookToBeDeleted
          }
    }); 

// Function to toggle read-unread state
function alsoToggleObjectReadState(){
  for (book in myLibrary){
  if(myLibrary[book].readState === "unread"){myLibrary[book].readState = "finished-reading"}
  else if (myLibrary[book].readState === "finished-reading"){myLibrary[book].readState = "unread"}
  console.log("Target book objet state is now: " + myLibrary[book].readState)
  }
}


// The end for now!

