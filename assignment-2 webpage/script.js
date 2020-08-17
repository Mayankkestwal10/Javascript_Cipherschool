function searchItems() {
    let x = document.querySelector('#searching').value;
    x = x.toLowerCase();

    let parentCard = document.querySelectorAll('.card');
    let allCards = document.querySelectorAll('.card h3');

    for (let i = 0; i < allCards.length; i++) {
        if (!allCards[i].innerHTML.toLowerCase().includes(x)) {
            parentCard[i].style.display = "none";
        } else {
            parentCard[i].style.display = "block";
        }
    }
}



function filterItem(c) {
    let x, i;
    x = document.getElementsByClassName('card');
    for (i = 0; i < x.length; i++) {
        tag = x[i].className.split(" ")[1]
        if (c == 'all') {
            x[i].style.display = "inline-block";
        } else if (tag !== c) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "inline-block";
        }
    }
}