// 研究成果统计数据
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

// 代表性成果
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

// 最新动态数据
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

// 微信公众号信息
const wechatInfo = {
    name: "未美科技",
    description: "关注我们的微信公众号，获取最新研究动态",
    qrCodeUrl: "img/wechat-qr.png" // 请替换为实际的二维码图片路径
};