
//TODO -למצוא אופציה טובה יותר מלהקשיב ל event עושה הרבה בעיות 
document.addEventListener("DOMContentLoaded", () => {
    setFontSize()
    window.onresize = setFontSize;
    window.addEventListener("data-change", () => {
        setTimeout(() => {
            setFontSize()
        }, 600);
    })
})

function setFontSize() {
    const dataLabel = document.querySelector("g[ngx-charts-series-horizontal]")
    const bar = dataLabel.querySelector("g[ngx-charts-bar]")
    const height = bar.getBoundingClientRect().height
    const dataLabels = document.querySelectorAll(".textDataLabel")
    for (let i = 0; i < dataLabels.length; i++) {
        const element = dataLabels[i]
        element.style.fontSize = height < 20 ? height -3 : 15
    }
}

