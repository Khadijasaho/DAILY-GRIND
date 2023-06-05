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

//today =3;

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
     break;

     case 3:
        today ="Wednesday";
   break;

     default:
         today ="Not Sure What Day It Is!";
    alert("falling into alert!");

}

alert(coffeeTemplate(coffee))

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
//alert(today);
console.log(coffee);