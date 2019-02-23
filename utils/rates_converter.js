'use strict';

const RatesResponseBuilder = require('./rates_response_builder.js');
const serverConfigs = require('../configs/server_configs.js');

class RatesConverter {
    convertToNewBaseIfNecessary(newBase, ratesResponse) {
        return new Promise((resolve, reject) => {
            if (newBase == serverConfigs.base_value) {
                resolve(ratesResponse);
                return;
            }

            const newBaseRate = ratesResponse.rates[newBase];

            if (!newBaseRate) {
                reject(`this base currency (${newBase}) is not supported, try another one`);
                return;
            }

            const newRatesResponse = new RatesResponseBuilder();
            newRatesResponse
                .date(ratesResponse.date)
                .base(newBase);

            newRatesResponse.addRate(serverConfigs.base_value, 1 / newBaseRate);
            for (const currency in ratesResponse.rates) {
                if (currency == newBase) {
                    continue;
                }

                newRatesResponse.addRate(currency, ratesResponse.rates[currency] / newBaseRate);
            }

            resolve(newRatesResponse.build());
        });
    }
}

module.exports = new RatesConverter();
