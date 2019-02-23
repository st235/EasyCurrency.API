'use strict';

class RatesResponseBuilder {
    date(date) {
        this.date = date;
        return this;
    }

    base(base) {
        this.base = base;
        return this;
    }

    addRate(currency, rate) {
        if (!this.rates) {
            this.rates = {};
        }

        this.rates[currency] = rate.toString();
        return this;
    }

    build() {
        return { date: this.date, base: this.base, rates: this.rates };
    }
}

module.exports = RatesResponseBuilder;
