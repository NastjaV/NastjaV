// Theme

let bodyEl = document.querySelector('body'),
    themeBtn = document.querySelector('.theme')

themeBtn.addEventListener('click', e => {

    if(bodyEl.classList.contains('light')) {
        bodyEl.classList.remove('light')
        bodyEl.classList.add('dark')
        themeBtn.innerHTML = 'Светлая тема'
    } else {
        bodyEl.classList.remove('dark')
        bodyEl.classList.add('light')
        themeBtn.innerHTML = 'Тёмная тема'
    }
})


// Slider

let slider = document.querySelector('.slider'),
    arrowLeft = slider.querySelector('.arrowLeft'),
    arrowRight = slider.querySelector('.arrowRight'),
    content = slider.querySelector('.sliderContent'),
    items = content.querySelectorAll('.sliderItem')

let width = items[0].clientWidth,
    firstSlide = 0,
    lastSlide = -(width * (items.length - 1)),
    moving = false


arrowLeft.addEventListener('click', e => {

    if(moving) {
        return false
    }

    let st = content.currentStyle || window.getComputedStyle(content),
        ml = parseInt(st.marginLeft)

    if(ml === 0) {
        ml = lastSlide
    } else {
        ml += width
    }

    content.style.marginLeft = ml + 'px'

    moving = true

    setTimeout(() => {
        moving = false
    }, 1000/3)
})

arrowRight.addEventListener('click', e => {

    if(moving) {
        return false
    }

    let st = content.currentStyle || window.getComputedStyle(content),
        ml = parseInt(st.marginLeft)

    if(ml === lastSlide) {
        ml = firstSlide
    } else {
        ml -= width
    }

    content.style.marginLeft = ml + 'px'

    moving = true

    setTimeout(() => {
        moving = false
    }, 1000/3)
})

// popup

let aboutBtn = document.querySelector('.author'),
    popupEl = document.querySelector('.popup'),
    closeEls = document.querySelectorAll('.close')


aboutBtn.addEventListener('click', e => {
    popupEl.classList.add('open')
    setTimeout(() => {
        popupEl.classList.add('show')
    }, 50)
})

closeEls.forEach((el) => {
    el.addEventListener('click', e => {
        popupEl.classList.remove('show')
        setTimeout(() => {
            popupEl.classList.remove('open')
        }, 300)
    })
})


// percents

let percBtn = document.querySelector('.percents'),
    percentContainer = document.querySelector('.percentContainer'),
    circles = document.querySelectorAll('.cont')

function setPercent(el, percent) {

    let circle = el.querySelector('.bar'),
        r = circle.getAttribute('r'),
        c = Math.PI*(r*2)

    circle.style.strokeDashoffset = ((100 - percent) / 100) * c
    el.dataset.pct = percent
}

circles.forEach( (el) => {
    setPercent(el, 0)
})

percBtn.addEventListener('click', e => {

    if(percentContainer.classList.contains('open')) {

        percentContainer.classList.remove('open')
        percBtn.innerHTML = 'Показать'

        for(let i = 0; i < circles.length; i++) {
            setPercent(circles[i], 0)
        }

    } else {

        percentContainer.classList.add('open')
        percBtn.innerHTML = 'Скрыть'

        setTimeout(() => {

            const percents = [85, 66, 23]

            for(let i = 0; i < circles.length; i++) {

                setTimeout(() => {

                    setPercent(circles[i], percents[i])

                }, 300 * (i+1))
            }


        }, 300)
    }
})







