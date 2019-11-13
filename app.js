'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

City.prototype.render = function (container) {

    var tableElement = addElement('table', container);

    addElement('h2', tableElement, this.cityName);


    var tableHeader = addElement('tr', tableElement);


    addElement('thead', tableHeader, this.name);


    var dataRow = addElement('tr', tableElement);

    addElement('td', dataRow, "Cookies");

    var total = 0;

    for (var i = 0; i < hours.length; i++) {
        addElement('td', tableHeader, hours[i]);

        var random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        var randoms = Math.ceil(random * this.avg);
        total += randoms;
        addElement('td', dataRow, randoms);
    }
    addElement('td', dataRow, this.name + " total:  " + total);
}




var parentElem = document.getElementById('stores');

function City(cityName, minCustomers, maxCustomers, avgCookies) {
    this.name = cityName;
    this.min = minCustomers;
    this.max = maxCustomers;
    this.avg = avgCookies;
    this.sales = [];

}

var cities = [];
cities.push(new City('Seattle', 23, 65, 6.3));
cities.push(new City('Tokyo', 3, 24, 1.2));
cities.push(new City('Dubai', 11, 38, 3.7));
cities.push(new City('Paris', 20, 38, 6.3));
cities.push(new City('Lima', 2, 16, 4.6));

for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    city.render(parentElem);

}


City.prototype.getRandomNumb = function () {
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
}
City.prototype.getCookieCount = function () {
    var random = Math.ceil(this.getRandomNum * this.avgCookies);
    return random;
}




//standalone for element (inspired by class example)
function addElement(tag, container, text) {
    var element = document.createElement(tag);
    container.appendChild(element);
    element.textContent = text;
    return element;

}
/*
//W3schools.com and stackoverflow were used for research and as inspiration for the random code
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//parent element
var parentElem = document.getElementById('stores');
//article


//function begin for displaying average cookies each hour each location



function display(location) {

    var p = document.createElement('p');
    p.textContent = location.location;
    article.appendChild(p);

    var ul = document.createElement('ul');
    article.appendChild(ul);
    //total counts the total of the cookies per day
    var total = 0;
    //Seattle hours print with the cookies for that hour based on random number * avg cookies
    for (var i = 0; i < hours.length; i++) {
        var li = document.createElement('li');
        li.textContent = hours[i] + '-' + Math.ceil(random(location.maxCustomers, location.minCustomers) * location.avgCookies) + ' cookies';
        total += Math.ceil(random(location.maxCustomers, location.minCustomers) * location.avgCookies);
        ul.appendChild(li);
    }
    li.textContent = 'TOTAL = ' + total;
}

display(Seattle);
display(Lima);
display(Tokyo);
display(Dubai);
display(Paris);

*/