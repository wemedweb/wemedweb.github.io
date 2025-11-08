// achievements-data.js - 研究成果数据（中英文）

// 中文研究成果统计数据
const achievementsStats = {
    papers: {
        value: 50,
        label: "发表论文",
        icon: "fa-file-alt",
        detail: "SCI/EI等高水平论文"
    },
    patents: {
        value: 15,
        label: "专利成果",
        icon: "fa-certificate",
        detail: "发明专利及实用新型"
    },
    projects: {
        value: 20,
        label: "在研项目",
        icon: "fa-flask",
        detail: "国家省市级项目"
    },
    members: {
        value: 24,
        label: "团队成员",
        icon: "fa-users",
        detail: "跨学科研究团队"
    }
};

// 英文研究成果统计数据
const achievementsStatsEn = {
    papers: {
        value: 50,
        label: "Published Papers",
        icon: "fa-file-alt",
        detail: "SCI/EI high-level papers"
    },
    patents: {
        value: 15,
        label: "Patents",
        icon: "fa-certificate",
        detail: "Invention and utility model patents"
    },
    projects: {
        value: 20,
        label: "Ongoing Projects",
        icon: "fa-flask",
        detail: "National, provincial, and municipal projects"
    },
    members: {
        value: 24,
        label: "Team Members",
        icon: "fa-users",
        detail: "Interdisciplinary research team"
    }
};

// 中文代表性成果
const highlightAchievements = [
    {
        tag: "SCI论文",
        title: "胃癌唾液蛋白质组学标志物研究",
        description: "发表于 Frontiers in Molecular Biosciences (Q2, IF 3.9)",
        author: "张晨灏 等",
        date: "2024"
    },
    {
        tag: "专利",
        title: "适用于多口径接口的真空泵",
        description: "专利号：ZL202322865413.3",
        author: "张晨灏 等",
        date: "2024"
    },
    {
        tag: "综述",
        title: "AI驱动的药物开发创新",
        description: "发表于《药理学前沿》期刊",
        author: "刘丁荧 等",
        date: "2025"
    }
];

// 英文代表性成果
const highlightAchievementsEn = [
    {
        tag: "SCI Paper",
        title: "Saliva Proteomics Biomarker Research in Gastric Cancer",
        description: "Published in Frontiers in Molecular Biosciences (Q2, IF 3.9)",
        author: "Zhang Chenhao et al.",
        date: "2024"
    },
    {
        tag: "Patent",
        title: "Vacuum Pump for Multi-Caliber Interfaces",
        description: "Patent No.: ZL202322865413.3",
        author: "Zhang Chenhao et al.",
        date: "2024"
    },
    {
        tag: "Review",
        title: "AI-Driven Drug Development Innovation",
        description: "Published in Frontiers in Pharmacology",
        author: "Liu Dingying et al.",
        date: "2025"
    }
];

// 中文最新动态数据
const newsArticles = [
    {
        date: { day: '21', month: '7月' },
        title: '指尖触碰千年之美 —— 未美非遗手作团建小记',
        description: '团队开展非遗手作活动，传承传统文化，增强团队凝聚力',
        link: 'https://mp.weixin.qq.com/s/DRmSYPo8WOzdQ1rl0TvEhg',
        isExternal: true
    },
    {
        date: { day: '23', month: '6月' },
        title: '色彩碰撞 | 未美医疗绘画团建短纪',
        description: '实验室团队通过绘画活动释放创意，促进跨学科交流',
        link: 'https://mp.weixin.qq.com/s/U7FFC6CNVeOL6U4j_cLlcw',
        isExternal: true
    },
    {
        date: { day: '01', month: '6月' },
        title: '三代FET技术盘点：MOSFET/FINFET/GAA FET｜文献分享',
        description: '深度解析场效应晶体管技术发展，探讨医疗器械应用前景',
        link: 'https://mp.weixin.qq.com/s/MzN1vWT5-w5qIvx9-STM8A',
        isExternal: true
    },
    {
        date: { day: '31', month: '5月' },
        title: '用于蛋白质-蛋白质的集成对接的HDOCK服务器|文献分享',
        description: '分享蛋白质对接工具在药物设计中的应用与实践',
        link: 'https://mp.weixin.qq.com/s/SlUcas6mqKJn_dXt93qZRw',
        isExternal: true
    }
];

// 英文最新动态数据
const newsArticlesEn = [
    {
        date: { day: '21', month: 'Jul' },
        title: 'Touching Millennium Beauty with Fingertips - WeMed Intangible Cultural Heritage Team Building',
        description: 'Team conducts intangible cultural heritage handicraft activities to inherit traditional culture and enhance team cohesion',
        link: 'https://mp.weixin.qq.com/s/DRmSYPo8WOzdQ1rl0TvEhg',
        isExternal: true
    },
    {
        date: { day: '23', month: 'Jun' },
        title: 'Color Collision | WeMed Medical Painting Team Building Chronicle',
        description: 'Laboratory team releases creativity and promotes interdisciplinary communication through painting activities',
        link: 'https://mp.weixin.qq.com/s/U7FFC6CNVeOL6U4j_cLlcw',
        isExternal: true
    },
    {
        date: { day: '01', month: 'Jun' },
        title: 'Three Generations of FET Technology: MOSFET/FINFET/GAA FET | Literature Sharing',
        description: 'In-depth analysis of field-effect transistor technology development and medical device application prospects',
        link: 'https://mp.weixin.qq.com/s/MzN1vWT5-w5qIvx9-STM8A',
        isExternal: true
    },
    {
        date: { day: '31', month: 'May' },
        title: 'HDOCK Server for Integrated Protein-Protein Docking | Literature Sharing',
        description: 'Sharing the application and practice of protein docking tools in drug design',
        link: 'https://mp.weixin.qq.com/s/SlUcas6mqKJn_dXt93qZRw',
        isExternal: true
    }
];

// 微信公众号信息
const wechatInfo = {
    name: "未美科技",
    description: "关注我们的微信公众号，获取最新研究动态",
    qrCodeUrl: "img/wechat-qr.png"
}; 

// 中文公告数据
const announcements = [
    {
        text: "🎉 实验室官网全新上线！",
        link: "https://wemedweb.github.io/",
        linkText: "了解更多"
    },
    {
        text: "📢 最新研究成果：AI辅助药物设计取得突破",
        link: "https://wemedweb.github.io/",
        linkText: "阅读全文"
    },
    {
        text: "👥 招聘：诚聘博士后研究员2名",
        link: "https://wemedweb.github.io/",
        linkText: "查看详情"
    },
    {
        text: "📅 学术讲座：12月15日下午2点",
        link: "https://wemedweb.github.io/",
        linkText: "报名参加"
    }
];

// 英文公告数据
const announcementsEn = [
    {
        text: "🎉 Welcome to Our New Website!",
        link: "https://wemedweb.github.io/",
        linkText: "Learn More"
    },
    {
        text: "📢 Latest: AI-Assisted Drug Design Breakthrough",
        link: "https://wemedweb.github.io/",
        linkText: "Read More"
    },
    {
        text: "👥 Hiring: 2 Postdoctoral Positions",
        link: "https://wemedweb.github.io/",
        linkText: "View Details"
    },
    {
        text: "📅 Seminar: Dec 15, 2:00 PM",
        link: "https://wemedweb.github.io/",
        linkText: "Register"
    }
];