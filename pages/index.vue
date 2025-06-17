<template>
    <!-- Seção do perfil -->
    <section class="header">
        <div>
            <img src="../assets/images/eduardo.webp" alt="Foto de perfil" class="profile-image">
        </div>

        <div class="header-content">
            <h1>Bem-vindo aos meus links</h1>
            <p>Olá! Sou Eduardo Brito, desenvolvedor front-end focado em criar interfaces intuitivas e experiências interativas que elevam a navegação na web.</p>
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
                    <!-- Título da imersão -->
                    <div class="section-title">
                        <h2>A <span class="highlight-red">Imersão DevOps_</span> chegou na <span class="highlight-blue">Alura</span>!</h2>
                    </div>

                    <!-- Card com imagem -->
                    <div class="card-with-image">
                        <li>
                            <div class="card-content">
                                <h3>Faça a sua inscrição gratuitamente!</h3>
                                <p>Garanta sua vaga na Imersão DevOps da Alura e mergulhe no universo!</p>
                                <a href="https://alura.com.br/imersao-devops-google?utm_source=buzzlead&utm_medium=link&utm_content=MJNEJLX&utm_campaign=imersao-devops_inscrições&utm_term=buzzlead" target="_blank" class="link-button">
                                    Clique aqui <ArrowUpRight :size="20"/>
                                </a>
                            </div>
                            <div class="card-image-alura">
                                <img src="../assets//images/alura-imersao.webp" alt="Imagem dos instrutores imersão devops">
                            </div>
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

                    <!-- Principais projetos -->
                    <div class="section-title">
                        <h2>Principais projetos</h2>
                    </div>

                    <div class="card-standard">
                        <li>
                            <h3>CertifiPro</h3>
                            <p>Plataforma online para emissão de certificados digitais.</p>
                            <a href="https://certifipro.vercel.app" target="_blank" class="link-button">
                                Ver projeto no ar <ArrowUpRight :size="20"/>
                            </a>
                        </li>
                    </div>

                    <div class="card-standard">
                        <li>
                            <h3>Gerador de QR Codes</h3>
                            <p>Crie QR Codes personalizados de forma rápida e fácil para compartilhar links e muito mais.</p>
                            <a href="https://qrcodegenerator.eduardobrito.dev" target="_blank" class="link-button">
                                Ver projeto no ar <ArrowUpRight :size="20"/>
                            </a>
                        </li>
                    </div>

                    <!-- Redes sociais -->
                    <div class="section-title">
                        <h2>Redes sociais</h2>
                    </div>

                    <div class="card-standard card-contact">
                        <li>
                            <h3>Solicite um orçamento personalizado!</h3>
                            <p>Precisa de uma landing page? Envie um e-mail e receba um orçamento sem compromisso para o seu projeto.</p>
                            <a href="mailto:contato@eduardobrito.dev" class="link-button">
                                Clique aqui <ArrowUpRight :size="20"/>
                            </a>
                        </li>
                    </div>

                    <div class="card-standard">
                        <li>
                            <h3>Me acompanhe no GitHub!</h3>
                            <p>Acompanhe todos os meus projetos.</p>
                            <a href="https://github.com/Duduubas" target="_blank" class="link-button">
                                Clique aqui <ArrowUpRight :size="20"/>
                            </a>
                        </li>
                    </div>

                    <div class="card-standard">
                        <li>
                            <h3>Me siga no LinkedIn!</h3>
                            <p>Conecte-se comigo para oportunidades profissionais e networking.</p>
                            <a href="https://linkedin.com/in/eduardobritoo" target="_blank" class="link-button">
                                Clique aqui <ArrowUpRight :size="20"/>
                            </a>
                        </li>
                    </div>

                    <div class="card-standard">
                        <li>
                            <h3>Contate-me pelo Discord!</h3>
                            <p>Entre em contato comigo pelo Discord para conversarmos sobre projetos, dúvidas ou parcerias!</p>
                            <a href="https://discord.com/users/522531030834610211" target="_blank" class="link-button">
                                Clique aqui <ArrowUpRight :size="20"/>
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <p>Desenvolvido por <a href="https://eduardobrito.dev">Eduardo B.</a></p>
    </footer>
</template>

<script setup>

</script>

<style scoped>
/* ===== RESET E CONFIGURAÇÕES GLOBAIS ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ===== CONTAINER PRINCIPAL ===== */
.template {
    min-height: 100vh;
    background: linear-gradient(135deg, var(--color-black) 0%, #1a1a1a 100%);
    font-family: var(--font-montserrat);
    color: var(--color-white);
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
    border-radius: 50%;
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
    font-family: var(--font-heading);
    font-size: 2.2rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, var(--color-blue), var(--color-blue-hover));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.header p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--color-gray);
    font-family: var(--font-sans);
}

/* ===== LINHA DIVISÓRIA ===== */
.header-divider {
    display: flex;
    justify-content: center;
    padding: 2rem;
}

.header-divider hr {
    border: none;
    border-top: 2px solid var(--color-cards);
    width: 100%;
    max-width: 600px;
}

.section-call {
    color: var(--color-white);
    font-family: var(--font-montserrat);
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
    font-family: var(--font-heading);
    font-size: 1.5rem;
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

.card-image-alura { 
    width: 180px;
    height: 180px;
    padding: 10px;
    border-radius: 12px;
    border: 2px solid var(--color-red);
    box-shadow: 0 8px 24px rgba(206, 17, 17);
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
.card-standard h3,
.card-with-image h3 {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: var(--color-white);
    font-weight: 600;
}

.card-standard p,
.card-with-image p {
    font-size: 0.95rem;
    color: var(--color-gray);
    font-family: var(--font-sans);
    line-height: 1.5;
    margin-bottom: 1rem;
}

/* ===== BOTÕES ===== */
.link-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, var(--color-blue), var(--color-blue-hover));
    color: var(--color-white);
    text-decoration: none;
    font-family: var(--font-sans);
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
.footer {
    text-align: center;
    padding: 2rem;
    color: var(--color-gray);
    font-family: var(--font-sans);
}

.footer a {
    color: var(--color-blue);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer a:hover {
    color: var(--color-blue-hover);
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
    
    .header-divider {
        padding: 1.5rem;
    }
    
    .main-section {
        padding: 0 0.5rem 1.5rem;
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