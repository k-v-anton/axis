$(document).ready(function(){
    $('.slaider').slick({
        arrows: false,
        dots: true, 
        slidesToShow: 3,
        responsive:[ 
            {
                breakpoint:600,
                settings: {
                    slidesToShow: 1,
                }
            },
            
        ]
    });

});



// $(document).ready(function(){
//     $('.slaider').slick({
//         arrows: false, //стрелки навигации
//         dots: true, // точки навигации
//         adaptiveHeight: true, //автоматическая адаптивная высота слайдера
//         slidesToShow: 3, // количество слайдов отображаемых за раз
//         slidesToScroll: 1, //колво слайдов пролистываемых за одно нажатие стрелки или кнопки
//         speed: 1000, // скорость пролистывания слайдов
//         easing: 'ease', //  тип анимации при смене слайда
//         infinite: true, // бесконечный слайдер или нет
//         initialSlide: 0, // указывает стартовый слайд
//         autoplay: false, //автоматическое проигрывание слайдов
//         autoplaySpeed: 0, // время автосмены слайдов
//         pauseOnFocus: false, // пауза при нажатии на слайд
//         pauseOnHover: false, // пауза при наведении на слайд
//         pauseOnDotsHover: false, // пауза при наведении на точки
//         draggable: true, // возможность управления слайдами мышью на пк
//         swipe: true, // возможность управления слайдами на мобильных устройствах
//         waitForAnimate: true, // переход на следующий слайд после завершения анимации
//         centerMode: false, // дает возможность задать доп свойства центральному слайду
//         wariableWidth: true, // автоматический адаптивный слайдер, выключает ширину контейнера
//         rows: 1, // указывает количество рядов в слайде
//         slidesPerRow: 1, //указывает количество колонок в слайде
//         vertical: false, // включает вертикальный слайдер
//         verticalSwiping: false, //вертикальная прокрутка
//         asNavFor: '', //связывает два слайдера, в ковычках имя второго слайда. Во втором слайде все наоборот
//         responsive:[ 
//             {
//                 breakpoint:1024,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             },  
//             {
//                 breakpoint:600,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             },
            
//         ]  // при заданном брейкпоинте позволяет менять свойства слайдера
//     });

// });
