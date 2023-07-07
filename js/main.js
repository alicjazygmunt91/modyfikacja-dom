$(document).ready(function () {

    $('button:first').click(function () {
        $("p:last").insertBefore("p:first");
    });

    $('button:last').click(function () {
        $("p:first").insertAfter("p:last");
    
    });



});