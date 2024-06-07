// to add question of css related in array form
const cssQuesArray = [
    {
        id: "0",
        question: "Which of the following tag is used to embed css in html page?",
        options: [
            {text:"css", correct:"false"},
            {text: "!DOCTYPE html",correct:"false"},
            {text:"script", correct:"false"},
            {text:"style", correct:"true"},

        ],
    },

    {
        id: "1",
        question: "Which of the following CSS selectors are used to specify a group of elements??",
        options: [
            {text:  " tag", correct:"false"},
            {text: " id", correct:"false"},
            {text: " class", correct:"true"},
            {text: " both class and tag", correct:"false"},
        ],
    },

    {
        id: "2",
        question: " Which of the following has introduced text, list, box, margin, border, color, and background properties?",
        options: [
            {text:"HTML",correct:"false"},
            {text:"PHP",correct:"false"},
            {text: "CSS",correct:"true"},
            {text: "Ajax",correct:"false"},
        ],
    },

    {
        id: "3",
        question: "Which of the following CSS framework is used to create a responsive design??",
        options: [
            {text:"django",correct:"false"},
            {text: "rails",correct:"false"},
            {text: "larawell",correct:"false"},
            {text: "bootstrap",correct:"true"},

        ],
    },
    {
        id: "4",
        question: "Which of the following type of HTML tag is used to define an internal style sheet?",
        options: [
            {text:"script",correct:"false"},
            {text: "link",correct:"false"},
            {text:"class",correct:"false"},
            {text:"style",correct:"true"},
        ],
    },
    {
        id: "5",
        question: "Which of the following CSS property is used to make the text bold??",
        options: [
            {text:" text-decoration: bold", correct:"false"},
            {text: " font-weight: bold",correct:"true"},
            {text:" font-style: bold", correct:"false"},
            {text: " text-align: bold", correct:"false"},

        ],
    },
    {
        id: "6",
        question: " What will be the output of following CSS code snippet?",
        options: [
            {text: "nothings happen", correct:"true"},
            {text: "error occurs",correct:"false"},
            {text: "heading becomes dark-green",correct:"false"},
            {text: "heading becomes green",correct:"false"},
        ],
    },
    {
        id: "7",
        question: "Which of the following CSS style property is used to specify an italic text?",
        options: [
            {text:"style", correct:"false"},
            {text:"font", correct:"false"},
            {text: "font-style", correct:"true"},
            {text:"@font-face", correct:"false"},
        ],
    },
    {
        id: "8",
        question: " Which of the following are the CSS Extension Prefixes for Webkit?",
        options: [
            {text: " -chrome",correct:"false"},
            {text: " -web", correct:"false"},
            {text:  " -o-",correct:"false"},
            {text:" -webkit", correct:"true"},
        ],
    },
    {
        id: "9",
        question: "Which of the following function defines a linear gradient as a CSS image?",
        options: [
            {text:"gradient()",correct:"false"},
            {text:"linear-gradient()", correct:"true"},
            {text:"grayscale()",correct:"false"},
            {text: "image()",correct:"false"},
        ],
    },
]
//  to add  event listener to trigger that button
cssE1.addEventListener("click" ,cssStartQuiz );    
// function will run if css section selects

//  to assign some values
const containerE4 = document.querySelector(".container");


const headQE4 = document.querySelector(".headQ")

const scoreE4 = document.querySelector(".score");
const noOfQuestionE4 = document.getElementById("no-of-question");

const quesE4 = document.querySelector(".ques");
const opsE4= document.querySelector(".ops");

const nextE4 = document.querySelector(".next");
const optionDivE4 = document.querySelector(".option-div");
const timeLeftE4 = document.getElementById("time-left");
let currentQuestionIndex4 = 0;
let score4 = 0;
let time4;
//  to add timer
function timer4(){
    timeLeftE4.innerHTML =sec ;
    sec-- ;
    if(sec == 0){
        sec =total_time4;
        clearInterval(time4);
        currentQuestionIndex4++;
        cssStartQuiz();
    }
}
//  to start cssquiz
function cssStartQuiz() {
    displayConE4.style.display= "block";

;    sec = total_time;
clearInterval(time4);
//  to stop timer 
timer4();
time4 = setInterval(timer4 ,1000);


    containerE4.style.display= "none"
    headQE4.innerHTML = "CSS"
    currentQuestionIndex4 = 0;

    score4 = 0;
    showQuestion4();

}
//  to show question in page 
function showQuestion4(){
    resetState4();

    let currentQuestion4 = cssQuesArray[currentQuestionIndex4];
    let questionNo4 = currentQuestionIndex4 + 1;
    noOfQuestionE4.innerText= questionNo4;
    quesE4.innerHTML = currentQuestion4.question;
    scoreE4.innerHTML= score4;


currentQuestion4.options.forEach(answer4 =>{
    const button4 = document.createElement("button");
    button4.innerHTML = answer4.text ;
      button4.classList.add("ops");
  optionDivE4.appendChild(button4);  

  if(answer4.correct){
    button4.dataset.correct =answer4.correct
  }
button4.addEventListener("click" ,selectAnswer4);
});
}
//  to reset every first page
function resetState4(){
    nextE4.style.display = "block";
    while(optionDivE4.firstChild){
        optionDivE4.removeChild(optionDivE3.firstChild)
    }
}
//  to add all option in page and to check ans is correct or not
function selectAnswer4(e4){
    const selectedBtn4 = e4.target ; 
    // console.log(selectedBtn);
    const isCorrect4 = selectedBtn4.dataset.correct === "true";
    if(isCorrect4){
        selectedBtn4.classList.add("correct");
        ++score4;
    }
    else{
        selectedBtn4.classList.add("incorrect");
    }
 Array.from(optionDivE4.children).forEach(button4 => {
    if(button4.dataset.correct === "true"){
        button4.classList.add("correct");
        
    }
    button4.disabled = "true" ;
 } )
 nextE4.style.display = "block" ;
}
const quizResultE4 = document.querySelector("quiz-result");
const resultNameE4 = document.getElementById("result-name");
const displayConE4 = document.querySelector(".display-container");
  
// to handle of question one by one

function handleNextButton4(){
    currentQuestionIndex4++ ;
    if(currentQuestionIndex4 < cssQuesArray.length){
        showQuestion4();
    }
    else{
        showScore4();
        quizResultE4.style.display ="block" ;
        displayConE4.style.display = "none";

    }
} ;
// to add evernt listener in next button to add to show different behaviour in differnt situations
nextE4.addEventListener("click" , ()=>{
    if(currentQuestionIndex4 <cssQuesArray.length){
        handleNextButton4();
    }else{
        displayConE4.style.display = "none";
        // quizResultE1.style.display= "block" ;
    }
});    
// to show result 
function showScore4(){ 
let totalQuestion4 = 10 ;
    let wrongQuestion = totalQuestion4 - score4;
    let percentage = (score4/totalQuestion4)*100;
    document.getElementsByClassName("correctE")[0].innerHTML = `Correct: ${score4}`;
    document.getElementsByClassName("wrong")[0].innerHTML = `Wrong: ${wrongQuestion}`;
    document.getElementsByClassName("percentage")[0].innerHTML = `percentage: ${percentage}%`;
}


const startAgainE4 = document.querySelector(".start");
const goBackE4 = document.querySelector(".goback");
 
//  to give funtionality of startagin and go back to button with using addeventlistener
startAgainE4.addEventListener("click" , ()=>{
    cssStartQuiz();
})

goBackE4.addEventListener("click" , ()=>{
    containerE4.style.display ="block";
    displayConE4.style.display="none";
  saveName();  
  displayConE4.style.display="block";
    
})



// thank you ....................











