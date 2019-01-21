let money, time;
function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();

var appData = {
    budget: money,
    expenses: {},
    optionalExpenses : {},
    income: [],
    timeData: time,
    savings: true
}

function checkSavings() {
    if (appData.savings) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');
        appData.mounthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' +appData.mounthIncome);
    }
}
checkSavings();


function mounthlyExpenses() {
    for(let i = 0; i < 2; i++) {
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
}
mounthlyExpenses();

// 1) Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Бюджет на 1 день: ' + appData.moneyPerDay);
}
detectDayBudget();

// 2) Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay < 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошка ошибка');
    }
}
detectLevel();

/* 3) Создать функцию для определения необязательных расходов (chooseOptExpenses):
Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
Записать ответы в объект optionalExpenses в формате Номер - Ответ.
optionalExpenses: {
    1 : “ответ на вопрос”
}
Вызывать функции не обязательно. */
function mounthlyNonBindingExpenses() {
    for(let i = 1; i < 4; i++) {
        let money = +prompt('Статья необязательных расходов?', '');
        if(isNaN(money) || money == '' || money == null) {
            console.log('done');
            money = +prompt('Статья необязательных расходов?', '');
            i = i - 1;
        } else {
            appData.optionalExpenses[i] = money;
        }
    }
}
mounthlyNonBindingExpenses();
