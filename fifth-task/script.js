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
    savings: true,
    mounthlyExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Бюджет на 1 день: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay < 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошка ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');
            appData.mounthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' +appData.mounthIncome);
        }
    },
    mounthlyNonBindingExpenses: function() {
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
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if (typeof(items) != 'string' || items == '' || typeof(items) == null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
        } else {
            appData.income = items.split(', ');

            let extra = appData.income.push(prompt('Может что-то еще?'));
            if (typeof(extra) != 'string' || extra == '' || typeof(extra) == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
            }

            appData.income.sort();
        }
        appData.income.forEach(function (item, i) {
            alert('Способы доп. заработка: ' + (i+1) + ' - ' + item);
        })
    },
    displayAllData: function() {
        for (const key in appData) {
            console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
        }
    }

}
