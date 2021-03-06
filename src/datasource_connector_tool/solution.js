// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.  
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).

const fetch = require("node-fetch");

//individual price class
class Price {
    constructor(buy, sell, id, pair, timestamp) {
        this.buy = buy;
        this.sell = sell;
        this.id = id;
        this.pair = pair;
        this.timestamp = timestamp;
    }

    mid() {
        return (this.buy + this.sell) / 2;
    }

    //return last 3 char of price.pair
    quote() {
        return this.pair.substr(this.pair.length - 3);
    }

}

class Datasource {
    getPrices() {
        return fetch('https://static.ngnrs.io/test/prices')
            .then(response => {
                return response.json()
            }).then(data => {
                //console.log(data['data']['prices']);
                const priceArr = [];
                let dataArr = data['data']['prices'];

                //place each data into new price class
                dataArr.forEach(data => {
                    let newPrice = new Price(data.buy, data.sell, data.id, data.pair, data.timestamp);
                    priceArr.push(newPrice);
                });
                return priceArr;

            }).catch((err) => {
                // Do something for an error here
                return (err);
            })


    }
}


let ds = new Datasource();

ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
    console.log(error);
});