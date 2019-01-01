/**O basico de jQuery */
//$(seletor).açao();
/**Isso e uma boa pratica */
$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue")
               
        // $('p').fadeOut(); vai sumir as coisas na tela
    });
});

/**Forma reduzida */
$(function(){
    $('#vermelho').click(function(){
        $('p')
        .css("background-color", "black")
        .text("cor alterada com sucesso") //aparece mensagem e troca de cor
        .css("color", "red")
        .css("border", "1px solid red") // mensagem que aparece fica bonita com borda
        .delay(3000) // faz a mensagem desaparecer
        .fadeOut("fast");
    });
});

$(function(){
    $('#back-rosa').click(function(){
        $('p').css("background", "pink");
    });
});

$(function(){
    $('#back-verde').click(function(){
        $('p')
        .css("background", "green");
    });
});

$(function(){
    $('#FadIO').click(function(){
        $('p')
        .fadeOut("fast")
        .fadeIn("fast");
    });
});

$(function(){
    $('#FadIO2').click(function(){
        $('p')
        .fadeOut(1000)
        .fadeIn(5000);
    });
});

$(function(){
    $('#FadIO3').click(function(){
        $('p')
        .fadeOut(1000)
        .delay(3000)
        .fadeIn(5000);
    });
});

$(function(){
    $('#Mensg').click(function(){
    $('p').css("background-color", "red")
     $('#mensagem')
        .text("cor alterada com sucesso") //aparece mensagem e troca de cor
        .css({color:'red', border:'1px solid red'}) // mensagem que aparece fica bonita com borda
        .delay(3000)
        .fadeOut(3000) // faz a mensagem desaparecer
        .addClass('green')

    $('button').removeClass('red');

    });
});



$(function(){
    $('#colocaCor').click(function(){
        $('button').addClass('red');

    });
});


$(function(){
    $('#hide').click(function(){
        $('p')
        .hide();

    });
});