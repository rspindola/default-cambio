var taxa;
var quantidade;
var taxa_iof;
var resultado;
var total;
var iof;

function simularCompra() {
    if ($('#tipo').val() == "E") {
        taxa = $("#moeda").find(':selected').data('especie');
        $('#taxa').text(taxa.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }));
    } else {
        taxa = $("#moeda").find(':selected').data('cartao');
        $('#taxa').text(taxa.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }));
    }

    //variabeis primarias
    quantidade = $('#quantidade').val().replace(",", ".");
    taxa_iof = parseFloat($('#tipo').find(':selected').data('iof'));

    if (quantidade == '' || quantidade <= 0) {
        quantidade = 0;
        $('#btn-comprar').attr("disabled", true);
    } else {
        $('#btn-comprar').removeAttr("disabled");
    }

    //quantidade + taxa da moeda
    resultado = parseFloat(quantidade) * parseFloat(taxa);
    iof = resultado * taxa_iof / 100;

    //resultado + taxa iof
    total = parseFloat(resultado) + parseFloat(iof);
    $('#total').val(total.toLocaleString("pt-BR"));
}

function simularVenda() {
    if ($('#tipo-2').val() == "E") {
        taxa2 = $("#moeda-2").find(':selected').data('especie');
        $('#taxa-2').text(taxa2.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }));
    } else {
        taxa2 = $("#moeda-2").find(':selected').data('cartao');
        $('#taxa-2').text(taxa2.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }));
    }

    //variabeis primarias
    quantidade2 = $('#quantidade-2').val().replace(",", ".");;
    taxa_iof2 = parseFloat($('#tipo-2').find(':selected').data('iof'));

    if (quantidade2 == '' || quantidade2 <= 0) {
        quantidade2 = 0;
        $('#btnVender').attr("disabled", true);
    } else {
        $('#btnVender').removeAttr("disabled");
    }

    //quantidade + taxa da moeda
    resultado2 = parseFloat(quantidade2) * parseFloat(taxa2);
    iof2 = resultado2 * taxa_iof2 / 100;

    //resultado + taxa iof
    total2 = parseFloat(resultado2) + parseFloat(iof2);
    $('#total-2').val(total2.toLocaleString("pt-BR"));
}

$(function () {
    simularCompra();
});

$(".simular-comprar").change(function (event) {
    simularCompra();
});

$(".simular-vender").change(function (event) {
    simularVenda();
});

$('#compra-tab').click(function (e) {
    simularCompra();
});

$('#venda-tab').click(function (e) {
    simularVenda();
});

$('.simula-compra').keyup(function (e) {
    simularCompra();
});

$('.simula-vende').keyup(function (e) {
    simularVenda();
});

$('.btn-moeda').click(function () {
    $('#moeda').val($(this).data('moeda')).trigger('change');
});

// $("#enviarVenda").validate();
$('#quantidade').mask("0000,00", {
    reverse: true
});
$('#quantidade-2').mask("0000,00", {
    reverse: true
});