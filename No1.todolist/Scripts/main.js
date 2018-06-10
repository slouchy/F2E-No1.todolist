$(document).ready(function () {
    $(".tabs").click(function (e) {
        e.preventDefault();
        let tabIdx = $(this).index();

        $(this).siblings().removeClass("tabs__activate");
        $(this).addClass("tabs__activate");
        $(".main").fadeOut(400)
            .eq(tabIdx).delay(400).fadeIn();
    });

    $(".btn-highlight").click(function (e) {
        e.preventDefault();

        $(this)
            .find("span")
            .toggleClass("glyphicon-star")
            .toggleClass("glyphicon-star-empty")
            .toggleClass("task-list-button__highlight")
            .parents(".main-content-task-ul-item")
            .toggleClass("main-content-task-ul-item__highlight")
    });

    $("input[type='checkbox']").change(function (e) {
        e.preventDefault();

        if ($(this).is(":checked")) {
            $(this).parents(".main-content-task-ul-item").find(".task-list-txt").addClass("task-list-txt__completed");
        } else {
            $(this).parents(".main-content-task-ul-item").find(".task-list-txt").removeClass("task-list-txt__completed");
        }
    });
});;