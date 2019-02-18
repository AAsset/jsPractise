let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {  
    function convert() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'json/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
        
            request.onreadystatechange = function() {
                if (request.status === 200) {
                    let data = JSON.parse(request.response);
                    resolve(data);
                } else {
                    reject();
                }
            };
        });
    };
    convert().then(val => inputUsd.value = inputRub.value / val.usd)
            .catch(() => inputUsd.value = 'ЧТо-то пошло не так!');
});

