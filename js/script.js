//Lesson 12 
//Exercise #1
//Skills practiced: fetch(), async/await syntax, .json(), function expression, innerHTML, for…of loop, createElement(), append()
//Exercise #2
// Skills practiced: async functions, fetch, template literals, change event


const randomFolks = document.querySelector(".random-peeps");
//capture the select element
const selectUserNumber = document.querySelector("#users");

//Declare an async function called getData
const getData = async function (numUsers) {
    const usersRequest = await fetch (`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    const userResults = data.results; //array of objects
    console.log(userResults);

    displayUsers(userResults);
};

getData(1);

const displayUsers = function (userResults) {
    //clear the randomFolks element
    randomFolks.innerHTML =  "";
    //loop over
    for (const user of userResults) {
        const country = user.location.country;
        const name = user.name.first;
        const imgUrl = user.picture.medium;

        // create a div element called userDiv
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imgUrl} alt= "User avatar" />
        `;
        //Append userDiv to the randomFolks element.
        randomFolks.append(userDiv);
    }
};

selectUserNumber.addEventListener('change' , function(e) {
    const numUsers= e.target.value;
    // console.log(numUsers);
    getData(numUsers);
})