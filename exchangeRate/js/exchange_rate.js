'use strict';
let select1=document.getElementsByTagName("select")[0];
let select2=document.getElementsByTagName("select")[1];
let fromCurrency;
let toCurrency;
let amount;

let urlObject={
    mainURL : `https://api.exchangerate.host/convert`,
    fromQry : `from=${fromCurrency}`,
    toQry : `to=${toCurrency}`,
    amountQry : `amount=${amount}`
}

function init(){
    initializeSelectData("./json/currency.json").then(
        function(value){console.log("values loaded successfully")},
        function(error){alert("could not load currencies")}
    );
}



function getAbsoluteRequestURL(){
    let absoluteURL=urlObject.mainURL+`?`+urlObject.fromQry+`&`+urlObject.toQry+`&`+urlObject.amountQry;
    return absoluteURL;
}
