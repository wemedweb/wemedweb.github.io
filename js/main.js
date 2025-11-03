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
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

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

    // ==================== 
    // 渲染研究成果统计
    // ==================== 
    function renderAchievementsStats() {
        if (!achievementsStats) return;
        
        const statsContainer = document.querySelector('.achievements-stats');
        if (!statsContainer) return;
        
        statsContainer.innerHTML = '';
        
        Object.values(achievementsStats).forEach(stat => {
            const statCard = document.createElement('div');
            statCard.className = 'stat-card';
            
            statCard.innerHTML = `
                <i class="fas ${stat.icon}"></i>
                <div class="stat-number" data-target="${stat.value}">0</div>
                <p>${stat.label}</p>
                <span class="stat-detail">${stat.detail}</span>
            `;
            
            statsContainer.appendChild(statCard);
        });
        
        // 重新初始化数字动画
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(num => numberObserver.observe(num));
    }

    // ==================== 
    // 渲染代表性成果
    // ==================== 
    function renderHighlightAchievements() {
        if (!highlightAchievements) return;
        
        const highlightGrid = document.querySelector('.highlight-grid');
        if (!highlightGrid) return;
        
        highlightGrid.innerHTML = '';
        
        highlightAchievements.forEach((achievement, index) => {
            const card = document.createElement('div');
            card.className = 'highlight-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                <div class="highlight-tag">${achievement.tag}</div>
                <h4>${achievement.title}</h4>
                <p>${achievement.description}</p>
                <p class="highlight-author">${achievement.author}</p>
                ${achievement.date ? `<p class="highlight-date">${achievement.date}</p>` : ''}
            `;
            
            highlightGrid.appendChild(card);
        });
    }

    // ==================== 
    // 渲染首页最新动态
    // ==================== 
    function renderHeroNews() {
        if (!newsArticles) return;
        
        const heroNewsList = document.getElementById('heroNewsList');
        if (!heroNewsList) return;
        
        heroNewsList.innerHTML = '';
        
        newsArticles.forEach((article, index) => {
            const newsItem = document.createElement('div');
            newsItem.className = 'hero-news-item';
            newsItem.style.animationDelay = `${index * 0.1}s`;
            
            const linkContent = article.link ? `
                <a href="${article.link}" 
                   class="hero-news-link" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    阅读全文 <i class="fas fa-external-link-alt"></i>
                </a>
            ` : '';
            
            newsItem.innerHTML = `
                <div class="hero-news-date">
                    <span class="day">${article.date.day}</span>
                    <span class="month">${article.date.month}</span>
                </div>
                <div class="hero-news-info">
                    <h4>${article.title}</h4>
                    <p>${article.description}</p>
                    ${linkContent}
                </div>
            `;
            
            heroNewsList.appendChild(newsItem);
        });
    }

    // ==================== 
    // 渲染首页微信二维码
    // ==================== 
    function renderHeroWeChatQR() {
        if (!wechatInfo) return;
        
        const qrCodeImage = document.getElementById('heroQrCodeImage');
        
        if (qrCodeImage && wechatInfo.qrCodeUrl) {
            qrCodeImage.src = wechatInfo.qrCodeUrl;
            qrCodeImage.style.display = 'block';
            
            // 隐藏占位符
            const placeholder = qrCodeImage.nextElementSibling;
            if (placeholder && placeholder.classList.contains('fa-qrcode')) {
                placeholder.style.display = 'none';
                const placeholderText = placeholder.nextElementSibling;
                if (placeholderText) {
                    placeholderText.style.display = 'none';
                }
            }
        }
    }

    // ==================== 
    // 团队成员渲染
    // ==================== 
    const teamGrid = document.getElementById('teamGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // 渲染团队成员
    function renderTeam(filter = 'all') {
        if (!teamGrid) return;
        
        teamGrid.innerHTML = '';
        
        const filteredMembers = teamMembers.filter(member => {
            if (filter === 'all') return true;
            if (filter === 'leader') {
                return member.departments.includes('实验室负责人');
            }
            return member.departments.some(dept => dept.includes(filter));
        });

        filteredMembers.forEach((member, index) => {
            const card = document.createElement('div');
            card.className = 'member-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            // 处理图片路径
            const imagePath = member.image;
            
            // 成果展开/收起功能
            const achievementsId = `achievements-${index}`;
            const hasAchievements = member.achievements && member.achievements.trim() !== '';
            
            card.innerHTML = `
                <img src="${imagePath}" 
                     alt="${member.name}" 
                     class="member-image"
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22250%22 height=%22250%22><rect fill=%22%23f1f5f9%22 width=%22250%22 height=%22250%22/><text x=%2250%%22 y=%2250%%22 fill=%22%230ea5e9%22 font-size=%2224%22 text-anchor=%22middle%22 dy=%22.3em%22>${member.name}</text></svg>'">
                <div class="member-info">
                    <h3 class="member-name">${member.name}</h3>
                    <p class="member-position">${member.position}</p>
                    <p class="member-department">${member.departments.join(' | ')}</p>
                    ${member.education ? `<p class="member-education"><i class="fas fa-graduation-cap"></i> ${member.education}</p>` : ''}
                    <div class="member-contact">
                        <div><i class="fas fa-envelope"></i>${member.email}</div>
                    </div>
                    ${member.introduction ? `
                        <div class="member-introduction">
                            <h4>个人简介</h4>
                            <p>${member.introduction}</p>
                        </div>
                    ` : ''}
                    ${member.responsibilities ? `
                        <div class="member-responsibilities">
                            <h4>主要职责</h4>
                            <p>${member.responsibilities}</p>
                        </div>
                    ` : ''}
                    ${hasAchievements ? `
                        <div class="member-achievements-section">
                            <h4 class="achievements-toggle" onclick="toggleAchievements('${achievementsId}')">
                                主要成果 <i class="fas fa-chevron-down"></i>
                            </h4>
                            <div id="${achievementsId}" class="achievements-content" style="display: none;">
                                <pre>${member.achievements}</pre>
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
            
            teamGrid.appendChild(card);
        });
    }

    // 全局函数：展开/收起成果
    window.toggleAchievements = function(id) {
        const content = document.getElementById(id);
        const toggle = content.previousElementSibling;
        const icon = toggle.querySelector('i');
        
        if (content.style.display === 'none') {
            content.style.display = 'block';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            content.style.display = 'none';
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    };

    // 初始渲染
    if (typeof teamMembers !== 'undefined') {
        renderTeam();
    }

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

    // 页面加载时渲染所有内容
    renderAchievementsStats();
    renderHighlightAchievements();
    renderHeroNews();
    renderHeroWeChatQR();
});