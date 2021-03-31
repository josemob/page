$(document).ready(function () {

    var resp = 0;

    $(".next").click(function () {

        switch (resp) {
            case 0:
                resp = resp + 1;
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
                resp = 4;
                $(".r4").addClass('view');
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
