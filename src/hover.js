var remou = document.getElementById("remou")
var sugar = document.getElementById("zucker")

var panels = [remou, sugar]
var pointer = document.getElementById("decision")
var siteState = {
    left: false,
    right: true
}
var addMouseEnter = (el) => {
    el.addEventListener("mouseenter",(el)=> {
        var current = el.toElement.id
        
        if (current == "remou" && siteState.left) {
            console.log("show", current)
            siteState.right = true
            siteState.left = false
            pointer.classList.add("left")
            pointer.classList.remove("right")
        } 

        if(current == "zucker" && siteState.right) {
            console.log("show", current)
            siteState.right = false
            siteState.left = true
            pointer.classList.add("right")
            pointer.classList.remove("left")

        }
    })
}

var addLinkFunction = (el) => {
    el.addEventListener("click", (el)=>{
        var current = el.toElement.id.split("T")[0]
        var link = document.getElementById("buy" + current)
        console.log("clicked",link)
        link.click()
    })
}

panels.forEach((el) => {
    addMouseEnter(el)
    addLinkFunction(el)
})
