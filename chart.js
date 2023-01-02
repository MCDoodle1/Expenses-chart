const weekdays = [
    {
    "day": "mon",
    "amount": 17.45
    },
    {
    "day": "tue",
    "amount": 34.91
    },
    {
    "day": "wed",
    "amount": 52.36
    },
    {
    "day": "thu",
    "amount": 31.07
    },
    {
    "day": "fri",
    "amount": 23.39
    },
    {
    "day": "sat",
    "amount": 43.28
    },
    {
    "day": "sun",
    "amount": 25.48
    }
]

function createBarChart(data) {
    let barchart = document.querySelector('.barchart');
    weekdays.forEach(day => {
    let weekdayDiv = document.createElement('div');
    weekdayDiv.className = 'weekday';
    weekdayDiv.id = day.day;
    barchart.appendChild(weekdayDiv);
    let amountDiv = document.createElement('div');
    amountDiv.className = 'amount';
    amountDiv.innerHTML += `$${day.amount}`;
    weekdayDiv.appendChild(amountDiv);
    let barDiv = document.createElement('div');
    barDiv.className = 'bar';
    weekdayDiv.appendChild(barDiv);
    let labelDiv = document.createElement('div');
    labelDiv.className = 'label';
    labelDiv.innerHTML += day.day;
    weekdayDiv.appendChild(labelDiv);
});
};
createBarChart(weekdays);

bar = document.getElementsByClassName('bar')
amount = document.getElementsByClassName('amount');

for (let i = 0; i < bar.length; i++) {
    bar[i].addEventListener("mouseover", function() {
        amount[i].style.display = "inline-flex"
    }
    )
}

for (let i = 0; i < bar.length; i++) {
    bar[i].addEventListener("mouseout", function() {
        amount[i].style.display = 'none'
        })
}

 