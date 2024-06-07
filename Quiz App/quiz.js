// we divided js in four part . because
// according to project we have to show four different topic question part thats why we add every part in different js file . and in this file we also added home page and result page

// home page'js started from here ...... 
// firstly we assigned some value
const nameInputE1 = document.querySelector(".name");
const enterE1 = document.querySelector(".enter");

//  to add category ' event listener
const htmlE1 = document.getElementById("html");
const cssE1 = document.getElementById("css")
const jsE1 = document.getElementById("js")
const dsaE1 = document.getElementById("dsa");


// to save name
enterE1.addEventListener("click", saveName);
function saveName() {
 let  nameE =  nameInputE1.value;
document.getElementsByClassName("result-name")[0].innerHTML =`${nameE} your result is`
}
// to save category which is selected

htmlE1.addEventListener("click", htmlStartQuiz);
const containerE1 = document.querySelector(".container");
// if html starts
// html question related arrray
const htmlQuesArray = [
    {
        id: "0",
        question: "HTML Stand for _________ ?",
        options: [
            { text: "HighText Machine Language", correct: "false" },
            { text: "HyperText Links MarkupLanguage", correct: "false" },
            { text: "HyperText MarkUp Language", correct: "true" },
            { text: "None of  these", correct: "false" },
        ],
    },
    {
        id: "1",
        question: "How many sizes of headers are available in HTML by default?",
        options: [
            { text: "1", correct: "false" },
            { text: "5", correct: "false" },
            { text: "6", correct: "true" },
            { text: "None of  these", correct: "false" },
        ],
    },
    {
        id: "2",
        question: " What is the smallest headers in HTML by default ?",
        options: [
            { text: "h1", correct: "true" },
            { text: "h5", correct: "false" },
            { text: "h6", correct: "false" },
            { text: "h4", correct: "false" },
        ],
    },
    {
        id: "3",
        question: " How to create an ordered list in HTML?",
        options: [
            { text: "ul", correct: "false" },
            { text: "href", correct: "false" },
            { text:"ol", correct: "true" },
            { text: "None of  these", correct: "false" },
        ],
    },
    {
        id: "4",
        question: " HTML files are saved by default with the extension?",
        options: [
            {text: " h", correct: "false" },
            { text: "ht", correct: "false" },
            { text: "html", correct: "true" },
            { text: "None of  these", correct: "false" },
        ],
    },
    
    {
        id: "5",
        question: "we enclose HTML tages with ?",
        options: [
            { text: "{}", correct: "false" },
            { text: "!!", correct: "false" },
            { text: "<>", correct: "true" },
            { text: "None of  these", correct: "false" },
        ],
    },
    
    {
        id: "6",
        question: "How to display performatted text in HTML ?",
        options: [
            { text: "p", correct: "false" },
            { text: "hr", correct: "false" },
            { text: "pre", correct: "true" },
            { text: "None of  these", correct: "false" },
        ],
    },
    
    {
        id: "7",
        question: "Which of the following tages doesnt require a closing tag?",
        options: [
            { text: "br", correct: "false" },
            { text: "hr", correct: "false" },
            { text: "Both A and B", correct: "true" },
            { text: "None of  these", correct: "false" },
        ],
    },
    
    {
        id: "8",
        question: "Which attribute is used to privide a unique name to an Html element?",
        options: [
            { text:"type", correct: "false" },
            { text: "class", correct: "false" },
            { text: "id", correct: "true" },
            { text: "None of  these", correct: "false" },
        ],
    },
    
    {
        id: "9",
        question: "Which HTML element is used to define description data ?",
        options: [
            { text: "li", correct: "false" },
            { text: "ol", correct: "false" },
            { text: "dd", correct: "true" },
            { text: "None of  these", correct: "false" },
        ],
    },
    
]
// function will run if html section selects 
const headQE1 = document.querySelector(".headQ")

const scoreE1 = document.querySelector(".score");
const noOfQuestionE1 = document.getElementById("no-of-question");

const quesE1 = document.querySelector(".ques");
const opsE1 = document.querySelector(".ops");

const nextE1 = document.querySelector(".next");
const optionDivE1 = document.querySelector(".option-div");
const timeLeftE1 = document.getElementById("time-left");
let currentQuestionIndex = 0;
let score = 0;
let time;
const total_time= 100;
let sec =total_time;
// to add timer 
function timer(){
    timeLeftE1.innerHTML =sec ;
    sec-- ;
    if(sec == 0){
        sec =total_time;
        clearInterval(time);
        currentQuestionIndex ;
        htmlStartQuiz();
    }
}
// then call htmlstartquiz
function htmlStartQuiz() {
    displayConE1.style.display= "block";

;    sec = total_time;
clearInterval(time);
timer();
time = setInterval(timer ,1000);
// ended timer afer 100seconds 

    containerE1.style.display= "none"
    headQE1.innerHTML = "HTML"
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();

}
// to add question of arrray
function showQuestion(){
    resetState();

    let currentQuestion = htmlQuesArray[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    noOfQuestionE1.innerText= questionNo;
    quesE1.innerHTML = currentQuestion.question;
    scoreE1.innerHTML= score;
// to add each option of each question

currentQuestion.options.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text ;
      button.classList.add("ops");
  optionDivE1.appendChild(button);  

  if(answer.correct){
    button.dataset.correct =answer.correct
  }
button.addEventListener("click" ,selectAnswer);
});
}
//  to reset every first page
function resetState(){
    nextE1.style.display = "block";
    while(optionDivE1.firstChild){
        optionDivE1.removeChild(optionDivE1.firstChild)
    }
}
// to select answer and check  correct or not 
function selectAnswer(e){
    const selectedBtn = e.target ; 
    // console.log(selectedBtn);
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        ++score;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
 Array.from(optionDivE1.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
        
    }
    button.disabled = "true" ;
 } )
 nextE1.style.display = "block" ;
}
const quizResultE1 = document.querySelector("quiz-result");
const resultNameE1 = document.getElementById("result-name");
const displayConE1 = document.querySelector(".display-container");
  

// to change question one by one
function handleNextButton(){
    currentQuestionIndex++ ;
    if(currentQuestionIndex < htmlQuesArray.length){
        showQuestion();
    }
    else{
        // to show result 
        showScore();
        quizResultE1.style.display ="block" ;
        displayConE1.style.display = "none";

    }
} ;
//  to add event listener when we click next button then what should be it do
nextE1.addEventListener("click" , ()=>{
    if(currentQuestionIndex <htmlQuesArray.length){
        handleNextButton();
    }else{
        displayConE1.style.display = "none";
        // quizResultE1.style.display= "block" ;
    }
});
         // will show result
function showScore(){ 
let totalQuestion = 10 ;
    let wrongQuestion = totalQuestion - score;
    let percentage = (score/totalQuestion)*100;
    document.getElementsByClassName("correctE")[0].innerHTML = `Correct: ${score}`;
    document.getElementsByClassName("wrong")[0].innerHTML = `Wrong: ${wrongQuestion}`;
    document.getElementsByClassName("percentage")[0].innerHTML = `percentage: ${percentage}%`;
}


const startAgainE1 = document.querySelector(".start");
const goBackE1 = document.querySelector(".goback");
//   to go again quiz 
startAgainE1.addEventListener("click" , ()=>{
    htmlStartQuiz();
})

//  to go again home page
goBackE1.addEventListener("click" , ()=>{
    containerE1.style.display ="block";
    displayConE1.style.display="none";
  saveName();  
  displayConE1.style.display="block";
    
})
