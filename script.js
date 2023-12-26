
// foote collapse function

$(".add").click(function () {
    $(this).next('.footer-lists').slideToggle(700)
    $('.footer-lists').not($(this).next('.footer-lists')).slideUp(1000);


    if ($(this)[0].innerText == "add") {
        $(this).text("remove");
    }
    else {
        $(this).text("add")
    }
})


