var money = +prompt('Ваш бюджет на месяц?');
var time = prompt('Введите дату в формате YYYY-MM-DD');

var appData = {
    budget: money,
    expenses: {},
    optionalExpenses : {},
    income: [],
    timeData: time,
    savings: false
}

function mounthlyExpenses() {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    if( typeof(a) === 'string' && typeof(a) != null &&
        typeof(b) === 'string' && typeof(b) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log('bad result');
        i--;
    }
}

for(let i = 0; i < 2; i++) {
    this.mounthlyExpenses();
}

// let k = 0;
// while(k < 2) {
//     this.mounthlyExpenses();
//     k++;
// }

// let j = 0;
// do {
//     this.mounthlyExpenses();
//     j++;
// } while(j < 2);

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний руовень достатка');
} else if (appData.moneyPerDay < 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошка ошибка');
}