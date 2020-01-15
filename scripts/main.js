document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "This iz chief inspector Clouseau speaking on the pheaun"

function reDisplay() {
    let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`

    let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} from the top of the display.`

    let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset
}
reDisplay()

document.getElementById("url").innerText = `This page's URL is ${document.URL}`

document.getElementById("title").innerText = `The title of this page is ${document.title}`

document.getElementById("modified").innerText = `This page was last updated on ${document.lastModified}`