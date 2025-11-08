// js/i18n.js - 国际化翻译文件

const translations = {
    zh: {
        nav: {
            title: "未美实验室",
            home: "首页",
            about: "关于我们",
            departments: "研究部门",
            team: "团队成员",
            achievements: "研究成果",
            contact: "联系我们"
        },
        hero: {
            title: "未美实验室",
            subtitle: "引领医疗科技创新,开创健康未来",
            description: "致力于AI药物设计、神经科学、肿瘤研究、污水病原体监测等前沿领域",
            btn1: "了解团队",
            btn2: "研究成果"
        },
        news: {
            title: "最新动态",
            readMore: "阅读全文"
        },
        about: {
            title: "关于我们",
            mission: {
                title: "我们的使命",
                text: "通过跨学科研究和创新技术,推动医疗健康领域的突破性进展,为人类健康事业做出贡献。"
            },
            research: {
                title: "研究方向",
                text: "聚焦AI药物设计、神经科学、肿瘤研究、临床应用、污水病原体监测等多个前沿领域。"
            },
            team: {
                title: "团队优势",
                text: "汇聚来自国内外顶尖高校的优秀人才,建立多层次、多学科的协作研究体系。"
            }
        },
        departments: {
            title: "研究部门",
            list: {
                neuroscience: {
                    name: "神经科学组",
                    code: "Neuroscience",
                    desc: "专注于神经退行性疾病研究,包括老年认知障碍等课题。"
                },
                cancer: {
                    name: "肿瘤研究组",
                    code: "Cancer Research",
                    desc: "开展循环肿瘤细胞(CTC)、胃癌标志物等研究项目。"
                },
                ai: {
                    name: "AI药物设计组",
                    code: "AI Drug Design",
                    desc: "利用人工智能技术加速小分子药物研发创新。"
                },
                wbe: {
                    name: "污水病原体组",
                    code: "Wastewater-Based Epidemiology",
                    desc: "基于污水的流行病学监测,构建病原体预警系统。"
                },
                clinic: {
                    name: "临床组",
                    code: "Clinical Research",
                    desc: "推进临床转化研究,实现科研成果的临床应用。"
                },
                database: {
                    name: "病原体数据库组",
                    code: "Pathogen Database",
                    desc: "建立病原体数据库,支持传播风险分析与预防。"
                }
            }
        },
        team: {
            title: "团队成员",
            filters: {
                all: "全部成员",
                leader: "实验室负责人",
                neuroscience: "神经科学组",
                cancer: "肿瘤研究组",
                ai: "AI药物设计组",
                wbe: "污水病原体组",
                clinic: "临床组"
            },
            education: "教育背景",
            introduction: "个人简介",
            responsibilities: "主要职责",
            achievements: "主要成果"
        },
        achievements: {
            title: "研究成果",
            highlights: "代表性成果",
            stats: {
                papers: "发表论文",
                patents: "专利成果",
                projects: "在研项目",
                members: "团队成员"
            }
        },
        contact: {
            title: "联系我们",
            email: "邮箱",
            address: "地址",
            address1: "广东省深圳市坪山区兰田路3002号",
            address2: "深圳技术大学",
            wechat: "微信公众号",
            scan: "扫码关注"
        },
        footer: {
            title: "未美实验室",
            desc: "致力于医疗科技创新研究",
            links: "快速链接",
            contact: "联系方式",
            rights: "All rights reserved."
        }
    },
    en: {
        nav: {
            title: "WeMed Laboratory",
            home: "Home",
            about: "About",
            departments: "Departments",
            team: "Team",
            achievements: "Achievements",
            contact: "Contact"
        },
        hero: {
            title: "WeMed Laboratory",
            subtitle: "Leading Medical Technology Innovation for a Healthier Future",
            description: "Dedicated to AI drug design, neuroscience, cancer research, wastewater-based epidemiology, and other cutting-edge fields",
            btn1: "Our Team",
            btn2: "Achievements"
        },
        news: {
            title: "Latest News",
            readMore: "Read More"
        },
        about: {
            title: "About Us",
            mission: {
                title: "Our Mission",
                text: "To advance breakthrough developments in medical and health fields through interdisciplinary research and innovative technologies, contributing to human health."
            },
            research: {
                title: "Research Focus",
                text: "Focusing on AI drug design, neuroscience, cancer research, clinical applications, wastewater pathogen monitoring, and other frontier areas."
            },
            team: {
                title: "Team Advantages",
                text: "Gathering excellent talents from top universities at home and abroad, establishing a multi-level, multi-disciplinary collaborative research system."
            }
        },
        departments: {
            title: "Research Departments",
            list: {
                neuroscience: {
                    name: "Neuroscience Group",
                    code: "Neuroscience",
                    desc: "Focusing on neurodegenerative disease research, including cognitive impairment in the elderly."
                },
                cancer: {
                    name: "Cancer Research Group",
                    code: "Cancer Research",
                    desc: "Conducting research on circulating tumor cells (CTC), gastric cancer biomarkers, and other projects."
                },
                ai: {
                    name: "AI Drug Design Group",
                    code: "AI Drug Design",
                    desc: "Accelerating small molecule drug development innovation using artificial intelligence technology."
                },
                wbe: {
                    name: "Wastewater Pathogen Group",
                    code: "Wastewater-Based Epidemiology",
                    desc: "Wastewater-based epidemiological monitoring, building pathogen early warning systems."
                },
                clinic: {
                    name: "Clinical Group",
                    code: "Clinical Research",
                    desc: "Advancing clinical translational research and implementing research achievements in clinical practice."
                },
                database: {
                    name: "Pathogen Database Group",
                    code: "Pathogen Database",
                    desc: "Building pathogen databases to support transmission risk analysis and prevention."
                }
            }
        },
        team: {
            title: "Team Members",
            filters: {
                all: "All Members",
                leader: "Laboratory Leaders",
                neuroscience: "Neuroscience",
                cancer: "Cancer Research",
                ai: "AI Drug Design",
                wbe: "Wastewater Pathogen",
                clinic: "Clinical"
            },
            education: "Education",
            introduction: "Introduction",
            responsibilities: "Responsibilities",
            achievements: "Achievements"
        },
        achievements: {
            title: "Research Achievements",
            highlights: "Representative Achievements",
            stats: {
                papers: "Published Papers",
                patents: "Patents",
                projects: "Ongoing Projects",
                members: "Team Members"
            }
        },
        contact: {
            title: "Contact Us",
            email: "Email",
            address: "Address",
            address1: "No. 3002 Lantian Road, Pingshan District, Shenzhen, Guangdong Province",
            address2: "Shenzhen Technology University",
            wechat: "WeChat Official Account",
            scan: "Scan to Follow"
        },
        footer: {
            title: "WeMed Laboratory",
            desc: "Dedicated to Medical Technology Innovation Research",
            links: "Quick Links",
            contact: "Contact Information",
            rights: "All rights reserved."
        }
    }
};

// 当前语言
let currentLanguage = localStorage.getItem('language') || 'zh';

// 切换语言
function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    localStorage.setItem('language', currentLanguage);
    updateLanguage();
    
    // 更新按钮文本
    const langBtn = document.getElementById('currentLang');
    if (langBtn) {
        langBtn.textContent = currentLanguage === 'zh' ? 'EN' : '中文';
    }
}

// 更新页面语言
function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[currentLanguage];
        
        for (const k of keys) {
            translation = translation[k];
        }
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // 更新HTML lang属性
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
}

// 初始化语言设置(只更新静态文本)
function initLanguage() {
    updateLanguage();
    const langBtn = document.getElementById('currentLang');
    if (langBtn) {
        langBtn.textContent = currentLanguage === 'zh' ? 'EN' : '中文';
    }
}