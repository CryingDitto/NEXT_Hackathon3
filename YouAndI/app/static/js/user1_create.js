<<<<<<< HEAD
//닉네임 띄워주기
const name1 = sessionStorage.getItem("user1Name");
document.querySelector('#user1Name').innerHTML = name1;


//테스트명, 정답, 오답
const tagForm = document.querySelector('#tag-form')

const testName = document.querySelector('#testname');
=======
const name1 = sessionStorage.getItem("user1Name");

document.querySelector('#user1Name').innerHTML = name1;

const tagForm = document.querySelector('#tag-form')
//input
const testName = document.querySelector('#testName');
>>>>>>> 83288972ace1e9ec0f2878aaa2ee0758faf38ce9

const true1 = document.querySelector('#true1');
const true2 = document.querySelector('#true2');
const true3 = document.querySelector('#true3');
const true4 = document.querySelector('#true4');
const true5 = document.querySelector('#true5');

const false1 = document.querySelector('#false1');
const false2 = document.querySelector('#false2');
const false3 = document.querySelector('#false3');
const false4 = document.querySelector('#false4');
const false5 = document.querySelector('#false5');


<<<<<<< HEAD



=======
>>>>>>> 83288972ace1e9ec0f2878aaa2ee0758faf38ce9
const HIDDEN_CLASSNAME='hidden';

function saveFn(event){
	event.preventDefault();
	tagForm.classList.add(HIDDEN_CLASSNAME);
<<<<<<< HEAD

    const TestName = testName.value;
=======
	// const user1Name = user1Input.value;
    const TestName = testName.value;

>>>>>>> 83288972ace1e9ec0f2878aaa2ee0758faf38ce9
    const True1 = true1.value;
    const True2 = true2.value;
    const True3 = true3.value;
    const True4 = true4.value;
    const True5 = true5.value;

    const False1 = false1.value;
    const False2 = false2.value;
    const False3 = false3.value;
    const False4 = false4.value;
    const False5 = false5.value;

<<<<<<< HEAD
    

	// setItem
    sessionStorage.setItem("TestName", TestName);
=======
	// setItem
    sessionStorage.setItem('TestName', TestName);
>>>>>>> 83288972ace1e9ec0f2878aaa2ee0758faf38ce9

    sessionStorage.setItem('True1', True1);
    sessionStorage.setItem('True2', True2);
    sessionStorage.setItem('True3', True3);
    sessionStorage.setItem('True4', True4);
    sessionStorage.setItem('True5', True5);

    sessionStorage.setItem('False1', False1);
    sessionStorage.setItem('False2', False2);
    sessionStorage.setItem('False3', False3);
    sessionStorage.setItem('False4', False4);
    sessionStorage.setItem('False5', False5);
<<<<<<< HEAD


    console.log(False1);
}



tagForm.addEventListener('submit', saveFn);
=======
    
    console.log(True1);
}

// tagForm.addEventListener('submit', saveFn);
>>>>>>> 83288972ace1e9ec0f2878aaa2ee0758faf38ce9
