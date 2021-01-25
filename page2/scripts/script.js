
//burger
const burger = document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header__menu').classList.toggle('active')
    document.querySelector('.header__burger').classList.toggle('active')
});
//---------slider---------
$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: false,
        variableWidth: true,
        
    })
});
$(document).ready(function () { $('.slider').slick('setPosition') })




//-----regular-----

const regexp = /^[\+](375|80)?(25|33|44|29)([0-9]{3})([0-9]{2})([0-9]{2}$)/gim;
const input = document.querySelector('.footer__form input');
const btn = document.querySelector('.footerbtn');
const btn2 = document.querySelector('.selectbtn');
const modal = document.querySelector('.modal')
const site = document.querySelector('.site')
const modalbtn = document.querySelector('.modalbtn')
const loader = document.querySelector('.loader')
const modal2 = document.querySelector('.modal2')
const modal2btn = document.querySelector('.modal2btn')
const input2 = document.querySelector('.select__text input');


btn.addEventListener('click', () => {
    btn.setAttribute('disabled', true)
    btn.classList.add('disabled')
    site.classList.toggle('opas0')
    loader.classList.toggle('hide')
    if (check(input.value)) {
        setTimeout(showModal, 4000)
    } else {
        setTimeout(showModal2, 4000)
    }
})
function showModal() {
    btn.removeAttribute('disabled', true)
    btn.classList.remove('disabled')
    loader.classList.toggle('hide')
    modal.classList.add('modalShow')
    input.value = '+375'
}
function showModal2() {
    btn.removeAttribute('disabled', true)
    btn.classList.remove('disabled')
    loader.classList.toggle('hide')
    modal2.classList.add('modalShow')
}

btn2.addEventListener('click', () => {
    btn2.setAttribute('disabled', true)
    btn2.classList.add('disabled')
    site.classList.toggle('opas0')
    loader.classList.toggle('hide')
    if (check(input2.value)) {
        setTimeout(showModal2, 4000)
    } else {
        setTimeout(showModal22, 4000)
    }
})
function showModal2() {
    btn.removeAttribute('disabled', true)
    btn.classList.remove('disabled')
    loader.classList.toggle('hide')
    modal.classList.add('modalShow')
    input.value = '+375'
}
function showModal22() {
    btn2.removeAttribute('disabled', true)
    btn2.classList.remove('disabled')
    loader.classList.toggle('hide')
    modal2.classList.add('modalShow')
}
function check(y) {
    return regexp.test(y)
}

modalbtn.addEventListener('click', () => {
    modal.classList.toggle('modalShow')
    site.classList.toggle('opas0')
})
modal2btn.addEventListener('click', () => {
    modal2.classList.toggle('modalShow')
    site.classList.toggle('opas0')
})


let obj = {
    1: ['Валентин Сидоров 29 октября 2019', '“Комфортная машина по приемлемой цене”', 'Салон просторный и даже очень высокому человеку (рост сына 1,95) не приходится подпирать головой потолок. На водительском и пассажирском сидении очень много пространства. Но такое есть во многих машинах. А вот так, чтобы крупным людям было удобно сидеть сзади – это редкость. Сын садится на заднее сидение, совершенно не пригибаясь. Между его коленями и моим водительским сидением еще остается 7-8 см.', 'Читать  на autosport.ru'],
    2: ['Дмитрий Хабаровский 17 октября 2019', '“Хороший автомобиль для жизни”', 'Машина очень управляемая и отзывчивая, а благодаря небольшому радиусу разворота ещё и довольно маневренная. Мягкая подвеска, комфортная посадка, неожиданно удобные кресла, просторный салон, охлаждаемый бардачок, - все это в сумме складывается в положительную оценку машины. Есть ещё множество всяких мелочей типа датчиков света и дождя, обогрева зеркал и лобового стекла, которые реально облегчают жизнь.', 'Читать  на autosport.ru'],
    3: ['Дмитрий Тарасов 14 октября 2019', '“Лучше любой бюджетной иномарки”', 'Управляемость очень неплохая. Если бы не знал, что это Веста, подумал бы, что очень неплохая иномарка, немец или японец. Скорости даёт достаточно. Мне больше 130 ездить не приходилось, не люблю сильно разгоняться. Расход топлива нормальный.Не супер - экономия, но по городу и за городом ест не много.', 'Читать  на autosport.ru']
};

for (key in obj) {
    const block1 = document.querySelector('.review__block')
    const item = document.createElement('div')
    item.classList.add('review__item' + key)
    item.classList.add('review__item')
    block1.appendChild(item)
    const h6 = document.createElement('h6')
    h6.innerHTML = obj[key][0]
    item.appendChild(h6)
    const h3 = document.createElement('h3')
    h3.innerHTML = obj[key][1]
    item.appendChild(h3)
    const p = document.createElement('p')
    p.innerHTML = obj[key][2]
    item.appendChild(p)
    const a1 = document.createElement('a')
    a1.innerHTML = obj[key][3]
    a1.setAttribute('href', '#')
    item.appendChild(a1)
}
// for (let i = 0; i < obj[key].length; i++) {
//     console.log(obj[key][1])    
// }


