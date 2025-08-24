<template>
        <!-- Seção principal de links -->
        <section class="main-section">
            <div class="container">
                <ul class="link-list">
                    <!-- Seção especial da Imersão -->
                    <div class="section-title">
                        <h2>Imersão <span class="highlight-gradient">dev_</span> - Agentes de <span class="highlight-gradient">IA</span></h2>
                    </div>

                    <li class="card">
                        <h3>Inscrições abertas!</h3>
                        <p>Garanta sua vaga gratuita na Imersão <strong>dev_</strong> com agentes de IA da <span class="highlight-blue">Alura</span>! Inscreva-se agora e participe desse evento exclusivo.</p>
                        <a href="https://www.alura.com.br/imersao-agentes-ia-google?utm_source=buzzlead&utm_medium=link&utm_content=RKKAJLW&utm_campaign=imersao-ia-com-código-google_inscricoes&utm_term=buzzlead" class="button">
                            Inscreva-se agora mesmo! <ArrowUpRight :size="20"/>
                        </a>
                    </li>

                    <!-- Loop das seções dinamicamente -->
                    <template v-for="secao in listaSecoes" :key="secao.id">
                        <div class="section-title">
                            <h2 v-html="secao.titulo"></h2>
                        </div>

                        <li v-for="card in secao.cards" :key="card.id" 
                            class="card" 
                            :class="{ 'card-contact': card.isContact }">
                            <h3 v-html="card.nome"></h3>
                            <p v-html="card.descricao"></p>
                            <a :href="card.link" 
                                :target="card.link.startsWith('mailto:') ? '_self' : '_blank'" 
                                class="button"
                                :class="{ 'button-disabled': card.disabled }">
                                {{ card.textoBotao }} 
                                <Lock v-if="card.disabled" :size="20" />
                                <ArrowUpRight v-else :size="20"/>
                            </a>
                        </li>
                    </template>
                </ul>
            </div>
        </section>
</template>

<script setup>
import { ArrowUpRight, Lock } from 'lucide-vue-next';

const listaSecoes = [
    {
        id: 1,
        titulo: 'Garanta sua vaga com desconto exclusivo na Alura!',
        cards: [
            {
                id: 1,
                nome: 'Desconto especial na <span class="highlight-blue">Alura</span>',
                descricao: 'Aproveite 15% OFF para estudar na principal escola de tecnologia do Brasil e impulsione sua carreira!',
                link: 'https://www.alura.com.br/indica-dev/duduubas',
                textoBotao: 'Resgate o desconto',
                disabled: false,
                isContact: false
            }
        ]
    },
    {
        id: 2,
        titulo: 'Sobre mim & contato',
        cards: [
            {
                id: 2,
                nome: 'Meu Portfólio',
                descricao: 'Veja meus principais projetos, experiências e saiba mais sobre minha trajetória.',
                link: 'https://eduardobrito.dev',
                textoBotao: 'Acesse meu portfólio',
                disabled: false,
                isContact: false
            },
            {
                id: 3,
                nome: 'Solicite um Orçamento',
                descricao: 'Precisa de um site, landing page ou solução personalizada? Envie uma mensagem e receba uma proposta sob medida para o seu projeto.',
                link: 'https://api.whatsapp.com/send/?phone=%2B5588996455127&text&type=phone_number&app_absent=0',
                textoBotao: 'Solicite um orçamento',
                disabled: false,
                isContact: true
            }
        ]
    },
    {
        id: 3,
        titulo: 'Principais projetos',
        cards: [
            {
                id: 4,
                nome: 'VIAMPEX',
                descricao: 'Plataforma online para emissão de certificados digitais.',
                link: 'https://viampex.com.br',
                textoBotao: 'Veja o projeto no ar',
                disabled: false,
                isContact: false
            },
            {
                id: 5,
                nome: 'Gerador de QR Codes',
                descricao: 'Crie QR Codes personalizados de forma rápida e fácil para compartilhar links e muito mais.',
                link: 'https://qrcodegenerator.eduardobrito.dev',
                textoBotao: 'Veja o projeto no ar',
                disabled: false,
                isContact: false
            }
        ]
    },
    {
        id: 4,
        titulo: 'Redes sociais',
        cards: [
            {
                id: 6,
                nome: 'Acompanhe os meu artigos no DEV.to!',
                descricao: 'Leia meus artigos sobre desenvolvimento front-end, dicas de carreira e novidades do mundo tech.',
                link: 'https://dev.to/duduubas',
                textoBotao: 'Acesse o DEV.to',
                disabled: false,
                isContact: false
            },
            {
                id: 7,
                nome: 'Me acompanhe no GitHub!',
                descricao: 'Confira meus repositórios, projetos open source e contribuições para a comunidade de desenvolvimento.',
                link: 'https://github.com/eduardobritodev',
                textoBotao: 'Acesse o GitHub',
                disabled: false,
                isContact: false
            },
            {
                id: 8,
                nome: 'Me siga no LinkedIn!',
                descricao: 'Vamos nos conectar no LinkedIn para trocar ideias, expandir nossa rede e explorar novas oportunidades juntos!',
                link: 'https://www.linkedin.com/in/eduardobritoo/',
                textoBotao: 'Acesse o LinkedIn',
                disabled: false,
                isContact: false
            },
            {
                id: 9,
                nome: 'Contate-me pelo Discord!',
                descricao: 'Entre em contato comigo pelo Discord para conversarmos sobre projetos, dúvidas ou parcerias!',
                link: 'https://discord.com/users/522531030834610211',
                textoBotao: 'Acesse o Discord',
                disabled: false,
                isContact: false
            }
        ]
    }
];
</script>

<style scoped>
/* ===== HIGHLIGHTS ===== */
.highlight-gradient {
    background: linear-gradient(90deg, #0ea0e4 0%, #ff65c1 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.highlight-blue {
    color: var(--color-blue);
}

/* ===== SEÇÕES PRINCIPAIS ===== */
.main-section {
    padding: 0 1rem 2rem;
}

.container {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}

/* ===== LISTA DE LINKS ===== */
.link-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
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

/* ===== CARDS ===== */
.card {
    background: var(--color-cards);
    border-radius: 16px;
    padding: 1.5rem;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    overflow: hidden;
    position: relative;
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
}

.card:hover {
    transform: translateY(-4px);
    border-color: var(--color-blue);
    box-shadow: 0 12px 32px rgba(0, 123, 255, 0.2);
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    transition: left 0.5s ease;
}

.card:hover::before {
    left: 100%;
}

.card h3 {
    font-family: var(--font-p);
    font-size: var(--f4);
    font-weight: 600;
    color: var(--color-white);
    margin-bottom: 0.5rem;
}

.card p {
    font-size: var(--f3);
    color: var(--color-gray);
    font-family: var(--font-p);
    line-height: 1.5;
    margin-bottom: 1rem;
}

/* ===== BOTÕES ===== */
.button {
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
    font-size: var(--f2);
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(0, 123, 255, 0.3);
    position: relative;
    overflow: hidden;
}

.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 123, 255, 0.4);
    background: linear-gradient(135deg, var(--color-blue-hover), var(--color-blue));
}

.button:active {
    transform: translateY(0);
}

.button-disabled {
    background: #2c2c2c;
    color: #999;
    border: 1px solid #444;
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
}

.button-disabled:hover {
    transform: none;
    box-shadow: none;
    background: #2c2c2c;
}

/* ===== EFEITO PULSE NO CARD DE CONTATO ===== */
.card-contact .button {
    animation: pulse 2s infinite;
}
</style>