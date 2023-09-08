class Calculator{

}

const cal = new Calculator();
// 값 표시
const $previousPreview = document.querySelector("[data-previous-preview]");
const $currentPreview = document.querySelector("[data-previous-current]");

// 사칙연산
const $plus= document.querySelector("[data-btn-plus]");
const $minus = document.querySelector("[data-btn-minus]");
const $divide = document.querySelector("[data-btn-divide]");
const $multiply = document.querySelector("[data-btn-multiply]");

// 숫자, 연산
const $numbers = document.querySelectorAll('[data-btn-Number]')
const $operations = document.querySelectorAll('[data-btn-operation]')

$numbers.forEach(($number)=>{
    $number.addEventListener("click", (e)=>{
        console.log(e.target.textContent)
    })
})

$operations.forEach(($operation)=>{
    $operation.addEventListener("click", (e)=>{
        console.log(e.target.textContent)
    })
})