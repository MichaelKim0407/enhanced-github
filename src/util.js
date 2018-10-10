(function (window, options) {
    if (window.enhancedGithubUtil)
        return;

    window.enhancedGithubUtil = {};

    (function (util) {
        function withOption(option, callback) {
            options.get([option], function (result) {
                if (!result[option])
                    return;
                callback();
            });
        }

        util.withOption = withOption;
    })(window.enhancedGithubUtil);

    (function (util) {
        function replace(s, from, to) {
            while (s.indexOf(from) !== -1)
                s = s.replace(from, to);
            return s;
        }

        class StringOp {
            constructor(s) {
                this.s = s;
            }

            get string() {
                return this.s;
            }

            replace(from, to) {
                this.s = replace(this.s, from, to);
                return this;
            }
        }

        util.string = {
            replace: replace,
            StringOp: StringOp,
        };
    })(window.enhancedGithubUtil);

})(window, chrome.storage.sync);
