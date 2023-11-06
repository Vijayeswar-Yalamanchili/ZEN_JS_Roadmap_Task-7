//Q1    : Get all the countries from Asia continent /region using Filter function
//Ans   :

// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all','true');
// request.send();
// request.onload=function (){
//     var countryData=JSON.parse(this.response);
//     const asia=countryData.filter((element)=>{
//         if(element.region==='Asia'){
//             return element.name;
//         }
//     })
//     console.log(asia);
// }

// -------------------------------------------------------------------------------------------------------------------------

//Q2    : Get all the countries with population of less than 2 lacs using Filter function
//Ans   : 

// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all','true');
// request.send();
// request.onload=function (){
//     var countryData=JSON.parse(this.response);
//     const popu=countryData.filter((element)=>{
//         return element.population<200000;
//     })
//     console.log(popu);
// }

// --------------------------------------------------------------------------------------------------------------------------

//Q3    : Print the following details name, capital, flag using forEach function.
//Ans   : 

// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all','true');
// request.send();
// request.onload=function (){
//     var countryData=JSON.parse(this.response);
//     countryData.forEach((element)=>{
//         console.log(element.name,element.capital,element.flag);
//     })
// }

// --------------------------------------------------------------------------------------------------------------------------

//Q4    : Print the total population of countries using reduce function 
//Ans   : 

// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all','true');
// request.send();
// request.onload=function (){
//     var countryData=JSON.parse(this.response);
//     const population=countryData.reduce((acc,element)=>{
//         return acc+element.population;
//     },0)
//     console.log(population);
// }

// --------------------------------------------------------------------------------------------------------------------------

//Q5    : Print the country which use US Dollars as currency.
//Ans   : 

var request = new XMLHttpRequest();
request.open('Get', 'https://restcountries.com/v3.1/all', true)
request.send();
request.onload = function () {
        var data = JSON.parse(this.response);
        var currency = data.filter((value)=> value.currencies && value.currencies.USD)
        currency.forEach(value => {
            console.log(value.name.common);
        });
}