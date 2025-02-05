let oneEuroIs = {
    "JPY": 160.14, 
    "USD": 1.04, 
    "GBP": 0.83,
};

function fromDollarToYen(dollars) {
    return (dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    return (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };