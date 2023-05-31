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


let myDate =new Date();

let today =myDate.getDay();

//today =3;

switch(today){

     case 2:
          today ="Tuesday";
     break;

     case 3:
        today ="Wednesday";
   break;

     default:
         today ="Not Sure What Day It Is!";

}
coffee = {
    name:"Bubble Tea", 
    color: "pink",
    pic: "images/bubble-tea.jpg",
    alt: "A picture of a bubble tea",
    day: "Wednesday",
    desc: `I like me some bubble tea!`


}

//alert(today);
console.log(coffee);