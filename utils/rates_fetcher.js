'use strict';

const https = require('https');

const RATES_XML = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';

class RatesFetcher {
    fetchCurrencies(url = RATES_XML) {
        return new Promise((resolve, reject) => {
            https.get(url, response => {
                const { statusCode } = response;
                if (statusCode < 200 || statusCode >= 400) {
                    reject(`Error while fetching data ${statusCode}`);
                    return;
                }

                let data = '';
                response.on('data', chunk => {
                    data += chunk;
                });
                response.on('end', () => {
                    resolve(data);
                });
            }).on('error', err => {
                reject(err);
            });
        });
    }
}

module.exports = new RatesFetcher();
