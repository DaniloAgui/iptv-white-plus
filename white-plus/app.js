// Modern JavaScript ES6+ for White Plus
// Advanced streaming platform with cutting-edge technologies

class WhitePlusApp {
    constructor() {
        this.isLoaded = false;
        this.initializeApp();
        this.setupServiceWorker();
    }

    async initializeApp() {
        await this.preloadCriticalResources();
        this.setupLoadingScreen();
        this.detectMobileDevice();
        this.setupCustomCursor();
        this.setupScrollEffects();
        this.setupCategoryFilters();
        this.setupBillingToggle();
        this.setupIntersectionObservers();
        this.setupGestureControls();
        this.setupPerformanceMonitoring();
        this.setupAccessibility();
        
        // Initialize after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.finalizeInit());
        } else {
            this.finalizeInit();
        }
    }

    detectMobileDevice() {
        const isMobile = window.innerWidth <= 768;
        const isSmallMobile = window.innerWidth <= 370;
        
        if (isMobile) {
            document.body.classList.add('mobile-device');
        }
        
        if (isSmallMobile) {
            document.body.classList.add('small-mobile-device');
            // Disable heavy animations on very small devices
            this.disableHeavyAnimations();
        }
        
        // Listen for orientation changes
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.detectMobileDevice();
                this.optimizeMobileLayout();
            }, 100);
        });
    }

    disableHeavyAnimations() {
        // Disable heavy animations for better performance on small devices
        const style = document.createElement('style');
        style.textContent = `
            .small-mobile-device * {
                animation-duration: 0.1s !important;
                transition-duration: 0.1s !important;
            }
            .small-mobile-device .particle,
            .small-mobile-device .neural-network,
            .small-mobile-device .cyber-grid {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }

    optimizeMobileLayout() {
        const screenWidth = window.innerWidth;
        
        if (screenWidth <= 370) {
            // Optimize for very small screens
            this.compactMobileLayout();
        } else if (screenWidth <= 480) {
            // Optimize for small mobile
            this.standardMobileLayout();
        }
    }

    compactMobileLayout() {
        // Hide less critical elements on very small screens
        const elementsToHide = document.querySelectorAll('.hero-badge, .tech-badges, .ai-visual');
        elementsToHide.forEach(el => {
            if (el) el.style.display = 'none';
        });

        // Simplify navigation
        const headerNav = document.querySelector('.header-nav');
        if (headerNav) {
            headerNav.style.display = 'none';
        }

        // Reduce grid columns for categories
        const categoriesGrid = document.querySelector('.categories-grid');
        if (categoriesGrid) {
            categoriesGrid.style.gridTemplateColumns = '1fr 1fr';
        }
    }

    standardMobileLayout() {
        // Standard mobile optimizations
        const categoriesGrid = document.querySelector('.categories-grid');
        if (categoriesGrid) {
            categoriesGrid.style.gridTemplateColumns = '1fr 1fr';
        }
    }

    async preloadCriticalResources() {
        const criticalImages = [
            'img/strim.jpg',
            'img/logoprincipal.webp',
            'img/net.jpeg',
            'img/disney.jpeg'
        ];

        const imagePromises = criticalImages.map(src => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = reject;
                img.src = src;
            });
        });

        try {
            await Promise.all(imagePromises);
            console.log('✅ Critical resources preloaded');
        } catch (error) {
            console.warn('⚠️ Some images failed to preload:', error);
        }
    }

    setupLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const progressBar = document.getElementById('progressBar');
        
        // Simulate loading progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            progressBar.style.width = `${Math.min(progress, 100)}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    document.body.style.cursor = 'none'; // Enable custom cursor
                    this.isLoaded = true;
                    
                    // Inicializar animações dos planos mobile
                    setTimeout(() => {
                        console.log('🚀 Iniciando animações mobile...');
                        try {
                            this.setupMobileOptimizations();
                            // DESABILITAR animações problemáticas temporariamente
                            // this.animateTextElements();
                            this.setupCardInteractions();
                            // this.animateCounters();
                            console.log('✅ Animações mobile iniciadas!');
                            
                            // Fallback adicional para garantir visibilidade
                            this.ensureMobileVisibility();
                        } catch (error) {
                            console.error('❌ Erro nas animações:', error);
                            // Fallback básico
                            this.ensureMobileVisibility();
                        }
                    }, 1000);
                }, 500);
            }
        }, 200);
    }

    setupCustomCursor() {
        const cursor = document.getElementById('cursor');
        if (!cursor) return;
        
        const cursorDot = cursor.querySelector('.cursor-dot');
        const cursorOutline = cursor.querySelector('.cursor-outline');
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth cursor animation
        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursorDot.style.left = `${cursorX}px`;
            cursorDot.style.top = `${cursorY}px`;
            cursorOutline.style.left = `${cursorX}px`;
            cursorOutline.style.top = `${cursorY}px`;
            
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Hover effects
        document.querySelectorAll('a, button, .category-card, .filter-btn').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    setupScrollEffects() {
        const scrollProgress = document.getElementById('scrollProgress');
        const header = document.querySelector('.header');
        
        let ticking = false;
        
        const updateScrollEffects = () => {
            const scrolled = window.pageYOffset;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrolled / maxScroll) * 100;
            
            // Update progress bar
            if (scrollProgress) {
                scrollProgress.style.width = `${scrollPercentage}%`;
            }
            
            // Header scroll effect
            if (scrolled > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
            
            // Parallax effects
            this.updateParallax(scrolled);
            
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }

    updateParallax(scrolled) {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.parallax || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    }



    setupCategoryFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const categoryCards = document.querySelectorAll('.category-card');
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                
                // Filter cards with smooth animation
                categoryCards.forEach((card, index) => {
                    setTimeout(() => {
                        if (filter === 'all' || card.dataset.category === filter) {
                            card.style.display = 'block';
                            card.style.animation = 'fadeInUp 0.5s ease forwards';
                        } else {
                            card.style.animation = 'fadeOutDown 0.3s ease forwards';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    }, index * 50);
                });
            });
        });
    }

    setupBillingToggle() {
        const billingToggle = document.getElementById('billingToggle');
        const toggleLabels = document.querySelectorAll('.toggle-label');
        const monthlyPrices = document.querySelectorAll('.price-monthly');
        const annualPrices = document.querySelectorAll('.price-annual');
        
        if (!billingToggle) return;
        
        let isAnnual = false;
        
        // INICIALIZAR ESTADO CORRETO
        console.log('🔄 Inicializando billing toggle...');
        
        // Garantir que inicia no modo mensal
        monthlyPrices.forEach(price => {
            price.style.display = 'flex';
        });
        
        annualPrices.forEach(price => {
            price.style.display = 'none';
        });
        
        // Inicializar botões corretamente
        document.querySelectorAll('.monthly-button').forEach(button => {
            button.style.display = 'inline-flex';
            button.style.visibility = 'visible';
            button.style.opacity = '1';
        });
        
        document.querySelectorAll('.annual-button').forEach(button => {
            button.style.display = 'none';
            button.style.visibility = 'hidden';
            button.style.opacity = '0';
        });
        
        billingToggle.addEventListener('click', () => {
            isAnnual = !isAnnual;
            
            // Toggle switch animation
            billingToggle.classList.toggle('active', isAnnual);
            
            // Update labels
            toggleLabels.forEach((label, index) => {
                label.classList.toggle('active', isAnnual ? index === 1 : index === 0);
            });
            
            // Switch pricing display
            monthlyPrices.forEach(price => {
                price.style.display = isAnnual ? 'none' : 'flex';
            });
            
            annualPrices.forEach(price => {
                price.style.display = isAnnual ? 'flex' : 'none';
            });

            // Show/hide annual notes
            const annualNotes = document.querySelectorAll('.annual-note');
            annualNotes.forEach(note => {
                note.style.display = isAnnual ? 'block' : 'none';
            });

            // TOGGLE ENTRE BOTÕES MENSAIS E ANUAIS - CONTROLE TOTAL
            const monthlyButtons = document.querySelectorAll('.monthly-button');
            const annualButtons = document.querySelectorAll('.annual-button');
            
            monthlyButtons.forEach(button => {
                if (isAnnual) {
                    // OCULTAR botões mensais completamente
                    button.style.display = 'none';
                    button.style.visibility = 'hidden';
                    button.style.opacity = '0';
                } else {
                    // MOSTRAR botões mensais
                    button.style.display = 'inline-flex';
                    button.style.visibility = 'visible';
                    button.style.opacity = '1';
                }
            });
            
            annualButtons.forEach(button => {
                if (isAnnual) {
                    // MOSTRAR botões anuais
                    button.style.display = 'inline-flex';
                    button.style.visibility = 'visible';
                    button.style.opacity = '1';
                } else {
                    // OCULTAR botões anuais completamente
                    button.style.display = 'none';
                    button.style.visibility = 'hidden';
                    button.style.opacity = '0';
                }
            });
            
            console.log(`🔄 Botões alterados para: ${isAnnual ? 'ANUAL' : 'MENSAL'}`);
            
            // DEBUG: Verificar se os elementos estão sendo encontrados
            console.log(`💰 Preços mensais encontrados: ${monthlyPrices.length}`);
            console.log(`💰 Preços anuais encontrados: ${annualPrices.length}`);
            console.log(`🔘 Botões mensais encontrados: ${monthlyButtons.length}`);
            console.log(`🔘 Botões anuais encontrados: ${annualButtons.length}`);
            
            // DEBUG: Status dos botões
            if (isAnnual) {
                console.log('✅ MODO ANUAL: Botões mensais OCULTOS, botões anuais VISÍVEIS');
            } else {
                console.log('✅ MODO MENSAL: Botões mensais VISÍVEIS, botões anuais OCULTOS');
            }
            
            // Add animation effect
            const planCards = document.querySelectorAll('.plan-card');
            planCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.transform = '';
                    }, 150);
                }, index * 100);
            });
        });
    }

    setupIntersectionObservers() {
        // Fade in animation observer
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Count up animation observer
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    countObserver.unobserve(entry.target);
                }
            });
        });

        // Apply observers
        document.querySelectorAll('.feature-card, .testimonial-card, .category-card, .passo, .ai-feature').forEach(el => {
            el.classList.add('fade-element');
            fadeObserver.observe(el);
        });

        document.querySelectorAll('.stat-number').forEach(counter => {
            countObserver.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            const suffix = element.textContent.replace(/[\d,]/g, '');
            element.textContent = Math.floor(current).toLocaleString() + suffix;
        }, 16);
    }

    setupGestureControls() {
        let startX, startY, startTime;
        
        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startTime = Date.now();
        });
        
        document.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const endTime = Date.now();
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            const deltaTime = endTime - startTime;
            
            // Swipe detection
            if (Math.abs(deltaX) > 50 && deltaTime < 300) {
                if (deltaX > 0) {
                    // Swipe right - previous section
                    this.navigateSection(-1);
                } else {
                    // Swipe left - next section
                    this.navigateSection(1);
                }
            }
            
            startX = startY = null;
        });
    }

    navigateSection(direction) {
        const sections = document.querySelectorAll('section');
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        });
        
        if (currentSection) {
            const currentIndex = Array.from(sections).indexOf(currentSection);
            const targetIndex = currentIndex + direction;
            
            if (targetIndex >= 0 && targetIndex < sections.length) {
                sections[targetIndex].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }

    setupPerformanceMonitoring() {
        // Performance API monitoring
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('📊 Performance Metrics:', {
                    'DOM Load': `${perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart}ms`,
                    'Page Load': `${perfData.loadEventEnd - perfData.loadEventStart}ms`,
                    'TTFB': `${perfData.responseStart - perfData.requestStart}ms`
                });
            });
        }
    }

    setupAccessibility() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
            
            if (e.key === 'Escape') {
                // Close any open modals or menus
                document.querySelectorAll('.modal, .menu').forEach(el => {
                    el.classList.remove('active');
                });
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    async setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.register('/sw.js');
                console.log('✅ Service Worker registered:', registration);
            } catch (error) {
                console.warn('⚠️ Service Worker registration failed:', error);
            }
        }
    }

    finalizeInit() {
        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            .fade-element {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            .fade-element.fade-in {
                opacity: 1;
                transform: translateY(0);
            }
            
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
            
            @keyframes fadeOutDown {
                from {
                    opacity: 1;
                    transform: translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateY(30px);
                }
            }
            
            .keyboard-navigation *:focus {
                outline: 2px solid #667eea !important;
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(style);

        // Initialize smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Setup FAB menu
        this.setupFAB();
        
        // Setup PWA install
        this.setupPWAInstall();
        
        // Setup Easter Egg
        this.setupEasterEgg();
        
        // Setup Web Share API
        this.setupWebShare();

        console.log('🚀 White Plus App initialized successfully!');
    }

    setupFAB() {
        const fabMain = document.getElementById('fabMain');
        const fabMenu = document.getElementById('fabMenu');
        
        if (!fabMain || !fabMenu) return;
        
        fabMain.addEventListener('click', () => {
            fabMain.classList.toggle('active');
            fabMenu.classList.toggle('active');
        });
        
        // Close FAB when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.fab-container')) {
                fabMain.classList.remove('active');
                fabMenu.classList.remove('active');
            }
        });
    }

    setupPWAInstall() {
        let deferredPrompt;
        const installBtn = document.getElementById('installBtn');
        
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            
            if (installBtn) {
                installBtn.style.display = 'flex';
                
                installBtn.addEventListener('click', async () => {
                    if (deferredPrompt) {
                        deferredPrompt.prompt();
                        const { outcome } = await deferredPrompt.userChoice;
                        console.log(`PWA install prompt outcome: ${outcome}`);
                        deferredPrompt = null;
                        installBtn.style.display = 'none';
                    }
                });
            }
        });
        
        window.addEventListener('appinstalled', () => {
            console.log('✅ PWA installed successfully');
            if (installBtn) {
                installBtn.style.display = 'none';
            }
        });
    }

    setupEasterEgg() {
        const konamiCode = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];
        
        let konamiIndex = 0;
        
        document.addEventListener('keydown', (e) => {
            if (e.code === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    this.activateEasterEgg();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
        
        // Alternative: Click sequence on logo
        const logo = document.querySelector('.header-logo');
        let clickCount = 0;
        
        if (logo) {
            logo.addEventListener('click', () => {
                clickCount++;
                if (clickCount >= 5) {
                    this.activateEasterEgg();
                    clickCount = 0;
                }
                
                setTimeout(() => {
                    clickCount = 0;
                }, 3000);
            });
        }
    }

    activateEasterEgg() {
        const easterEgg = document.getElementById('easterEgg');
        if (easterEgg) {
            easterEgg.classList.add('active');
            
            // Confetti effect
            this.createConfetti();
            
            // Close on button click or ESC
            const closeEgg = () => {
                easterEgg.classList.remove('active');
            };
            
            easterEgg.querySelector('.egg-btn').addEventListener('click', closeEgg);
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeEgg();
                }
            }, { once: true });
            
            easterEgg.addEventListener('click', (e) => {
                if (e.target === easterEgg) {
                    closeEgg();
                }
            });
        }
    }

    createConfetti() {
        const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
        
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.zIndex = '10002';
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                
                document.body.appendChild(confetti);
                
                const fallAnimation = confetti.animate([
                    { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
                ], {
                    duration: 3000 + Math.random() * 2000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                });
                
                fallAnimation.onfinish = () => {
                    document.body.removeChild(confetti);
                };
            }, i * 50);
        }
    }

    setupWebShare() {
        const shareBtn = document.getElementById('shareBtn');
        
        if (shareBtn && navigator.share) {
            shareBtn.addEventListener('click', async () => {
                try {
                    await navigator.share({
                        title: 'White Plus - O Futuro do Streaming',
                        text: 'Descubra mais de 60.000 conteúdos em 4K por apenas R$19,90/mês!',
                        url: window.location.href
                    });
                    console.log('✅ Content shared successfully');
                } catch (error) {
                    console.log('❌ Error sharing:', error);
                    this.fallbackShare();
                }
            });
        } else if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                this.fallbackShare();
            });
        }
    }

    fallbackShare() {
        const url = window.location.href;
        const text = 'Confira o White Plus - O Futuro do Streaming!';
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(`${text} ${url}`).then(() => {
                this.showToast('Link copiado para a área de transferência!');
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = `${text} ${url}`;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showToast('Link copiado!');
        }
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--gradient-primary);
            color: white;
            padding: 12px 24px;
            border-radius: 25px;
            z-index: 10000;
            font-weight: 500;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }

    // Função para dar vida às letras e números dos planos mobile
    animateTextElements() {
        console.log('🎨 Animando elementos de texto...');
        
        // Animar títulos dos planos (letras individuais)
        const planNames = document.querySelectorAll('.plan-name');
        console.log(`📝 Encontrados ${planNames.length} títulos de planos`);
        
        planNames.forEach((name, planIndex) => {
            if (!name.dataset.animated) {
                name.dataset.animated = 'true';
                this.animateLetters(name);
            }
        });

        // Efeito de partículas nos cards (simplificado para melhor performance)
        const cards = document.querySelectorAll('.plan-card');
        console.log(`💳 Encontrados ${cards.length} cards de planos`);
        
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('card-animated');
            }, index * 200);
        });
    }

    // Criar efeitos de partículas flutuantes
    createParticleEffects() {
        const cards = document.querySelectorAll('.plan-card');
        
        cards.forEach(card => {
            // Criar múltiplas partículas por card
            for (let i = 0; i < 3; i++) {
                const particle = document.createElement('div');
                particle.className = 'floating-particle';
                particle.style.cssText = `
                    position: absolute;
                    width: 3px;
                    height: 3px;
                    background: ${this.getRandomColor()};
                    border-radius: 50%;
                    pointer-events: none;
                    opacity: 0.6;
                    animation: particle-float-${i + 1} ${4 + i}s ease-in-out infinite;
                    animation-delay: ${i * 0.5}s;
                    top: ${20 + (i * 30)}%;
                    left: ${10 + (i * 25)}%;
                `;
                card.appendChild(particle);
            }
        });

        // Adicionar keyframes dinâmicos para partículas
        this.addParticleKeyframes();
    }

    // Cores aleatórias para partículas
    getRandomColor() {
        const colors = [
            '#38bdf8', '#8b5cf6', '#ec4899', '#10b981', 
            '#f59e0b', '#ef4444', '#06b6d4', '#84cc16'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Adicionar keyframes CSS dinamicamente
    addParticleKeyframes() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particle-float-1 {
                0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
                25% { transform: translateY(-15px) translateX(5px); opacity: 1; }
                50% { transform: translateY(-25px) translateX(-8px); opacity: 0.8; }
                75% { transform: translateY(-10px) translateX(10px); opacity: 1; }
            }
            
            @keyframes particle-float-2 {
                0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.4; }
                33% { transform: translateY(-20px) translateX(-10px) rotate(120deg); opacity: 0.8; }
                66% { transform: translateY(-30px) translateX(15px) rotate(240deg); opacity: 1; }
            }
            
            @keyframes particle-float-3 {
                0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.5; }
                50% { transform: translateY(-35px) translateX(-5px) scale(1.5); opacity: 0.9; }
            }
        `;
        document.head.appendChild(style);
    }

    // Efeitos especiais ao hover nos cards
    setupCardInteractions() {
        const cards = document.querySelectorAll('.plan-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Intensificar animações
                const letters = card.querySelectorAll('.plan-name span');
                const numbers = card.querySelectorAll('.amount span');
                
                letters.forEach(letter => {
                    letter.style.animation = 'letter-dance 0.5s ease-in-out infinite alternate';
                });
                
                numbers.forEach(number => {
                    number.style.animation = 'number-pulse 0.3s ease-in-out infinite alternate';
                });
            });
            
            card.addEventListener('mouseleave', () => {
                // Restaurar animações normais
                const letters = card.querySelectorAll('.plan-name span');
                const numbers = card.querySelectorAll('.amount span');
                
                letters.forEach(letter => {
                    letter.style.animation = '';
                });
                
                numbers.forEach(number => {
                    number.style.animation = '';
                });
            });
        });
    }

    // Contador animado para números - SEM ALTERAR OS PREÇOS REAIS
    animateCounters() {
        const counters = document.querySelectorAll('.amount');
        console.log(`💰 Encontrados ${counters.length} preços para animar`);
        
        counters.forEach((counter, index) => {
            // Salvar o preço original para não confundir o usuário
            const originalPrice = counter.textContent;
            counter.dataset.original = originalPrice;
            counter.dataset.originalText = originalPrice;
            
            console.log(`💰 Preço ${index + 1}: "${originalPrice}"`);
            
            // Só animar visualmente, SEM alterar o conteúdo
            setTimeout(() => {
                this.animateNumbers(counter);
            }, 500 + (index * 200));
        });
    }

    // Detecção de dispositivo mobile e otimizações
    setupMobileOptimizations() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const isSmallScreen = window.innerWidth <= 480;
        
        console.log(`📱 Mobile: ${isMobile}, Tela pequena: ${isSmallScreen}, Largura: ${window.innerWidth}`);
        
        // Sempre aplicar otimizações se for tela pequena
        if (isMobile || isSmallScreen) {
            document.body.classList.add('mobile-device');
            console.log('📱 Modo mobile ativado');
            
            // Reduzir animações se o usuário preferir
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.body.classList.add('reduced-motion');
                console.log('♿ Movimento reduzido ativado');
            }
            
            // Touch feedback melhorado
            this.setupTouchFeedback();
            
            // Lazy loading para melhor performance
            this.setupLazyAnimations();
        } else {
            // Para desktop, também aplicar algumas animações básicas
            document.body.classList.add('desktop-device');
            this.setupLazyAnimations();
        }
    }

    // Feedback táctil personalizado
    setupTouchFeedback() {
        const cards = document.querySelectorAll('.plan-card');
        const buttons = document.querySelectorAll('.plan-button');
        
        [...cards, ...buttons].forEach(element => {
            element.addEventListener('touchstart', (e) => {
                element.classList.add('touch-active');
                
                // Vibração suave se disponível
                if (navigator.vibrate) {
                    navigator.vibrate(10);
                }
            });
            
            element.addEventListener('touchend', (e) => {
                setTimeout(() => {
                    element.classList.remove('touch-active');
                }, 150);
            });
        });
    }

    // Carregamento lazy das animações para melhor performance
    setupLazyAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    
                    // Ativar animações específicas do card
                    setTimeout(() => {
                        this.activateCardAnimations(card);
                    }, 200);
                    
                    observer.unobserve(card);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '50px'
        });
        
        document.querySelectorAll('.plan-card').forEach(card => {
            observer.observe(card);
        });
    }

    // Ativar animações específicas de um card
    activateCardAnimations(card) {
        // Animar letras do título
        const planName = card.querySelector('.plan-name');
        if (planName && !planName.dataset.animated) {
            planName.dataset.animated = 'true';
            this.animateLetters(planName);
        }
        
        // Animar números do preço
        const amount = card.querySelector('.amount');
        if (amount && !amount.dataset.animated) {
            amount.dataset.animated = 'true';
            this.animateNumbers(amount);
        }
        
        // Animar features
        const features = card.querySelectorAll('.feature-item');
        features.forEach((feature, index) => {
            setTimeout(() => {
                feature.classList.add('animate-in');
            }, index * 200);
        });
    }

    // Animação específica para letras
    animateLetters(element) {
        const text = element.textContent;
        
        // NÃO apagar o conteúdo, apenas adicionar animação
        if (!element.dataset.lettersAnimated) {
            element.dataset.lettersAnimated = 'true';
            
            // Aplicar animação CSS diretamente no elemento
            element.style.cssText += `
                animation: title-glow 2s ease-out forwards;
                background: linear-gradient(45deg, #ffffff, #38bdf8, #ffffff);
                background-size: 200% 200%;
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: text-shine 2s ease-in-out infinite;
            `;
            
            console.log(`✨ Título animado: ${text}`);
        }
    }

    // Animação específica para números - MANTÉM PREÇOS CORRETOS
    animateNumbers(element) {
        const originalText = element.textContent;
        
        // NÃO apagar o conteúdo, apenas adicionar animação
        if (!element.dataset.numbersAnimated) {
            element.dataset.numbersAnimated = 'true';
            
            // Salvar o texto original
            element.dataset.originalText = originalText;
            
            // Aplicar animação CSS diretamente no elemento
            element.style.cssText += `
                animation: price-reveal 1.5s ease-out forwards;
                color: #10b981;
                font-weight: 900;
                text-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
            `;
            
            console.log(`💰 Preço animado: ${originalText}`);
        }
    }

    // Função de fallback para garantir visibilidade mobile
    ensureMobileVisibility() {
        console.log('🔧 Aplicando fallback de visibilidade mobile...');
        
        const plansSection = document.querySelector('.plans-section');
        if (plansSection) {
            plansSection.style.display = 'block';
            plansSection.style.visibility = 'visible';
            plansSection.style.opacity = '1';
        }
        
        const planCards = document.querySelectorAll('.plan-card');
        planCards.forEach((card, index) => {
            card.style.display = 'block';
            card.style.visibility = 'visible';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            
            // Aplicar animação simples
            setTimeout(() => {
                card.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }, index * 200);
        });
        
        const planNames = document.querySelectorAll('.plan-name');
        const amounts = document.querySelectorAll('.amount');
        const currencies = document.querySelectorAll('.currency');
        const periods = document.querySelectorAll('.period');
        
        // Garantir que TODOS os elementos de preço apareçam
        [...planNames, ...amounts, ...currencies, ...periods].forEach(element => {
            if (element) {
                element.style.display = 'inline-block';
                element.style.visibility = 'visible';
                element.style.opacity = '1';
                element.style.color = element.classList.contains('amount') ? '#10b981' : 
                                      element.classList.contains('currency') ? '#64748b' :
                                      element.classList.contains('period') ? '#64748b' : '#ffffff';
                
                // Log do conteúdo para debug
                console.log(`💰 Elemento: ${element.className}, Conteúdo: "${element.textContent}"`);
            }
        });
        
        // Verificar se há preços vazios e restaurar
        amounts.forEach(amount => {
            if (!amount.textContent.trim()) {
                const originalText = amount.dataset.originalText || amount.dataset.original;
                if (originalText) {
                    amount.textContent = originalText;
                    console.log(`🔧 Preço restaurado: ${originalText}`);
                }
            }
        });
        
        console.log('✅ Fallback de visibilidade aplicado');
    }
}

// Initialize the app
const app = new WhitePlusApp();

// Make app globally available for debugging
window.WhitePlus = app;

// Export for module usage
export default WhitePlusApp;