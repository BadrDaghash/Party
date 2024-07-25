
// ! Header 
$(".headerMenu").click(function () {
    $(".sliderMenu").toggleClass("active");
});
$(".closeBtn").click(function () {
    console.log("hi");
    $(".sliderMenu").animate({width:'0px'},200);
})
//!scroll behavior
$(".menuSection a").click(function (e) {
   let ancorClicked =  $(e.target).attr("href")
   let ancorOffset = $(ancorClicked).offset().top
   $("html,body").animate({scrollTop:ancorOffset},200)
   console.log(ancorOffset);
})

// ! SINGERS 
$(".inner-two").hide()
$(".inner-three").hide()
$(".inner-Four").hide()

$(".singerOne").click(function () {
    $(".inner-first").slideToggle(500);
    $(".inner-two, .inner-three, .inner-Four").slideUp(500)
});
$(".singerTwo").click(function () {
    $(".inner-two").slideToggle(500);
    $(".inner-first, .inner-three, .inner-Four").slideUp(500)
});
$(".singerThree").click(function () {
    $(".inner-three").slideToggle(500);
    $(".inner-first, .inner-two, .inner-Four").slideUp(500)
});
$(".singerFour").click(function () {
    $(".inner-Four").slideToggle(500);
    $(".inner-first, .inner-two, .inner-three").slideUp(500)
});

// ! CountDown 
let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime()
let counter = setInterval(function () {

    dateNow = new Date().getTime()

    let dateDiff = countDownDate - dateNow

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let mins = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let secs = Math.floor(dateDiff % (1000 * 60) / (1000));

    document.querySelector(".Day").innerHTML = `${days} D `;
    document.querySelector(".hours").innerHTML = `${hours} h`;
    document.querySelector(".mins").innerHTML = `${mins} m`;
    document.querySelector(".secs").innerHTML = `${secs} s`

}, 1000)

//! remaining words 
let maxLenght = 100
$("#textArea").keyup(function () {
    let currentLength = $(this).val().length;
    let remainingLenght = maxLenght - currentLength
    if (remainingLenght < 0) {
        $(".maxLenght").text(`your available character finished`)
    } else {
        $(".maxLenght").text(`${remainingLenght}`)
    }
})
