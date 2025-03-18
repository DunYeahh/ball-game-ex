function onBallClick(elBall, maxDiameter){
    elBall.style.backgroundColor = `${getRandomColor()}`
    var height = elBall.offsetHeight
    var width = elBall.offsetWidth
    if (height >= maxDiameter){
        height = 100
        width = 100
        elBall.innerHTML = `${100}` 
        elBall.style.height = `${height}px`
        elBall.style.width = `${width}px`
        return   
    }
    var sizeAdd = getRandomInt(20, 61)
    elBall.style.height = `${height+sizeAdd}px`
    elBall.style.width = `${width+sizeAdd}px`   
    elBall.innerHTML = `${width+sizeAdd}` 
}