'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cities = [];

var parentElem = document.getElementById('stores');
var tableElement = addElement('table', parentElem);


City.prototype.render = function (container) {

    

    // addElement('thead', tableHeader, this.name);


    var dataRow = addElement('tr', tableElement);

    addElement('td', dataRow, this.name);

    var total = 0;

  
    for (var i = 0; i < hours.length; i++) {
      
        var random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        var randoms = Math.ceil(random * this.avg);
        total += randoms;
        
        addElement('td', dataRow, randoms);
           
     
    }
    addElement('td', dataRow, this.name + " total:  " + total);
   
}




// addElement('h2', tableElement, this.cityName);

var tableHeader = addElement('tr', tableElement);
addElement('td', tableElement);
for(var i = 0; i < hours.length;i++){

      addElement('td', tableElement, hours[i] );
}
   



/*
var CookieCount = 0;
for(var i = 0; i< hours.length; i++){
    CookieCount = 0;
for(var j = 1; j < cities.length; j++){
CookieCount += parseInt(tableElement.rows[j].cells[i].innerHTML)

}
addElement('tr',tableElement, CookieCount);

}
*/


//City.prototype.getCookieCount = function () {
   // var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
   // var randoms = Math.ceil(randoms * this.avgCookies);
   // this.sales.push(randoms);
//}




//standalone for element (inspired by class example)
function addElement(tag, container, text) {
    var element = document.createElement(tag);
    container.appendChild(element);
    element.textContent = text;
    return element;
}






var form = document.getElementById('test-form');

function Location(location,minCookies,maxCookies, avgCookies){
    this.location = location;
    this.minCookies = minCookies;
    this.maxCookies = maxCookies;
    this.avgCookies = avgCookies;
    }


    
    
Location.prototype.render = function(){
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


function submitHandler(event){
    event.preventDefault();
    
    var location = new City(event.target.Location.value,event.target.minCookies.value, event.target.maxCookies.value,event.target.avgCookies.value );
    console.log(location);
    
    
    
    location.render();
    
    event.target.reset();
   return location;
    }

    form.addEventListener('submit', submitHandler);


function City(cityName, minCustomers, maxCustomers, avgCookies) {
    this.name = cityName;
    this.min = minCustomers;
    this.max = maxCustomers;
    this.avg = avgCookies;
 
}



cities.push(new City('Seattle', 23, 65, 6.3));
cities.push(new City('Tokyo', 3, 24, 1.2));
cities.push(new City('Dubai', 11, 38, 3.7));
cities.push(new City('Paris', 20, 38, 6.3));
cities.push(new City('Lima', 2, 16, 4.6));
cities.push(submitHandler);


//cities.push(new City( submitHandler));



for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    city.render(parentElem);
    
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