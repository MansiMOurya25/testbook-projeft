//  to add  the array of dsa question
const dsaQuesArray= [
    {
        id: "0",
        question: "What is a data structure ?",
        options: [
         {text:   "A programming language", correct:"false"},
         {text:   " A collection of algorithms", correct:"false"},
         {text:   "A way to store and organize data", correct:"true"},
         {text:  "A type of computer hardware", correct:"false"},
        ],
    },

    {
        id: "1",
        question: "Which data structure is used for implementing recursion?",
        options: [
            {text: "Stack", correct:"true"},
            {text:  "Queue", correct:"false"},
            {text:  "List", correct:"false"},
            {text:   "Array", correct:"false"},
        ],
    },

    {
        id: "2",
        question: "The data structure required to check whether an expression contains a balanced parenthesis is ?",
        options: [
            {text: "Queue", correct:"false"},
            {text: "Stack", correct:"true"},
            {text: "Tree", correct:"false"},
            {text:  "Array", correct:"false"},
        ],
    },

    {
        id: "3",
        question: "Which data structure is needed to convert infix notation to postfix notation?",
        options: [
            {text:  "Tree", correct:"false"},
            {text: "Branch", correct:"false"},
            {text: "Stack", correct:"true"},
            {text: "Queue", correct:"false"},
        ],
    },
    {
        id: "4",
        question: " What is the value of the postfix expression 6 3 2 4 + – *?",
        options: [
            {text:  "74", correct:"false"},
            {text:  "-18", correct:"true"},
            {text:  "22", correct:"false"},
            {text:  "40", correct:"false"},
        ],
    },
    {
        id: "5",
        question: "What data structure would you mostly likely see in non recursive implementation of a recursive algorithm?",
        options: [
            {text:   "Stack",correct:"false"},
            {text: "Linked List",correct:"false"},
            {text:  "Tree", correct:"true"},
            {text: "Queue", correct:"false"},
        ],
    },
    {
        id: "6",
        question: "The data structure required for Breadth First Traversal on a graph is?",
        options: [
            {text:    "Array", correct:"false"},
            {text:   "Stack",correct:"false"},
            {text:   "Tree",correct:"false"},
            {text:   "Queue",correct:"true"},
        ],
    },
    {
        id: "7",
        question: ". The prefix form of A-B/ (C * D ^ E) is?",
        options: [
            {text:  "-A/B*C^DE", correct:"true"},
            {text: "-A/BC*^DE",correct:"false"},
            {text: " -ABCD*^DE",correct:"false"},
            {text:    "-/*^ACBDE",correct:"false"},
        ],
    },
    {
        id: "8",
        question: " Which data structure is based on the Last In First Out (LIFO) principle?",
        options: [
            {text:  "Tree",correct:"false"},
            {text:  "Linked List",correct:"false"},
            {text:  "Stack",correct:"true"},
            {text: "Queue",correct:"false"},
        ],

    },
    {
        id: "9",
        question: "Which of the following tree data structures is not a balanced binary tree?",
        option: [
            {text:  "Splay tree", correct:"false"},
            {text: "B-tree",correct:"true"},
            {text:  " AVL tree",correct:"false"},
            {text:  "Red-black tree",correct:"false"},
        ],
    }
    
]
//  to assign some importand variables
dsaE1.addEventListener("click", dsaStartQuiz);
const containerE3 = document.querySelector(".container");


const headQE3 = document.querySelector(".headQ")

const scoreE3 = document.querySelector(".score");
const noOfQuestionE3 = document.getElementById("no-of-question");

const quesE3 = document.querySelector(".ques");
const opsE3= document.querySelector(".ops");

const nextE3 = document.querySelector(".next");
const optionDivE3 = document.querySelector(".option-div");
const timeLeftE3 = document.getElementById("time-left");
let currentQuestionIndex3 = 0;
let score3 = 0;
let time3;
//  to add timer 
function timer3(){
    timeLeftE3.innerHTML =sec ;
    sec-- ;
    if(sec == 0){
        sec =total_time3;
        clearInterval(time3);
        currentQuestionIndex3 ++ //
        dsaStartQuiz();
    }
}
// to start dsa quiz 
function dsaStartQuiz() {
    displayConE3.style.display= "block";

;    sec = total_time;
clearInterval(time3);
timer3();
time3 = setInterval(timer3 ,1000);
// to stop timer after complete all question 

    containerE3.style.display= "none"
    headQE3.innerHTML = "DSA"
    currentQuestionIndex3 = 0;
    score3 = 0;
    showQuestion3();

}
// to show question
function showQuestion3(){
    resetState3();

    let currentQuestion3 = dsaQuesArray[currentQuestionIndex3];
    let questionNo3 = currentQuestionIndex3 + 1;
    noOfQuestionE3.innerText= questionNo3;
    quesE3.innerHTML = currentQuestion3.question;
    scoreE3.innerHTML= score3;


currentQuestion3.options.forEach(answer3 =>{
    const button3 = document.createElement("button");
    button3.innerHTML = answer3.text ;
      button3.classList.add("ops");
  optionDivE3.appendChild(button3);  

  if(answer3.correct){
    button3.dataset.correct =answer3.correct
  }
button3.addEventListener("click" ,selectAnswer3);
});
}
// to reset every first page of quiz question
function resetState3(){
    nextE3.style.display = "block";
    while(optionDivE3.firstChild){
        optionDivE3.removeChild(optionDivE3.firstChild)
    }
}
//  to select and add option
function selectAnswer3(e3){
    const selectedBtn3 = e3.target ; 
    // console.log(selectedBtn);
    const isCorrect3 = selectedBtn3.dataset.correct === "true";
    if(isCorrect3){
        selectedBtn3.classList.add("correct");
        ++score3;
    }
    else{
        selectedBtn3.classList.add("incorrect");
    }
 Array.from(optionDivE3.children).forEach(button3 => {
    if(button3.dataset.correct === "true"){
        button3.classList.add("correct");
        
    }
    button3.disabled = "true" ;
 } )
 nextE3.style.display = "block" ;
}
const quizResultE3 = document.querySelector("quiz-result");
const resultNameE3 = document.getElementById("result-name");
const displayConE3 = document.querySelector(".display-container");
  

//  to handle question one by one
function handleNextButton3(){
    currentQuestionIndex3++ ;
    if(currentQuestionIndex3 < dsaQuesArray.length){
        showQuestion3();
    }
    else{
        showScore3();
        quizResultE3.style.display ="block" ;
        displayConE3.style.display = "none";

    }
} ;
//  to add event listener in next buttona
nextE3.addEventListener("click" , ()=>{
    if(currentQuestionIndex3 <dsaQuesArray.length){
        handleNextButton3();
    }else{
        displayConE3.style.display = "none";
        // quizResultE1.style.display= "block" ;
    }
});
//  to show result  
function showScore3(){ 
let totalQuestion3 = 10 ;
    let wrongQuestion = totalQuestion3 - score3;
    let percentage = (score3/totalQuestion3)*100;
    document.getElementsByClassName("correctE")[0].innerHTML = `Correct: ${score3}`;
    document.getElementsByClassName("wrong")[0].innerHTML = `Wrong: ${wrongQuestion}`;
    document.getElementsByClassName("percentage")[0].innerHTML = `percentage: ${percentage}%`;
}

//  to add startagain and goback eveent trigger functionality
const startAgainE3 = document.querySelector(".start");
const goBackE3 = document.querySelector(".goback");
 
startAgainE3.addEventListener("click" , ()=>{
    dsaStartQuiz();
})

goBackE3.addEventListener("click" , ()=>{
    containerE3.style.display ="block";
    displayConE3.style.display="none";
  saveName();  
  displayConE3.style.display="block";
    
})












