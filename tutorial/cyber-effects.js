// ===== TUTORIAL CYBER - WHITE PLUS JAVASCRIPT =====
// Sistema Avançado de Efeitos Visuais e Interatividade

class CyberTutorial {
    constructor() {
        this.isReady = false;
        this.matrixInterval = null;
        this.cursorTrail = [];
        this.particleCount = 50;
        
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        console.log('🚀 CYBER TUTORIAL SYSTEM ONLINE');
        
        // Inicializar todos os sistemas
        this.createCustomCursor();
        this.initMatrixRain();
        this.createNeuralNetwork();
        this.initParticleEffects();
        this.setupNavigationEffects();
        this.initProgressBars();
        this.createHologramEffects();
        this.setupInteractivity();
        this.initSystemStatus();
        this.setupAnimationControls();
        
        this.isReady = true;
        this.displayBootSequence();
    }

    // ===== CURSOR PERSONALIZADO =====
    createCustomCursor() {
        // Remover cursor padrão em desktop
        if (window.innerWidth > 768) {
            // Criar elementos do cursor
            const cursor = document.createElement('div');
            cursor.className = 'custom-cursor';
            
            const dot = document.createElement('div');
            dot.className = 'cursor-dot';
            
            const ring = document.createElement('div');
            ring.className = 'cursor-ring';
            
            cursor.appendChild(dot);
            cursor.appendChild(ring);
            document.body.appendChild(cursor);
            
            // Controle de movimento
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;
            
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
            
            // Animação suave
            const animateCursor = () => {
                cursorX += (mouseX - cursorX) * 0.1;
                cursorY += (mouseY - cursorY) * 0.1;
                
                cursor.style.left = cursorX + 'px';
                cursor.style.top = cursorY + 'px';
                
                requestAnimationFrame(animateCursor);
            };
            animateCursor();
            
            // Efeitos de hover
            const hoverElements = document.querySelectorAll('a, button, .cyber-card, .app-node, .device-card');
            hoverElements.forEach(element => {
                element.addEventListener('mouseenter', () => {
                    ring.style.transform = 'translate(-50%, -50%) scale(1.5)';
                    ring.style.borderColor = '#00f5ff';
                });
                
                element.addEventListener('mouseleave', () => {
                    ring.style.transform = 'translate(-50%, -50%) scale(1)';
                    ring.style.borderColor = 'rgba(0, 245, 255, 0.3)';
                });
            });
        }
    }

    // ===== MATRIX RAIN DINÂMICO =====
    initMatrixRain() {
        const matrixContainer = document.querySelector('.matrix-rain');
        if (!matrixContainer) return;
        
        const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?';
        const columns = Math.floor(window.innerWidth / 20);
        
        // Limpar conteúdo existente
        matrixContainer.innerHTML = '';
        
        for (let i = 0; i < columns; i++) {
            const span = document.createElement('span');
            span.style.left = i * 20 + 'px';
            span.style.animationDuration = (Math.random() * 3 + 2) + 's';
            span.style.animationDelay = Math.random() * 2 + 's';
            matrixContainer.appendChild(span);
        }
        
        // Atualizar caracteres continuamente
        this.matrixInterval = setInterval(() => {
            const spans = matrixContainer.querySelectorAll('span');
            spans.forEach(span => {
                if (Math.random() > 0.95) {
                    span.textContent = characters[Math.floor(Math.random() * characters.length)];
                }
            });
        }, 100);
    }

    // ===== REDE NEURAL DINÂMICA =====
    createNeuralNetwork() {
        const neuralBg = document.querySelector('.neural-network-bg');
        if (!neuralBg) return;
        
        // Criar conexões dinâmicas
        const connections = 8;
        for (let i = 0; i < connections; i++) {
            const connection = document.createElement('div');
            connection.className = 'neural-connection dynamic-connection';
            
            const angle = (360 / connections) * i;
            const length = Math.random() * 200 + 100;
            
            connection.style.width = length + 'px';
            connection.style.transform = `rotate(${angle}deg)`;
            connection.style.left = '50%';
            connection.style.top = '50%';
            connection.style.transformOrigin = '0 50%';
            connection.style.animationDelay = (i * 0.5) + 's';
            
            neuralBg.appendChild(connection);
        }
        
        // Pulsos neurais
        setInterval(() => {
            const nodes = document.querySelectorAll('.neural-node');
            const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
            if (randomNode) {
                randomNode.style.boxShadow = '0 0 30px #00f5ff, 0 0 60px #00f5ff';
                setTimeout(() => {
                    randomNode.style.boxShadow = '0 0 20px var(--cyber-blue)';
                }, 500);
            }
        }, 2000);
    }

    // ===== SISTEMA DE PARTÍCULAS =====
    initParticleEffects() {
        const floatingElements = document.querySelector('.floating-elements');
        if (!floatingElements) return;
        
        for (let i = 0; i < this.particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'cyber-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: #00f5ff;
                border-radius: 50%;
                pointer-events: none;
                opacity: ${Math.random() * 0.5 + 0.3};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleDrift ${Math.random() * 20 + 10}s linear infinite;
            `;
            
            floatingElements.appendChild(particle);
        }
        
        // CSS para animação de partículas
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleDrift {
                0% { transform: translateY(0) rotate(0deg); }
                100% { transform: translateY(-100vh) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    // ===== EFEITOS DE NAVEGAÇÃO =====
    setupNavigationEffects() {
        const navProgress = document.querySelector('.progress-bar');
        const sections = document.querySelectorAll('.cyber-section');
        
        if (!navProgress || !sections.length) return;
        
        const updateProgress = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            
            navProgress.style.width = progress + '%';
        };
        
        window.addEventListener('scroll', updateProgress);
        
        // Efeito de escaneamento na navegação
        const navContainer = document.querySelector('.cyber-nav');
        if (navContainer) {
            setInterval(() => {
                navContainer.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.3)';
                setTimeout(() => {
                    navContainer.style.boxShadow = 'none';
                }, 200);
            }, 5000);
        }
    }

    // ===== BARRAS DE PROGRESSO INTERATIVAS =====
    initProgressBars() {
        const progressBars = document.querySelectorAll('.step-progress');
        
        progressBars.forEach((bar, index) => {
            const progressFill = bar.querySelector('::after') || bar;
            
            // Animação de carregamento
            setTimeout(() => {
                progressFill.style.animation = 'progressLoad 2s ease-in-out forwards';
            }, index * 500);
        });
        
        // CSS para animação de progresso
        const style = document.createElement('style');
        style.textContent = `
            @keyframes progressLoad {
                0% { width: 0%; }
                100% { width: 100%; }
            }
        `;
        document.head.appendChild(style);
    }

    // ===== EFEITOS HOLOGRÁFICOS =====
    createHologramEffects() {
        const holoElements = document.querySelectorAll('.hologram-logo, .device-hologram, .ai-avatar');
        
        holoElements.forEach(element => {
            // Criar linhas de escaneamento
            const scanLines = document.createElement('div');
            scanLines.className = 'holo-scan-lines';
            scanLines.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(0, 245, 255, 0.1) 2px,
                    rgba(0, 245, 255, 0.1) 4px
                );
                pointer-events: none;
                animation: scanMove 3s linear infinite;
            `;
            
            element.style.position = 'relative';
            element.appendChild(scanLines);
        });
        
        // CSS para movimento de escaneamento
        const style = document.createElement('style');
        style.textContent = `
            @keyframes scanMove {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(100%); }
            }
        `;
        document.head.appendChild(style);
    }

    // ===== INTERATIVIDADE AVANÇADA =====
    setupInteractivity() {
        // Efeitos de clique
        document.addEventListener('click', (e) => {
            this.createClickRipple(e.clientX, e.clientY);
        });
        
        // Efeitos de cards
        const cards = document.querySelectorAll('.cyber-card, .app-node, .device-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.activateCardEffects(card);
            });
            
            card.addEventListener('mouseleave', () => {
                this.deactivateCardEffects(card);
            });
        });
        
        // Botão de cópia
        const copyBtn = document.querySelector('.copy-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                const code = document.querySelector('.code-digits').textContent;
                navigator.clipboard.writeText(code).then(() => {
                    this.showNotification('Código copiado!', 'success');
                });
            });
        }
        
        // Apps recomendados
        const appNodes = document.querySelectorAll('.app-node');
        appNodes.forEach(node => {
            node.addEventListener('click', () => {
                this.highlightRecommended(node);
            });
        });
    }

    // ===== EFEITO DE CLIQUE =====
    createClickRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 20px;
            height: 20px;
            border: 2px solid #00f5ff;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 9999;
            animation: rippleEffect 0.6s ease-out forwards;
        `;
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // CSS para efeito ripple
        if (!document.querySelector('#ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.textContent = `
                @keyframes rippleEffect {
                    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
                    100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ===== ATIVAÇÃO DE EFEITOS DE CARD =====
    activateCardEffects(card) {
        // Efeito de energia
        const energyField = document.createElement('div');
        energyField.className = 'energy-field';
        energyField.style.cssText = `
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #00f5ff, #8a2be2, #00f5ff);
            border-radius: inherit;
            z-index: -1;
            animation: energyPulse 0.5s ease-in-out;
        `;
        
        card.style.position = 'relative';
        card.appendChild(energyField);
        
        // Som de hover (opcional)
        this.playHoverSound();
    }

    deactivateCardEffects(card) {
        const energyField = card.querySelector('.energy-field');
        if (energyField) {
            energyField.remove();
        }
    }

    // ===== SISTEMA DE STATUS =====
    initSystemStatus() {
        const statusElements = document.querySelectorAll('.status-value');
        const statusValues = [
            { element: 'servers', value: 'ONLINE', class: 'online' },
            { element: 'latency', value: '12ms', class: '' },
            { element: 'uptime', value: '99.9%', class: 'online' },
            { element: 'load', value: '34%', class: '' }
        ];
        
        statusElements.forEach((element, index) => {
            if (statusValues[index]) {
                element.textContent = statusValues[index].value;
                if (statusValues[index].class) {
                    element.classList.add(statusValues[index].class);
                }
            }
        });
        
        // Atualização periódica do status
        setInterval(() => {
            this.updateSystemStatus();
        }, 5000);
    }

    updateSystemStatus() {
        const latencyElement = document.querySelector('[data-status="latency"]');
        const loadElement = document.querySelector('[data-status="load"]');
        
        if (latencyElement) {
            const newLatency = Math.floor(Math.random() * 20) + 10;
            latencyElement.textContent = newLatency + 'ms';
        }
        
        if (loadElement) {
            const newLoad = Math.floor(Math.random() * 30) + 25;
            loadElement.textContent = newLoad + '%';
        }
    }

    // ===== CONTROLES DE ANIMAÇÃO =====
    setupAnimationControls() {
        // Detectar preferência de movimento reduzido
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        if (prefersReducedMotion.matches) {
            this.disableAnimations();
        }
        
        // Controle de performance
        const performanceObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.duration > 16) { // Mais que 16ms indica lag
                    this.optimizeAnimations();
                }
            }
        });
        
        try {
            performanceObserver.observe({ entryTypes: ['measure'] });
        } catch (e) {
            console.log('Performance Observer não suportado');
        }
    }

    disableAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }

    optimizeAnimations() {
        // Reduzir partículas
        const particles = document.querySelectorAll('.cyber-particle');
        particles.forEach((particle, index) => {
            if (index % 2 === 0) {
                particle.remove();
            }
        });
        
        // Reduzir frequência do Matrix
        if (this.matrixInterval) {
            clearInterval(this.matrixInterval);
            this.matrixInterval = setInterval(() => {
                // Lógica reduzida do Matrix
            }, 200); // Menos frequente
        }
    }

    // ===== NOTIFICAÇÕES =====
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `cyber-notification ${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 2rem;
            background: rgba(0, 0, 0, 0.9);
            border: 2px solid ${type === 'success' ? '#00ff41' : '#00f5ff'};
            border-radius: 10px;
            color: ${type === 'success' ? '#00ff41' : '#00f5ff'};
            font-family: 'JetBrains Mono', monospace;
            z-index: 10000;
            animation: notificationSlide 0.3s ease-out;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'notificationSlide 0.3s ease-in reverse';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        // CSS para animação de notificação
        if (!document.querySelector('#notification-style')) {
            const style = document.createElement('style');
            style.id = 'notification-style';
            style.textContent = `
                @keyframes notificationSlide {
                    0% { transform: translateX(100%); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ===== DESTACAR RECOMENDADO =====
    highlightRecommended(node) {
        // Remover destaque anterior
        document.querySelectorAll('.app-node').forEach(n => {
            n.classList.remove('highlighted');
        });
        
        // Adicionar destaque
        node.classList.add('highlighted');
        
        // Efeito visual
        const highlight = document.createElement('div');
        highlight.style.cssText = `
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            border: 3px solid #00ff41;
            border-radius: 20px;
            animation: highlightPulse 2s ease-in-out infinite;
            pointer-events: none;
        `;
        
        node.style.position = 'relative';
        node.appendChild(highlight);
        
        setTimeout(() => {
            highlight.remove();
            node.classList.remove('highlighted');
        }, 3000);
    }

    // ===== SOM DE HOVER (OPCIONAL) =====
    playHoverSound() {
        // Som sintético usando Web Audio API
        if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
            const audioContext = new (AudioContext || webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        }
    }

    // ===== SEQUÊNCIA DE BOOT =====
    displayBootSequence() {
        const bootMessages = [
            'INICIALIZANDO SISTEMA NEURAL...',
            'CONECTANDO SERVIDORES QUÂNTICOS...',
            'CALIBRANDO INTERFACE HOLOGRÁFICA...',
            'ATIVANDO PROTOCOLOS DE SEGURANÇA...',
            'SISTEMA ONLINE - WHITE PLUS TUTORIAL'
        ];
        
        const bootContainer = document.createElement('div');
        bootContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            font-family: 'JetBrains Mono', monospace;
            color: #00f5ff;
            font-size: 1.2rem;
        `;
        
        const bootText = document.createElement('div');
        bootText.style.textAlign = 'center';
        bootContainer.appendChild(bootText);
        document.body.appendChild(bootContainer);
        
        let messageIndex = 0;
        const showNextMessage = () => {
            if (messageIndex < bootMessages.length) {
                bootText.textContent = bootMessages[messageIndex];
                messageIndex++;
                setTimeout(showNextMessage, 800);
            } else {
                // Fade out
                bootContainer.style.transition = 'opacity 1s ease-out';
                bootContainer.style.opacity = '0';
                setTimeout(() => {
                    bootContainer.remove();
                }, 1000);
            }
        };
        
        setTimeout(showNextMessage, 500);
    }

    // ===== LIMPEZA =====
    destroy() {
        if (this.matrixInterval) {
            clearInterval(this.matrixInterval);
        }
        
        // Remover event listeners
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('click', this.handleClick);
        
        console.log('🔌 CYBER TUTORIAL SYSTEM OFFLINE');
    }
}

// ===== UTILITÁRIOS =====
class CyberUtils {
    static randomHex() {
        return Math.floor(Math.random() * 16777215).toString(16);
    }
    
    static createGlitchText(element, originalText) {
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789';
        let isGlitching = false;
        
        const glitch = () => {
            if (isGlitching) return;
            isGlitching = true;
            
            const glitchDuration = 100;
            const glitchFrames = 5;
            let frame = 0;
            
            const glitchInterval = setInterval(() => {
                if (frame < glitchFrames) {
                    element.textContent = originalText
                        .split('')
                        .map(char => Math.random() > 0.7 ? 
                            glitchChars[Math.floor(Math.random() * glitchChars.length)] : 
                            char
                        )
                        .join('');
                    frame++;
                } else {
                    element.textContent = originalText;
                    clearInterval(glitchInterval);
                    isGlitching = false;
                }
            }, glitchDuration / glitchFrames);
        };
        
        return glitch;
    }
    
    static hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
}

// ===== INICIALIZAÇÃO =====
let cyberTutorial;

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        cyberTutorial = new CyberTutorial();
    });
} else {
    cyberTutorial = new CyberTutorial();
}

// Limpeza quando a página for fechada
window.addEventListener('beforeunload', () => {
    if (cyberTutorial) {
        cyberTutorial.destroy();
    }
});

// Exposar para debug
window.CyberTutorial = CyberTutorial;
window.CyberUtils = CyberUtils;

console.log('🔮 CYBER TUTORIAL SCRIPT LOADED');