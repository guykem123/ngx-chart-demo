document.addEventListener("DOMContentLoaded", () => {
    setFontSize()
    window.onresize = setFontSize;
})

function setFontSize() {
    const dataLabel = document.querySelector("g[ngx-charts-series-horizontal]")
    const bar = dataLabel.querySelector("g[ngx-charts-bar]")
    const height = bar.getBoundingClientRect().height
    const dataLabels = document.querySelectorAll(".textDataLabel")
    for (let i = 0; i < dataLabels.length; i++) {
        const element = dataLabels[i]
        element.style.fontSize = height - 5
        console.log(height)
    }
}
