document.addEventListener("DOMContentLoaded", () => {
    setDataLabelInnerHtml()
    setFontSize()
    window.onresize = setFontSize;
})

function setFontSize() {
    const dataLabel = document.querySelector("g[ngx-charts-series-horizontal]")
    const bar = dataLabel.querySelector("g[ngx-charts-bar]")
    const height = bar.getAttribute("ng-reflect-height")
    const dataLabels = document.querySelectorAll(".textDataLabel")
    for (let i = 0; i < dataLabels.length; i++) {
        const element = dataLabels[i]
        element.style.fontSize = height > 20 ? height > 40 ? height > 60 ? height / 4
            : height / 3
            : height / 2
            : height / 1.5
    }
}
function setDataLabelInnerHtml() {
    const dataLabels = document.querySelectorAll(".textDataLabel")
    for (let i = 0; i < dataLabels.length; i++) {
        const element = dataLabels[i]
        element.innerHTML = element.innerHTML + "&nbsp;"
    }
}
