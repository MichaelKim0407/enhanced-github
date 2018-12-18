(function ($, util) {
    const option = 'jp-view-btn';

    function getUrl() {
        var $iframe = $('.file iframe.render-viewer');
        return $iframe.attr('src');
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
                '#raw-url',
            );
        });
    });
})(jQuery, window.enhancedGithubUtil);
