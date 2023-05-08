$(document).ready(function(){
    $('form ul').click(function(){
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<ol style=" display: none"></ol>');
        $(`<ol>${novaTarefa}</ol>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nome-tarefa').val('')  
    })
})

