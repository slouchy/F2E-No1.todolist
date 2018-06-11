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
                .toggleClass("main-content-task-ul-item__highlight");

        if ($(this).parents(".main-content-task-ul-item").hasClass("main-content-task-ul-item__highlight")) {
            $(this).parents("ul").prepend($(this).parents(".main-content-task-ul-item"));
        }

        // Do Save orders
    });

    $("input[type='checkbox']").change(function (e) {
        e.preventDefault();

        if ($(this).is(":checked")) {
            $(this).parents(".main-content-task-ul-item").find(".task-list-txt").addClass("task-list-txt__completed");
        } else {
            $(this).parents(".main-content-task-ul-item").find(".task-list-txt").removeClass("task-list-txt__completed");
        }

        let taskLeftCount = $(this).parents("ul").find("input[type='checkbox']").not(":checked").length;
        let taskCompletedCount = $(this).parents("ul").find("input[type='checkbox']:checked").length;
        $(this).parents(".main").find(".main-content-remark-count").html(taskLeftCount);
        $(this).parents(".main").find(".main-content-remark-count-completed").html(taskCompletedCount);
        
        // Do Save task Status
    });


    $(".input-group-txt").focus(function (e) {
        e.preventDefault();

        $(".input-group-detail").slideDown();
    });

    $(".input-group-detail-btn").click(function (e) {
        e.preventDefault();
        $(".input-group-detail").fadeOut();
    });

    $(".btn-edit").click(function (e) {
        e.preventDefault();
        $(".edit-detail").fadeOut().remove(".edit-detail");
        $(".task-list-button__edit").removeClass("task-list-button__edit");
        $(this).addClass("task-list-button__edit");
        $(this).parents(".main-content-task-ul-item")
            .append(GetEditTaskHTML($(this).attr("data-id")))
            .find(".edit-detail .input-group-detail").slideDown();
        $(this).parents(".main-content-task-ul-item").find(".input-group-detail-btn__cancel").click(function (e2) {
            e2.preventDefault();
            $(".task-list-button__edit").removeClass("task-list-button__edit");
            $(".input-group-detail").fadeOut();
        })
        $(this).parents(".main-content-task-ul-item").find(".input-group-detail-btn__save").click(function (e2) {
            e2.preventDefault();
            $(".task-list-button__edit").removeClass("task-list-button__edit");
            $(".input-group-detail").fadeOut();
            // Do save task edit
        })
    });
});

function GetEditTaskHTML(taskID) {
    let editHTML = `<div class='edit-detail'>
        <div class ="input-group-detail">
            <div class ="row">
                <div class ="col-xs-1"></div>
                <div class ="col-xs-11">
                    <span class ="glyphicon glyphicon-calendar">&nbsp;</span>
                    <span class ="input-group-detail-title">Deadline</span>
                </div>
            </div>
            <div class ="row">
                <div class ="col-xs-2"></div>
                <div class ="col-xs-5">
                    <input type="date" class ="form-control input-group-detail-txt-date" placeholder="yyyy/MM/dd" />
                </div>
                <div class ="col-xs-4">
                    <input type="time" class ="form-control input-group-detail-txt-time" placeholder="HH:mm" />
                </div>
            </div>
            <div class ="row">
                <div class ="col-xs-1"></div>
                <div class ="col-xs-11">
                    <span class ="glyphicon glyphicon-file">&nbsp; </span>
                    <span class ="input-group-detail-title">File</span>
                </div>
            </div>
            <div class ="row">
                <div class ="col-xs-2"></div>
                <div class ="col-xs-10">
                    <button class ="btn btn-default">
                        <span class ="glyphicon glyphicon-plus-sign"></span>
                    </button>
                </div>
            </div>
            <div class ="row">
                <div class ="col-xs-1"></div>
                <div class ="col-xs-11">
                    <span class ="glyphicon glyphicon-comment">&nbsp; </span>
                    <span class ="input-group-detail-title">Comment</span>
                </div>
            </div>
            <div class ="row">
                <div class ="col-xs-2"></div>
                <div class ="col-xs-10">
                    <textarea class ="input-group-detail-comment" placeholder="Type your memo here"></textarea>
                </div>
            </div>
            <div>
                <ul class ="nav nav-justified">
                    <li>
                        <button class ="btn btn-default input-group-detail-btn input-group-detail-btn__cancel">
                            <span class ="glyphicon glyphicon-remove"></span>
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button class ="btn btn-common input-group-detail-btn input-group-detail-btn__save">
                            <span class ="glyphicon glyphicon-floppy-save"></span> Save</button>

                    </li>
                </ul>
            </div>
        </div>
        </div>`;
    return editHTML;
}