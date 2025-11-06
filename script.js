// Empty Library Object declaration
const myLibrary = [];

// Predefined static elements
const libraryContainer = document.querySelector(".library-container")   
const buttonAddBook = document.querySelector(".add-book")

// Book constructor function below
function CreateBook (title, author, pageNumber, id, bookObjectReadState) {
  if(!new.target){throw Error("Always remember to always use 'new'")};
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.id = id;
  this.bookObjectReadState = bookObjectReadState

  newBook = {
    title: this.title,
    author: this.author,
    pages: this.pageNumber,
    id: this.id,
    readState: bookObjectReadState
    
  }
  myLibrary.push(newBook)

  return myLibrary;
}

// Add new book to library function
function addBookToLibrary (title, author, pageNumber, uniqueId, bookObjectReadState){
 const currentBook = new CreateBook(title, author, pageNumber, uniqueId, bookObjectReadState)
}


// Logic to remove book card and object data on click
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
deleteBookData()
myLibrary

// Logic for toggling book read status on click
// (both on screen and inside library objects)
// Using event delegation
libraryContainer.addEventListener('click', (e) => {
  e.preventDefault()
        // Read-state buttons logic
        if (e.target.matches('.read-state-btn')) {
            console.log(e.target.textContent)
           if(e.target.textContent === "Finished reading") {e.target.textContent = "Unread"}
           else if(e.target.textContent === "Unread") {e.target.textContent = "Finished reading"}
          // (Toggling read state both on card
          // also in library object on click using "for... in" loop)
          for (book in myLibrary){
              if (e.target.id === myLibrary[book].id ){
                if(myLibrary[book].readState === "unread"){myLibrary[book].readState = "finished-reading"}
                else if (myLibrary[book].readState === "finished-reading"){myLibrary[book].readState = "unread"}
                console.log("Target book objet state is now: " + myLibrary[book].readState)
                }}
           }
           //Logic to delete book on click
           console.log(e.target.id)
           if (e.target.matches('.del-icon')){
           // console.log("delIcon matched", e.target)
            bookToBeDeleted = document.getElementById(`${e.target.id}`)
            bookToBeDeleted !== null ? bookToBeDeleted.remove() : bookToBeDeleted
          }
    }); 

// Handling dialog elements
dialog = document.querySelector(".add-book-dialog")
showDialogBtn = document.querySelector(".show-modal")
closeDialogBtn = document.querySelector(".button-close-svg")
dialogConfirmBtn = document.querySelector(".dialog-confirm")
dialogOutputBox = document.querySelector(".output-box")
const dialogForm = document.querySelector("dialog #dialog-form")

addBookTitle = document.querySelector("dialog input[id=book-title]")
addBookAuthor = document.querySelector("dialog input[id=book-author]")
addBookPages = document.querySelector("dialog input[id=book-pages]")

buttonAddBook.addEventListener(
  "click", () => {
    dialog.showModal()}
) 

dialog.addEventListener(
  "close", (e) => {
    console.log(dialog.returnValue)
    }
) 

dialogConfirmBtn.addEventListener(
  "click", (e) => {
    e.preventDefault()
    if (!addBookTitle.value){addBookTitle.style.cssText = "border: 3px solid red"} 
    if (!addBookAuthor.value){addBookAuthor.style.cssText = "border: 3px solid red"}
    if (!addBookPages.value){addBookPages.style.cssText = "border: 3px solid red"}
    if (addBookTitle.value && addBookAuthor.value && addBookPages.value){
    confirmAddBook() 
    }
  }
)

function confirmAddBook() {
    // Handling user-checked book status
    const addBookStatus = document.querySelector("dialog input[name=book-status]:checked")
    // adding book objet to library
    userBookTitle = String(addBookTitle.value).trim()
    userBookAuthor = String(addBookAuthor.value).trim()
    userBookPages = Number(addBookPages.value)
    generateId = crypto.randomUUID()
    bookReadState = String(addBookStatus.value) === "finished-reading"
    ? "Finished reading"
    : "Unread"
    bookObjectReadState = bookReadState === "Finished reading" ? "finished-reading" : "unread"
    addBookToLibrary(userBookTitle, userBookAuthor, userBookPages, generateId, bookObjectReadState)
    console.log(userBookTitle, userBookAuthor, userBookPages, generateId, bookReadState)
    createBookCard()
    dialogForm.reset()
    dialog.close()
}



function createBookCard(){
      // Preparing container and book display elements
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
      bottomIconDiv = document.createElement("div")
      bottomIconDiv.classList.add("icon-box")
      delIcon = document.createElement("img")
      delIcon.classList.add("del-icon")
      delIcon.src = "./images/icons/delete-white.svg"
      bookCard = document.createElement("div")
      bookCard.classList.add("book-card")
      delIcon.style.width = "18%"

      //Assigning value and preparing book card
      readStateBtn.id = generateId
      bottomIconDiv.append(readStateBtn)
      delIcon.id = generateId
      bottomIconDiv.append(delIcon)
      titleBox.textContent = userBookTitle
      authorBox.textContent = userBookAuthor
      pagesBox.textContent = userBookPages + " pages"
      readStateBtn.textContent = bookReadState
      bookCard.id = generateId
      bookCard.append(titleBox, authorBox, pagesBox, idBox, bottomIconDiv)
      libraryContainer.appendChild(bookCard)
      myLibrary
}