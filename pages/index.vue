<template>
    < class="template">
        <!-- Seção do perfil -->
        <section class="header">
                <img src="../assets/images/eduardo2.webp" alt="Foto de perfil" class="profile-image">

            <div class="header-content">
                <h1>Boas-vindas aos meus links!</h1>
                <p>Olá! Sou Eduardo Brito, desenvolvedor front-end freelancer focado em criar interfaces intuitivas e experiências interativas que elevam a navegação na web.</p>
            </div>
        </section>

        <!-- Linha divisória -->
        <div class="header-divider">
            <hr>
        </div>

        <p class="section-call">Explore meus projetos e entre em contato para colaborações!</p>

        <!-- Seção principal de links -->
        <section class="main-section">
            <div class="container">
                <div class="links">
                    <ul class="link-list">
                        <div class="section-title">
                            <h2>Imersão <span class="highlight-imersao">dev_</span> - Agentes de <span class="highlight-imersao">IA</span></h2>
                        </div>

                        <div class="card-standard">
                            <li>
                                <h3>Inscrições em breve!</h3>
                                <p>A Imersão <strong>dev_</strong> com agentes de IA, da <span class="highlight-blue">Alura</span>, está chegando - e o melhor: será gratuita! Fique atento para não perder o início das inscrições.</p>
                                <a href="https://www.alura.com.br/indica-dev/duduubas" target="_blank" class="link-button-imersao">
                                    Inscrições a partir de 18/08 <Lock :size="20" />
                                </a>
                            </li>
                        </div>

                        <!-- Título da imersão -->
                        <div class="section-title">
                            <h2>Garanta sua vaga com <span class="highlight-blue">desconto exclusivo</span> na <span class="highlight-blue">Alura</span>!</h2>
                        </div>

                        <div class="card-standard">
                            <li>
                                <h3>Desconto especial na <span class="highlight-blue">Alura</span></h3>
                                <p>Aproveite 15% OFF para estudar na principal escola de tecnologia do Brasil e impulsione sua carreira!</p>
                                <a href="https://www.alura.com.br/indica-dev/duduubas" target="_blank" class="link-button">
                                    Resgate o desconto <ArrowUpRight :size="20"/>
                                </a>
                            </li>
                        </div>

                        <div class="section-title">
                            <h2>Sobre mim & contato</h2>
                        </div>

                        <div class="card-standard">
                            <li>
                                <h3>Meu Portfólio</h3>
                                <p>Veja meus principais projetos, experiências e saiba mais sobre minha trajetória.</p>
                                <a href="https://eduardobrito.dev" target="_blank" class="link-button">
                                    Acesse meu portfólio <ArrowUpRight :size="20"/>
                                </a>
                            </li>
                        </div>

                        <div class="card-standard card-contact">
                            <li>
                                <h3>Solicite um Orçamento</h3>
                                <p>Precisa de um site, landing page ou solução personalizada? Envie um e-mail e receba uma proposta sob medida para o seu projeto.</p>
                                <a href="mailto:contato@eduardobrito.dev" class="link-button">
                                    Solicite um orçamento <ArrowUpRight :size="20"/>
                                </a>
                            </li>
                        </div>

                        <!-- Principais projetos -->
                        <div class="section-title">
                            <h2>Principais projetos</h2>
                        </div>

                        <div class="card-standard">
                            <li>
                                <h3>VIAMPEX</h3>
                                <p>Plataforma online para emissão de certificados digitais.</p>
                                <a href="https://viampex.com.br" target="_blank" class="link-button">
                                    Veja o projeto no ar <ArrowUpRight :size="20"/>
                                </a>
                            </li>
                        </div>

                        <div class="card-standard">
                            <li>
                                <h3>Gerador de QR Codes</h3>
                                <p>Crie QR Codes personalizados de forma rápida e fácil para compartilhar links e muito mais.</p>
                                <a href="https://qrcodegenerator.eduardobrito.dev" target="_blank" class="link-button">
                                    Veja o projeto no ar <ArrowUpRight :size="20"/>
                                </a>
                            </li>
                        </div>

                        <!-- Redes sociais -->
                        <div class="section-title">
                            <h2>Redes sociais</h2>
                        </div>

                        <div class="card-standard">
                            <li>
                                <h3>Acompanhe os meu artigos no DEV.to!</h3>
                                <p>Leia meus artigos sobre desenvolvimento front-end, dicas de carreira e novidades do mundo tech.</p>
                                <a href="https://dev.to/duduubas" target="_blank" class="link-button">
                                    Acesse o DEV.to <ArrowUpRight :size="20"/>
                                </a>
                            </li>
                        </div>

                        <div class="card-standard">
                            <li>
                                <h3>Me acompanhe no GitHub!</h3>
                                <p>Confira meus repositórios, projetos open source e contribuições para a comunidade de desenvolvimento.</p>
                                <a href="https://github.com/Duduubas" target="_blank" class="link-button">
                                    Acesse o GitHub <ArrowUpRight :size="20"/>
                                </a>
                            </li>
                        </div>

                        <div class="card-standard">
                            <li>
                                <h3>Me siga no LinkedIn!</h3>
                                <p>Vamos nos conectar no LinkedIn para trocar ideias, expandir nossa rede e explorar novas oportunidades juntos!</p>
                                <a href="https://linkedin.com/in/eduardobritoo" target="_blank" class="link-button">
                                    Acesse o LinkedIn <ArrowUpRight :size="20"/>
                                </a>
                            </li>
                        </div>

                        <div class="card-standard">
                            <li>
                                <h3>Contate-me pelo Discord!</h3>
                                <p>Entre em contato comigo pelo Discord para conversarmos sobre projetos, dúvidas ou parcerias!</p>
                                <a href="https://discord.com/users/522531030834610211" target="_blank" class="link-button">
                                    Acesse o Discord <ArrowUpRight :size="20"/>
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer>
            <div class="container">
                <p>Tecnologia por <a href="https://eduardobrito.dev">Eduardo Brito | Dev.</a></p>
            </div>
        </footer>
</template>

<script setup>
import { ArrowUpRight, Lock } from 'lucide-vue-next';
</script>

<style scoped>
.highlight-imersao {
    background: linear-gradient(90deg, #0ea0e4 0%, #ff65c1 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.link-button-imersao {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #2c2c2c; /* cinza escuro neutro */
    color: #999;
    font-weight: 600;
    padding: 12px 20px;
    border: 1px solid #444;
    border-radius: 999px;
    text-decoration: none;
    cursor: not-allowed;
    opacity: 0.6;
    transition: none;
    box-shadow: none;
    pointer-events: none; /* impede clique */
}
/* ===== SEÇÃO DO PERFIL ===== */
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 3rem 2rem 0;
    animation: fadeInUp 0.8s ease-out;
}

.header-content {
    padding: 0 2rem;
    max-width: 600px;
}

.profile-image {
    width: 184px;
    height: 184px;
    border-radius: 20%;
    object-fit: cover;
    border: 4px solid var(--color-blue);
    box-shadow: 0 8px 24px rgba(0, 123, 255, 0.3);
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-image:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(0, 123, 255, 0.4);
}

.header h1 {
    font-family: var(--font-h);
    font-size: var(--f6);
    margin-bottom: 1rem;
    background: linear-gradient(45deg, var(--color-blue), var(--color-blue-hover));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: left;
}

.header p {
    font-size: var(--f3);
    line-height: 1.6;
    color: var(--color-gray);
    font-family: var(--font-p);
    text-align: left;
}

/* ===== LINHA DIVISÓRIA ===== */
.header-divider {
    display: flex;
    justify-content: center;
    padding: 2rem;
}

.header-divider hr {
    border: none;
    border-top: 2px solid var(--color-white);
    width: 100%;
    max-width: 600px;
}

.section-call {
    color: var(--color-white);
    font-family: var(--font-p);
    font-size: var(--f3);
    text-align: center;
    margin-bottom: 2rem;
    padding: 0 1rem;
}

/* ===== SEÇÕES PRINCIPAIS ===== */
.main-section {
    padding: 0 1rem 2rem;
}

.container {
    display: flex;
    justify-content: center;
    width: 100%;
}

.links {
    width: 100%;
    max-width: 600px;
}

/* ===== LISTA DE LINKS ===== */
.link-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* ===== TÍTULOS DAS SEÇÕES ===== */
.section-title {
    text-align: center;
    margin: 2rem 0 1rem;
}

.section-title h2 {
    font-family: var(--font-h);
    font-size: var(--f5);
    color: var(--color-white);
}

.highlight-red {
    background: linear-gradient(45deg, var(--color-red), #ff6b6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.highlight-blue {
    color: var(--color-blue);
}

/* ===== CARDS PADRÃO ===== */
.card-standard,
.card-with-image {
    display: flex;
    width: 100%;
}

.card-standard li,
.card-with-image li {
    background: var(--color-cards);
    border-radius: 16px;
    padding: 1.5rem;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    overflow: hidden;
    position: relative;
    width: 100%;
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
}

/* ===== CARD COM IMAGEM ===== */
.card-with-image li {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    min-height: 200px;
}

.card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card-image { 
    width: 180px;
    height: 180px;
    padding: 10px;
    border-radius: 12px;
    border: 2px solid var(--color-blue);
    box-shadow: 0 8px 24px rgba(0, 123, 255, 0.2);
    transition: all 0.3s ease;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-image-alura img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* ===== EFEITOS HOVER ===== */
.card-standard li:hover,
.card-with-image li:hover {
    transform: translateY(-4px);
    border-color: var(--color-blue);
    box-shadow: 0 12px 32px rgba(0, 123, 255, 0.2);
}

.card-with-image li:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(0, 123, 255, 0.3);
}

/* ===== EFEITO DE BRILHO ===== */
.card-standard li::before,
.card-with-image li::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    transition: left 0.5s ease;
}

.card-standard li:hover::before,
.card-with-image li:hover::before {
    left: 100%;
}

/* ===== TEXTOS DOS CARDS ===== */
.card-standard h3 {
    font-family: var(--font-p);
    font-size: var(--f4);
    font-weight: 600;
    color: var(--color-white);
    margin-bottom: 0.5rem;
}

.card-standard p,
.card-with-image p {
    font-size: var(--f3);
    color: var(--color-gray);
    font-family: var(--font-p);
    line-height: 1.5;
    margin-bottom: 1rem;
}

.card-standard a {
    color: var(--color-white);
    font-family: var(--font-p);
    font-weight: 600;
    font-size: var(--f2);
}

/* ===== BOTÕES ===== */
.link-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, var(--color-blue), var(--color-blue-hover));
    color: var(--color-white);
    text-decoration: none;
    font-family: var(--font-p);
    padding: 15px 50px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(0, 123, 255, 0.3);
    position: relative;
    overflow: hidden;
    align-self: flex-start;
}

.link-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 123, 255, 0.4);
    background: linear-gradient(135deg, var(--color-blue-hover), var(--color-blue));
}

.link-button:active {
    transform: translateY(0);
}

/* ===== EFEITO PULSE NO CARD DE CONTATO ===== */
.card-contact .link-button {
    animation: pulse 2s infinite;
}

/* ===== FOOTER ===== */
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 260px;
    margin: 0 auto 10px;
}

footer .container {
    text-align: center;
    color: var(--color-gray);
    font-family: var(--font-p);
    font-weight: 600;
    background: linear-gradient(45deg, var(--color-blue), var(--color-blue-hover));
    color: var(--color-white);
    text-decoration: none;
    padding: 15px 0;
    border-radius: 20px;
    transition: color 0.3s ease;
}

footer .container a{
    color: var(--color-white);
}

footer .container a:hover {
    color: var(--color-black);
}

/* ===== ANIMAÇÕES ===== */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% {
        box-shadow: 0 4px 16px rgba(0, 123, 255, 0.3);
    }
    50% {
        box-shadow: 0 4px 16px rgba(0, 123, 255, 0.6);
    }
}

/* ===== RESPONSIVIDADE ===== */

/* Tablets */
@media (max-width: 768px) {
    .header {
        flex-direction: column;
        padding: 2rem 1rem 0;
    }
    
    .header-content {
        padding: 1rem 0 0;
    }
    
    .header h1 {
        font-size: 1.8rem;
    }
    
    .header p {
        font-size: 1rem;
    }
    
    .profile-image {
        width: 140px;
        height: 140px;
        margin-bottom: 1rem;
    }
    
    .header-divider hr {
        max-width: 100%;
    }
    
    .links {
        max-width: 100%;
    }
    
    .card-with-image li {
        flex-direction: column;
        flex-direction: column-reverse;
        gap: 2rem;
        min-height: auto;
    }
    
    .card-image {
        width: 100%;
        max-width: 250px;
        height: 180px;
        margin: 0 auto;
    }
    
    .card-standard li,
    .card-with-image li {
        padding: 1.2rem;
    }
    
    .section-title h2 {
        font-size: 1.3rem;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .header {
        padding: 1.5rem 1rem 0;
    }
    
    .header h1 {
        font-size: 1.5rem;
    }
    
    .header p {
        font-size: 0.9rem;
    }
    
    .profile-image {
        width: 120px;
        height: 120px;
    }
    
    .link-list {
        gap: 1rem;
    }
    
    .section-title {
        margin: 1.5rem 0 0.5rem;
    }
    
    .section-title h2 {
        font-size: 1.2rem;
    }
    
    .card-standard li,
    .card-with-image li {
        padding: 1rem;
    }
    
    .card-standard h3,
    .card-with-image h3 {
        font-size: 1.1rem;
    }
    
    .card-standard p,
    .card-with-image p {
        font-size: 0.85rem;
    }
    
    .link-button {
        padding: 0.7rem 1.2rem;
        font-size: 0.85rem;
    }
    
    .footer {
        padding: 1.5rem 1rem;
        font-size: 0.9rem;
    }
}

/* Mobile pequeno */
@media (max-width: 320px) {
    .header-content {
        padding: 0;
    }
    
    .profile-image {
        width: 100px;
        height: 100px;
    }
    
    .card-image {
        height: 120px;
    }
    
    .link-button {
        padding: 0.6rem 1rem;
        font-size: 0.8rem;
    }
}
</style>