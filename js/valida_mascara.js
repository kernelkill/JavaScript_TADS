/**
 * Created by thiago on 27/03/2016.
 */
//Inicio validação CPF --copiado--
function validarCPF( cpf ){
    var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;

    if(!filtro.test(cpf))
    {
        window.alert("CPF inválido. Tente novamente.");
        return false;
    }

    cpf = remove(cpf, ".");
    cpf = remove(cpf, "-");

    if(cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" ||
        cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" ||
        cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" ||
        cpf == "88888888888" || cpf == "99999999999")
    {
        window.alert("CPF inválido. Tente novamente.");
        return false;
    }

    soma = 0;
    for(i = 0; i < 9; i++)
    {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    resto = 11 - (soma % 11);
    if(resto == 10 || resto == 11)
    {
        resto = 0;
    }
    if(resto != parseInt(cpf.charAt(9))){
        window.alert("CPF inválido. Tente novamente.");
        return false;
    }

    soma = 0;
    for(i = 0; i < 10; i ++)
    {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if(resto == 10 || resto == 11)
    {
        resto = 0;
    }

    if(resto != parseInt(cpf.charAt(10))){
        window.alert("CPF inválido. Tente novamente.");
        return false;
    }

    return true;
}

function remove(str, sub) {
    i = str.indexOf(sub);
    r = "";
    if (i == -1) return str;
    {
        r += str.substring(0,i) + remove(str.substring(i + sub.length), sub);
    }

    return r;
}

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

function cpf_mask(v){
    v=v.replace(/\D/g,"")                 //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o setimo e o oitava dígitos
    v=v.replace(/(\d{3})(\d)/,"$1-$2")   //Coloca ponto entre o decimoprimeiro e o decimosegundo dígitos
    return v
}
//Fim validação CPF

//Deixando os caracteres com letra maiscula.
function ConverteMaiuscula(Campo) {
    Campo.value = Campo.value.toUpperCase();
}


//validando Campo de E-mail
function ValidaEmail(email){
    var testresults;
    var str=email.value;
    var filter=/^.+\..{2,3}$/;
    if (filter.test(str)){
        testresults=true
    }else{
        alert("Campo E-mail inválido!");
        campo.focus();
        return false
    }
}
//Fim validação E-mail

//Inicio mascara telefone 8 e 9 Digitos
function mascaraTelefone( campo ) {

    function trata( valor,  isOnBlur ) {

        valor = valor.replace(/\D/g,"");
        valor = valor.replace(/^(\d{2})(\d)/g,"($1)$2");

        if( isOnBlur ) {

            valor = valor.replace(/(\d)(\d{4})$/,"$1-$2");
        } else {

            valor = valor.replace(/(\d)(\d{3})$/,"$1-$2");
        }
        return valor;
    }

    campo.onkeypress = function (evt) {

        var code = (window.event)? window.event.keyCode : evt.which;
        var valor = this.value

        if(code > 57 || (code < 48 && code != 8 ))  {
            return false;
        } else {
            this.value = trata(valor, false);
        }
    }

    campo.onblur = function() {

        var valor = this.value;
        if( valor.length < 13 ) {
            this.value = ""
        }else {
            this.value = trata( this.value, true );
        }
    }

    campo.maxLength = 14;
}
//Fim mascara telefone


/** Validação dos campo Input*/
function validaCampo(){
    if(document.cadastro.cpf.value==""){
        alert("O campo cpf é obrigatório!");
    }
    if(document.cadastro.nome.value==""){
        alert("O Campo nome é obrigatório!");
        return false;
    }
    if(document.cadastro.endereco.value==""){
        alert("O Campo endereço é obrigatório!");
        return false;
    }
    if(document.cadastro.cidade.value==""){
        alert("O Campo cidade é obrigatório!");
        return false;
    }
    else
    if(document.cadastro.email.value==""){
        alert("O Campo email é obrigatório!");
        return false;
    }
    if(document.cadastro.senha.value==""){
        alert("O Campo senha é obrigatório!");
        return false;
    }
}
/**Fim do JavaScript que validará os campos obrigatórios */