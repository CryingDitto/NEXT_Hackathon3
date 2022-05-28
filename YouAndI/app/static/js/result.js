const name1 = sessionStorage.getItem("user1Name");
const name2 = sessionStorage.getItem("user2Name");


document.querySelector('#user1Name').innerHTML = name1;
document.querySelector('#user2Name').innerHTML = name2;
