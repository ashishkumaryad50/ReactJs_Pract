const newFun = () => {
    console.log(this)
}
newFun

function row() {
    console.log(this)
}
row()