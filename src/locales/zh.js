export default {
  pageTitle: 'Yang Liu | 个人主页',

  // 姓名保留拉丁字母写法；如需中文名，改这里即可
  name: 'Yang Liu',

  positions: [
    {
      role: '京都大学 博士研究生',
      affiliation: '京都大学 语言媒体处理实验室',
    },
    {
      role: 'NII LLMC 研究助理',
      affiliation: '日本国立情报学研究所 大规模语言模型研究开发中心（LLMC）',
    },
  ],

  bio:
    '我是京都大学的博士研究生，师从 Chenhui Chu 教授，' +
    '同时担任日本国立情报学研究所大规模语言模型研究开发中心（NII LLMC）的研究助理。' +
    '我的研究方向包括 AI 公平性、语言模型、量子理论及相关领域。' +
    '此前，我分别在天津大学（北洋大学）和天津师范大学获得硕士和学士学位。' +
    '此外，我拥有三年全职和三年兼职的软件开发经验。',

  collab: {
    prefix: '我一直欢迎新的合作机会。如果您对共同研究感兴趣，欢迎随时',
    linkText: '与我联系',
    suffix: '。',
    policy: '请注意：我只与愿意开源论文代码的作者合作。',
  },

  sections: {
    news: '近况',
    interests: '研究方向',
    awards: '获奖',
    publications: '论文发表',
    experience: '工作经历',
    skills: '技术技能',
    links: '链接',
    reviewing: '审稿服务',
    resources: '常用资源',
  },

  theme: {
    dark: '深色模式',
    light: '浅色模式',
    darkShort: '深色',
    lightShort: '浅色',
  },

  news: [
    {
      date: '2026 年 5 月',
      title: '我们关于提示敏感性的论文被 ACL 2026 接收。',
    },
    {
      date: '2026 年 2 月',
      title: '我们的 AAAI 2026 论文获得最佳论文奖。',
      url: 'https://aaai.org/about-aaai/aaai-awards/aaai-conference-paper-awards-and-recognition/',
    },
    {
      date: '2025 年 9 月',
      title: '我们关于社会偏见对齐的论文被 Findings of EMNLP 2025 接收。',
      url: 'https://arxiv.org/abs/2509.13869',
    },
    {
      date: '2024 年 1 月',
      title: '两篇关于社会偏见评估的论文分别被 AAAI 2024 和 EACL 2024 接收。',
    },
  ],

  interests: [
    '大语言模型的文化对齐',
    '大语言模型中的社会偏见',
    '大语言模型的理论可解释性',
  ],

  awards: [
    {
      url: 'https://aaai.org/about-aaai/aaai-awards/aaai-conference-paper-awards-and-recognition/',
      label: '最佳论文奖',
      suffix: '，第 40 届 AAAI 人工智能大会，新加坡。',
    },
    {
      url: 'https://anlp.jp/nlp2026/award.html#committee',
      label: '委員特別賞（委员特别奖）',
      suffix: '，言语处理学会第 32 届年次大会（ANLP2026）。',
    },
    {
      url: 'https://www.kugd.k.kyoto-u.ac.jp/en/support/recruitlist/',
      label: '京都大学 DoGS NEXT AI 项目',
      suffix: '（DoGS Fellow）。',
    },
  ],

  pubCategories: {
    international: '国际会议',
    domestic: '日本国内会议',
  },

  pubUI: {
    singleAuthored: '（独立作者）',
    bibtex: 'BibTex',
    hideBibtex: '收起 BibTex',
    copy: '复制',
    copied: '已复制',
  },

  experience: [
    {
      date: '2026 年 7 月 – 至今',
      role: '研究助理，NII LLMC',
      desc: '大规模语言模型的研究与开发。',
    },
    {
      date: '2023 年 3 月 – 2024 年 9 月',
      role: '独立研究者',
      desc: '语言模型中的社会偏见研究。',
    },
    {
      date: '2016 年 7 月 – 2019 年 9 月',
      role: '全栈软件工程师，Antrou Co. Ltd.',
      desc: '石化行业地理信息系统（Three.js）与安全管理系统。',
    },
  ],

  skills: [
    { label: '编程：', value: 'Python, PyTorch, Java, JavaScript, CSS.' },
    {
      label: '技术方向：',
      value: '自然语言处理、深度学习、机器学习、量子理论、Web 应用开发。',
    },
  ],

  links: [
    { label: '个人博客：', text: 'nlply.tech', url: 'https://www.nlply.tech' },
    { label: 'GitHub：', text: 'github.com/nlply', url: 'https://github.com/nlply' },
    { label: 'Hugging Face：', text: 'huggingface.co/nlply', url: 'https://huggingface.co/nlply' },
  ],

  footer: {
    developedByPrefix: '由',
    and: '与',
    developedBySuffix: '开发',
    lastUpdated: '最后更新于 2026 年 8 月 11 日',
  },
}
