//alert("can you see this?");
/*

    Here are  the items we need to produce for weekdays coffee

    pic -image src
    alt - the alt tag for the image 
    color -color to match the image
    desc -description of coffee
    name - the name of the coffee
    day -the day of the week

*/

function coffeeTemplate(coffee){
return   `
<p>
    		 <img src="${coffee.pic}" alt="${coffee.alt}"id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong>${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>,${coffee.desc}</p>

`;
  
}

let myDate =new Date();
let today =myDate.getDay();
let coffe = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


//today =3;

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }
 
 today = parseInt(today);
 console.log (today)

switch(today){

     case 1:
          today ="Monday";
          coffee = {
            name:"Bubble Tea", 
            color: "pink",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Monday",
            desc: `I like me some bubble tea!`
          };

     break;

     case 2:
          today ="Tuesday";
          coffee = {
            name:"Drip", 
            color: "black",
            pic: "images/drip.jpg",
            alt: "A picture of a drip coffee",
            day: "Tuesday",
            desc: `Give it to me straight!`
          };
     break;

     case 3:
        today ="Wednesday";
        coffee = {
            name:"Caramel Latte", 
            color: "brown",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a caramel latte coffee",
            day: "Wednesday",
            desc: `Best latte ever!`
          };

        
   break;

   case 4:
        today ="Thursday";
        coffee = {
            name:"Mocha", 
            color: "red",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha coffee",
            day: "Thursday",
            desc: `Chocolate Coffee!`
          };

        
   break;

   case 5:
        today ="Friday";
        coffee = {
            name:"Cold Brew", 
            color: "blue",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a cold brew coffee",
            day: "Friday",
            desc: `Nothing Better Than a Cold Brew On a Hot Day!`
          };

        
   break;

   case 6:
    today ="Saturday";
    coffee = {
        name:" Frappaccino", 
        color: "purple",
        pic: "images/frappaccino.jpg",
        alt: "A picture of a frappaccino coffee",
        day: "Saturday",
        desc: `Coldest Coffee Ever`
      };

    
break;

case 0:
    today ="Sunday";
    coffee = {
        name:"pumpkin-spice-latte", 
        color: "orange",
        pic: "images/pumpkin-spice-latte.jpg",
        alt: "A picture of a pumpkin spice latte coffee",
        day: "Sunday",
        desc: ` Most popular coffee during fall!`
      };

    
break;



     default:
         today ="Not Sure What Day It Is!";
    //alert("falling into alert!");

}

//alert(coffeeTemplate(coffee))

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.background = coffee.color;
//alert(today);
console.log(coffee);