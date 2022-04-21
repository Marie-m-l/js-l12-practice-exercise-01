//Lesson 12 Exercise #1
const randomFolks = document.querySelector(".random-peeps");

//Declare an async function called getData
const getData = async function () {
    const usersRequest = await fetch ("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
    const userResults = data.results; //array of objects
    console.log(userResults);

    displayUsers(userResults);
};

getData();

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
