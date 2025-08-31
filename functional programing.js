var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate){
    return amount*rate;
}
currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);

console.log('Hello')


function example(){
    console.log('line one');
    console.log('line two')
    console.log('line three')
}
example();