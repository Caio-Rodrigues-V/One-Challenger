// Função para criptografar um texto substituindo caracteres específicos
function criptografarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

// Função para descriptografar um texto revertendo as substituições feitas na criptografia
function descriptografarTexto(textoCriptografado) {
    return textoCriptografado.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');
}

// Função chamada quando o botão de codificação é clicado
function criptografar() {
    // reconhece  o texto original do campo de entrada
    const textoOriginal = document.getElementById('entrada-de-texto').value;
    
    // Chama a função de criptografia
    const textoCriptografado = criptografarTexto(textoOriginal);
    
    // da update no valor do campo de saída com o texto criptografado
    document.getElementById('saida-de-texto').value = textoCriptografado;
    
    // Exibe a mensagem informativa
    document.getElementById('resultado-info').innerText = 'Text encoded';
}

// chama a função quando o botão de decodificação é clicado
function descriptografar() {
    // Captura o texto criptografado do campo de entrada
    const textoCriptografado = document.getElementById('entrada-de-texto').value;
    
    // Chama a função de descriptografia
    const textoDescriptografado = descriptografarTexto(textoCriptografado);
    
    // Atualiza o valor do campo de saída com o texto descriptografado
    document.getElementById('saida-de-texto').value = textoDescriptografado;
    
    // Exibe a mensagem informativa
    document.getElementById('resultado-info').innerText = 'Text decoded';
}


