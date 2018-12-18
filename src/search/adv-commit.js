(function ($, util) {

    const option = 'search-adv-commit';

    const guide = 'https://help.github.com/articles/searching-commits/';

    function createTextField({id, text, prefix}) {
        return `
<dl class="form-group flattened d-flex d-md-block flex-column">
    <dt>
        <label for="${id}">
            ${text}
        </label>
    </dt>
    <dd>
        <input id="${id}" type="text"
               class="form-control js-advanced-search-prefix"
               data-search-prefix="${prefix}:"
               data-search-type="Commits">
    </dd>
</dl>
`;
    }

    function createCheckbox({text, prefix}) {
        return `
<div class="form-checkbox">
    <label>
        <input type="checkbox" value="true"
               data-search-prefix="${prefix}:" class="js-advanced-search-prefix"
               data-search-type="Commits">
        ${text}
    </label>
</div>
`;
    }

    const fields = [
        {
            f: createTextField,
            id: 'search_author',
            text: 'Author username',
            prefix: 'author',
        },
        {
            f: createTextField,
            id: 'search_committer',
            text: 'Committer username',
            prefix: 'committer',
        },
        {
            f: createTextField,
            id: 'search_author_name',
            text: 'Author name',
            prefix: 'author-name',
        },
        {
            f: createTextField,
            id: 'search_committer_name',
            text: 'Committer name',
            prefix: 'committer-name',
        },
        {
            f: createTextField,
            id: 'search_author_email',
            text: 'Author email',
            prefix: 'author-email',
        },
        {
            f: createTextField,
            id: 'search_committer_email',
            text: 'Committer email',
            prefix: 'committer-email',
        },
        {
            f: createTextField,
            id: 'search_author_date',
            text: 'Author date',
            prefix: 'author-date',
        },
        {
            f: createTextField,
            id: 'search_committer_date',
            text: 'Committer date',
            prefix: 'committer-date',
        },
        {
            f: createCheckbox,
            text: 'Search merge commits',
            prefix: 'merge',
        },
        {
            f: createTextField,
            id: 'search_commit_hash',
            text: 'Commit hash',
            prefix: 'hash',
        },
    ];

    function createFieldSet(fields) {
        var fields_html = '';
        fields.forEach(function (field) {
            fields_html += field.f(field);
        });
        return `
<fieldset class="pb-3 mb-4 border-bottom min-width-0">
    <h3>Commit options <a href="${guide}" target="_blank">(Guide)</a></h3>
    ${fields_html}
</fieldset>
`;
    }

    $(function () {
        util.withOption(option, function () {
            $('div.advanced-search-form > fieldset:first').after(createFieldSet(fields));
        });
    });
})(jQuery, window.enhancedGithubUtil);
