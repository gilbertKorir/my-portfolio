$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});

var email = document.getElementById("email").value;
var formtxt = document.getElementById("form-text").value;

function sendData(){
    if(email == null|| formtxt == null){
        alert("input data");
    }

}