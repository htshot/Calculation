class Calculator{
    $previousPreview
    $currentPreview

    constructor($previousPreview, $currentPreview ){
        this.$previousPreview = $previousPreview
        this.$currentPreview = $currentPreview
    }

    onPressNumber(number) {
        // TODO: 벨리데이션 
        this.$currentPreview.textContent += number
    }
}



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
        cal.onPressNumber(e.target.textContent);
    })
})

$operations.forEach(($operation)=>{
    $operation.addEventListener("click", (e)=>{
        cal.onPressNumber(cal.e.target.textContent);
    })
})



const cal = new Calculator($previousPreview,$currentPreview);