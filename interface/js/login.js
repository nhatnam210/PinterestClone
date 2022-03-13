const grids = $('.grid');
const gridColumns = $('.column');
const headings = $('.heading .wrapper .text');

$(document).ready(function () {
    // ban đầu các elements (grid, columns, heading) đều bị ẩn
    function enterScreen(index) {
        const grid = grids[index];
        const heading = headings[index];

        //hiển thị nhóm grid hiện tại
        $(grid).addClass('active');

        //loại bỏ các hiệu ứng animate của columns (hiển thị)
        gridColumns.each(function () {
            $(this).removeClass('animate-slide-in animate-slide-out');
        });

        //loại bỏ các hiệu ứng animate của headings (hiển thị)
        $(heading).removeClass('animate-slide-in animate-slide-out');
    }

    function exitScreen(index, exitDelay) {
        const grid = grids[index];
        const heading = headings[index];

        //thêm hiệu ứng trượt ra cho các columns (ẩn đi)
        gridColumns.each(function () {
            $(this).addClass('animate-slide-out');
            // $(this).removeClass('animate-slide-in').addClass('animate-slide-out');
        });

        //ẩn nhóm grid hiện tại sau khoảng thời gian exitDelay
        setTimeout(() => {
            $(grid).removeClass('active');
        }, exitDelay);

        //thêm hiệu ứng trượt ra cho heading (ẩn đi)
        $(heading).addClass('animate-slide-out');
        // heading.classList.remove('animate-slide-in');
    }

    function setupAnimationCycle({ timeFreezePerScreen, exitDelay }) {
        const cycleTime = timeFreezePerScreen + exitDelay;
        let nextIndex = 0;

        function nextCycle() {
            const currentIndex = nextIndex;

            //hiển thị nhóm elements (grid, columns, heading) hiện tại
            enterScreen(currentIndex);

            //ẩn đi nhóm elements (grid, columns, heading) hiện tại
            setTimeout(
                () => exitScreen(currentIndex, exitDelay),
                timeFreezePerScreen,
            );

            nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1;
        }

        //khởi chạy chu kỳ lần đầu tiên
        nextCycle();

        //lặp lại chu kỳ
        setInterval(nextCycle, cycleTime);
    }

    setupAnimationCycle({
        timeFreezePerScreen: 3000, //ms
        exitDelay: 300 * 7, //ms
    });

    //Validate form
    (function () {
        'use strict';

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener(
                'submit',
                function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    form.classList.add('was-validated');
                },
                false,
            );
        });
    })();

    $('#menu-toggle').click(() => {
        $('#menu-toggle').toggleClass('active');
        $('nav').toggleClass('active');
    });

    // $('body').scroll(function () {
    //     var scroll = $(window).scrollTop();
    //     if (scroll >= 100) $('header').addClass('shadow-nav');
    //     else $('header').removeClass('shadow-nav');
    // });
});
