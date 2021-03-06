/**
 * Created by kernelkill on 10/06/16.
 */
function validarCPF(){
    //evento change do campo cpf
    $("#cpf").on("change", function (){
        var cpf = $("#cpf").val();
        var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;
        if(!filtro.test(cpf)){
            window.alert("CPF inv\u00e1lido.");
            $("#cpf").focus();
            $("#cpf").val("");
            return false;
        }
        cpf = remove(cpf, ".");
        cpf = remove(cpf, "-");
        if(cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444"
            || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999"){
            window.alert("CPF inv\u00e1lido.");
            $("#cpf").focus();
            $("#cpf").val("");
            return false;
        }
        //verifica o primeiro digito
        soma = 0;
        for(i = 0; i < 9; i++)
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        resto = 11 - (soma % 11);
        if(resto == 10 || resto == 11)
            resto = 0;
        if(resto != parseInt(cpf.charAt(9))){
            window.alert("CPF inv\u00e1lido.");
            $("#cpf").focus();
            $("#cpf").val("");
            return false;
        }
        //verifica com o primeiro digito e o segundo
        soma = 0;
        for(i = 0; i < 10; i ++)
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        resto = 11 - (soma % 11);
        if(resto == 10 || resto == 11)
            resto = 0;
        if(resto != parseInt(cpf.charAt(10))){
            window.alert("CPF inv\u00e1lido.");
            $("#cpf").focus();
            $("#cpf").val("");
            return false;
        }
        return true;
    });
    //remove os pontos e traço do numero de cpf antes de verificar
    function remove(str, sub) {
        i = str.indexOf(sub);
        r = "";
        if (i == -1) return str;
        r += str.substring(0,i) + remove(str.substring(i + sub.length), sub);
        return r;
    }
}