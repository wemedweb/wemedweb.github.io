// main.js - 完整代码

// ==================== 
// 公告栏功能（支持超链接）
// ==================== 
let currentAnnouncementIndex = 0;
let announcementInterval = null;

// 显示公告
function showAnnouncement() {
    const announcementBar = document.getElementById('announcement');
    if (!announcementBar) return;
    
    const announcementText = announcementBar.querySelector('.announcement-text');
    const announcementLink = announcementBar.querySelector('.announcement-link');
    
    // 检查是否已关闭
    const closed = sessionStorage.getItem('announcementClosed');
    if (closed === 'true') return;
    
    // 获取当前语言的公告列表
    const currentAnnouncements = currentLanguage === 'zh' ? announcements : announcementsEn;

    if (!currentAnnouncements || currentAnnouncements.length === 0) {
        announcementBar.style.display = 'none';
        return;
    }

    const announcement = currentAnnouncements[currentAnnouncementIndex];
    
    // 设置公告文字
    if (announcementText) {
        announcementText.textContent = announcement.text;
    }
    
    // 设置链接
    if (announcementLink) {
        if (announcement.link) {
            announcementLink.href = announcement.link;
            announcementLink.textContent = announcement.linkText || (currentLanguage === 'zh' ? '查看详情' : 'View Details');
            announcementLink.style.display = 'inline';
            
            // 如果是外部链接，在新窗口打开
            if (announcement.link.startsWith('http')) {
                announcementLink.target = '_blank';
                announcementLink.rel = 'noopener noreferrer';
            } else {
                announcementLink.target = '_self';
            }
        } else {
            announcementLink.style.display = 'none';
        }
    }

    // 显示公告栏
    setTimeout(() => {
        announcementBar.classList.add('show');
        document.body.classList.add('announcement-active');
    }, 500);

    // 轮播到下一条
    currentAnnouncementIndex = (currentAnnouncementIndex + 1) % currentAnnouncements.length;
}

// 开始公告轮播
function startAnnouncementRotation() {
    // 清除之前的定时器
    if (announcementInterval) {
        clearInterval(announcementInterval);
    }
    
    // 立即显示第一条
    showAnnouncement();
    
    // 获取当前语言的公告列表
    const currentAnnouncements = currentLanguage === 'zh' ? announcements : announcementsEn;
    
    // 如果有多条公告，每5秒切换一次
    if (currentAnnouncements && currentAnnouncements.length > 1) {
        announcementInterval = setInterval(showAnnouncement, 5000);
    }
}

// 关闭公告
function closeAnnouncement() {
    const announcement = document.getElementById('announcement');
    if (announcement) {
        announcement.classList.remove('show');
        document.body.classList.remove('announcement-active');
    }
    if (announcementInterval) {
        clearInterval(announcementInterval);
    }
    sessionStorage.setItem('announcementClosed', 'true');
}

// ==================== 
// 全局变量：滚动观察器
// ==================== 
let scrollObserver = null;
let numberObserver = null;

// ==================== 
// 渲染研究部门（支持多语言）
// ==================== 
function renderDepartments() {
    const departmentsGrid = document.getElementById('departmentsGrid');
    if (!departmentsGrid) return;
    
    const deptData = translations[currentLanguage].departments.list;
    const departments = [
        { key: 'neuroscience', icon: 'fa-brain' },
        { key: 'cancer', icon: 'fa-disease' },
        { key: 'ai', icon: 'fa-robot' },
        { key: 'wbe', icon: 'fa-water' },
        { key: 'clinic', icon: 'fa-clinic-medical' },
        { key: 'database', icon: 'fa-database' }
    ];
    
    departmentsGrid.innerHTML = '';
    
    departments.forEach((dept, index) => {
        const data = deptData[dept.key];
        const card = document.createElement('div');
        card.className = 'dept-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        card.innerHTML = `
            <div class="dept-icon">
                <i class="fas ${dept.icon}"></i>
            </div>
            <h3>${data.name}</h3>
            <p class="dept-code">${data.code}</p>
            <p>${data.desc}</p>
        `;
        
        departmentsGrid.appendChild(card);
        
        // 添加滚动动画观察（如果观察器已存在）
        if (scrollObserver) {
            setTimeout(() => {
                scrollObserver.observe(card);
            }, 50);
        }
    });
}

// ==================== 
// 渲染团队过滤器（支持多语言）
// ==================== 
function renderTeamFilters() {
    const filtersContainer = document.getElementById('teamFilters');
    if (!filtersContainer) return;
    
    const filters = translations[currentLanguage].team.filters;
    const filterKeys = [
        { key: 'all', filter: 'all' },
        { key: 'leader', filter: 'leader' },
        { key: 'neuroscience', filter: 'Neuroscience' },
        { key: 'cancer', filter: 'Cancer' },
        { key: 'ai', filter: 'AI Drug' },
        { key: 'wbe', filter: 'WBE' },
        { key: 'clinic', filter: 'Clinic' }
    ];
    
    filtersContainer.innerHTML = '';
    
    filterKeys.forEach((item, index) => {
        const button = document.createElement('button');
        button.className = `filter-btn ${index === 0 ? 'active' : ''}`;
        button.setAttribute('data-filter', item.filter);
        button.textContent = filters[item.key];
        
        button.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderTeam(item.filter);
        });
        
        filtersContainer.appendChild(button);
    });
}

// ==================== 
// 渲染研究成果统计
// ==================== 
function renderAchievementsStats() {
    if (typeof achievementsStats === 'undefined') return;
    
    const statsContainer = document.querySelector('.achievements-stats');
    if (!statsContainer) return;
    
    statsContainer.innerHTML = '';
    
    const statsData = currentLanguage === 'zh' ? achievementsStats : achievementsStatsEn;
    
    Object.values(statsData).forEach(stat => {
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
    if (numberObserver) {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(num => numberObserver.observe(num));
    }
}

// ==================== 
// 渲染代表性成果
// ==================== 
function renderHighlightAchievements() {
    if (typeof highlightAchievements === 'undefined') return;
    
    const highlightGrid = document.querySelector('.highlight-grid');
    if (!highlightGrid) return;
    
    highlightGrid.innerHTML = '';
    
    const achievementsData = currentLanguage === 'zh' ? highlightAchievements : highlightAchievementsEn;
    
    achievementsData.forEach((achievement, index) => {
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
    if (typeof newsArticles === 'undefined') return;
    
    const heroNewsList = document.getElementById('heroNewsList');
    if (!heroNewsList) return;
    
    heroNewsList.innerHTML = '';
    
    const newsData = currentLanguage === 'zh' ? newsArticles : newsArticlesEn;
    const readMoreText = translations[currentLanguage].news.readMore;
    
    newsData.forEach((article, index) => {
        const newsItem = document.createElement('div');
        newsItem.className = 'hero-news-item';
        newsItem.style.animationDelay = `${index * 0.1}s`;
        
        const linkContent = article.link ? `
            <a href="${article.link}" 
               class="hero-news-link" 
               target="_blank" 
               rel="noopener noreferrer">
                ${readMoreText} <i class="fas fa-external-link-alt"></i>
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
// 团队成员渲染
// ==================== 
function renderTeam(filter = 'all') {
    const teamGrid = document.getElementById('teamGrid');
    if (!teamGrid) return;
    
    if (typeof teamMembers === 'undefined') return;
    
    teamGrid.innerHTML = '';
    
    const membersData = currentLanguage === 'zh' ? teamMembers : teamMembersEn;
    const labels = translations[currentLanguage].team;
    
    const filteredMembers = membersData.filter(member => {
        if (filter === 'all') return true;
        if (filter === 'leader') {
            return member.departments.includes('实验室负责人') || member.departments.includes('Laboratory Leaders');
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
                        <h4>${labels.introduction}</h4>
                        <p>${member.introduction}</p>
                    </div>
                ` : ''}
                ${member.responsibilities ? `
                    <div class="member-responsibilities">
                        <h4>${labels.responsibilities}</h4>
                        <p>${member.responsibilities}</p>
                    </div>
                ` : ''}
                ${hasAchievements ? `
                    <div class="member-achievements-section">
                        <h4 class="achievements-toggle" onclick="toggleAchievements('${achievementsId}')">
                            ${labels.achievements} <i class="fas fa-chevron-down"></i>
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

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== 
    // 初始化语言
    // ==================== 
    if (typeof initLanguage === 'function') {
        initLanguage();
    }
    
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
                const hasAnnouncement = document.body.classList.contains('announcement-active');
                const offsetTop = targetSection.offsetTop - (hasAnnouncement ? 118 : 70);
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // 关闭移动端菜单
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
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

    numberObserver = new IntersectionObserver(animateNumbers, observerOptions);

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

    scrollObserver = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1
    });

    // 为需要动画的元素添加初始样式
    const animateElements = document.querySelectorAll('.about-card, .highlight-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        scrollObserver.observe(el);
    });

    // ==================== 
    // 初始化渲染所有内容
    // ==================== 
    renderDepartments();
    renderTeamFilters();
    renderAchievementsStats();
    renderHighlightAchievements();
    renderHeroNews();
    renderTeam();
    
    // 检查是否已关闭公告
    if (sessionStorage.getItem('announcementClosed') !== 'true') {
        startAnnouncementRotation();
    }
    
    // ==================== 
    // 重写语言切换函数，添加重新渲染
    // ==================== 
    const originalToggleLanguage = window.toggleLanguage;
    window.toggleLanguage = function() {
        originalToggleLanguage();
        
        // 重新渲染所有动态内容
        renderDepartments();
        renderTeamFilters();
        renderAchievementsStats();
        renderHighlightAchievements();
        renderHeroNews();
        renderTeam();
        
        // 重置公告索引并重新开始轮播
        currentAnnouncementIndex = 0;
        
        // 检查是否已关闭
        if (sessionStorage.getItem('announcementClosed') !== 'true') {
            startAnnouncementRotation();
        }
    };
});