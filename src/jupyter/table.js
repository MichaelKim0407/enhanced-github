(function ($, util) {
    const option = 'jp-tables';
    const tags = ['tr', 'th', 'td'];

    var replacement = {};
    for (var i in tags) {
        var tag = tags[i];
        replacement['&lt;' + tag + '&gt;'] = '<' + tag + '>';
        replacement['&lt;/' + tag + '&gt;'] = '</' + tag + '>';
    }

    function formatTable($table) {
        var text = $table.text();
        var found = false;
        for (var from in replacement) {
            if (text.indexOf(replacement[from]) !== -1) {
                found = true;
                break;
            }
        }
        if (!found)
            return;

        var html = new util.string.StringOp($table.html());
        for (var from in replacement) {
            html.replace(from, replacement[from]);
        }
        $table.html(html.string);

        var outId = $table.parent().parent().siblings('div.prompt.output_prompt').html();
        return outId;
    }

    function formatTables() {
        $('table').each(function (i, item) {
            var outId = formatTable($(item));
            if (outId)
                console.log('Table fixed:', outId, item);
        });
    }

    $(function () {
        util.withOption(option, function () {
            setInterval(formatTables, 1000);
        });
    });
})(jQuery, window.enhancedGithubUtil);
