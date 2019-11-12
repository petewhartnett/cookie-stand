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
 
var p = document.createElement('p');
p.textContent = Seattle.location;
article.appendChild(p);

var ul = document.createElement('ul');
article.appendChild(ul);
//total counts the total of the cookies per day
var total = 0;
//Seattle hours print with the cookies for that hour based on random number * avg cookies
for (var i = 0; i < hours.length; i++) {
    var li = document.createElement('li');
    li.textContent = hours[i] + '-' + Math.ceil(random(Seattle.maxCustomers, Seattle.minCustomers) * Seattle.avgCookies) + ' cookies';
    total += Math.ceil(random(Seattle.maxCustomers, Seattle.minCustomers) * Seattle.avgCookies);
    ul.appendChild(li);
}
li.textContent= 'TOTAL = ' + total;


//Tokyo

var p2 = document.createElement('p2');
p2.textContent = "Tokyo";
article.appendChild(p2);

var ul2 = document.createElement('ul2');
article.appendChild(ul2);
var total2 = 0;
for (var i = 0; i < hours.length; i++) {
    var li = document.createElement('li');
    li.textContent = hours[i] + '-' + Math.ceil(random(Tokyo.maxCustomers, Tokyo.minCustomers) * Tokyo.avgCookies) + ' cookies';
    total2 += Math.ceil(random(Tokyo.maxCustomers, Tokyo.minCustomers) * Tokyo.avgCookies);
    ul2.appendChild(li);

}
li.textContent= 'TOTAL = ' + total2;

//Dubai

var p3 = document.createElement('p3');
p3.textContent = Dubai.location;
article.appendChild(p3);

var ul3 = document.createElement('ul3');
article.appendChild(ul3);

var total3 = 0;
for (var i = 0; i < hours.length; i++) {
    var li = document.createElement('li');
    li.textContent = hours[i] + '-' + Math.ceil(random(Dubai.maxCustomers, Dubai.minCustomers) * Dubai.avgCookies )+ ' cookies';
    total3 += Math.ceil(random(Dubai.maxCustomers, Dubai.minCustomers) * Dubai.avgCookies);
    ul3.appendChild(li);
}

li.textContent= 'TOTAL = ' + total3;

//Paris

var p4 = document.createElement('p4');
p4.textContent = Paris.location;
article.appendChild(p4);

var ul4 = document.createElement('ul4');
article.appendChild(ul4);

var total4 = 0;

for (var i = 0; i < hours.length; i++) {
    var li = document.createElement('li');
    li.textContent = hours[i] + '-' + Math.ceil(random(Paris.maxCustomers, Paris.minCustomers) * Paris.avgCookies) + ' cookies';
    total4 += Math.ceil(random(Paris.maxCustomers, Paris.minCustomers) * Paris.avgCookies);
    ul4.appendChild(li);
    
}
li.textContent= 'TOTAL = ' + total4;

// Lima 

var p5 = document.createElement('p5');
p5.textContent = Lima.location;
article.appendChild(p5);

var ul5 = document.createElement('ul5');
article.appendChild(ul5);
var total5 = 0;

for (var i = 0; i < hours.length; i++) {
    var li = document.createElement('li');
    li.textContent = hours[i] + '-' + Math.ceil(random(Lima.maxCustomers, Lima.minCustomers) * Lima.avgCookies) + ' cookies';
    total5 += Math.ceil(random(Lima.maxCustomers, Lima.minCustomers) * Lima.avgCookies);
    ul5.appendChild(li);

}
li.textContent= 'TOTAL = ' + total5;
