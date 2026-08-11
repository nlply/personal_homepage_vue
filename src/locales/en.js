export default {
  pageTitle: "Welcome to Yang Liu' Website",

  name: 'Yang Liu',

  positions: [
    {
      role: 'Ph.D. student at Kyoto University',
      affiliation: 'Language Media Processing Lab, Kyoto University',
    },
    {
      role: 'Research Assistant at NII LLMC',
      affiliation:
        'Research and Development Center for Large Language Models (LLMC), National Institute of Informatics',
    },
  ],

  bio:
    'I am a Ph.D. student at Kyoto University, working under the supervision of Prof. Chenhui Chu. ' +
    'I am also a Research Assistant at the Research and Development Center for Large Language Models (LLMC), ' +
    'National Institute of Informatics (NII). ' +
    'I focus on AI fairness, language modeling, quantum theory, and related directions. ' +
    "Previously, I obtained my master's and bachelor's degrees from Tianjin University (Peiyang University) " +
    'and Tianjin Normal University, respectively. In addition, I have three years of full-time and three ' +
    'years of part-time software development experience.',

  collab: {
    prefix: 'I am always open to new collaborations. Feel free to ',
    linkText: 'reach out',
    suffix: ' if you are interested in working together.',
    policy:
      'Please note: I collaborate only with authors who release the code for their papers.',
  },

  sections: {
    news: 'News',
    interests: 'Research Interests',
    awards: 'Awards',
    publications: 'Publications',
    experience: 'Experience',
    skills: 'Technical Skills',
    links: 'Links',
    reviewing: 'Reviewing',
    resources: 'Useful Resources',
  },

  theme: {
    dark: 'Dark Mode',
    light: 'Light Mode',
    darkShort: 'Dark',
    lightShort: 'Light',
  },

  news: [
    {
      date: 'May 2026',
      title: 'Our paper on understanding prompt sensitivity was accepted to ACL 2026.',
    },
    {
      date: 'Feb. 2026',
      title: 'Our AAAI 2026 paper received the Best Paper Award.',
      url: 'https://aaai.org/about-aaai/aaai-awards/aaai-conference-paper-awards-and-recognition/',
    },
    {
      date: 'Sept. 2025',
      title: 'Our paper on social bias alignment was accepted to Findings of EMNLP 2025.',
      url: 'https://arxiv.org/abs/2509.13869',
    },
    {
      date: 'Jan. 2024',
      title: 'Two papers on social bias evaluation were accepted to AAAI 2024 and EACL 2024.',
    },
  ],

  interests: [
    'Cultural alignment of large language models',
    'Social biases in large language models',
    'Theoretical interpretability of large language models',
  ],

  awards: [
    {
      url: 'https://aaai.org/about-aaai/aaai-awards/aaai-conference-paper-awards-and-recognition/',
      label: 'Best Paper Award',
      suffix: ', The 40th Annual AAAI Conference on Artificial Intelligence, Singapore.',
    },
    {
      url: 'https://anlp.jp/nlp2026/award.html#committee',
      label: '委員特別賞 (Committee Special Award)',
      suffix: ', 言語処理学会第32回年次大会 (ANLP2026).',
    },
    {
      url: 'https://www.kugd.k.kyoto-u.ac.jp/en/support/recruitlist/',
      label: 'Kyoto University DoGS NEXT AI Program',
      suffix: ' (DoGS Fellow).',
    },
  ],

  pubCategories: {
    international: 'International Conferences',
    domestic: 'Domestic Conferences',
  },

  pubUI: {
    singleAuthored: ' (single-authored)',
    bibtex: 'BibTex',
    hideBibtex: 'hide BibTex',
    copy: 'copy',
    copied: 'copied',
  },

  experience: [
    {
      date: 'Jul. 2026 – Present',
      role: 'Research Assistant, NII LLMC',
      desc: 'Research and development on large language models.',
    },
    {
      date: 'Mar. 2023 – Sept. 2024',
      role: 'Independent Researcher',
      desc: 'Research on social biases in language models.',
    },
    {
      date: 'Jul. 2016 – Sept. 2019',
      role: 'Full-Stack Software Engineer, Antrou Co. Ltd.',
      desc: 'Geographical Information System (Three.js) and Security Management System for Petrochemical Industry.',
    },
  ],

  // label 末尾的空格是刻意保留的：中文用全角冒号自带间距，英文需要显式空格
  skills: [
    { label: 'Programming: ', value: 'Python, PyTorch, Java, JavaScript, CSS.' },
    {
      label: 'Techniques: ',
      value:
        'Natural Language Processing, Deep Learning, Machine Learning, Quantum Theory, Web Application Development.',
    },
  ],

  links: [
    { label: 'Personal Blog: ', text: 'nlply.tech', url: 'https://www.nlply.tech' },
    { label: 'GitHub: ', text: 'github.com/nlply', url: 'https://github.com/nlply' },
    { label: 'Hugging Face: ', text: 'huggingface.co/nlply', url: 'https://huggingface.co/nlply' },
  ],

  footer: {
    developedByPrefix: 'Developed by',
    and: 'and',
    developedBySuffix: '',
    lastUpdated: 'Last updated Aug. 11, 2026',
  },
}
