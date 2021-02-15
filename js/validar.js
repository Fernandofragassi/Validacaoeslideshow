function validar(){
    if(document.getElementById('nome').value ==''){
        alert('Preencha o campo Nome');
        document.getElementById('nome').focus()
        return false
    }
    if(document.getElementById('sobrenome').value ==''){
        alert('Preencha o campo Sobrenome');
        document.getElementById('sobrenome').focus()
        return false
    }
    if(document.getElementById('sexo').value ==''){
        alert('Preencha o campo Sexo');
        document.getElementById('sexo').focus()
        return false
    }
    if(document.getElementById('cpf').value ==''){
        alert('Preencha o campo CPF');
        document.getElementById('cpf').focus()
        return false
    }
    if(document.getElementById('email').value ==''){
        alert('Preencha o campo Email');
        document.getElementById('email').focus()
        return false
    }
    if(document.getElementById('telefone').value ==''){
        alert('Preencha o campo Telefone');
        document.getElementById('telefone').focus()
        return false
    }
    if(document.getElementById('estado').value ==''){
        alert('Preencha o campo Estado');
        document.getElementById('estado').focus()
        return false
    }
    if(document.getElementById('cidade').value ==''){
        alert('Preencha o campo Cidade');
        document.getElementById('cidade').focus()
        return false
    }
    if(document.getElementById('rua').value ==''){
        alert('Preencha o campo Rua');
        document.getElementById('rua').focus()
        return false
    }
    if(document.getElementById('número').value ==''){
        alert('Preencha o campo Número');
        document.getElementById('número').focus()
        return false
    }else{
        window.alert('Formulário enviado com sucesso!')
    }
return true
}
