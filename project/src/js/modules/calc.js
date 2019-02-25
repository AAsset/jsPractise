export function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        placeSum = 1,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        debugger;
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000 * placeSum;

        if (restDays.value == '' || personsSum == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function() {
        debugger;
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000 * placeSum;

        if (persons.value == '' || daysSum == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function() {
        debugger;
        placeSum = this.options[this.selectedIndex].value;
        total = (daysSum + personsSum) * 4000 * placeSum;

        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a;
        }
    });
}