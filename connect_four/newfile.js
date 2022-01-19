const v = 67;
var t = 99;
const newFun = () => {
    console.log(this === window)
}
newFun()

function row() {
    console.log(this === window)
}
row()