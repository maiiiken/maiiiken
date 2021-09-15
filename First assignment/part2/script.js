// MANDATORY ASSIGNMENT 1: PART 2


// Gets the unordered list element
const list = document.querySelector("ul")


// Gets the country the user submitted
function getCountry() {
    const country = document.getElementById("country").value;
    addCountry(country)
    document.getElementById("country").value = ""
}


// Adds the country the user selected to the unordered list
function addCountry(country) {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(country))
    list.appendChild(li)

    // Adds a delete button to the list element
    const button = document.createElement("button")
    button.innerHTML = "X"
    li.appendChild(button)
    button.setAttribute("id", "delete")

    // Deletes element when delete button is clicked
    button.addEventListener("click", function() {
        list.removeChild(li);
    })
}


// Returns true if element begins with a search word, not case-sensitive
function isStartString(element, searchWord) {
    return element.toLowerCase().indexOf(searchWord.toLowerCase()) === 0
}


// Filters an array using isStartString() and returns filtered array
function filterArray(array, searchWord) {
    const filtered = []

    for (let i = 0; i < array.length; i++) {
        if (isStartString(array[i], searchWord)) {
            filtered.push(array[i])
        }
    } return filtered
}


// Filters country list based on user search 
function getSearch() {
    let search = document.getElementById("search").value;
    let current = list.firstChild

    // Loops through the li elements (children) of the ul element, removes the
    // part of the HTML that isn't the country name, and adds the result to a new list
    for (let i = 0; i < list.children.length; i++) {
        let element = current.innerHTML.substring(0, current.innerHTML.indexOf("<"))

        // The current li element is only displayed if it matches the current search
        if (!(isStartString(element, search))) {
            current.style.display = "none"
        } else {
            current.style.display = ""
        }

        // Prevents null pointer error in the last run of the loop when the last 
        // child (li element) has no sibling
        if (i < (list.children.length - 1)) { 
            current = current.nextSibling
        }
    }
}