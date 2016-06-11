$(function(){
	$(document).ready(function(){
		registrarMascaras();
		somenteLetras();
		verificaSenha();
		validarCPF();
		maxCaracteres();
		mensagemCheckbox();
		enviar();
	});
});
function registrarMascaras(){
    $("#tel").mask('(00) 0000-0000');
    $("#cpf").mask('000.000.000-00');
    $("#cep").mask('00000-000');
}
function somenteLetras(){
	$("#nome").keypress(function(event){
		//variavel recebendo o valor do evento da tecla pressionada
		var tecla = event.keyCode || event.which;  
		//Somente as letras minusculas, maisculas e o espaço
		if((tecla >= 65 && tecla <= 90 || tecla >= 97 && tecla <= 122 || tecla == 32)) 
			return true;
		else{
			//apagar e esc liberados
			if (tecla==8 || tecla==0) 
			return true;
		else  
			return false;
		}
	});
}

function verificaSenha(){
	$("#senha").keypress(function(event){
		//variavel recebendo o valor do evento da tecla pressionada
		var tecla = event.keyCode || event.which;   
		//Somente as letras minusculas, maisculas e os numeros
		if((tecla >= 65 && tecla <= 90 || tecla >= 97 && tecla <= 122 || tecla >= 48 && tecla <= 57))
			return true;
		else{
			//apagar e esc liberados
			if (tecla==8 || tecla==0) 
				return true;
			else  
				return false;
		}
	});
}
function maxCaracteres(){
	//evento keypress do campo obs
	$("#obs").keypress(function(event){
		//verifica se tem mais do que 200 caracteres
		if(cadastroCliente.obs.value.length == 200){
			alert("A observa\u00e7\u00e3o deve conter no m\u00e1ximo 200 caracteres.");
			//nao deixa digitar mais que 200
			event.preventDefault();
			cadastroCliente.obs.focus();
			return false;
		}
	});
}
function mensagemCheckbox(){
	//evento click no checkbox
	$("#promocao").on("change",function () {  
		verificaCheck();
	});
}
function verificaCheck(){
	if($("#promocao").is(":checked")){
		$("#mensagem").show();
	}else
		$("#mensagem").hide();
}
function enviar() {
    var operacao = "A";
    var posicao = -1;
    var tabelaBanco = localStorage.getItem("Dados");
    tabelaBanco = JSON.parse(tabelaBanco);
    if (tabelaBanco == null)
        tabelaBanco = [];
		$("#cadastroCliente").on("submit", function () {
    if (operacao == "A")
        adicionarElemento();
    else
        editarElemento();
    });
    $("#tabelaBanco").on("click", "#btnEditar", function(){
		$("#enviar").attr('value', "Alterar");
		operacao = "E";
        posicao = parseInt($(this).attr("alt"));
        
        var cli = JSON.parse(tabelaBanco[posicao]);
			$("#cpf").val(cli.cpf);
			$("#nome").val(cli.nome);
			$("#estadoCivil").val(cli.estadoCivil);
			$("#sexo").val(cli.sexo);
			$("#telefone").val(cli.telefone);
			$("#cep").val(cli.cep);
			$("#endereco").val(cli.endereco);
			$("#bairro").val(cli.bairro);
			$("#estado").val(cli.estado);
			$("#cidade").val(cli.cidade);
			$("#email").val(cli.email);
			$("#senha").val(cli.senha);
			$("#obs").val(cli.obs);
			$('#promocao').attr('checked', cli.promocao);
			$("#nome").focus();
		verificaCheck();
    });
    $("#tabelaBanco").on("click", "#btnExcluir", function(){
        posicao = parseInt($(this).attr("alt"));
        excluir();
        listar();
    });
	function adicionarElemento() {
		var cliente = JSON.stringify({
			cpf: $("#cpf").val(), 
			nome: $("#nome").val(), 
			estadoCivil: $("#estadoCivil").val(),
			sexo: $("#sexo").val(),
			telefone: $("#telefone").val(),
			cep: $("#cep").val(),
			endereco: $("#endereco").val(),
			bairro: $("#bairro").val(),
			estado: $("#estado").val(),
			cidade: $("#cidade").val(),
			email: $("#email").val(),
			senha: $("#senha").val(),
			obs: $("#obs").val(),
			promocao: $("#promocao").is(":checked")
		});
		tabelaBanco.push(cliente);
		localStorage.setItem("Dados", JSON.stringify(tabelaBanco));
		alert("Registro adicionado com sucesso");
		return true;
	}
	function editarElemento(){
		tabelaBanco[posicao] = JSON.stringify({
			cpf: $("#cpf").val(), 
			nome: $("#nome").val(), 
			estadoCivil: $("#estadoCivil").val(),
			sexo: $("#sexo").val(),
			telefone: $("#telefone").val(),
			cep: $("#cep").val(),
			endereco: $("#endereco").val(),
			bairro: $("#bairro").val(),
			estado: $("#estado").val(),
			cidade: $("#cidade").val(),
			email: $("#email").val(),
			senha: $("#senha").val(),
			obs: $("#obs").val(),
			promocao: $("#promocao").is(":checked")
		});
		localStorage.setItem("Dados", JSON.stringify(tabelaBanco));
		alert("Registro editado com sucesso");
		operacao = "A";
		return true;
	}
	function excluir(){
		tabelaBanco.splice(posicao, 1);
		localStorage.setItem("Dados", JSON.stringify(tabelaBanco));
		alert("Registro Exluido com Sucesso");
		return true;
	}
	function listar() {
        $("#corpoTabela").html("");
		for (var i in tabelaBanco) {
			var cli = JSON.parse(tabelaBanco[i]);
			$('#tabelaBanco').find('tbody').append('<tr>' +
			'<td><b>' + cli.cpf + '</b></td>' +
			'<td><b>' + cli.nome + '</b></td>' +
			'<td><input type = "button" id = "btnEditar" class = "btn btn-danger" alt = " '+i+' " value = "Editar"/></td>' +
			'<td><input type = "button" id = "btnExcluir" class = "btn btn-danger" alt = " '+i+' " value = "Remover"/></td>' +
			'</tr>');
			destacarLinha();
			limpar();
		}
	}
	//CANCELAR
	$("#cancelar").click(function(){
		operacao = "A";
		$("#enviar").attr('value', "Enviar");
		limpar();
	});
    listar();
	$("#enviar").attr('value', "Enviar");
}
function limpar(){
	$('#cpf').val('');
	$('#nome').val('');
	$('#estadoCivil').val('');
	$('#sexo').val('');
	$('#telefone').val('');
	$('#cep').val('');
	$('#endereco').val('');
	$('#bairro').val('');
	$('#estado').val('');
	$('#cidade').val('');
	$('#email').val('');
	$('#senha').val('');
	$('#obs').val('');
	$('#promocao').val('');
}
function destacarLinha(){
	$('table#tabelaBanco tbody tr').hover(
		function(){
			$(this).addClass('destaque');
		},
		function(){
			$(this).removeClass('destaque');
		}
    );
}