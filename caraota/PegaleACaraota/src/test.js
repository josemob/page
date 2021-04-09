$(document).ready(function () {

    $.getJSON("src/test.json", function (json) {

        var opcion = parseInt($('#ghost').text());
        var opcionWin;
        
        var ganador = function (pop) {
            $('.pregunta h3').text(json.preguntas[pop].pregunta);
            $('.r1 p').text(json.preguntas[pop].opcion1);
            $('.r2 p').text(json.preguntas[pop].opcion2);
            $('.r3 p').text(json.preguntas[pop].opcion3);
            $('.r4 p').text(json.preguntas[pop].opcion4);
            $('.respuesta').text(json.preguntas[pop].opcionWin);
            return json.preguntas[pop].opcionWin;
        }

        function procesar() {
            ganador(opcion - 1);
            opcionWin = ".r" + ganador(opcion - 1);
            $(opcionWin).addClass('win');
        }

         procesar();
    });

});
