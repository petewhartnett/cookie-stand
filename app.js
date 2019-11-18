'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cities = [];
var randoms;
var parentElem = document.getElementById('stores');
var tableElement = addElement('table', parentElem);



var tfoot = addElement('tfoot', tableElement);

var footerRow = addElement('tr', tfoot);

//city constructor 
function City(cityName, minCustomers, maxCustomers, avgCookies) {
    this.name = cityName;
    this.min = minCustomers;
    this.max = maxCustomers;
    this.avg = avgCookies;
    this.hourlyCookies = [];
}



City.prototype.render = function (container) {



    // addElement('thead', tableHeader, this.name);
    var dataRow = addElement('tr', tableElement);

    addElement('td', dataRow, this.name);

    var total = 0;


    for (var i = 0; i < hours.length; i++) {

        var random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        randoms = Math.ceil(random * this.avg);
        total += randoms;
        this.hourlyCookies.push(randoms);
        addElement('td', dataRow, randoms);

    }

    addElement('td', dataRow, this.name + " total:  " + total);

}



// addElement('h2', tableElement, this.cityName);
function tableHead() {

    var tableHeader = addElement('tr', tableElement);
    addElement('td', tableElement);
    for (var i = 0; i < hours.length; i++) {

        addElement('td', tableElement, hours[i]);
    }
}




//standalone for element (inspired by class example)
function addElement(tag, container, text) {
    var element = document.createElement(tag);
    container.appendChild(element);
    element.textContent = text;
    return element;
}




//Form document to take user input 

var form = document.getElementById('test-form');

//constructor for form
function Location(location, minCookies, maxCookies, avgCookies) {
    this.location = location;
    this.minCookies = minCookies;
    this.maxCookies = maxCookies;
    this.avgCookies = avgCookies;

}


Location.prototype.render = function () {
    var tbody = document.getElementById('stores');
    var row = document.createElement('tr');
    tbody.appendChild(row);

    var nameTD = document.createElement('td');
    row.appendChild(nameTD);
    nameTD.textContent = this.location;

    var minTD = document.createElement('td');
    row.appendChild(minTD);
    minTD.textContent = this.minCookies;

    var maxTD = document.createElement('td');
    row.appendChild(maxTD);
    maxTD.textContent = this.maxCookies;

    var avgTD = document.createElement('td');
    row.appendChild(avgTD);
    avgTD.textContent = this.avgCookies;
}

//submit button function
function submitHandler(event) {
    event.preventDefault();

    var location = new City(event.target.Location.value, event.target.minCookies.value, event.target.maxCookies.value, event.target.avgCookies.value);
    console.log(location);

    location.render();

    event.target.reset();
    return location;
}

form.addEventListener('submit', submitHandler);


var CookieCount = 0;

//footer
function addFooterRow() {

    addElement('td', footerRow, "Hour Total");


    //place holder test to make sure footer function works, total still not working as of 11/17
    for (var i = 0; i < hours.length; i++) {
        var random = Math.floor(Math.random() * (90 - 50)) + 30;
        randoms = Math.ceil(random * 8);


        addElement('td', footerRow, randoms);

    }
    // This is the actual footer function, not currently working
    // for (var i = 0; i < hours.length; i++) {
    //      CookieCount = 0;
    //     for (var j = 0; j < cities.length; j++) {
    //         CookieCount += cities[j].cities[i].hourlyCookies;
    //     }

    //     addElement('td', footerRow, CookieCount);
    // }

}
addFooterRow();





cities.push(new City('Seattle', 23, 65, 6.3));
cities.push(new City('Tokyo', 3, 24, 1.2));
cities.push(new City('Dubai', 11, 38, 3.7));
cities.push(new City('Paris', 20, 38, 6.3));
cities.push(new City('Lima', 2, 16, 4.6));
cities.push(submitHandler);




function printCities() {
    for (var i = 0; i < cities.length; i++) {
        cities[i].render();
    }

}





tableHead();
printCities();











//Footer


