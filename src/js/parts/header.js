export class Header {
    init() {
        this.HeaderHover();
    }

    HeaderHover() {
        $(document).ready(function () {

            function handleWindowResizeDeskSize() {
                var windowWidth = $(window).width();
                if (windowWidth >= 992) {
                    $('.menu-item').each(function () {
                        if ($(this).children(".sub-menu").length === 0) {
                            return;
                        } else {
                            $(this).hover(function () {
                                $(this).addClass('menu-active');
                                $('html').addClass('overflow-hidden');
                            }, function () {
                                $(this).removeClass('menu-active');
                                $('html').removeClass('overflow-hidden');
                            });
                        }
                    });
                }
            }
            handleWindowResizeDeskSize();
            $(window).resize(handleWindowResizeDeskSize);
        });
    }
}