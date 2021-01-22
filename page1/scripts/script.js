const burger = document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header__menu').classList.toggle('active')
    document.querySelector('.header__burger').classList.toggle('active')
})

// ---------slider---------
$(document).ready(function () {
    $('.slider').slick({

        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,

        autoplay: false,
        infinite: false,
        initialSlide: 2,
        autoplaySpeed: 5000,
        waitForAnimate: true,
        centerMode: true,
        variableWidth: true,
    });
});

let obj = {
    h6: ['Валентин Сидоров<br> 29 октября 2019', 'Дмитрий Хабаровский<br> 17 октября 2019', 'Дмитрий Тарасов<br> 14 октября 2019'],
    h3: ['“Комфортная машина<br> по приемлемой цене”', '“Хороший автомобиль для<br> жизни”', '“Лучше любой бюджетной<br> иномарки”'],
    p: ['Салон просторный и даже очень высокому человеку (рост сына 1,95) не приходится подпирать головой потолок. На водительском и пассажирском сидении очень много пространства. Но такое есть во многих машинах. А вот так, чтобы крупным людям было удобно сидеть сзади – это редкость. Сын садится на заднее сидение, совершенно не пригибаясь. Между его коленями и моим водительским сидением еще остается 7-8 см.',
        'Машина очень управляемая и отзывчивая, а благодаря небольшому радиусу разворота ещё и довольно маневренная. Мягкая подвеска, комфортная посадка, неожиданно удобные кресла, просторный салон, охлаждаемый бардачок, - все это в сумме складывается в положительную оценку машины. Есть ещё множество всяких мелочей типа датчиков света и дождя, обогрева зеркал и лобового стекла, которые реально облегчают жизнь.',
        'Управляемость очень неплохая. Если бы не знал, что это Веста, подумал бы, что очень неплохая иномарка, немец или японец. Скорости даёт достаточно. Мне больше 130 ездить не приходилось, не люблю сильно разгоняться. Расход топлива нормальный.Не супер - экономия, но по городу и за городом ест не много.'],
    a: 'Читать  на autosport.ru'
}
function creatBlock(a) {
    const block1 = document.querySelector('.review__block')
    const item = document.createElement('div')
    item.classList.add('review__item' + a)
    item.classList.add('review__item')
    block1.appendChild(item)    
    const h6 = document.createElement('h6')    
    h6.innerHTML = obj.h6[a]
    item.appendChild(h6)
    const h3 = document.createElement('h3')
    h3.innerHTML = obj.h3[a]
    item.appendChild(h3)
    const p = document.createElement('p')
    p.innerHTML = obj.p[a]
    item.appendChild(p)
    const a1 = document.createElement('a')
    a1.innerHTML = obj.a
    a1.setAttribute('href','#')
    item.appendChild(a1)
}
creatBlock(0)
creatBlock(1)
creatBlock(2)


//-----regular-----

const regexp = /^(375|80)?(25|33|44|29)([0-9]{3})([0-9]{2})([0-9]{2}$)/gim;
const input = document.querySelector('.footer__form input');
const btn = document.querySelector('.footerbtn');
const modal = document.querySelector('.modal')
const site = document.querySelector('.site')
const modalbtn = document.querySelector('.modalbtn')
let inVal = input.value


function check() {
    input.value = '375'
    return regexp.test(inVal)
    
}
function btnReset() {
    btn.innerHTML = 'Отправить'
    btn.style.background = '#e67e22'
    btn.style.transform = `scale(1 ,1)`
}

input.addEventListener('mouseout',function inpaCheck(){
    inVal = input.value
})

btn.addEventListener('click', () => {
    
    if (!check()) {
        btn.innerHTML = 'ОШИБКА'
        btn.style.background = 'red'
        setTimeout(btnReset, 1500)
        btn.style.transform = `scale(1.2 ,1.2)`
    } else {
        modal.style.display = 'flex'
        modal.style.opacity = '1'
        site.style.opacity ='0.2'
    }
    
})
modalbtn.addEventListener('click', () => {
    site.style.opacity = '1'
    modal.style.display = 'none'
})
