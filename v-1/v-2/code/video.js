window.onload = function () {
    ubi();
    ios();
}

// Initialte variables
var video = document.querySelector('video');
var playbackDuration = document.querySelector('.playback-duration');
var progressBar = document.querySelector('.progress-bar');
var progressBarBackground = document.querySelector('.progress-bar-background');
var clip = {};
var buttons = {};

var duracionRest; /*  tiempo total del video  */
var tiempoDesc; /*  descuento  */
var cont = 0;

var videoClick = 0;

var widthP = window.matchMedia("(max-width: 480px)")

var DeviceM = false;

if (widthP.matches) {
    /*     Ejecucion en Movil     */
    DeviceM = true;
} else {
    /*    Ejecucion en Desktop    */
    DeviceM = false;
}


$.getJSON("code/custom.json", function (json) {
    if (widthP.matches) {
        document.getElementById("nomLong").innerHTML = json.nomLong;
        document.getElementById("nomLongD").innerHTML = json.nomLong;
        document.getElementById("descLongD").innerHTML = json.descLong;
        document.getElementById("detallesD").innerHTML = json.detalles;
        $('#shopNow').attr('onclick', 'openSideM()');
        $('#shopNowD').attr('onclick', json.linkDestino);
    } else {
        $('#imgProducto').attr('src', json.imgProducto);
        document.getElementById("nombreItem").innerHTML = json.nombreItem;
        document.getElementById("nomLong").innerHTML = json.nomLong;
        document.getElementById("descLong").innerHTML = json.descLong;
        document.getElementById("detalles").innerHTML = json.detalles;
        $('#shopNow').attr('onclick', json.linkDestino);
    }
});

// Function to convert a date object to 'mm:ss' format
var toTimeString = function (date) {
    var date = date.toTimeString().split(' ')[0];
    date = date.slice(3, 8);
    return date;
};
// Get buttons
buttons.play = document.querySelector('.play');
buttons.pause = document.querySelector('.pause');
buttons.mute = document.querySelector('.mute');
buttons.unmute = document.querySelector('.unmute');
// By default, these shouldn't be displayed
buttons.pause.style.display = 'none';
buttons.mute.style.display = 'none';
// Don't want to annoy visitors
video.volume = 1; /*--  Iniciar con audio 1, sin audio 0  --*/
// Show duration when video is ready to play
video.onloadeddata = function () {
    var duration = new Date(video.duration * 1000);
    /*playbackDuration.querySelector('.duration').innerHTML = toTimeString(duration);*/
    duracionRest = duration.getTime();
};
// Set actions on buttons
buttons.play.onclick = function () {
    $('#ghost').css({
        'opacity': '0'
    });
    return video.play();
};

buttons.pause.onclick = function () {
    openSide();
    videoClick = 1;
    $('#ghost').css({
        'opacity': '0'
    })
    return video.pause();
};

buttons.mute.onclick = function () {
    return video.volume = 1;
};

buttons.unmute.onclick = function () {
    return video.volume = 0;
};
// Toggle buttons when played / paused
video.onplay = function () {
    buttons.play.style.display = 'none';
    buttons.pause.style.display = 'block';
};

video.onpause = function () {
    buttons.play.style.display = 'block';
    buttons.pause.style.display = 'none';
};
// Toggle mute buttons when volume changes
video.onvolumechange = function () {
    if (video.volume == 0) {
        buttons.mute.style.display = 'block';
        buttons.unmute.style.display = 'none';
    } else {
        buttons.mute.style.display = 'none';
        buttons.unmute.style.display = 'block';
    }
};
// Change video location when user clicks on progress bar
progressBarBackground.onclick = function (event) {
    var positionRatio = event.offsetX / progressBarBackground.offsetWidth;
    video.currentTime = video.duration * positionRatio;
};
// update display as video seeks
video.ontimeupdate = function () {
    // Update progress bar
    var durationRatio = video.currentTime / video.duration;
    progressBar.style.width = durationRatio * 100 + '%';
    // Update playback duration
    var currentTime = new Date(video.currentTime * 1000);
    var flips = new Date(video.currentTime * 1000);
    currentTime = toTimeString(currentTime);
    tiempoDesc = flips.getTime();

    var pop = duracionRest - flips.getTime()
    var time = new Date(pop);
    var minutos = time.getMinutes();
    var segundos = time.getSeconds();
    var resto = '-' + min() + seg();

    function seg() {
        if (segundos < 10) {
            return "0" + segundos
        } else {
            return segundos;
        }
    };

    function min() {
        if (minutos > 0) {
            return minutos + ":";
        } else {
            return "0:";
        }
    }
    accionTiempo(timeV);
    playbackDuration.querySelector('.progress').innerHTML = resto;
};



function accionTiempo(op) {
    /*  funcion para insertar accion en determinado segundo formato ( mm:ss )  */

    var min = parseInt(op.substring(0, 2));
    var seg = parseInt(op.substring(3, 5));

    var tiempo = min * 60 + seg;

    var fecha = new Date(tiempo * 1000);
    var fechaMil = fecha.getTime();

    var porcentaje = Math.trunc(100 * tiempoDesc / duracionRest);

    if (tiempoDesc >= fechaMil) {
        if (cont < 1) {
            infoBar(porcentaje);
        }
        cont = cont + 1;
    }

    if (porcentaje > 97) {
        openSideM();
    }

    var wid = $('.progress-bar-parent').width();
    $('#hoka').css({
        'width': wid
    });

    if (cont == 0) {
        point(porcentaje)
    }
}

function ubi() {
    var pos = $('.progress-bar-parent').position();
    $('#hoka').css({
        'left': pos.left,
        'height': '20px'
    });
} /*-- Ubicacion de la barra de progreso  --*/

function infoBar(pos) {
    /*--------------------------POSITION BAR INFO   -------*/
    if (widthP.matches) {
        /*     Ejecucion en Movil     */
        openSide();
    } else {
        /*    Ejecucion en Desktop    */
        var poss = $('.progress-bar-parent').position();
        var possW = $('.progress-bar-parent').width();
        $('#ad-info').css({
            'margin-left': pos + '%'
        });
        $('#ad-info').css({
            'visibility': 'visible'
        });
    }
} /*-- boton flotante (pocicion seleccionada)  --*/

function point(porc) {
    $('#point').css({
        'margin-left': porc + "%"
    });
} /*-- ubicacion del punto pulse porcentual  --*/

function openSide() {
    if (widthP.matches) {
        /*     Ejecucion en Movil     */
        $('#side-shop').css({
            'min-width': '100vw'
        });
        if (videoClick == 0) {
            videoClick = 1;
        }
    } else {
        /*    Ejecucion en Desktop    */
        $('#side-shop').css({
            'min-width': '50vw'
        });
        if (videoClick == 0) {
            video.pause();
            videoClick = 1;
        }
    }
} /*-- abrir slide desktop  --*/

function openSideM() {
    $('#side-shopD').css({
        'width': '100vw'
    });
} /*-- abrir slide movil  --*/

function closeSideM() {
    $('#side-shopD').css({
        'width': '0vw'
    });
} /*-- cerrar slide movil  --*/

$('#ghost').click(function () {
    if (videoClick == 1) {
        videoClick = 0;
    }
    $('#ghost').css({
        'opacity': '0'
    })
    video.play();
}) /*-- boton de play inicial  --*/

function ios() {
    if (navigator.vendor != null && navigator.vendor.match(/Apple Computer, Inc./) && navigator.userAgent.match(/iPhone/i) || (navigator.userAgent.match(/iPod/i))) {
        
        $('#shopNowD').css({'margin-top':'-170px'})
    }
}
