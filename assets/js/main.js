// Arquivo: main.js

import { rotas } from './rotas.js';
import { salvarDadosUsuario, restaurarDadosUsuario } from './storage.js';

/* =========================================================
   MOTOR DO ROUTER SPA
========================================================= */
const app = document.getElementById('app');

function renderizarPagina() {
    let rotaAtual = window.location.hash || '#/';
    app.innerHTML = rotas[rotaAtual] || '<h2 class="th2">Erro 404 - Página não encontrada</h2>';

    if (rotaAtual === '#/cadastro') {
        restaurarDadosUsuario();
    }
}

window.addEventListener('hashchange', renderizarPagina);
window.addEventListener('load', renderizarPagina);

/* =========================================================
   EVENTOS GLOBAIS (Delegação de Eventos)
========================================================= */
// Menu Hambúrguer 
document.getElementById('btn-menu').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('ativo');
});

// Delegação para elementos injetados dinamicamente (Modal e Toast)
document.body.addEventListener('click', (evento) => {
    if (evento.target.id === 'btn-abrir-modal') {
        evento.preventDefault();
        document.getElementById('modal-doacao').classList.add('ativo');
    }
    
    if (evento.target.id === 'btn-fechar-modal') {
        document.getElementById('modal-doacao').classList.remove('ativo');
    }
});

document.body.addEventListener('submit', (evento) => {
    if (evento.target.id === 'form-cadastro') {
        evento.preventDefault(); // Impede a página de recarregar
        
        const dadosUsuario = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            nascimento: document.getElementById('nascimento').value,
            cpf: document.getElementById('cpf').value,
            telefone: document.getElementById('telefone').value,
            cep: document.getElementById('cep').value,
            endereco: document.getElementById('endereco').value,
            cidade: document.getElementById('cidade').value,
            estado: document.getElementById('estado').value
        };

        // Chama a função importada do storage.js para salvar os dados
        salvarDadosUsuario(dadosUsuario);

        // Feedback visual
        const toast = document.getElementById('toast-sucesso');
        toast.classList.add('ativo');
        setTimeout(() => toast.classList.remove('ativo'), 3000);
    }
});