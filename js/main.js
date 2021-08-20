$(document).ready(function () {
    var currentFloor = 2; // По умолчанию отсчет текущего этажа (переменная в которой хранится текущий этаж)
    var floorPath =  $(".home-image path"); // Каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); // Кнопка вверх (отслеживаем клик по этой кнопке)
    var counterDown = $(".counter-down"); // Кнопка вниз (отслеживаем клик по этой кнопке)
    var modal = $('.modal');
    var modalClouseButton = $('.modal-clouse-button'); // Помещаем кнопку в переменную
    var viewFlatsButton = $(".view-flats"); // Кнопка для проссмотра этажей
    // Класс в котором лежат изображения выделения этажей
    
    // Функция при наведении мышью на этаж
        floorPath.on("mouseover", function() {
            floorPath.removeClass("current-floor") // Удаляем активный класс у этажей
            currentFloor = $(this).attr("data-floor"); // Получаение значеине текущего этажа
            $(".counter").text(currentFloor); // Записываем значение этажа в счетчик справа
    });
    // При клике на floorPath модальному окну будет присваиваться класс is-open
    floorPath.on('click', toggleModal);
    
    // При клике на modalClouseButton модальному окну будет присваиваться класс is-open 
    modalClouseButton.on('click', toggleModal);

    viewFlatsButton.on('click', toggleModal);


    // Действие по кнопке вверх
    counterUp.on("click", function () { // Отслеживаем клик по кнопке вверх
        if (currentFloor < 18) { // Проверяем значение этажа, не должна быть больше 18
            currentFloor++; // Увеличиваем этаж на 1
            // Применяем форматирование к числовому значению currentFloor++
            // Форматируем переменную с этажом, чтобы было 02, а не 2
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping: false})
            $(".counter").text(usCurrentFloor); // Записываем значение этажа в счетчик справа
            floorPath.removeClass("current-floor"); //Elfkztv frnbdysq rkfcc e 'nf;tq
            // Чтобы подставить значение надо использовать в кавычках обратную тильду
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // Подсвечиваем текущий этаж
            
        } 
    });

    // Действие по кнопке вниз
    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--; // Уменьшаем этаж на 1
            // Применяем форматирование к числовому значению currentFloor++
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping: false})
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            // Чтобы подставить значение надо использовать в кавычках обратную тильду
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
            
        } 
    });
    // Функция открыть-закрыть окно
    function toggleModal() { 
            modal.toggleClass("is-open");
    }

});