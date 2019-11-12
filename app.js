'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var Seattle = {
    location: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
};

var Tokyo = {
    location: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2
};

var Dubai = {
    location: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7
};

var Paris = {
    location: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3
};

var Lima = {
    location: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6
};

//W3schools.com and stackoverflow were used for research and as inspiration for the random code
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}
//parent element
var parentElem = document.getElementById('stores');
//article
var article = document.createElement('article');
parentElem.appendChild(article);
//title
var h1 = document.createElement('h1');
h1.textContent = "Store Cookie Count";
article.appendChild(h1);

//function begin for displaying average cookies each hour each location
function display(location){

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
    li.textContent = hours[i] + '-' + Math.ceil((location.maxCustomers, location.minCustomers) * location.avgCookies) + ' cookies';
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