var money = prompt('Ваш бюджет на месяц?');
var time = prompt('Введите дату в формате YYYY-MM-DD');

var expensesFirstAnswer = prompt('Введите обязательную статью расходов в этом месяце');
var expensesSecondAnswer = prompt('Во сколько обойдется?');

var appData = {
    money,
    timeData : time,
    expenses : {
        expensesFirstAnswer : expensesSecondAnswer
    },
    optionalExpenses : '',
    income : '',
    savings : false
}

alert(appData.money/30);