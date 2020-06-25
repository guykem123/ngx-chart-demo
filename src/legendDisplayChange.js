let longPressRigth;
let longPressLeft;
let canScrollObj
document.addEventListener("DOMContentLoaded", () => {
    const ngxChartDivParents = document.querySelectorAll(".ngx-charts-outer")
    ngxChartDivParents.forEach(ngxChartDivParent => {
        ngxChartDivParent.style.display = "grid"
    });
    const legendsContainers = document.querySelectorAll("ngx-charts-legend")
    for (let i = 0; i < legendsContainers.length; i++) {
        const legendsContainer = legendsContainers[i];
        const legendParent = legendsContainer.querySelector("div.legend-wrap")
        const legendHeader = legendsContainer.querySelector("header")

        const btnLeft = document.createElement("i")
        btnLeft.classList.add("scroll-btn", "fas", "fa-angle-left")
        btnLeft.addEventListener("mousedown", mouseDownLeft);
        btnLeft.addEventListener("mouseup", mouseUpLeft)

        const btnRight = document.createElement("i")
        btnRight.classList.add("scroll-btn", "fas", "fa-angle-right")
        btnRight.addEventListener("mousedown", mouseDownRight);
        btnRight.addEventListener("mouseup", mouseUpRight)

        legendHeader.style.display = "none"
        legendsContainer.style.order = -1
        legendParent.style.display = "flex"
        legendParent.style["flex-direction"] = "row"

        legendParent.appendChild(btnLeft)
        legendParent.appendChild(btnRight)
    }
})

function clickLegend(e) {
    if (canScrollObj?.isScrollable) {
        canScrollObj = {}
        console.log("up")
    } else {
        canScrollObj = {
            isScrollable: true,
            element: e.target
        }
    }
}

function mouseMoveLegend(e) {
    if (canScrollObj?.isScrollable && canScrollObj?.element === e.target) {
        const scrollerListElemt = e.target.parentElement.querySelector("ul.legend-labels")
        if (canScrollObj.lastOffsetX) {
            scrollerListElemt.scrollLeft += (e.offsetX - canScrollObj.lastOffsetX)
            canScrollObj.lastOffsetX = e.offsetX
        }
        canScrollObj.lastOffsetX = e.offsetX
    }
}


//left actions
function mouseUpLeft() {
    clearInterval(longPressLeft)
}
function mouseDownLeft(e) {
    const scrollerListElemt = e.target.parentElement.querySelector("ul.legend-labels")
    longPressLeft = setInterval(() => { moveLeft(scrollerListElemt) }, 20)
}

//right actions
function mouseUpRight() {
    clearInterval(longPressRigth)
}
function mouseDownRight(e) {
    const scrollerListElemt = e.target.parentElement.querySelector("ul.legend-labels")
    longPressRigth = setInterval(() => { moveRight(scrollerListElemt) }, 20)
}

function moveLeft(scrollList) {
    scrollList.scrollLeft -= 10
}

function moveRight(scrollList) {
    scrollList.scrollLeft += 10
}