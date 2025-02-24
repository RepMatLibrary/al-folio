$(document).ready(function() {
    // Click on .abstract link
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    });

    // Click on .bibtex link
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });

    // Click on .details link (same behavior as .abstract)
    $('a.details').click(function() {
        $(this).parent().parent().find(".details.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open'); // Close bibtex if open
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open'); // Close abstract if open
    });

    // Remove waves-effect and waves-light classes
    $('a').removeClass('waves-effect waves-light');
});
