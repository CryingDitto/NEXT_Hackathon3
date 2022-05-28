//이름
const name2 = sessionStorage.getItem("user2Name");

document.querySelector('#user2Name').innerHTML = name2;

//태그
const testName = sessionStorage.getItem('TestName');

const true1 = sessionStorage.getItem('True1');
const true2 = sessionStorage.getItem('True2');
const true3 = sessionStorage.getItem('True3');
const true4 = sessionStorage.getItem('True4');
const true5 = sessionStorage.getItem('True5');

const false1 = sessionStorage.getItem('False1');
const false2 = sessionStorage.getItem('False2');
const false3 = sessionStorage.getItem('False3');
const false4 = sessionStorage.getItem('False4');
const false5 = sessionStorage.getItem('False5');

document.querySelector('#testName').innerHTML = testName;
