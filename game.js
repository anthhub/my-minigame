import myImage from './utils/myImage'
const canvas = wx.createCanvas()//创建画布
const ctx = canvas.getContext('2d')//创建一个2d 画笔
const { windowWidth, windowHeight } = wx.getSystemInfoSync()
const bg = myImage('bg')
const dog = myImage('dog')
const food = myImage('food1')
let dX = windowWidth / 2 - 50;
let dY = windowHeight - 100;
let fX = windowWidth / 2 - 50;
let fY = 0;
function renderEach(x, y, x1, y1) {
    ctx.clearRect(0, 0, windowWidth, windowHeight)//清除整个画布
    ctx.drawImage(bg, 0, 0, windowWidth, windowHeight)//背景图
    ctx.drawImage(dog, x, y)//狗狗
    ctx.drawImage(food, x1, y1)//食物
}
function render() {
    renderEach(dX, dY, fX, fY++)
    requestAnimationFrame(render)//自动重绘
}

bg.onload = () => {
    render()
}
wx.onTouchMove((res) => {
    dX = res.changedTouches[0].clientX
    dY = res.changedTouches[0].clientY
})//狗狗跟随触摸点移动
