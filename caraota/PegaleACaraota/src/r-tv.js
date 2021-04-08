$(document).ready(function () {

    var resp = 0;


    $(window).keydown(function (event) {
        console.log(event.which);
        if (event.which == 39) {
            next();
        } else if (event.which == 37) {
            prev();
        } else if(event.which == 82){
            location.reload();
        }
        
    });

    $(".next").click(function () {
        next();
    })

    $(".prev").click(function () {
        prev();
    })


    function next() {
        switch (resp) {
            case 0:
                resp = resp + 1;
                $(".pregunta").addClass('no-view-fin');
                $(".r1").addClass('view');
                console.log(resp);
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
                $(".win").addClass(['view', 'win-p']);
                console.log(resp);
                break;
            default:
                console.log('default');
                break;
        }
    }

    function prev() {
        switch (resp) {
            case 5:
                resp = resp - 1;
                $(".win").removeClass('win-p');
                $(".win").addClass('no-view-fin');
                $(".r1").removeClass('no-view-fin');
                $(".r2").removeClass('no-view-fin');
                $(".r3").removeClass('no-view-fin');
                $(".r4").removeClass('no-view-fin');
                console.log(resp);
                break;
            case 4:
                resp = resp - 1;
                $(".r4").removeClass('view');
                console.log(resp);
                break;
            case 3:
                resp = resp - 1;
                $(".r3").removeClass('view');
                console.log(resp);
                break;
            case 2:
                resp = resp - 1;
                $(".r2").removeClass('view');
                console.log(resp);
                break;
            case 1:
                resp = 0;
                $(".r1").removeClass('view');
                console.log(resp);
                break;
            default:
                console.log('default');
                break;
        }
    }


})
