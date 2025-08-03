<template>
    <a :href="storeWhatsapp.abrirLink('Olá, gostaria de criar o meu website com você!')" target="_blank">
        <img src=".././../../assets/images/whatsapp-icon.svg" alt="whatsapp-icon">
        <span></span>
    </a>
</template>

<script setup>
import { useStoreWhatsapp } from '@/stores/storeWhatsapp'

const storeWhatsapp = useStoreWhatsapp()
</script>

<style scoped>
a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 10;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #208e47;
    box-shadow: 0 10px 20px 0 #208e4648;
    transition: all 0.3s;
    animation: mexendoBotao 3s linear infinite;
}

a:hover {
    background-color: #0a9d3d;
    box-shadow: 0 10px 20px 0 #208e467a;
}

@keyframes mexendoBotao {
    0% {
        background-color: #208e47;
        box-shadow: 0 10px 20px 0 #208e4648;
    }
    50% {
        background-color: #0a9d3d;
        box-shadow: 0 10px 20px 0 #208e467a;
    }
    100% {
        background-color: #208e47;
        box-shadow: 0 10px 20px 0 #208e4648;
    }
}

/* ESTILIZAÇÃO DO SVG (LOGO DO ZAP) */
a img {
    width: 40px;
    height: 40px;
    filter: brightness(0) invert(1);
    position: absolute;
    z-index: 2;
    transition: all 0.3s;
}

a:hover img {
    transform: scale(0.9);
}

a span {
    width: 80px;
    height: 80px;
    background-color: #1ca64c67;
    border-radius: 50px;
    position: absolute;
    transition: all 0.3s;
    z-index: 1;
    animation: mexendoBotaoDois 2s ease infinite;
}

@keyframes mexendoBotaoDois {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

a:hover span {
    background-color: #1ca64cb0;
}

/* Responsivo */
@media screen and (max-width: 1000px) {
    a {
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
    }

    a img {
        width: 25px;
        height: 25px;
    }

    a span {
        width: 60px;
        height: 60px;
    }
}
</style>