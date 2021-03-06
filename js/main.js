//<<<<<<<<<<<<<< ИЗМЕНЯЕМ ЧЕРЕЗ JAVASCRIPT >>>>>>>>>>>>

// 1. Подключите jQuery, убедитесь в доступности объекта -библиотеки. Примечание:
// попробуйте подключение с разных CDN-хранилищ, и при помощи локального
// файла
// 2. Выберите при помощи селекторов jQuery
// — все HTML-элементы strong и окрасьте их в зеленый цвет

// — найдите все HTML-элементы em и добавьте им класс .selected
// — Найдите все элементы mark, которые находятся в div с классом row и задайте им
// класс .selected
// — Найдите все гиперссылки и удалите у них подчеркивания
// — Переключите элементы strong с классом some в состояние без этого класса, а
// тем элементам (strong), у которых небыло этого класса — добавьте.
// — среди набора элементов с классом .row удалите класс у второго элемента
// — прочитайте CSS-свойство color у второй гиперсылки в тексте

$('document').ready(function(){

// все HTML-элементы strong и окрасьте их в зеленый цвет

let elemByTagname = $('strong');
elemByTagname.css('color', 'green');

// найдите все HTML-элементы em и добавьте им класс .selected

$('em').addClass('selected')

// Найдите все элементы mark, которые находятся в div с классом row и задайте им класс .selected

$('.row mark').addClass('selected')


// Найдите все гиперссылки и удалите у них подчеркивания

$('a').css('text-decoration', 'none')


// Переключите элементы strong с классом some в состояние без этого класса, а тем элементам (strong), у которых небыло этого класса — добавьте.

$('strong').toggleClass('some')

$('strong:eq(2)').removeAttr('class')

//среди набора элементов с классом .row удалите класс у второго элемента

$('.row:eq(1)').removeClass('row')

// прочитайте CSS-свойство color у второй гиперсылки в тексте

console.log($('a:eq(1)').css('color'))

})