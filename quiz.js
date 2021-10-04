const restartbtn = document.getElementById('res');
const previousbtn = document.getElementById("prev");
const nextbtn = document.getElementById("next");
const submitbtn = document.getElementById("sub");
const userscore = document.getElementById("user-score");
const text_ques = document.getElementById("que");
const truebtn = document.getElementById("true");
const falsebtn = document.getElementById("false");

let current_question = 0;
var score = 1;

let questions = [
    {
        question: "Are you able to maintain the focus on a task for atleast some time",
        answers: [
            {
                option:"Yes", answer:true
            },
            {
                option:"No", answer:false
            }
        ]
    },
    {
        question: "Have you a clear plan for dealing with disruptions and interruptions?",
        answers: [
            {
                option:"Yes", answer:true
            },
            {
                option:"No", answer:false
            }
        ]
    },
    {
        question: "Are you able to complete all task that have assigned to you",
        answers: [
            {
                option:"Yes", answer:true
            },
            {
                option:"No", answer:false
            }
        ]
    },
    {
        question: "Do you organize your day in the morning?",
        answers: [
            {
                option:"Yes", answer:true
            },
            {
                option:"No", answer:false
            }
        ]
    },
    {
        question: "You getup late in the morning.",
        answers: [
            {
                option:"Yes", answer:false
            },
            {
                option:"No", answer:true
            }
        ]
    }
]

function beginQuiz(){
    current_question = 0;
    text_ques.innerHTML = questions[current_question].question;
    truebtn.innerHTML = questions[current_question].answers[0].option;
  
    truebtn.OnClick = () => {
        let ans0 = 0;
        if(questions[current_question].answers[ans0].answer){
            if(score<5){
                score++;
            }
        }
        userscore.innerHTML = score;
        if(current_question<4){
            next();
        }
    }
    falsebtn.innerHTML = questions[current_question].answers[1].option;
    falsebtn.onclick = () => {
        let ans0 = 1;
        if(questions[current_question].answers[ans0].answer){
            if(score<5){
                score++;
            }
        }
    
    userscore.innerHTML = score;
    if(current_question<4){
        next();
    }  
}
    previousbtn.classList.add('hide');
    }

beginQuiz();

// Next function to display next Question

nextbtn.addEventListener("click", next);
function next(){
    current_question++;
    if(current_question>=4){
        nextbtn.classList.add('hide');
        previousbtn.classList.remove('hide');
    }
    text_ques.innerHTML = questions[current_question].question;
    truebtn.innerHTML = questions[current_question].answers[0].option;
    falsebtn.innerHTML = questions[current_question].answers[1].option;
    truebtn.onclick = () => {
        let ans0 = 0;
        if(questions[current_question].answers[ans0].answer){
            if(score<5)
                score++;
            
        }
        userscore.innerHTML = score;
        if(current_question<4){
            next();
        }
    }
    falsebtn.onclick = () => {
        let ans0 = 1;
        if(questions[current_question].answers[ans0].answer){
            if(score<5){
                score++;
            }
        }
    
    userscore.innerHTML = score;
    if(current_question<4){
        next();
    }  
}
    previousbtn.classList.remove('hide');
}


// Restart Function
restartbtn.addEventListener("click", res);
function res(){
    current_question = 0;
    previousbtn.classList.remove('hide');
    nextbtn.classList.remove('hide');
    truebtn.classList.remove('hide');
    falsebtn.classList.remove('hide');
    submitbtn.classList.remove('hide');
    score = 0;
    userscore.innerHTML=0;
    beginQuiz();
}



// previous function that will push the user to previous question

previousbtn.addEventListener("click", prev);
function prev(){
    current_question--;
    if(current_question<=0){
        previousbtn.ClassList.add('hide');
        nextbtn.ClassList.remove('hide');
    }
    text_ques.innerHTML = questions[current_question].question;
    truebtn.innerHTML = questions[current_question].answers[0].option;
    falsebtn.innerHTML = questions[current_question].answers[1].option;
    truebtn.onclick = () => {
        let ans0 = 0;
        if(questions[current_question].answers[ans0].answer){
            if(score<5){
                score++;
            }
        }
        userscore.innerHTML = score;
        if(current_question<4){
            next();
        }
    }
    falsebtn.onclick = () => {
        let ans0 = 1;
        if(questions[current_question].answers[ans0].answer){
            if(score<5){
                score++;
            }
        }
    
    userscore.innerHTML = score;
    if(current_question<4){
        next();
    }  
}
    nextbtn.classList.remove('hide');
    
}

// Submit Function
submitbtn.addEventListener("click", sub);
function sub(){
    previousbtn.classList.add('hide');
    nextbtn.classList.add('hide');
    truebtn.classList.add('hide');
    falsebtn.classList.add('hide');
    submitbtn.classList.add('hide');
    if(score >=3){
        text_ques.innerHTML = "Congratulations You are at right way";
    }else{
        text_ques.innerHTML = "Take more effort to be 100% Productive";
    }
   
}