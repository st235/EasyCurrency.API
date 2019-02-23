'use strict';

const BaseController = require('./base.js');

const ratesFetcher = require('../utils/rates_fetcher.js');
const ratesParser = require('../utils/rates_parser.js');
const ratesConverter = require('../utils/rates_converter.js');

class CurrenciesController extends BaseController {
    constructor() {
        super();
        this.latest = this.latest.bind(this);
    }

    latest(req, res) {
        const { base } = req.query;

        if (!base || (typeof base) != 'string') {
            this.sendError(res, 'base was not present or not a string', 400);
            return;
        }

        ratesFetcher.fetchCurrencies(process.env.RATES_XML)
            .then(ratesParser.parseRates)
            .then(data => ratesConverter.convertToNewBaseIfNecessary(base, data))
            .then(data => res.send(data))
            .catch(error => this.sendError(res, error));
    }
}

module.exports = new CurrenciesController();
