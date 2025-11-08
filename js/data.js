// data.js - 团队成员数据（中英文）

// 中文团队成员数据
const teamMembers = [
    {
        name: "黄飞娟",
        position: "实验室负责人",
        department: "实验室负责人",
        departments: ["实验室负责人", "项目部", "资源部", "临床组"],
        email: "huangfeijuan@wemed.store",
        image: "img/huangfeijuan.jpg",
        education: "博士，香港大学，化学生物学",
        introduction: "黄飞娟，毕业于香港大学，博士。深圳市海外高层次人才C级，福田英才B级。目前主要从事临床分子诊断、AI药物、药物GCP、生物医药数字化开放创新治理等研究工作。精通AI药物设计算法、公共卫生传染病防控、蛋白质质谱学、多组学及生物信息学及生物核磁和结构分析。目前主持国家省市级基金项目8项（合计经费520万）。发表学术论文30余篇，其中SCI研究论文16篇，EI第一作者论文11篇。获得广东省科技进步奖二等奖1项，中国中西医结合学会奖一等奖1项，国际数字医学会优秀学术论文一等奖1项，深圳市创新创业大赛团队组福田区第1名。任深圳市科创委重点项目评审专家，深圳市创新创业大赛评审专家，深圳技术大学研究生校外导师。",
        achievements: `发表学术论文30余篇（SCI 16篇，EI 11篇）
主持国家省市级基金项目8项（合计经费520万）
获广东省科技进步奖二等奖1项
获中国中西医结合学会奖一等奖1项
获国际数字医学会优秀学术论文一等奖1项
深圳市创新创业大赛团队组福田区第1名
授权发明专利15项
软件著作权2项`,
        responsibilities: "负责实验室整体科研方向规划、项目申报与管理、学术交流与合作"
    },
    {
        name: "蔡元哲",
        position: "实验室负责人",
        department: "实验室负责人",
        departments: ["实验室负责人", "赛事部"],
        email: "caiyuanzhe@sztu.edu.cn",
        image: "img/第6题_蔡元哲_20251010_蔡元哲-照片_1.jpg",
        education: "博士，美国德州大学阿林顿分校，计算机科学",
        introduction: "蔡元哲，美国德州大学阿林顿分校计算机博士，大数据算法专家，主要从事机器学习、生物信息算法、大数据算法分析等相关工作。在国际数据挖掘和信息检索等顶级会议SIGIR、ICDM、WSDM、VLDB和国际期刊上发表相关文章18篇，其中一作或共同通讯作者11篇。曾在硅谷知名大数据企业Teradata从事大数据算法设计和开发工作，主持设计和开发了基于lasso的广义线性回归算法和随机主成分分析算法。回国后在阿里巴巴主要从事图像、声音、文本等非结构化数据的分析管理工作。目前在深圳技术大学任助理教授，从事生物信息学分析方面的研究工作。",
        achievements: `发表学术论文18篇（一作或通讯11篇）
主持项目课题7项（省级1项，市级2项，横向项目2项，校级2项）
授权发明专利9项
实用新型专利2项
软件著作权1项
深圳市创新创业大赛区三等奖
第十四届"挑战杯"广东省大学生创业金奖、国赛三等奖（指导教师）`,
        responsibilities: "负责污水病原体监测、生物信息学算法研究、学生竞赛指导"
    },
    {
        name: "刘洁人",
        position: "项目部负责人",
        department: "项目部",
        departments: ["项目部"],
        email: "liujierenxy@126.com",
        image: "img/第6题_刘洁人_20251010_报名照片_1.jpg",
        education: "博士，深圳技术大学",
        introduction: "项目部负责人，负责实验室项目申报与管理工作，协调各研究组项目进展，推动科研成果转化。",
        achievements: "",
        responsibilities: "负责项目申报、项目管理与协调"
    },
    {
        name: "Zaid Chachar",
        position: "核心研究员",
        department: "多组学研究",
        departments: ["神经科学组", "肿瘤研究组", "污水病原体组"],
        email: "zaid@wemed.store",
        image: "img/zaid.png",
        education: "博士，中国农业科学院；硕士、学士，巴基斯坦信德农业大学",
        introduction: "Zaid Chachar博士，核心研究领域为生物化学、分子生物学与生物技术。博士毕业于中国农业科学院，硕士与学士学位均来自巴基斯坦信德农业大学。主导污水病毒检测（准确率>80%）；在玉米干旱研究中准确率>99%，在玉米镉含量全基因组关联研究（GWAS）中准确率>90%。精通聚合酶链式反应（PCR）、基因编辑技术（CRISPR）、RNA测序（RNA-seq）等技术。",
        achievements: `发表论文25篇（总影响因子100.9，h指数12）
拥有1项植物萌发基因专利
担任爱思唯尔（Elsevier）、施普林格·自然（Springer Nature）审稿人
污水病毒检测准确率>80%
玉米干旱研究准确率>99%
玉米镉含量GWAS研究准确率>90%`,
        responsibilities: "负责多组学数据分析、生物信息学研究、污水病原体检测技术开发"
    },
    {
        name: "罗开心",
        position: "AI药物设计组负责人",
        department: "AI药物设计组",
        departments: ["资源部", "AI药物设计组"],
        email: "lantianyuuuuu@iCloud.com",
        image: "img/第6题_罗开心_20251010_7559443183776817452_1.jpeg",
        education: "学士，深圳技术大学",
        introduction: "AI药物设计组负责人，专注于人工智能在药物设计领域的应用研究，负责小分子中药平台综述工作。",
        achievements: "参与AI药物设计相关研究项目，发表小分子中药平台综述",
        responsibilities: "负责AI药物设计组研究工作，开展人工智能药物设计算法研究"
    },
    {
        name: "李泊樾",
        position: "肿瘤研究组组长",
        department: "肿瘤研究组",
        departments: ["版务部", "项目部", "肿瘤研究组"],
        email: "liboyueby@163.com",
        image: "img/第6题_李泊樾_20251010_7559570684117679129_1.jpeg",
        education: "硕士，香港浸会大学，中药学；技术员，深圳湾实验室",
        introduction: "肿瘤研究组组长，具有中药学背景和实验室工作经验，负责肿瘤相关课题研究与团队管理。",
        achievements: "",
        responsibilities: "负责肿瘤研究组科研工作、团队管理、项目协调"
    },
    {
        name: "卢思恩",
        position: "污水病原体组负责人",
        department: "污水病原体组",
        departments: ["版务部", "污水病原体组"],
        email: "2906508030@qq.com",
        image: "img/第6题_卢思恩_20251010_微信图片_20251010201454_363_14_1.jpg",
        education: "本科，深圳技术大学，数据科学与大数据技术",
        introduction: "污水病原体组负责人，负责污水病原体监测项目的整体规划与实施。",
        achievements: "发表口蹄疫会议论文、ICEEI会议论文",
        responsibilities: "负责污水病原体组科研工作与团队管理"
    },
    {
        name: "张晨灏",
        position: "污水病原体组技术负责人",
        department: "污水病原体组",
        departments: ["赛事部", "污水病原体组"],
        email: "chzhang@wemed.store",
        image: "img/第6题_张晨灏_20251010_图片1_1.png",
        education: "本科，深圳技术大学",
        introduction: "污水病原体组技术负责人，在未美实验室实习两年（2023年3月至2025年9月），负责WBE开发项目，带领20人团队，负责污水病原体检测全流程。",
        achievements: `发表多篇SCI论文
授权实用新型专利
获得软件著作权`,
        responsibilities: "负责污水病原体检测全流程技术开发与团队管理"
    },
    {
        name: "陈梓娴",
        position: "临床组负责人",
        department: "临床组",
        departments: ["赛事部", "临床组"],
        email: "chenzixian@wemed.store",
        image: "img/第6题_陈梓娴_20251010_7559421815704428852_1.jpeg",
        education: "硕士，香港城市大学",
        introduction: "临床组负责人，负责胃癌项目研究与临床转化工作。",
        achievements: "",
        responsibilities: "负责胃癌项目研究、赛事部工作协调"
    },
    {
        name: "黄琼真",
        position: "临床组成员",
        department: "临床组",
        departments: ["项目部", "资源部", "临床组"],
        email: "huangqiongzhen@wemed.store",
        image: "img/第6题_黄琼真_20251010_IMG_20251010_104740_1.jpg",
        education: "本科，广东药科大学，预防医学（2008-2013年）",
        introduction: "临床组成员，负责项目部和资源部的协调管理工作。",
        achievements: "",
        responsibilities: "负责项目部和资源部协调管理"
    },
    {
        name: "何连毅",
        position: "神经科学组成员",
        department: "神经科学组",
        departments: ["项目部", "神经科学组"],
        email: "helianyi@wemed.store",
        image: "img/第6题_何连毅_20251009_7fab64327a1aa935a71dfc1a72378e6a_compress_1.jpg",
        education: "本科生",
        introduction: "神经科学组成员，参与神经退行性疾病相关研究工作。",
        achievements: "",
        responsibilities: "参与神经科学相关课题研究"
    },
    {
        name: "尚晓晨",
        position: "神经科学组成员",
        department: "神经科学组",
        departments: ["资源部", "赛事部", "神经科学组"],
        email: "9103121@qq.com",
        image: "img/第6题_尚晓晨_20251010_WechatIMG30_1.jpg",
        education: "大专，中央广播电视大学，法学",
        introduction: "神经科学组成员，负责人事、财务等行政管理工作。",
        achievements: "",
        responsibilities: "负责人事、财务管理"
    },
    {
        name: "刘丁荧",
        position: "神经科学组成员",
        department: "神经科学组",
        departments: ["神经科学组"],
        email: "202401102022@stumail.sztu.edu.cn",
        image: "img/第6题_刘丁荧_20251010_5cf12cd04fcebc58b3fdbcb093d41aa2_compress_1.jpg",
        education: "本科，深圳技术大学（2024.9-至今）",
        introduction: "神经科学组成员，负责老年认知相关课题研究。",
        achievements: "2025年9月作为第三作者发表论文《人工智能驱动的试点平台与计算药物学：在工业4.0和5.0范式下加速小分子药物开发创新》于期刊《药理学前沿》",
        responsibilities: "负责老年认知港澳台项目、天麻钩藤饮课题论文专利"
    },
    {
        name: "Madiha Fatima",
        position: "核心研究员",
        department: "多学科研究",
        departments: ["项目部", "神经科学组", "肿瘤研究组"],
        email: "madiha.fatima123@outlook.com",
        image: "img/第6题_Madiha_20251010_Madiha photo_1.jpg",
        education: "博士、博士后",
        introduction: "核心研究员，具有丰富的科研经验，参与多个跨学科研究项目。",
        achievements: "发表多篇学术论文",
        responsibilities: "负责项目设计与科研指导"
    },
    {
        name: "李浩珲",
        position: "软件部成员",
        department: "软件部",
        departments: ["软件部"],
        email: "lihaohui@wemed.store",
        image: "img/第6题_李浩珲_20251009_a2d8c9ab6c7473303c7e17f26a80c65_1.png",
        education: "本科，深圳技术大学，计算机科学与技术（大二）",
        introduction: "软件部成员，负责实验室软件系统开发与维护。",
        achievements: "参与教务系统开发项目",
        responsibilities: "负责实验室软件开发与技术支持"
    },
    {
        name: "徐嘉丽",
        position: "污水病原体组成员",
        department: "污水病原体组",
        departments: ["污水病原体组"],
        email: "3531259739@qq.com",
        image: "img/第6题_徐嘉丽_20251010_7559521777587299616_1.jpeg",
        education: "本科，深圳技术大学（2023-2027）",
        introduction: "污水病原体组成员，参与污水病原体监测相关研究工作。",
        achievements: "",
        responsibilities: "参与污水病原体组研究工作"
    },
    {
        name: "张子宸",
        position: "污水病原体组成员",
        department: "污水病原体组",
        departments: ["污水病原体组"],
        email: "957051145@qq.com",
        image: "img/第6题_张子宸_20251010_7559522232132385797_1.jpeg",
        education: "本科，深圳技术大学，药学（24级）",
        introduction: "污水病原体组成员，进行真实病原识别课题研究。",
        achievements: "",
        responsibilities: "负责真实病原识别课题研究"
    },
    {
        name: "赵梓森",
        position: "污水病原体组成员",
        department: "污水病原体组",
        departments: ["污水病原体组"],
        email: "2783055381@qq.com",
        image: "img/第6题_赵梓森_20251010_7559531225944974413_1.jpeg",
        education: "本科生",
        introduction: "污水病原体组成员，参与论文与标书写作工作。",
        achievements: "参与论文与标书写作",
        responsibilities: "负责污水一体机课题"
    },
    {
        name: "陈彦羽",
        position: "污水病原体组成员",
        department: "污水病原体组",
        departments: ["污水病原体组"],
        email: "476532339@qq.com",
        image: "img/第6题_陈彦羽_20251010_微信图片_20240924134931_1.jpg",
        education: "本科，深圳技术大学",
        introduction: "污水病原体组成员，参与污水病原体相关研究工作。",
        achievements: "",
        responsibilities: "参与污水病原体组研究工作"
    },
    {
        name: "莫济懋",
        position: "肿瘤研究组成员",
        department: "肿瘤研究组",
        departments: ["版务部", "肿瘤研究组"],
        email: "yaom7917@gmail.com",
        image: "img/第6题_莫济懋_20251010_fa2bd4040e4336b003424173ee534148_origin_1.jpg",
        education: "本科，深圳技术大学",
        introduction: "肿瘤研究组成员，负责多个肿瘤相关课题研究。",
        achievements: "参与发表ITRAQ and PRM-based quantitative saliva proteomics in gastric cancer: biomarker discovery",
        responsibilities: "负责CTC血循环细胞课题、大模型评测课题、AIDD未来发展预测课题"
    },
    {
        name: "宋伊扬",
        position: "肿瘤研究组成员",
        department: "肿瘤研究组",
        departments: ["肿瘤研究组"],
        email: "353561980@qq.com",
        image: "img/第6题_宋伊扬_20251010_7559439571754106008_1.jpeg",
        education: "本科生",
        introduction: "肿瘤研究组成员，参与肿瘤相关研究工作。",
        achievements: "",
        responsibilities: "参与肿瘤研究组工作、会议记录与管理"
    },
    {
        name: "许培涛",
        position: "肿瘤研究组成员",
        department: "肿瘤研究组",
        departments: ["肿瘤研究组"],
        email: "1920837078@qq.com",
        image: "img/第6题_许培涛_20251010_微信图片_20240819124759_1.jpg",
        education: "本科，深圳技术大学（2024-2028）",
        introduction: "肿瘤研究组成员，参与肿瘤相关课题研究。",
        achievements: "",
        responsibilities: "参与肿瘤课题相关研究工作"
    },
    {
        name: "洪静敏",
        position: "AI药物设计组成员",
        department: "AI药物设计组",
        departments: ["AI药物设计组"],
        email: "hjm1474996@qq.com",
        image: "img/第6题_洪静敏_20251010_62739d1362d791390c1eb0af22823e8e_compress_1.jpg",
        education: "本科，深圳技术大学",
        introduction: "AI药物设计组成员，参与人工智能药物设计相关研究。",
        achievements: "",
        responsibilities: "参与AI药物设计相关研究"
    }
];

// 英文团队成员数据
const teamMembersEn = [
    {
        name: "Huang Feijuan",
        position: "Laboratory Director",
        department: "Laboratory Leaders",
        departments: ["Laboratory Leaders", "Project Department", "Resource Department", "Clinical Group"],
        email: "huangfeijuan@wemed.store",
        image: "img/huangfeijuan.jpg",
        education: "Ph.D., University of Hong Kong, Chemical Biology",
        introduction: "Dr. Huang Feijuan graduated from the University of Hong Kong with a Ph.D. She is a Shenzhen Overseas High-level Talent (Class C) and Futian Talent (Class B). Her research focuses on clinical molecular diagnostics, AI drug design, drug GCP, and digital innovation governance in biomedicine. She is proficient in AI drug design algorithms, public health infectious disease control, proteomics mass spectrometry, multi-omics, bioinformatics, and NMR structural analysis. She currently leads 8 national, provincial, and municipal projects with total funding of 5.2 million RMB. She has published over 30 academic papers, including 16 SCI papers and 11 first-author EI papers. She has received the Second Prize of Guangdong Science and Technology Progress Award, First Prize of China Association of Integrated Traditional and Western Medicine, First Prize of International Society for Digital Medicine, and first place in Futian District at Shenzhen Innovation and Entrepreneurship Competition.",
        achievements: `Published over 30 academic papers (16 SCI, 11 EI first-author)
Leading 8 national/provincial/municipal projects (total funding: 5.2M RMB)
Second Prize, Guangdong Science and Technology Progress Award
First Prize, China Association of Integrated Traditional and Western Medicine
First Prize, International Society for Digital Medicine
First Place, Shenzhen Innovation Competition (Futian District)
15 authorized invention patents
2 software copyrights`,
        responsibilities: "Overall research planning, project application and management, academic exchange and cooperation"
    },
    {
        name: "Cai Yuanzhe",
        position: "Laboratory Director",
        department: "Laboratory Leaders",
        departments: ["Laboratory Leaders", "Competition Department"],
        email: "caiyuanzhe@sztu.edu.cn",
        image: "img/第6题_蔡元哲_20251010_蔡元哲-照片_1.jpg",
        education: "Ph.D., University of Texas at Arlington, Computer Science",
        introduction: "Dr. Cai Yuanzhe holds a Ph.D. in Computer Science from the University of Texas at Arlington and is an expert in big data algorithms. His research focuses on machine learning, bioinformatics algorithms, and big data analysis. He has published 18 papers at top international conferences such as SIGIR, ICDM, WSDM, VLDB, with 11 as first author or corresponding author. He previously worked at Teradata in Silicon Valley on big data algorithm design and development, leading the design of lasso-based generalized linear regression algorithms and randomized PCA algorithms. After returning to China, he worked at Alibaba on unstructured data analysis. He is currently an Assistant Professor at Shenzhen Technology University, conducting bioinformatics research.",
        achievements: `Published 18 papers (11 as first/corresponding author)
Leading 7 projects (1 provincial, 2 municipal, 2 industry, 2 university-level)
9 authorized invention patents
2 utility model patents
1 software copyright
Third Prize, Shenzhen Innovation Competition
Gold Award, 14th Challenge Cup Guangdong Province (advisor)`,
        responsibilities: "Wastewater pathogen monitoring, bioinformatics algorithm research, student competition guidance"
    },
    {
        name: "Liu Jieren",
        position: "Project Department Head",
        department: "Project Department",
        departments: ["Project Department"],
        email: "liujierenxy@126.com",
        image: "img/第6题_刘洁人_20251010_报名照片_1.jpg",
        education: "Ph.D., Shenzhen Technology University",
        introduction: "Head of Project Department, responsible for laboratory project application and management, coordinating research progress across groups, and promoting research outcome transformation.",
        achievements: "",
        responsibilities: "Project application, project management and coordination"
    },
    {
        name: "Zaid Chachar",
        position: "Core Researcher",
        department: "Multi-omics Research",
        departments: ["Neuroscience", "Cancer Research", "WBE"],
        email: "zaid@wemed.store",
        image: "img/zaid.png",
        education: "Ph.D., Chinese Academy of Agricultural Sciences; M.S., B.S., Sindh Agriculture University, Pakistan",
        introduction: "Dr. Zaid Chachar's core research areas include biochemistry, molecular biology, and biotechnology. He received his Ph.D. from the Chinese Academy of Agricultural Sciences, with M.S. and B.S. degrees from Sindh Agriculture University, Pakistan. He leads wastewater virus detection (>80% accuracy), maize drought research (>99% accuracy), and maize cadmium GWAS studies (>90% accuracy). He is proficient in PCR, CRISPR gene editing, and RNA-seq technologies.",
        achievements: `Published 25 papers (total IF: 100.9, h-index: 12)
1 plant germination gene patent
Reviewer for Elsevier and Springer Nature
Wastewater virus detection accuracy >80%
Maize drought research accuracy >99%
Maize cadmium GWAS accuracy >90%`,
        responsibilities: "Multi-omics data analysis, bioinformatics research, wastewater pathogen detection technology development"
    },
    {
        name: "Luo Kaixin",
        position: "AI Drug Design Group Leader",
        department: "AI Drug Design",
        departments: ["Resource Department", "AI Drug Design"],
        email: "lantianyuuuuu@iCloud.com",
        image: "img/第6题_罗开心_20251010_7559443183776817452_1.jpeg",
        education: "B.S., Shenzhen Technology University",
        introduction: "Leader of AI Drug Design Group, focusing on artificial intelligence applications in drug design and small molecule traditional Chinese medicine platform reviews.",
        achievements: "Participated in AI drug design research projects, published reviews on small molecule TCM platforms",
        responsibilities: "Leading AI drug design research, developing AI-based drug design algorithms"
    },
    {
        name: "Li Boyue",
        position: "Cancer Research Group Leader",
        department: "Cancer Research",
        departments: ["Editorial Department", "Project Department", "Cancer Research"],
        email: "liboyueby@163.com",
        image: "img/第6题_李泊樾_20251010_7559570684117679129_1.jpeg",
        education: "M.S., Hong Kong Baptist University, Traditional Chinese Medicine; Technician, Shenzhen Bay Laboratory",
        introduction: "Leader of Cancer Research Group with background in traditional Chinese medicine and laboratory experience, responsible for cancer-related research and team management.",
        achievements: "",
        responsibilities: "Cancer research group management, team coordination, project management"
    },
    {
        name: "Lu Sien",
        position: "Wastewater Pathogen Group Leader",
        department: "WBE",
        departments: ["Editorial Department", "WBE"],
        email: "2906508030@qq.com",
        image: "img/第6题_卢思恩_20251010_微信图片_20251010201454_363_14_1.jpg",
        education: "B.S., Shenzhen Technology University, Data Science and Big Data Technology",
        introduction: "Leader of Wastewater Pathogen Group, responsible for overall planning and implementation of wastewater pathogen monitoring projects.",
        achievements: "Published conference papers on foot-and-mouth disease and ICEEI",
        responsibilities: "Wastewater pathogen group research and team management"
    },
    {
        name: "Zhang Chenhao",
        position: "WBE Technical Leader",
        department: "WBE",
        departments: ["Competition Department", "WBE"],
        email: "chzhang@wemed.store",
        image: "img/第6题_张晨灏_20251010_图片1_1.png",
        education: "B.S., Shenzhen Technology University",
        introduction: "Technical Leader of Wastewater Pathogen Group, interned at WeMed Laboratory for two years (March 2023 - September 2025), responsible for WBE development projects, leading a team of 20, overseeing the entire wastewater pathogen detection process.",
        achievements: `Published multiple SCI papers
Authorized utility model patents
Software copyrights`,
        responsibilities: "Full-process wastewater pathogen detection technology development and team management"
    },
    {
        name: "Chen Zixian",
        position: "Clinical Group Leader",
        department: "Clinical",
        departments: ["Competition Department", "Clinic"],
        email: "chenzixian@wemed.store",
        image: "img/第6题_陈梓娴_20251010_7559421815704428852_1.jpeg",
        education: "M.S., City University of Hong Kong",
        introduction: "Leader of Clinical Group, responsible for gastric cancer research and clinical translation work.",
        achievements: "",
        responsibilities: "Gastric cancer project research, competition department coordination"
    },
    {
        name: "Huang Qiongzhen",
        position: "Clinical Group Member",
        department: "Clinical",
        departments: ["Project Department", "Resource Department", "Clinic"],
        email: "huangqiongzhen@wemed.store",
        image: "img/第6题_黄琼真_20251010_IMG_20251010_104740_1.jpg",
        education: "B.S., Guangdong Pharmaceutical University, Preventive Medicine (2008-2013)",
        introduction: "Clinical Group member, responsible for coordinating project and resource departments.",
        achievements: "",
        responsibilities: "Project and resource department coordination"
    },
    {
        name: "He Lianyi",
        position: "Neuroscience Group Member",
        department: "Neuroscience",
        departments: ["Project Department", "Neuroscience"],
        email: "helianyi@wemed.store",
        image: "img/第6题_何连毅_20251009_7fab64327a1aa935a71dfc1a72378e6a_compress_1.jpg",
        education: "Undergraduate",
        introduction: "Neuroscience Group member, participating in neurodegenerative disease research.",
        achievements: "",
        responsibilities: "Neuroscience-related research"
    },
    {
        name: "Shang Xiaochen",
        position: "Neuroscience Group Member",
        department: "Neuroscience",
        departments: ["Resource Department", "Competition Department", "Neuroscience"],
        email: "9103121@qq.com",
        image: "img/第6题_尚晓晨_20251010_WechatIMG30_1.jpg",
        education: "Associate Degree, China Central Radio and TV University, Law",
        introduction: "Neuroscience Group member, responsible for HR and financial administrative management.",
        achievements: "",
        responsibilities: "HR and financial management"
    },
    {
        name: "Liu Dingying",
        position: "Neuroscience Group Member",
        department: "Neuroscience",
        departments: ["Neuroscience"],
        email: "202401102022@stumail.sztu.edu.cn",
        image: "img/第6题_刘丁荧_20251010_5cf12cd04fcebc58b3fdbcb093d41aa2_compress_1.jpg",
        education: "B.S., Shenzhen Technology University (2024.9-present)",
        introduction: "Neuroscience Group member, responsible for elderly cognition-related research.",
        achievements: "Published as third author in September 2025: 'AI-driven pilot platforms and computational pharmacology: Accelerating small molecule drug development innovation under Industry 4.0 and 5.0 paradigms' in Frontiers in Pharmacology",
        responsibilities: "Hong Kong-Macau-Taiwan project on elderly cognition, Tianma Gouteng Yin research papers and patents"
    },
    {
        name: "Madiha Fatima",
        position: "Core Researcher",
        department: "Multidisciplinary Research",
        departments: ["Project Department", "Neuroscience", "Cancer Research"],
        email: "madiha.fatima123@outlook.com",
        image: "img/第6题_Madiha_20251010_Madiha photo_1.jpg",
        education: "Ph.D., Postdoctoral",
        introduction: "Core researcher with extensive research experience, participating in multiple interdisciplinary research projects.",
        achievements: "Published multiple academic papers",
        responsibilities: "Project design and research guidance"
    },
    {
        name: "Li Haohui",
        position: "Software Department Member",
        department: "Software",
        departments: ["Software"],
        email: "lihaohui@wemed.store",
        image: "img/第6题_李浩珲_20251009_a2d8c9ab6c7473303c7e17f26a80c65_1.png",
        education: "B.S., Shenzhen Technology University, Computer Science and Technology (Sophomore)",
        introduction: "Software Department member, responsible for laboratory software system development and maintenance.",
        achievements: "Participated in educational management system development",
        responsibilities: "Laboratory software development and technical support"
    },
    {
        name: "Xu Jiali",
        position: "WBE Group Member",
        department: "WBE",
        departments: ["WBE"],
        email: "3531259739@qq.com",
        image: "img/第6题_徐嘉丽_20251010_7559521777587299616_1.jpeg",
        education: "B.S., Shenzhen Technology University (2023-2027)",
        introduction: "Wastewater Pathogen Group member, participating in wastewater pathogen monitoring research.",
        achievements: "",
        responsibilities: "Wastewater pathogen group research"
    },
    {
        name: "Zhang Zichen",
        position: "WBE Group Member",
        department: "WBE",
        departments: ["WBE"],
        email: "957051145@qq.com",
        image: "img/第6题_张子宸_20251010_7559522232132385797_1.jpeg",
        education: "B.S., Shenzhen Technology University, Pharmacy (Class of 2024)",
        introduction: "Wastewater Pathogen Group member, conducting real pathogen identification research.",
        achievements: "",
        responsibilities: "Real pathogen identification research"
    },
    {
        name: "Zhao Zisen",
        position: "WBE Group Member",
        department: "WBE",
        departments: ["WBE"],
        email: "2783055381@qq.com",
        image: "img/第6题_赵梓森_20251010_7559531225944974413_1.jpeg",
        education: "Undergraduate",
        introduction: "Wastewater Pathogen Group member, participating in paper and grant writing.",
        achievements: "Participated in paper and grant writing",
        responsibilities: "Wastewater integrated machine research"
    },
    {
        name: "Chen Yanyu",
        position: "WBE Group Member",
        department: "WBE",
        departments: ["WBE"],
        email: "476532339@qq.com",
        image: "img/第6题_陈彦羽_20251010_微信图片_20240924134931_1.jpg",
        education: "B.S., Shenzhen Technology University",
        introduction: "Wastewater Pathogen Group member, participating in wastewater pathogen research.",
        achievements: "",
        responsibilities: "Wastewater pathogen group research"
    },
    {
        name: "Mo Jimao",
        position: "Cancer Research Group Member",
        department: "Cancer Research",
        departments: ["Editorial Department", "Cancer Research"],
        email: "yaom7917@gmail.com",
        image: "img/第6题_莫济懋_20251010_fa2bd4040e4336b003424173ee534148_origin_1.jpg",
        education: "B.S., Shenzhen Technology University",
        introduction: "Cancer Research Group member, responsible for multiple cancer-related research projects.",
        achievements: "Participated in publishing 'ITRAQ and PRM-based quantitative saliva proteomics in gastric cancer: biomarker discovery'",
        responsibilities: "CTC circulating tumor cell research, large model evaluation, AIDD future development prediction"
    },
    {
        name: "Song Yiyang",
        position: "Cancer Research Group Member",
        department: "Cancer Research",
        departments: ["Cancer Research"],
        email: "353561980@qq.com",
        image: "img/第6题_宋伊扬_20251010_7559439571754106008_1.jpeg",
        education: "Undergraduate",
        introduction: "Cancer Research Group member, participating in cancer-related research.",
        achievements: "",
        responsibilities: "Cancer research group work, meeting records and management"
    },
    {
        name: "Xu Peitao",
        position: "Cancer Research Group Member",
        department: "Cancer Research",
        departments: ["Cancer Research"],
        email: "1920837078@qq.com",
        image: "img/第6题_许培涛_20251010_微信图片_20240819124759_1.jpg",
        education: "B.S., Shenzhen Technology University (2024-2028)",
        introduction: "Cancer Research Group member, participating in cancer-related research.",
        achievements: "",
        responsibilities: "Cancer research related work"
    },
    {
        name: "Hong Jingmin",
        position: "AI Drug Design Group Member",
        department: "AI Drug Design",
        departments: ["AI Drug Design"],
        email: "hjm1474996@qq.com",
        image: "img/第6题_洪静敏_20251010_62739d1362d791390c1eb0af22823e8e_compress_1.jpg",
        education: "B.S., Shenzhen Technology University",
        introduction: "AI Drug Design Group member, participating in AI drug design research.",
        achievements: "",
        responsibilities: "AI drug design research"
    }
];