/*

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

   </p> HERE IS TH EDAILY GRIND WEBSITE<p>
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content
    The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

    Name - for example Bubble Tea
    pic - for example bubble-tea.jpg
    alt - name of coffee in alt tag
    color - color associated with coffee
    desc - description of coffee
    day - day of the week
 

*/

let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";
let today = "";

 //use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

 // Heres how we convert a string to an integer:


//Here's a website where this is discussed: Mozilla Developer Network on paraeInt()

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }

 myDay = parseInt(myDay);//must change to integer for switch

switch(myDay){

    case  0:
        today = "Sunday";
        coffee = {
            name:"Pumpkin Spice Latte",
            pic:"images/pumpkin-spice-latte.jpg",
            alt:"A pic of a pumpkin spice latte",
            color:"red",
            day:"Sunday",
            desc:"Tis the season for a Pumpkin Latte",
        };

    break;
    
    case 1:
        today = "Monday";

        coffee = {
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A pic of a cold brew",
            color: "tan",
            day: "Monday",
            desc: "For when i need a quick pick me up!"
        };
        
    break;

    case  2:
        today = "Tuesday";

        coffee = {
            name: "Drip Cofee",
            pic: "images/drip.jpg",
            alt: "A pic of a drip coffee",
            color: "yellow",
            day: "Tuesday",
            desc: "Bold and strong,you can be anyone you want to be!",
        };

    break;

    case 3:
        today = "Wednesday";

        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of a bubble tea",
            color: "pink",
            day: "Wednesday",
            desc: "I like me some bubble tea",
        };
        
    break;
    
    case 4:
        today = "Thursday";
    coffee = {
        name:"Frappaccino",
        pic:"images/frappaccino.jpg",
        alt:"A pic of a frappaccino",
        color:"purple",
        day:"Thursday",
        desc:"Get loose with it,have fun today with a frappa in your hand!",
    };

    break;

    case 5:
        today = "Friday";
    coffee = {
        name: "Mocha",
        pic: "images/mocha.jpg",
        alt: "A pic of a mocha",
        color: "Brown",
        day: "Friday",
        desc: "Holy smocha mocha,this one is the best!",
    };

    break;

    case 6:
        today = "Saturday";
    coffee = {
        name: "Carmel-latte",
        pic: "images/caramel-latte.jpg",
        alt: "A pic of a carmel latter",
        color: "Blue",
        day: "Saturday",
        desc: "Sweeten up,throw a hint of carmel in your latte!",
    };

    break;
    
    default:
       today = "Something went wrong";
}

//alert(today);
console.log(coffee);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

function coffeeTemplate(coffee){
    return `<p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" /><strong class="feature">${coffee.day}'s Coffee Special:</strong>${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}, as this is one of our top sellers!</p>`;
}