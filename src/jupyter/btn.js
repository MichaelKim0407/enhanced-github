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

    function addViewBtn(url) {
        var $btnGroup = $('.file .file-header .file-actions .BtnGroup');
        var $rawUrlBtn = $btnGroup.find('#raw-url');
        var a = createViewBtn(url);
        $(a).insertAfter($rawUrlBtn);
    }

    $(function () {
        util.withOption(option, function () {
            addViewBtn(getUrl());
        });
    });
})(jQuery, window.enhancedGithubUtil);
