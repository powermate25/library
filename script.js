// Library declaration bellow
const myLibrary = [];

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





// Adding new book to library function below

function addBookToLibrary (title, author, pageNumber, uniqueId){
 const currentBook = new CreateBook(title, author, pageNumber, uniqueId)
}


// button add book to library function

const buttonAddBook = document.querySelector(".add-book")
console.log(buttonAddBook)

buttonAddBook.addEventListener(
  "click", () => {
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
      

      //preparing buttons & icons
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
      // deleteBookIcon.textContent = "Del book?"
      readStateBtn.textContent = "Unread"

      bookCard = document.createElement("div")
      bookCard.classList.add("book-card")
      bookCard.id = generateId
      
      bookCard.append(titleBox, authorBox, pagesBox, idBox, deleteBookIcon)

      libraryContainer.append(bookCard)
    return myLibrary 
  
}
  }
)


// adding default random book details using addBookToLibrary function
addBookToLibrary("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "193", crypto.randomUUID() )
addBookToLibrary("The Joy Luck Club", "Amy Tan", "288", crypto.randomUUID() )
addBookToLibrary("Fahrenheit 451", "Ray Bradbury", "158", crypto.randomUUID() )
addBookToLibrary("Mission Impossible", "Tom cruise", "102", crypto.randomUUID() )

addBookToLibrary("The Girl with the Dragon Tattoo", "Stieg Larsson", "672", crypto.randomUUID() )
addBookToLibrary("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", "512", crypto.randomUUID() )
addBookToLibrary("The Secret History", "Donna Tartt", "559", crypto.randomUUID() )
// addBookToLibrary("One Hundred Years of Solitude", "Gabriel García Márquez", "417")
// addBookToLibrary("Where the Crawdads Sing", "Delia Owens", "384")
// addBookToLibrary("Educated: A Memoir", "Tara Westover", "352")


// On-page book display logic

// 1. Declaring main book container
const libraryContainer = document.querySelector(".library-container")    


// displaying book card to main book container
//Step 1: Initializing function to handle book card and div containers
function bookContainer (){
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
  


  //preparing buttons & icons
  readStateBtn.id = myLibrary[i].id
  deleteBookIcon.append(readStateBtn)
  delIcon = document.createElement("img")
  delIcon.classList.add("del-icon")
  delIcon.src = "./images/icons/delete-white.svg"
  delIcon.id = myLibrary[i].id
  delIcon.style.width = "18%"
  deleteBookIcon.append(delIcon)
  
  // deleteBookIcon.append("Del book?")

  // Adding corresponding content to each div
  titleBox.textContent = ` ${ myLibrary[i].title} `
  authorBox.textContent = ` ${ myLibrary[i].author} `
  pagesBox.textContent = `${ myLibrary[i].pages}` + " pages"
  readStateBtn.textContent = "Unread"

  // idBox.textContent = ` ${ myLibrary[i].id} `

  // Preparing book container (parent) 
  bookCard = document.createElement("div")
  bookCard.classList.add("book-card")
  bookCard.id = myLibrary[i].id
  
  // Append child divs with their content to parent div
  bookCard.append(titleBox, authorBox, pagesBox, idBox, deleteBookIcon)

  // display book-cards in document's main book-container
  libraryContainer.append(bookCard)
  return myLibrary
}

// Step 2: Set individual book to a card using above function by iterating through library (book object) using "for ... in" loop) 
for ( i in myLibrary ) {
  // creating & adding classes to new divs inside function scope
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



myLibrary

// Logic for toggling book read status on click (both on screen and inside object)

//Step 1: targeting buttons by classes
const toggleButtons = document.querySelectorAll(".read-state-btn")

//Step 2: Defining the function
function toggleReadState(){myLibrary[book].readState !== "unread" ? myLibrary[book].readState = "unread" : myLibrary[book].readState = "finished-reading"}

//Step 3: initializing the function and iterating through all buttons and corresponding object data using for loops
toggleButtons.forEach(
  i => {
    i.addEventListener(
      "click", () => {
        i.textContent !== "Unread" ? i.textContent = "Unread" : i.textContent = "Finished reading"
        console.log(i)
//Step 3.1 Toggling also corresponding object data using for in loop
         for (book in myLibrary) {      
            if (myLibrary[book].id === i.id){
              toggleReadState()
              console.log(myLibrary[book].readState)
              toggleReadState()
              console.log(myLibrary[book].readState)
              return myLibrary}
          }  

      }
      
    )
      
  }
)
//Logic Completed


console.log(myLibrary)



