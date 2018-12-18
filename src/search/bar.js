(function ($, util) {
    const option = 'search-bar-adv';

    function createAdvLink() {
        var a = document.createElement('a');
        a.href = '/search/advanced';
        a.className = 'adv';
        a.innerHTML = 'adv';
        return a;
    }

    function addAdvLink() {
        var $label = $('form.js-site-search-form > label');
        $label.children('img').after(createAdvLink());
    }

    $(function () {
        util.withOption(option, addAdvLink);
    });
})(jQuery, window.enhancedGithubUtil);
