function onBallClick(elBall){
    var height = elBall.offsetHeight
    var width = elBall.offsetWidth
    if (height >= 400){
        height = 50
        width = 50
    }
    elBall.style.height = `${height+50}px`
    
    elBall.style.width = `${width+50}px`   
    elBall.innerHTML = `${width+50}` 
}