/* This function does the adding of things that the user inputs */
function addTask () {
    /* First we take the info the user inputs */
    var input = document.getElementById("input");
    /* Then we get their text to use */
    var newTask = input.value;
     
    if (newTask != "") {
        var item = document.createElement("li");
        /* Note, need to use '' because of "" in HTML */
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + ' <input type="button" class="important" onclick="markImp(this.parentNode)" value="&#33;" /> ' + newTask;

        /* Add new item as part of existing list */
        document.getElementById("tasks").appendChild(item); 

        /* Clear the previous text in input box */
        input.value = '';
        input.placeholder = 'Enter your next task...'
    }
}

/* Change styling used for task marked as done */
function markDone (item) {
    if (item.classList.contains('finished')) {
        item.classList.remove('finished');
 } 
    else {
        item.classList.add('finished');
 }
}

/* Removing item when task wants to be deleted */
function remove (item) {
    /* But it can only be removed if marked done */
    if (item.className == 'finished') {
    item.remove();
    }
    else {
      alert("Uh oh! You haven't marked this task as completed!");
    }
}

/* Marking an item as important */
function markImp(item) {
    if (item.classList.contains('isimportant')) {
        item.classList.remove('isimportant');
 } 
    else {
        item.classList.add('isimportant');
 }
}

/* About me button */
function doAbout() {
    var aboutButton = document.getElementById('aboutbutton');
    var divAbout = document.getElementById('divabout');
    
    if (aboutButton.value == "About") {
        aboutButton.value = "About Me";
        
        aboutButton.classList.add('aboutcolor');
        
        divAbout.innerHTML = "This 'To Do' list was brought to you by Janna.";
 } 
    else {
        aboutButton.value = "About";
        
        aboutButton.classList.remove('aboutcolor');
        
        divAbout.innerHTML = "";
 }
}