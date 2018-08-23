$(document).ready(function () {
    
    //PRACOWNICY
   
    $(".opis").hide();
    
    $("#trener").click(function () {
        $("#trener1").toggle().siblings('.opis').hide();
    });
    
    $("#masazysta").click(function () {
        $("#masazysta1").toggle().siblings('.opis').hide();
    });
    
    $("#fryzjerka").click(function () {
        $("#fryzjerka1").toggle().siblings('.opis').hide();
    });
    
    $("#kosmetyczka").click(function () {
        $("#kosmetyczka1").toggle().siblings('.opis').hide();
    });
   
    $("#dietetyczka").click(function () {
        $("#dietetyczka1").toggle().siblings('.opis').hide();
    });

   
});