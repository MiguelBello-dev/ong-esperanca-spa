// Arquivo: storage.js

export function salvarDadosUsuario(dados) {
    localStorage.setItem('dadosCadastroONG', JSON.stringify(dados));
}

export function restaurarDadosUsuario() {
    const dadosSalvos = localStorage.getItem('dadosCadastroONG');
    
    if (dadosSalvos) {
        const dadosObjeto = JSON.parse(dadosSalvos);
        
        document.getElementById('nome').value = dadosObjeto.nome || '';
        document.getElementById('email').value = dadosObjeto.email || '';
        document.getElementById('nascimento').value = dadosObjeto.nascimento || '';
        document.getElementById('cpf').value = dadosObjeto.cpf || '';
        document.getElementById('telefone').value = dadosObjeto.telefone || '';
        document.getElementById('cep').value = dadosObjeto.cep || '';
        document.getElementById('endereco').value = dadosObjeto.endereco || '';
        document.getElementById('cidade').value = dadosObjeto.cidade || '';
        document.getElementById('estado').value = dadosObjeto.estado || '';
    }
}