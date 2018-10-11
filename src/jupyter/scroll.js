(function ($, util) {
    const option = 'jp-scroll';

    $(function () {
        util.withOption(option, function () {
            $('body').addClass('jp-scroll');
        });
    });
})(jQuery, window.enhancedGithubUtil);
