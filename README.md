<img src="https://raw.githubusercontent.com/st235/EasyCurrency/master/images/icon.png" width="128" height="128">

# EasyCurrency.API

Easy currency API takes rates [published by the European Central Bank](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html).

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/st235/EasyCurrency.API)

## Env variable to configure your project (if necessary)

`process.env.PORT` - u may specify the port which would listen your server

`process.env.RATES_XML` - rates xml path, by default european central bank one

## Run server

To run server sucessfully you should create `app_id_whitelist.js` at the root folder of your project. 
The file looks like

```
module.exports = [
    '123456'
];
```

## Available roots

__Still there are only one root available__

> **/latest**
> 
> Returns the latest exchange rate
> 
> Required headers:
> 
> **app_id** - id of your application
> 
> Required query:
> 
> **base** - base currency

## License

```
MIT License

Copyright (c) 2019 Alexander Dadukin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
