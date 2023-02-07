let myLibrary = [];
class book{
    constructor(name,author,numPage,read){
        this.name=name;
        this.author=author;
        this.numPage=numPage;
        this.read=read;
    }
}
function addBookToLibrary(book){
    for(let i=0;i!=myLibrary.length;i++){
        if(myLibrary[i].name===book.name){
            alert("Book already exist");
            return;
        }
            
    }
    myLibrary.push(book);
}

const add=document.getElementById("sub");
const addBook=document.getElementById("add");
const addmodal=document.getElementById("modal");
const display=document.getElementById("display");
addBook.addEventListener("click",()=>{
    addmodal.style.visibility="visible";
})
function getBook(){
    const name=document.getElementById("book-name").value;
    const auth=document.getElementById("author").value;
    const num=document.getElementById("pages").value;
    const read=document.getElementById("read").checked;
    return new book(name,auth,num,read);
}
function resetDisplay(){
    display.innerHTML="";
}
function updateDisplay(){
    resetDisplay();
    for(let i=0;i!=myLibrary.length;i++){
        addBookCard(myLibrary[i]);
    }
}
function addBookCard(b){
    const card=document.createElement("div");
    card.classList.add("card");
    const nameb=document.createElement("div");
    const auth=document.createElement("div");
    const num=document.createElement("div");
    const read=document.createElement("button");
    const del=document.createElement("button");
    del.id="del";
    del.textContent="delete book";
    read.id="rread";
    read.addEventListener("click",toggleRead);
    del.addEventListener("click",deleteBook);
    nameb.textContent=`${b.name}`;
    auth.textContent=`${b.author}`;
    num.textContent=`${b.numPage}`;
    if(b.read==true)
        read.textContent="read";
    else
        read.textContent="unread";
    card.appendChild(nameb);
    card.appendChild(auth);
    card.appendChild(num);
    card.appendChild(read);
    card.appendChild(del);
    display.appendChild(card);
    if(myLibrary.length>=3){
        document.querySelector(".footer").style.position="static";
    }
    else{
        document.querySelector(".footer").style.position="absolute";
    }
}
function closeModal(){
    document.getElementById("book-name").value="";
    document.getElementById("author").value="";
    document.getElementById("pages").value="";
    document.getElementById("read").checked=false;
    addmodal.style.visibility="hidden";
}
function addBookToDisplay(e){
    e.preventDefault();
    const b=getBook();
    addBookToLibrary(b);
    updateDisplay();
    closeModal();
}
const r=display.querySelector("#rread");
function toggleRead(e){
    const title=e.target.parentNode.firstChild.textContent;
    for(let i=0;i!=myLibrary.length;i++){
        if(myLibrary[i].name===title){
            myLibrary[i].read=!myLibrary[i].read;
        }

    }
    if(e.target.textContent==="read")
        e.target.textContent="unread";
    else   
        e.target.textContent="read";
    updateDisplay()
}
function deleteBook(e){
    const title=e.target.parentNode.firstChild.textContent;
    for(let i =0;i!=myLibrary.length;i++){
        if(myLibrary[i].name===title){
            myLibrary.splice(i,1);
        }
    }
    updateDisplay()
}
add.addEventListener("click",addBookToDisplay);


