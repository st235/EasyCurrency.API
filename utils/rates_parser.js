'use strict';

const xmlParser = require('xml2js').parseString;

const RatesResponseBuilder = require('./rates_response_builder.js');
const serverConfigs = require('../configs/server_configs.js');

class RatesParser {
    constructor() {
        this.parseRates = this.parseRates.bind(this);
        this.internalParse = this.internalParse.bind(this);
        this.toResponse = this.toResponse.bind(this);
        this.internalParseCurrencyNode = this.internalParseCurrencyNode.bind(this);
    }

    parseRates(ratesXml) {
        return this.internalParse(ratesXml).then(this.toResponse);
    }

    internalParse(ratesXml) {
        return new Promise((resolve, reject) => {
            xmlParser(ratesXml, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        });
    }

    toResponse(ratesXmlJs) {
        return new Promise((resolve, _) => {
            const ratesResponseBuilder = new RatesResponseBuilder();

            const xmlRoot = ratesXmlJs['gesmes:Envelope'];
            const ratesRoot = xmlRoot['Cube'][0]['Cube'];

            const date = ratesRoot[0]['$']['time'];
            const rates = ratesRoot[0]['Cube'];

            ratesResponseBuilder
                .date(date)
                .base(serverConfigs.base_value);
            rates.forEach(rate => {
                this.internalParseCurrencyNode(rate, ratesResponseBuilder);
            });
            resolve(ratesResponseBuilder.build());
        });
    }

    internalParseCurrencyNode(rateNode, ratesResponseBuilder) {
        const root = rateNode['$'];
        ratesResponseBuilder.addRate([root['currency']], root['rate']);
    }
}

module.exports = new RatesParser();
