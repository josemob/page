$(document).ready(function () {

    var resp = 0;

    $(".next").click(function () {

        switch (resp) {
            case 0:
                resp = resp + 1;
                $(".pregunta").addClass('no-view-fin');
                $(".r1").addClass('view');
                break;
            case 1:
                resp = resp + 1;
                $(".r2").addClass('view');
                console.log(resp);
                break;
            case 2:
                resp = resp + 1;
                $(".r3").addClass('view');
                console.log(resp);
                break;
            case 3:
                resp = resp + 1;
                $(".r4").addClass('view');
                console.log(resp);
                break;
            case 4:
                resp = 5;
                $(".r1").addClass('no-view-fin');
                $(".r2").addClass('no-view-fin');
                $(".r3").addClass('no-view-fin');
                $(".r4").addClass('no-view-fin');
                $(".win").removeClass('no-view-fin');
                $(".win").addClass([ 'view', 'win-p' ]);
                console.log(resp);
                break;
            default:
                console.log('default');
                break;
        }


    })

    $(".prev").click(function () {
        switch (resp) {
            case 4:
                resp = resp - 1;
                $(".r4").removeClass('view');
                break;
            case 3:
                resp = resp - 1;
                $(".r3").removeClass('view');
                break;
            case 2:
                resp = resp - 1;
                $(".r2").removeClass('view');
                break;
            case 1:
                resp = 0;
                $(".r1").removeClass('view');
                break;
            default:
                console.log('default');
                break;
        }
    })

})
