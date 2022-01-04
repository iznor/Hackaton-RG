$('#to-second').click(function () {
    first_click_count = 0;
    second_click_count = 0;
    third_click_count = 0;
    obj_three_click = 0;
    obj_two_click = 0;
    obj_one_click = 0;
    success_count = 0;
    ++level;

    $('#first-hint').text('אין כמו שיזוף טוב ביום קיץ חמים, לשמחתך המקום האידאלי לכך נמצא ממש מתחת לאף');
    $('#second-hint').text('"השארתי לך מפתח במקום הרגיל" אבא השאיר לך פתק והלך לבית קפה "חרצית"');
    $('#third-hint').text('כיף לך שאתה יכול להרשות לעצמך לאחסן את הסירה קרוב, ממש מתחת לבית. שיט נעים :)');


    $('.flip-card').on({
        mouseenter: function () {

            $(this).find('.flip-card-inner').css("transform", "rotateY(180deg)")


        },
        mouseleave: function () {
            $(this).find('.flip-card-inner').css("transform", "unset")
        }
    })

    $(this).css('display', 'none');
    $('.pic').css('background-image', 'url("../img/level-2.jpg")');
    $('#pic-h1').text("שלב 2");
    $('#obj-one').css('display', 'block')
        .css("margin", "296px 0px 0px 536px")
        .css("background-image", 'none')
        .css("background-size", 'unset')
        .css("width", "15px")
        .css("height", "16px")
        .css('cursor', 'default')
    $('#obj-two').css('display', 'block')
        .css("margin", "350px 0px 0px 194px")
        .css("background-image", 'none')
        .css("background-size", 'unset')
        .css("width", "30px")
        .css("height", "55px")
        .css('cursor', 'default')
    $('#obj-three').css('display', 'block')
        .css("margin", "165px 0px 0px 445px")
        .css("background-image", 'none')
        .css("background-size", 'unset')
        .css("width", "35px")
        .css("height", "16px")
        .css('cursor', 'default')

    $('.flip-card-inner div').removeClass('done')

    $('.flip-card p').css("display", "flex")

    $('.flip-card .flip-card-front').css("background-color", "#ff6600")
    $('.flip-card .flip-card-front h1').css("display", "flex")

    $('#obj-one').click(function () {
        if (!third_click_count) {
            $('#third').on({
                mouseenter: function () {

                    $(this).find('.flip-card-inner').css("transform", "unset")
                }
            })
            $(this).css("margin", "110px 200px 10px 665px")
            .css("background-image", 'url("../img/forbes.png")')
            .css("background-size", "cover")
            .css("height", "40px")
            .css("width", "95px")
        $(this).on({
                mouseenter: function () {
                    $(this).css("animation", "glow 1s infinite alternate")
                        .css("animation-duration", "0.4s")
                },
                mouseleave: function () {
                    $(this).css("animation", "none")
                }
            })
            $(this).css("cursor", "pointer");
            $('#third p').css("display", "none")
            $('#third .flip-card-inner').css("transform", "unset")
            $('#third .flip-card-front').css("background-color", "#182a9017")
            $('#third .flip-card-front h1').css("display", "none")
            $('#third .flip-card-inner').append('<div class="done"></div>')
            ++third_click_count;
            ++success_count;
            if (success_count == 3) {
                $('#endgame').text('לסיום')
                .css('display', 'flex');
                $('#pic-h1').text(".");
            }

        }
    })

    $('#obj-two').click(function () {
        if (!second_click_count) {
            $('#second').on({
                mouseenter: function () {

                    $(this).find('.flip-card-inner').css("transform", "unset")
                }
            })
            // globe
            $(this).css("margin", "330px 900px 10px 280px")
                .css("background-image", 'url("../img/green.png")')
                .css("background-size", "cover")
                .css("width", "150px")
                .css("height", "150px")
            $(this).on({
                mouseenter: function () {
                    $(this).css("animation", "glow 1s infinite alternate")
                        .css("animation-duration", "0.4s")
                },
                mouseleave: function () {
                    $(this).css("animation", "none")
                }
            })
            $(this).css("cursor", "pointer");
            $('#second p').css("display", "none")
            $('#second .flip-card-inner').css("transform", "unset")
            $('#second .flip-card-front').css("background-color", "#182a9017")
            $('#second .flip-card-front h1').css("display", "none")
            $('#second .flip-card-inner').append('<div class="done"></div>')
            ++second_click_count;
            ++success_count;
            if (success_count == 3) {
                $('#endgame').text('לסיום')
                .css('display', 'flex');
                $('#pic-h1').text(".");
            }

        }
    })

    $('#obj-three').click(function () {
        if (!first_click_count) {
            $('#first').on({
                mouseenter: function () {

                    $(this).find('.flip-card-inner').css("transform", "unset")
                }
            })
            $(this).css("margin", "85px 900px 10px 100px")
                .css("background-image", 'url("/./img/thief.png")')
                .css("background-size", "cover")
                .css("width", "120px")
                .css("height", "80px")
            $(this).on({
                mouseenter: function () {
                    $(this).css("animation", "glow 1s infinite alternate")
                        .css("animation-duration", "0.4s")
                },
                mouseleave: function () {
                    $(this).css("animation", "none")
                }
            })
            $(this).css("cursor", "pointer");
            $('#first p').css("display", "none")
            $('#first .flip-card-inner').css("transform", "unset")
            $('#first .flip-card-front').css("background-color", "#182a9017")
            $('#first .flip-card-front h1').css("display", "none")
            $('#first .flip-card-inner').append('<div class="done"></div>')
            ++first_click_count;
            ++success_count;
            if (success_count == 3) {
                $('#endgame').text('לסיום')
                .css('display', 'flex');
                $('#pic-h1').text(".");
            }

        }
    })
    $('#endgame').click(function () {
        window.open('../IEC/form.html', '_self');
        });



});