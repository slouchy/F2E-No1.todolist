$(document).ready(function () {
    $(".tabs").click(function (e) {
        e.preventDefault();
        let tabIdx = $(this).index();

        $(this).siblings().removeClass("tabs__activate");
        $(this).addClass("tabs__activate");
        $(".main").fadeOut(400)
            .eq(tabIdx).delay(400).fadeIn();
    });
});;