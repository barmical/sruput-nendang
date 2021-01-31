function pageScroll(target, duration){
    var target  = document.querySelector(target)
    var targetPosition = target.getBoundingClientRect().top
    var startPosition = window.pageYOffset
    var distance = targetPosition - startPosition
    var startTime = null

    function animation(currentTime){
        if(startTime === null) startTime = currentTime
        var timeElapsed = currentTime - startTime
        var run = easeLinear(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if(timeElapsed < duration) requestAnimationFrame(animation)
    }

    function easeLinear (t, b, c, d) {
    return c * t / d + b;
    }

    requestAnimationFrame(animation)
}

var navbar1 = document.querySelector('.home')

navbar1.addEventListener('click', function(){
    pageScroll('.head', 1000)
})

var navbar2 = document.querySelector('.profile')

navbar2.addEventListener('click', function(){
    pageScroll('.container-profile', 500)
})

var navbar3 = document.querySelector('.podcast')

navbar3.addEventListener('click', function(){
    pageScroll('.container-season', 1000)
})

var navbar4 = document.querySelector('.contact')

navbar4.addEventListener('click', function(){
    pageScroll('.footer', 1000)
})