function onBallClick(elBall){
    const height = elBall.offsetHeight
    const width = elBall.offsetWidth
    elBall.style.height = `${height+50}px`
    elBall.style.width = `${width+50}px`   
    elBall.innerHTML = `${width+50}` 
}