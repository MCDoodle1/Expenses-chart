bar = document.getElementsByClassName('bar')
amount = document.getElementsByClassName('amount');

for (let i = 0; i < bar.length; i++) {
    bar[i].addEventListener("mouseover", function() {
        amount[i].style.display = "inline-flex"}
)}

for (let i = 0; i < bar.length; i++) {
    bar[i].addEventListener("mouseout", function() {
        amount[i].style.display = 'none'
    })
}
 