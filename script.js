const $ = element => document.querySelector(element)
const $all = element => document.querySelectorAll(element)

let loadMore = $("#load-more-button")
let loadMoreCount = $("#load-more-count")
let loadMoreText = $("#load-more-text")
let projects = $all(".project-load-more")
let containerButtonAndLetsTalk = $("#container-button-lets-talk")

loadMore.addEventListener("click", ()=>{
    for(i=0; i<projects.length; i++) projects[i].classList.toggle("project-load-more-height")
    containerButtonAndLetsTalk.classList.toggle("container-button-lets-talk")
    loadMoreText.innerText = (loadMoreText.innerText != "Show less") ? "Show less" : "Load more"
    loadMoreCount.style.display = (loadMoreCount.style.display != "none") ? "none" : "inline"
})



let questions = $all(".questions-text")
let hr = $all(".hr-questions")
let questionsPlus = $all(".question")
let answers = $all(".answer")

for(let i=0; i<answers.length; i++){
    questionsPlus[i].addEventListener("click", ()=>{
    //     for(let j=0; j<answers.length; j++){
    //         answers[j].style.display = "none"
    //     }
    // answers[i].style.maxHeight = (answers[i].style.maxHeight != "4rem") ? "4rem" : "0rem"    
    answers[i].classList.toggle("answer-show")
    hr[i].style.opacity = (hr[i].style.opacity != "1") ? "1" : ".7"    
    questions[i].style.opacity = (questions[i].style.opacity != "1") ? "1" : ".7"    

    })
}



// let questions = $all(".question")
// let questionsPlus = $all(".question-plus")
// let answers = $all(".answer")

// for(let i=0; i<answers.length; i++){
//     questionsPlus[i].addEventListener("click", ()=>{
//         for(let j=0; j<answers.length; j++){
//             answers[j].classList.remove("answer-display")
//         }
//         answers[i].classList.toggle("answer-display")
//     })
// }


