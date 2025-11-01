// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== 
    // 导航栏功能
    // ==================== 
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // 滚动时添加阴影
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 汉堡菜单切换
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // 平滑滚动
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // 关闭移动端菜单
            navMenu.classList.remove('active');
            
            // 更新活动链接
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // ==================== 
    // 数字动画
    // ==================== 
    const statNumbers = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };

    const animateNumbers = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateNumber = () => {
                    current += increment;
                    if (current < target) {
                        entry.target.textContent = Math.floor(current);
                        requestAnimationFrame(updateNumber);
                    } else {
                        entry.target.textContent = target;
                    }
                };

                updateNumber();
                observer.unobserve(entry.target);
            }
        });
    };

    const numberObserver = new IntersectionObserver(animateNumbers, observerOptions);
    statNumbers.forEach(num => numberObserver.observe(num));

    // ==================== 
    // 团队成员渲染
    // ==================== 
    const teamGrid = document.getElementById('teamGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // 渲染团队成员
    function renderTeam(filter = 'all') {
        teamGrid.innerHTML = '';
        
        const filteredMembers = teamMembers.filter(member => {
            if (filter === 'all') return true;
            if (filter === 'leader') {
                return member.position.includes('负责人') || member.position.includes('Leader') || member.position.includes('leader');
            }
            return member.departments.some(dept => dept.includes(filter));
        });

        filteredMembers.forEach((member, index) => {
            const card = document.createElement('div');
            card.className = 'member-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            // 处理图片路径（如果图片不存在，使用默认占位符）
            const imagePath = member.image;
            
            card.innerHTML = `
                <img src="${imagePath}" 
                     alt="${member.name}" 
                     class="member-image"
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22250%22 height=%22250%22><rect fill=%22%23334155%22 width=%22250%22 height=%22250%22/><text x=%2250%%22 y=%2250%%22 fill=%22%2300d4ff%22 font-size=%2224%22 text-anchor=%22middle%22 dy=%22.3em%22>${member.name}</text></svg>'">
                <div class="member-info">
                    <h3 class="member-name">${member.name}</h3>
                    <p class="member-position">${member.position}</p>
                    <p class="member-department">${member.departments.join(' | ')}</p>
                    <div class="member-contact">
                        <div><i class="fas fa-phone"></i>${member.phone}</div>
                        <div><i class="fas fa-envelope"></i>${member.email}</div>
                    </div>
                    ${member.achievements || member.responsibilities ? `
                        <div class="member-achievements">
                            ${member.responsibilities ? `
                                <h4>核心职责</h4>
                                <p>${member.responsibilities}</p>
                            ` : ''}
                            ${member.achievements ? `
                                <h4>代表成果</h4>
                                <p>${member.achievements}</p>
                            ` : ''}
                        </div>
                    ` : ''}
                </div>
            `;
            
            teamGrid.appendChild(card);
        });
    }

    // 初始渲染
    renderTeam();

    // 过滤按钮事件
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            renderTeam(filter);
        });
    });

    // ==================== 
    // 滚动动画
    // ==================== 
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const scrollObserver = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1
    });

    // 为需要动画的元素添加初始样式
    const animateElements = document.querySelectorAll('.about-card, .dept-card, .highlight-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        scrollObserver.observe(el);
    });

    // ==================== 
    // 粒子背景效果（可选）
    // ==================== 
    function createParticles() {
        const hero = document.querySelector('.hero');
        const particlesCount = 50;
        
        for (let i = 0; i < particlesCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(0, 212, 255, 0.5);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${5 + Math.random() * 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            hero.appendChild(particle);
        }
    }

    // 添加浮动动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // 创建粒子（可选，可能影响性能）
    // createParticles();

    // ==================== 
    // 打字机效果（可选）
    // ==================== 
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // 可以为副标题添加打字机效果
    // const subtitle = document.querySelector('.subtitle');
    // if (subtitle) {
    //     const originalText = subtitle.textContent;
    //     typeWriter(subtitle, originalText, 50);
    // }
});