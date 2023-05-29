$(document).ready( function () {
    let hiddenRow = $(".expandable");
    $(".expand-btn").click(function () {
        hiddenRow.toggleClass("hidden");
        if (hiddenRow.is(":visible")) {
            $(".expand-btn").html("Уменьшить")
        }
        else {
            $(".expand-btn").html("Расширить")
        }
    });
    $(".center").click(function () {
        $(".modal_canvas").toggleClass("hidden");
    });
$(".modal-close").click(function () {
    $(".modal_canvas").toggleClass("hidden");
});
});




























// $(document).ready( function () {
//     let hiddenRow = $(".expandable");
//     $(".btni").click(function () {
//         hiddenRow.toggleClass("hidden");
//         if (hiddenRow.is(":visible")) {
//             $(".btni").html("Уменьшить")
//         }
//         else {
//             $(".btni").html("Расширить")
//         }
//     });
// });

// $(".modal-close").click(function () {
//     $(".modal").remove();
// });
