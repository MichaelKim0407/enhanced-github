(function ($, util) {
    const option = 'gh-refresh';

    var url = null;

    function refresh() {
        if (url !== null && url !== window.location.href) {
            console.log('Refreshing page...');
            window.location.reload(true);
        }
        url = window.location.href;
    }

    $(function () {
        util.withOption(option, function () {
            setInterval(refresh, 100);
        });
    });
})(window.jQuery, window.enhancedGithubUtil);
