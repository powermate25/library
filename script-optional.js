//Loading initial page with some random book details using
// addBookToLibrary function (could be deleted by user anyway)
addBookToLibrary("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "193", crypto.randomUUID(), "unread" )
addBookToLibrary("The Joy Luck Club", "Amy Tan", "288", crypto.randomUUID(), "unread" )
addBookToLibrary("Fahrenheit 451", "Ray Bradbury", "158", crypto.randomUUID(), "unread" )
addBookToLibrary("Mission Impossible", "Tom cruise", "102", crypto.randomUUID(), "unread" )


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

