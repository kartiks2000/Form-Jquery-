$(".age-hide-show").hide();
$("#age").change(function (e) { 
    e.preventDefault();
    if($(this).val() >= 18){
        $(".age-hide-show").show();
        $(this).css("border-bottom-color", "green");
    }
    else{
        $(".age-hide-show").hide();
        $(this).css("border-bottom-color", "red");
        alert("Sorry, you are not ellegible... try again later...");
    }
});


$(".agree-hide-show").hide();
$("#agree").change(function (e) { 
    e.preventDefault();
    if($(this).prop("checked") == true)
    {
        $(".agree-hide-show").show();
    }
    else{
        $(".agree-hide-show").hide();
    }
});


$(".status-hide-show").hide();
$("input[name=status]").change(function (e) { 
    e.preventDefault();
    if($("input[name=status]:checked").val() == 1){
        $(".status-hide-show").show();
    }
    else{
        $(".status-hide-show").hide();
    }
});


$(".gender-hide-show").hide();
$("input[name=genderradio]").change(function(e){
    e.preventDefault();
    if($("input[name=genderradio]:checked").val() == 1){
        $(".gender-hide-show").show();
    }        
    else{ 
       $(".gender-hide-show").hide();
    }
});
