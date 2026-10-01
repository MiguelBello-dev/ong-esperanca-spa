export const rotas = {
    '#/': `
        <img src="../assets/img/todos-juntos.png" alt="Pessoas se abraçando" class="banner-topo">
        <h1 class="th1">ONG Esperança</h1>
        
        <div class="grid-container">
            <section id="apresentacao" class="col-span-12 md-span-6">
                <h2 class="th2">Quem Somos</h2>
                <p>
                    Bem-vindo à nossa ONG. Nosso propósito é promover a transformação social e apoiar comunidades em situação de vulnerabilidade. 
                    Trabalhamos diariamente para garantir oportunidades iguais e um futuro mais justo para todos.
                </p>
                <figure>
                    <img src="../assets/img/trabalho-comunitario.png" type="image/png" width="600" alt="Voluntários da ONG" class="img-responsiva">
                    <figcaption>Nossa equipe em ação durante o projeto de inverno.</figcaption>
                </figure>
            </section>

            <section id="contato" class="col-span-12 md-span-6">
                <h2 class="th2">Entre em Contato</h2>
                <p>Quer ser um voluntário, parceiro ou tirar alguma dúvida? Fale conosco!</p>
                <address>
                    <ul>
                        <li><strong>E-mail:</strong> <a href="mailto:contato@ongesperanca.org.br">contato@ongesperanca.org.br</a></li>
                        <li><strong>Telefone:</strong> <a href="tel:+5511987654321">(11) 98765-4321</a></li>
                        <li><strong>Sede:</strong> Rua da Solidariedade, 123 - Centro, São Paulo - SP, 01000-000</li>
                    </ul>
                </address>
            </section>
        </div>
    `,

    '#/projetos': `
        <div class="grid-container">
            <h1 class="th1 col-span-12">Nossos Projetos e Como Ajudar</h1>
            
            <div class="col-span-12 lg-span-8">
                <section id="frentes-atuacao">
                    <h2 class="th2">Frentes de Atuação</h2>
                    <article>
                        <h3 class="th3">Projeto Sopa Solidária <span class="badge badge-sucesso">Ativo</span></h3>
                        <figure>
                            <img src="../assets/img/trabalho-sopa.png" type="image/png" width="600" alt="Voluntários servindo sopa" class="img-responsiva">
                            <figcaption>Distribuição noturna no centro da cidade.</figcaption>
                        </figure>
                        <p>Levamos alimento e calor humano para quem mais precisa nas noites mais frias do ano.</p>
                    </article>
                    <article>
                        <h3 class="th3">Reforço Escolar <span class="badge badge-aviso">Vagas Limitadas</span></h3>
                        <p>Aulas semanais de matemática e português para crianças e jovens da comunidade local.</p>
                    </article>
                </section>

                <section id="doacoes">
                    <h2 class="th2">Campanhas de Doação</h2>
                    <p>Sua contribuição financeira mantém nossos projetos operando e expandindo o impacto.</p>
                    <ul>
                        <li><strong>Pix (CNPJ):</strong> 12.345.678/0001-99</li>
                        <li><strong>Transferência Bancária:</strong> Banco XYZ, Agência 1234, Conta 56789-0</li>
                    </ul>
                    <a href="#doar" class="btn-doar" id="btn-abrir-modal">Doar Agora</a>
                </section>

                <section id="voluntariado">
                    <h2 class="th2">Programa de Voluntariado</h2>
                    <p>Seja o motor dessa mudança. Siga os passos abaixo para se inscrever:</p>
                    <form action="/interesse-voluntariado" method="POST">
                        <fieldset>
                            <legend>Interesse Rápido em Voluntariado</legend>
                            <div>
                                <label for="email-voluntario">Deixe seu e-mail para receber as instruções:</label>
                                <input type="email" id="email-voluntario" name="email-voluntario" required>
                            </div>
                            <button type="submit" class="btn-confirmar">Quero participar</button>
                        </fieldset>
                    </form>
                </section>
                
                <aside class="col-span-12 lg-span-4">
                    <blockquote>
                        "Ser voluntário mudou a minha forma de ver o mundo. É incrível o quanto recebemos ao doar nosso tempo e atenção."
                        <cite>— Maria Silva, voluntária há 2 anos.</cite>
                    </blockquote>
                </aside>
            </div>
        </div>

        <div class="modal-overlay" id="modal-doacao">
            <div class="modal-conteudo">
                <h3 class="th3">Confirmar Doação</h3>
                <p>Você está prestes a realizar uma doação para a ONG Esperança. Deseja ver os dados bancários completos?</p>
                <div class="modal-acoes">
                    <button class="btn-cancelar" id="btn-fechar-modal">Cancelar</button>
                    <button class="btn-confirmar">Sim, Quero Ajudar</button>
                </div>
            </div>
        </div>
    `,

    '#/cadastro': `
        <div class="grid-container">
            <h1 class="th1 col-span-12">Cadastro na Plataforma</h1>
            
            <form id="form-cadastro" action="#" method="POST" class="col-span-12 lg-span-8 lg-offset-2">
                <div class="alerta alerta-info">
                    <strong>Atenção:</strong> Mantenha seus dados de contato atualizados para receber os certificados de voluntariado.
                </div>

                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <div>
                        <label for="nome">Nome completo:</label>
                        <input type="text" id="nome" name="nome" required>
                    </div>
                    <div>
                        <label for="email">E-mail principal:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div>
                        <label for="nascimento">Data de nascimento:</label>
                        <input type="date" id="nascimento" name="nascimento" required>
                    </div>
                    <div>
                        <label for="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" maxlength="14" title="Digite o CPF no formato 000.000.000-00" required>
                    </div>
                    <div>
                        <label for="telefone">Telefone (Celular):</label>
                        <input type="tel" id="telefone" name="telefone" pattern="\\([0-9]{2}\\) 9?[0-9]{4}-[0-9]{4}" maxlength="15" title="Digite no formato (XX) XXXXX-XXXX" required>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>
                    <div>
                        <label for="cep">CEP:</label>
                        <input type="text" id="cep" name="cep" pattern="\\d{5}-\\d{3}" maxlength="9" title="Digite o CEP no formato 00000-000" required>
                    </div>
                    <div>
                        <label for="endereco">Endereço residencial:</label>
                        <input type="text" id="endereco" name="endereco" required>
                    </div>
                    <div>
                        <label for="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" required>
                    </div>
                    <div>
                        <label for="estado">Estado:</label>
                        <select id="estado" name="estado" required>
                            <option value="">Selecione um estado...</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="MG">Minas Gerais</option>
                        </select>
                    </div>
                </fieldset>

                <button type="submit" class="btn-confirmar">Finalizar Cadastro</button>
            </form>
        </div>

        <div class="toast-notificacao" id="toast-sucesso">
            ✓ Cadastro realizado com sucesso!
        </div>
    `
};