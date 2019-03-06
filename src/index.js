// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let change = {};
    let remainder = currency;
    if (currency <= 0) {
        return change;
    } else if (currency > 0 && currency < 10000) {
        if (currency >= 50) {
            remainder = currency % 50;
            change.H = Math.floor(currency / 50);
            currency = remainder;
        }
        if (currency >= 25) {
            remainder = currency % 25;
            change.Q = Math.floor(currency / 25);
            currency = remainder;
        }
        if (currency >= 10) {
            remainder = currency % 10;
            change.D = Math.floor(currency / 10);
            currency = remainder;
        }
        if (currency >= 5) {
            remainder = currency % 5;
            change.N = Math.floor(currency / 5);
            currency = remainder;
        }
        if (currency >= 1) {
            remainder = currency % 1;
            change.P = Math.floor(currency / 1);
            currency = remainder;
        }
        return change;

    } else {
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
    }
}

