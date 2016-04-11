function valida_form() {
    if (document.getElementById("cpf").value == "") {
        alert('Por favor, preencha o campo CPF');
        document.getElementById("cpf").focus();
        return false
    }
    if (document.getElementById("nome").value == "") {
        alert('Por favor, preencha o campo nome');
        document.getElementById("nome").focus();
        return false
    }
    if (document.getElementById("endereco").value == "") {
        alert('Por favor, preencha o campo Endereço');
        document.getElementById("endereco").focus();
        return false
    }
    if (document.getElementById("cidade").value == "") {
        alert('Por favor, preencha o campo Cidade');
        document.getElementById("cidade").focus();
        return false
    }
    if (document.getElementById("receber").value == "") {
        alert('Por favor, preencha o campo Receber notificações');
        document.getElementById("receber").focus();
        return false
    }
    if (document.getElementById("email").value == "") {
        alert('Por favor, preencha o campo Email');
        document.getElementById("email").focus();
        return false
    }
    if (document.getElementById("senha").value == "") {
        alert('Por favor, preencha o campo Senha');
        document.getElementById("senha").focus();
        return false
    }
}

function MostrarValores() {
    if (document.getElementsByName("receber").checked == "nao") {
        alert("CPF: " + document.cadastro.cpf.value + "\n Nome: " + document.cadastro.nome.value + "\n Endereco: " +
        document.cadastro.endereco.value + "\n Sexo: " + document.cadastro.sel.value +
        "\n Telefone: " + document.cadastro.telefone.value + "\n Email(Login): " + document.cadastro.email.value +
        "\n Senha: " + document.cadastro.senha.value + "\n Receber Notificacao: Sim" + "\n Obs: " + document.cadastro.obs.value);
    } else {
        alert("CPF: " + document.cadastro.cpf.value + "\n Nome: " + document.cadastro.nome.value + "\n Endereco: " +
        document.cadastro.endereco.value + "\n Sexo: " + document.cadastro.sel.value +
        "\n Telefone: " + document.cadastro.telefone.value + "\n Email(Login): " + document.cadastro.email.value +
        "\n Senha: " + document.cadastro.senha.value + "\n Receber Notificacao: Nao" + "\n Obs: " + document.cadastro.obs.value);
    }
}

function Mascara(objeto) {
    if (objeto.value.length == 0)
        objeto.value = '(' + objeto.value;

    if (objeto.value.length == 3)
        objeto.value = objeto.value + ')';

    if (objeto.value.length == 8)
        objeto.value = objeto.value + '-';
}


function MostraTexto() {
    document.getElementById("notificacao").innerHTML = "A qualquer momento você poderá cancelar o recebimento dos e-mail's de promoção enviando um e-mail com o assunto STOP para o endereço terenciani@estacio.br";
}
function TiraTexto() {
    document.getElementById("notificacao").innerHTML = "";
}


function valida() {
    if (document.cadastro.sel.value == "") {
        window.alert("Escolha um sexo!");
        document.cadastro.sel.focus();
    }

}
function CheckOsBox(id) {
    if (id == "sim") {
        document.getElementById("sim").checked = true;
        document.getElementById("nao").checked = false;
    }
    if (id == "nao") {
        document.getElementById("nao").checked = true;
        document.getElementById("sim").checked = false;
    }
}


function SomenteLetras(e) {
    var expressao;

    expressao = /[a-zA-ZÀ-ú\s]/;

    if (expressao.test(String.fromCharCode(e.keyCode))) {
        document.cadastro.nome.value = document.cadastro.nome.value.toUpperCase();
        return true;
    }
    else {
        return false;
    }
}

/* Transforma letras minisculas em maiusculas*/
function UPM(campo) {
    campo.value = campo.value.toUpperCase();
}

/**
 * Created by kernelkill on 10/04/16.
 */
function LetraNumero(e) {
    var expressao;

    expressao = /[a-zA-ZÀ-ú0-9]/;

    if (expressao.test(String.fromCharCode(e.keyCode))) {
        return true;
    }
    else {
        return false;
    }
}


function validarCPF(cpf) {
    var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;

    if (!filtro.test(cpf)) {
        window.alert("CPF inválido. Tente novamente.");
        document.getElementById("cpf").focus();
        document.getElementById("cpf").value = "";
        return false;
    }

    cpf = remove(cpf, ".");
    cpf = remove(cpf, "-");

    if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" ||
        cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" ||
        cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" ||
        cpf == "88888888888" || cpf == "99999999999") {
        window.alert("CPF inválido. Tente novamente.");
        document.getElementById("cpf").focus();
        document.getElementById("cpf").value = "";
        return false;
    }

    soma = 0;
    for (i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    resto = 11 - (soma % 11);
    if (resto == 10 || resto == 11) {
        resto = 0;
    }
    if (resto != parseInt(cpf.charAt(9))) {
        window.alert("CPF inválido. Tente novamente.");
        document.getElementById("cpf").focus();
        document.getElementById("cpf").value = "";
        return false;
    }

    soma = 0;
    for (i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto == 10 || resto == 11) {
        resto = 0;
    }

    if (resto != parseInt(cpf.charAt(10))) {
        window.alert("CPF inválido. Tente novamente.");
        document.getElementById("cpf").focus();
        document.getElementById("cpf").value = "";
        return false;
    }

    return true;
}

function remove(str, sub) {
    i = str.indexOf(sub);
    r = "";
    if (i == -1) return str;
    {
        r += str.substring(0, i) + remove(str.substring(i + sub.length), sub);
    }

    return r;
}


function mascara(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmascara()", 1)
}

function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}

function cpf_mask(v) {
    v = v.replace(/\D/g, "")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d)/, "$1-$2")
    return v
}
		