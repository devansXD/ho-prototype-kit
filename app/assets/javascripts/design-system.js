$(document).ready(function() {
    $('.ds-example__tabs').each(function() {
        $('a', this).click(function(e) {
            e.preventDefault()
            var target = $(this).attr('href')
            $('.ds-example__tabs-container').removeClass('selected')
            $(target).addClass('selected')
        })
    })
});