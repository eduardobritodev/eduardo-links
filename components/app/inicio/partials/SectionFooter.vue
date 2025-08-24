<template>
    <footer>
        <div class="container">
            <div class="content">
                <div class="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p>
                    Tenha sua própria página de links profissional
                </p>
                <a href="https://eduardobrito.dev" class="cta-link">
                    <span>Crie agora com Eduardo Brito | Dev.</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
            <div class="gradient-border"></div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin: 0 auto 10px;
    padding: 0 20px;
}

footer .container {
    position: relative;
    width: 100%;
    background: linear-gradient(135deg, 
        rgba(0, 0, 0, 0.8) 0%, 
        rgba(59, 130, 246, 0.1) 50%, 
        rgba(0, 0, 0, 0.9) 100%);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 24px;
    overflow: hidden;
    transition: all 0.3s ease;
}

footer .container:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
}

footer .container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent);
}

.content {
    position: relative;
    z-index: 2;
    padding: 24px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
}

.icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--color-blue), var(--color-blue-hover));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.content p {
    color: var(--color-gray, #e5e7eb);
    font-family: var(--font-p, system-ui);
    font-size: var(--f1, 14px);
    font-weight: 500;
    margin: 0;
    line-height: 1.5;
    opacity: 0.9;
}

.cta-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, var(--color-blue, #3b82f6), var(--color-blue-hover, #2563eb));
    color: white;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 16px;
    font-family: var(--font-p, system-ui);
    font-size: var(--f1, 14px);
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
}

.cta-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
}

.cta-link:hover::before {
    left: 100%;
}

.cta-link:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
    background: linear-gradient(135deg, var(--color-blue-hover, #2563eb), var(--color-blue, #3b82f6));
}

.cta-link svg {
    transition: transform 0.3s ease;
}

.cta-link:hover svg {
    transform: translate(2px, -2px);
}

.gradient-border {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
        rgba(0, 0, 0, 0.5), 
        var(--color-blue, #3b82f6), 
        rgba(255, 255, 255, 0.8),
        var(--color-blue, #3b82f6), 
        rgba(0, 0, 0, 0.5)
    );
    background-size: 200% 100%;
    animation: gradientMove 3s ease-in-out infinite;
}

@keyframes gradientMove {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

/* Responsividade */
@media (max-width: 480px) {
    footer {
        padding: 0 15px;
    }
    
    .content {
        padding: 20px 16px;
        gap: 14px;
    }
    
    .icon {
        width: 40px;
        height: 40px;
    }
    
    .icon svg {
        width: 20px;
        height: 20px;
    }
    
    .cta-link {
        padding: 10px 20px;
        font-size: 13px;
    }
}
</style>