 function delay() {
   await setTimeout(() => { console.log("async") }, 2000)
}

let demo = () => {
    console.log("this is before")
    delay()
    console.log("this is after")

}
demo()
