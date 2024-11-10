const searchBar = document.getElementById('searchBar');
const listContainer = document.getElementById('list-container');
const errorMessage = document.getElementById('error-message');
getData();

function addNote(){
    // console.log('clikc');
    if(searchBar.value){
        const note = document.createElement('li');
        note.innerHTML = searchBar.value;
        listContainer.appendChild(note);
        errorMessage.style.display = 'none';
        searchBar.value = '';

        const cross = document.createElement('span');
        cross.innerHTML= '\u00d7';
        note.appendChild(cross);
        saveData();
    }else{
        errorMessage = 'you must write something';
        errorMessage.style.display = 'block';
    }
}

listContainer.addEventListener('click', function(e){
    console.log(e, 'e');
    if(e.target.tagName=='LI'){
        e.target.classList.toggle('checked');
    } else if(e.target.tagName =='SPAN'){
        e.target.parentElement.remove();
    }
    saveData();
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML=localStorage.getItem('data');
    if(listContainer.innerHTML){
        errorMessage.style.display = 'none';
    }
}