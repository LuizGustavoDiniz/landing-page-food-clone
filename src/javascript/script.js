const mobileBtn = document.querySelector('#mobile_btn > i')
$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active')
        $('#mobile_btn').find('i').addClass('fa-x')
        $('#mobile_btn').find('i').toggleClass('fa-bars')
    })
})