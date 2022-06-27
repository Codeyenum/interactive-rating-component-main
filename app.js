const form = document.querySelector(".feedback_form")
let ratingSpan = document.querySelector(".rating_dialogue > span")
let ratingState = document.querySelector(".rating_state")
let thankState = document.querySelector(".thanks_state")


form.addEventListener("submit", (e) => {
   e.preventDefault()
   let feedbackValue = document.querySelector('input[name="feedback"]:checked');
   ratingSpan.innerText = `${feedbackValue.value}`
   ratingState.classList.remove("show")
   ratingState.classList.add("hide")
   thankState.classList.remove("hide")
   thankState.classList.add("show")

})