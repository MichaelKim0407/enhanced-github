(function ($, options) {
    function getVal($input) {
        if ($input.is('[type=checkbox]')) {
            return $input.prop('checked');
        } else {
            return $input.val();
        }
    }

    function setVal($input, val) {
        if ($input.is('[type=checkbox]')) {
            $input.prop('checked', val);
        } else {
            $input.val(val);
        }
    }

    $(function () {
        $('input').each(function (i, item) {
            var $item = $(item);
            var name = $item.attr('name');

            options.get([name], function (result) {
                setVal($item, result[name]);
            });

            $item.click(function () {
                var data = {};
                data[name] = getVal($item);
                options.set(data, function () {
                    options.get(null, function (result) {
                        console.log('Options updated:', result);
                    });
                });
            });
        });
    });
})(jQuery, chrome.storage.sync);
