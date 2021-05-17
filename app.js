

var pepper = {
        name: "Pepper",
        breed:"Border Collie Mix",
        age:"12 Weeks",
        color:"White",
        gender: "Female",
        housetrained: "No"
    }
var alaska =
    {
        name: "Alaska",
        breed:"Husky",
        age:"3 Years",
        color:"White and Gray",
        gender: "Female",
        housetrained: "Yes"
    }
    var rex = 
    {
        name: "Rex",
        breed:"Pitbull",
        age:"1 Year",
        color:"Brown",
        gender: "Male",
        housetrained: "Yes"
    }

    //Shows Object Properties when button is clicked
function display1() {
    var place = document.getElementById("submit1");
    for (value in pepper) {
        place.innerHTML = "Name: " + pepper.name + "<br>" +
            "Breed: " + pepper.breed + "<br>" +
            "Age: " + pepper.age + "<br>" +
            "Color: " + pepper.color + "<br>" +
            "Gender: " + pepper.gender + "<br>" +
            "Housetrained? " + pepper.housetrained;
    }
};
//Clears object prroperties when button is clicked
function clear1() {
        var place = document.getElementById("submit1");
        place.innerHTML = "See Details";
       
    };


function display2() {
    var place = document.getElementById("submit2");
    for (value in alaska) {
        place.innerHTML = "Name: " + alaska.name + "<br>" +
            "Breed: " + alaska.breed + "<br>" +
            "Age: " + alaska.age + "<br>" +
            "Color: " + alaska.color + "<br>" +
            "Gender: " + alaska.gender + "<br>" +
            "Housetrained? " + alaska.housetrained;
    }
};

function clear2() {
    var place = document.getElementById("submit2");
    place.innerHTML = "See Details";
   
};

function display3() {
    var place = document.getElementById("submit3");
    for (value in rex) {
        place.innerHTML = "Name: " + rex.name + "<br>" +
            "Breed: " + rex.breed + "<br>" +
            "Age: " + rex.age + "<br>" +
            "Color: " + rex.color + "<br>" +
            "Gender: " + rex.gender + "<br>" +
            "Housetrained? " + rex.housetrained;
    }
};

function clear3() {
    var place = document.getElementById("submit3");
    place.innerHTML = "See Details";
   
};




// function getDogInformation(dogName) {
//     console.log(dogName);
//     var show = btn.style.color = "red";
// //     //Notes:
// //     //i = 0 means we are starting at beginning of the list,
// //     //i <dogs.length = we are going to look from 0 to the end of the list
// //     //i++ go one-by-one to evaluate whether that is the right dog, ++ = short hand for plus one
// //     //End Notes
//     var dogInfo = dogs [i];
//     for ( i = 0; i < dogs.length; i++ ) {
// //         //Notes:
// //         //what is the datatype of dogs?
// //         //an array
// //         //what is the datatype of dogs[2]?
// //         //an object
// //         //what is dogs[2].breed?
// //         //pitbull
// //         //EndNotes
//         // if ( dogs[i].name === dogName ) { //what is i?
//         //     console.log('WE FOUND DOG!', dogName, 'DOG OBJECT FROM LIST: ', dogs[i]);

// //             //comments:
// //             // var dogH2Element = document.getElementsByClassName(dogName);
// //             // dogH2Element.innerHTML += 'TESTING';
// //             // console.log(dogDivElement)
// //             //end comments
           
//         }
//         document.getElementById ("btn").innerHTML = dogs;

//     }







