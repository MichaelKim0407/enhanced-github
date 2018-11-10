(function ($, util) {
    const option = 'html-view-btn';

    function getUrl() {
        return "http://htmlpreview.github.io/?" + window.location;
    }

    function createViewBtn(url) {
        var a = document.createElement('a');
        a.href = url;
        a.className = 'btn btn-sm BtnGroup-item';
        a.innerHTML = 'View';
        return a;
    }

    $(function () {
        util.withOption(option, function () {
            util.addActionButton(
                createViewBtn(getUrl()),
                '#raw-url'
            );
        });
    });
})(jQuery, window.enhancedGithubUtil);
