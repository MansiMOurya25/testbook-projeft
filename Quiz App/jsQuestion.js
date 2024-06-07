//  to assign some const variables to add event listener and to use that variable in function

jsE1.addEventListener("click", jsStartQuiz);
const containerE2 = document.querySelector(".container");


const headQE2 = document.querySelector(".headQ")

const scoreE2 = document.querySelector(".score");
const noOfQuestionE2 = document.getElementById("no-of-question");

const quesE2 = document.querySelector(".ques");
const opsE2 = document.querySelector(".ops");

const nextE2 = document.querySelector(".next");
const optionDivE2 = document.querySelector(".option-div");
const timeLeftE2 = document.getElementById("time-left");
let currentQuestionIndex2 = 0;
let score2 = 0;
let time2;
// start js question in arrray form.
const jsQuesArray = [
    {
        id: "0",
        question: "Javascript is an _______ language ?",
        options: [
            {text:"Object-Oriented" , correct:"true"},
            {text:"OBject-Based", correct:"false"},
            {text:"Procedural", correct :"false" },
            {text:"None of the above", correct :"false"} ,
        ],
    },

    {
        id: "1",
        question: "Which of the following keywords is used to define a variable in Javascript?",
        options: [
            {text:"var", correct:"false"},
            {texxt:"let", correct:"false"} ,
            {text:"Both A and B", correct:"true"},
            {text:"none of the above", correct: "false"},

        ],
    },

    {
        id: "2",
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        options: [
            {text:"getElementbuId()", correct:"false"},
            {text:"getElementByClassName",correct:"false"},
            {text:"Both A and B", correct:"true"},
            {text:"NOne of the above", correct:"false"},
        ],
    },

    {
        id: "3",
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        options: [
            {text:"document.write",correct:"false"},
            {text:"console.log()",correct:"false"},
            {text: "window.alert",correct:"false"},
            {text: "all the above",correct:"true"},

        ],
    },
    {
        id: "4",
        question: "How can a datatype be declared to be a constant type?",
        options: [
            {text :"const"  , correct:"true"},
            {text :"var", correct:"false"},
            {text :"let",correct:"false"},
            {text :"constant",correct:"false"},
        ],
        
    },
    {
        id: "5",
        question: "What keyword is used to check whether a given property is valid or not?",
        options: [
            {text: "in",correct:"true"},
            {text: "is in " ,correct:"false"},
            {text: "exists" ,correct:"false"},
            {text:"lies",correct:"false"},
        ],
    },
    {
        id: "6",
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:?",
        options: [
            {text:"Boolean",correct:"false"},
            {text: "Undefined",correct:"false"},
            {text:"Object",correct:"true"},
            {text:"Integer",correct:"false"},
        ],
    },
    {
        id: "7",
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        options: [
            {text: "stringify", correct:"true"},
            {text: "parse()", correct:"false"},
            {text:"convert", correct:"false"},
            {text:"none of the above", correct:"false"},
        ],
    },
    {
        id: "8",
        question: "Which of the following are closures in Javascript?",
        options: [
            {text:"Variables",  correct:"false"},
            {text:"Functions", correct:"false"},
            {text: "Objects",correct:"false"},
            {text: "All of the above",correct:"true"},
        ],
    },
    {
        id: "9",
        question: "Which of the following is not a Javascript framework?",
        options: [
            {text:"Node",correct:"false"},
            {text: "Vue",correct:"false"},
            {text: "React",correct:"true"},
            {text:"Cassanda",correct:"false"},
        ],
        
    },
    ]
    
    
    // function will run if js section selects
    //addded timer 
    function timer2(){
        timeLeftE1.innerHTML =sec ;
        sec-- ;
        if(sec == 0){
            sec =total_time;
            clearInterval(time2);
            currentQuestionIndex3;
            jsStartQuiz();
        }
    }
    //  then call js start quiz function 
    function jsStartQuiz() {
        displayConE2.style.display= "block";
    
    ;    sec = total_time;
    clearInterval(time2);
    timer2();
    time2 = setInterval(timer ,1000);
    //  to stop timer 
    
        containerE2.style.display= "none"
        headQE2.innerHTML = "JavaScript"
        currentQuestionIndex2 = 0;
        score2 = 0;
        showQuestion2();
    
    }
//     to show question 
    function showQuestion2(){
        resetState2();
    
        let currentQuestion2 = jsQuesArray[currentQuestionIndex2];
        let questionNo2 = currentQuestionIndex2 + 1;
        noOfQuestionE2.innerText= questionNo2;
        quesE2.innerHTML = currentQuestion2.question;
        scoreE2.innerHTML= score2;
    
    
    currentQuestion2.options.forEach(answer2 =>{
        const button2 = document.createElement("button");
        button2.innerHTML = answer2.text ;
          button2.classList.add("ops");
      optionDivE2.appendChild(button2);  
    
      if(answer2.correct){
        button2.dataset.correct =answer2.correct
      }
    button2.addEventListener("click" ,selectAnswer2);
    });
    }
    //  to reset each first page
    function resetState2(){
        nextE2.style.display = "block";
        while(optionDivE2.firstChild){
            optionDivE2.removeChild(optionDivE2.firstChild)
        }
    }
    //  to select answer of js question array
    function selectAnswer2(e2){
        const selectedBtn2 = e2.target ; 
        // console.log(selectedBtn);
        const isCorrect2 = selectedBtn2.dataset.correct === "true";
        if(isCorrect2){
            selectedBtn2.classList.add("correct");
            ++score2;
        }
        else{
            selectedBtn2.classList.add("incorrect");
        }
     Array.from(optionDivE2.children).forEach(button2 => {
        if(button2.dataset.correct === "true"){
            button2.classList.add("correct");
            
        }
        button2.disabled = "true" ;
     } )
     nextE2.style.display = "block" ;
    }
    const quizResultE2 = document.querySelector("quiz-result");
    const resultNameE2 = document.getElementById("result-name");
    const displayConE2 = document.querySelector(".display-container");
      
    //  to handle question and play one by one
    function handleNextButton2(){
        currentQuestionIndex2++ ;
        if(currentQuestionIndex2 < jsQuesArray.length){
            showQuestion2();
        }
        else{
            showScore2();
            quizResultE2.style.display ="block" ;
            displayConE2.style.display = "none";
    
        }
    } ;
    // to add evernt in next button
    nextE2.addEventListener("click" , ()=>{
        if(currentQuestionIndex2 <jsQuesArray.length){
            handleNextButton2();
        }else{
            displayConE2.style.display = "none";
            // quizResultE1.style.display= "block" ;
        }
    });    
    // to show result after complete all question
    function showScore2(){ 
    let totalQuestion2 = 10 ;
        let wrongQuestion = totalQuestion2 - score2;
        let percentage = (score2/totalQuestion2)*100;
        document.getElementsByClassName("correctE")[0].innerHTML = `Correct: ${score2}`;
        document.getElementsByClassName("wrong")[0].innerHTML = `Wrong: ${wrongQuestion}`;
        document.getElementsByClassName("percentage")[0].innerHTML = `percentage: ${percentage}%`;
    }
    
    // to  start again and go back functionality with using add eveent listener
    const startAgainE2 = document.querySelector(".start");
    const goBackE2 = document.querySelector(".goback");
     
    startAgainE2.addEventListener("click" , ()=>{
        jsStartQuiz();
    })
    
    goBackE2.addEventListener("click" , ()=>{
        containerE2.style.display ="block";
        displayConE2.style.display="none";
      saveName();  
      displayConE2.style.display="block";
        
    })
    
    
    
    
    
    
    
    
    
    
    
    