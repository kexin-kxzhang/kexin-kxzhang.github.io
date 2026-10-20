// =====================================================================
//  SITE CONTENT: edit this file to update News, Publications and
//  Professional Activities. index.html holds the bio, education,
//  experience and honors.
//
//  Publication fields
//    id          short anchor, e.g. "gridbench" -> link to it with #pub-gridbench
//    group       one of the keys in pubGroups below
//    venueShort  label in the left column, e.g. "ICML 2026"
//    venue       full venue line
//    links       any of: paper, code, project, slides, video, poster
//                (leave a link out or set it to "" and its button is not shown)
//  "Kexin Zhang" in the authors string is bolded automatically.
// =====================================================================

window.SITE = {
  lastUpdated: "October 2026",

  // ------------------------------------------------------------- News
  newsShown: 5, // older items sit behind a "Show older news" button
  news: [
    { date: "2026.10", text: 'Released <a href="#pub-gridbench">Grid-Bench</a>, a benchmark that tests whether LLMs can predict how discrete worlds change.' },
    { date: "2026.09", text: 'Released <a href="#pub-timebraid">TimeBraid</a>, unifying time series and language for understanding and forecasting.' },
    { date: "2026.06", text: 'Released a survey on <a href="#pub-agenticts">agentic time series systems</a>.' },
    { date: "2026.06", text: '<a href="#pub-mustang">MUSTANG</a> accepted at <strong>KDD 2026</strong>.' },
    { date: "2026.04", text: 'Papers accepted at <strong>ICML 2026</strong> (<a href="#pub-latentts">latent time-series forecasting</a>) and <strong>ACL 2026</strong> (<a href="#pub-molsurvey">LLMs for molecular discovery</a>).' },
    { date: "2025.12", text: 'One paper accepted at <strong>TKDD</strong> (<a href="#pub-graphood">survey on graph learning under distribution shifts</a>).' },
    { date: "2025.09", text: 'One paper accepted at <strong>NeurIPS 2025</strong> (<a href="#pub-glocal">Glocal Information Bottleneck</a>).' },
    { date: "2025.06", text: "Recognized as an <strong>Outstanding Reviewer</strong> for KDD 2025 (February cycle), awarded to the top 10% of reviewers." },
    { date: "2025.05", text: 'One paper accepted at <strong>ECML-PKDD 2025</strong> (<a href="#pub-crossdiff">cross-domain conditional diffusion</a>).' },
    { date: "2024.11", text: 'One paper accepted at <strong>KDD 2025</strong> (<a href="#pub-multibehavior">multi-behavior recommendation</a>).' },
    { date: "2024.10", text: 'One paper accepted at <strong>WSDM 2025</strong> (<a href="#pub-fusion">Fusion Matters</a>).' },
    { date: "2023.10", text: 'One paper accepted at <strong>WSDM 2024</strong> (<a href="#pub-incmsr">IncMSR</a>).' },
    { date: "2023.08", text: 'One paper accepted at <strong>CIKM 2023</strong> (<a href="#pub-hcl4qc">HCL4QC</a>).' }
  ],

  // ----------------------------------------------------- Publications
  pubGroups: [
    { key: "agents", title: "Agents, evaluation & temporal reasoning" },
    { key: "ts",     title: "Time series under missingness & shift" },
    { key: "graph",  title: "Graph learning & AI for science" },
    { key: "rec",    title: "Recommendation & search" }
  ],

  publications: [
    // ---- Agents, evaluation & temporal reasoning (current focus)
    {
      id: "gridbench", group: "agents",
      title: "Grid-Bench: Can LLMs Predict How Discrete Worlds Change?",
      authors: "Zixiang Xu, Zirui Song, Wanrong Zheng, Chiyu Zhang, Yue Huang, Yuyang Peng, Kexin Zhang, Jinkun Chen, Xiuying Chen, Xiangliang Zhang, Yan Liu, Laurent Itti, Frank Shyu, Xiaoqiang Luo, Sandeep Pandey, Xi Liu, Luke Simon, Xiyang Hu, Yue Zhao",
      venueShort: "arXiv 2026", venue: "Preprint, 2026",
      links: { paper: "https://arxiv.org/abs/2610.22312", code: "https://github.com/grid-bench/Grid-Bench", project: "https://grid-bench.github.io/" }
    },
    {
      id: "tsreason", group: "agents",
      title: "When LLM Meets Time Series: A Real-World Benchmark for Explicit and Implicit Multi-Step Reasoning",
      authors: "Muyan Weng, Jinbo Liu, Defu Cao, Wen Ye, Kexin Zhang, Wei Yang, Yan Liu†",
      venueShort: "arXiv 2026", venue: "Preprint, 2026",
      links: { paper: "https://openreview.net/pdf?id=kYLEBMmkE7" }
    },
    {
      id: "agenticts", group: "agents",
      title: "The Landscape of Agentic Time Series Systems: Architectures, Reliability, and Frontiers",
      authors: "Yifan Hu*, Jie Yang*, Xilin Dai*, Wanxu Cai, Kuiye Ding, Yuante Li, Qinghua Liu, Enze Ma, Zhiyuan Qu, Yixin Wang, Binyan Xu, Kexin Zhang, Peiyuan Liu, Zhijian Xu, Guibin Zhang, Yujin Tang, Yanwei Yue, Kening Zheng, Chengze Li, Hanrong Zhang, Haoyan Xu, Naiqi Li, Tao Dai, Dawei Cheng, John Paparrizos, Kaize Ding, Tian Zhou, Qiang Xu, Shu-tao Xia, Shirui Pan, Philip S. Yu",
      venueShort: "arXiv 2026", venue: "Preprint, 2026",
      links: { paper: "https://www.researchgate.net/profile/Yifan-Hu-75/publication/407030432_The_Landscape_of_Agentic_Time_Series_Systems_Architectures_Reliability_and_Frontiers/links/6a2d9515d551e312d7201f35/The-Landscape-of-Agentic-Time-Series-Systems-Architectures-Reliability-and-Frontiers.pdf", project: "https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series" }
    },
    {
      id: "timebraid", group: "agents",
      title: "TimeBraid: Unifying Time Series and Language for Understanding and Forecasting",
      authors: "Xinyue Wang, Jiacheng Pang, Kun Zhou, Kexin Zhang, Defu Cao, Fan Feng, Faisal, Songyao Jin, Yan Liu, Biwei Huang†",
      venueShort: "arXiv 2026", venue: "Preprint, 2026",
      links: { paper: "https://arxiv.org/abs/2609.29792", code: "https://github.com/CharonWangg/TimeBraid", project: "https://xinyuewangg.com/projects/timebraid/" }
    },

    // ---- Time series
    {
      id: "latentts", group: "ts",
      title: "From Observations to States: Latent Time Series Forecasting",
      authors: "Jie Yang, Yifan Hu, Yuante Li, Kexin Zhang, Kaize Ding†, Philip S. Yu†",
      venueShort: "ICML 2026", venue: "International Conference on Machine Learning (ICML), 2026",
      links: { paper: "https://arxiv.org/abs/2602.00297", code: "https://github.com/Muyiiiii/LatentTSF" }
    },
    {
      id: "glocal", group: "ts",
      title: "Glocal Information Bottleneck for Time Series Imputation",
      authors: "Jie Yang, Kexin Zhang, Guibin Zhang, Philip S. Yu, Kaize Ding†",
      venueShort: "NeurIPS 2025", venue: "Advances in Neural Information Processing Systems (NeurIPS), 2025",
      links: { paper: "https://arxiv.org/abs/2510.04910", code: "https://github.com/Muyiiiii/NeurIPS-25-Glocal-IB" }
    },
    {
      id: "crossdiff", group: "ts",
      title: "Cross-Domain Conditional Diffusion Models for Time Series Imputation",
      authors: "Kexin Zhang, Baoyu Jing, K. Selcuk Candan, Dawei Zhou, Qingsong Wen, Han Liu, Kaize Ding†",
      venueShort: "ECML-PKDD 2025", venue: "European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML-PKDD), 2025",
      links: { paper: "https://arxiv.org/abs/2506.12412", code: "https://github.com/kexin-kxzhang/CD2-TSI" }
    },
    {
      id: "mustang", group: "ts",
      title: "MUSTANG: Multi-Variable Spatio-Temporal Meta-Learning for Water Data Imputation",
      authors: "Yaotian Zhu, Ruiyao Xu, Zhaoyang Guan, Kexin Zhang, Noah Rudko, Chuxu Zhang, Rebecca L. Muenich, K. Selcuk Candan, Kaize Ding†",
      venueShort: "KDD 2026", venue: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2026",
      links: { paper: "https://doi.org/10.1145/3770855.3818947" }
    },
    {
      id: "revisitmts", group: "ts",
      title: "Revisiting Multivariate Time Series Forecasting with Missing Values",
      authors: "Jie Yang, Yifan Hu, Kexin Zhang, Luyang Niu, Yushun Dong, Philip S. Yu, Kaize Ding†",
      venueShort: "arXiv 2025", venue: "Preprint, 2025",
      links: { paper: "https://arxiv.org/abs/2509.23494", code: "https://github.com/Muyiiiii/CRIB" }
    },

    // ---- Graphs & AI for science
    {
      id: "molsurvey", group: "graph",
      title: "A Survey of Large Language Models for Text-Guided Molecular Discovery: From Molecule Generation to Optimization",
      authors: "Ziqing Wang*, Kexin Zhang*, Zihan Zhao, Yibo Wen, Abhishek Pandey, Han Liu, Kaize Ding†",
      venueShort: "ACL 2026", venue: "Annual Meeting of the Association for Computational Linguistics (ACL), 2026",
      links: { paper: "https://arxiv.org/abs/2505.16094", project: "https://github.com/REAL-Lab-NU/Awesome-LLM-Centric-Molecular-Discovery" }
    },
    {
      id: "graphood", group: "graph",
      title: "A Survey of Deep Graph Learning under Distribution Shifts: From Graph Out-of-Distribution Generalization to Adaptation",
      authors: "Kexin Zhang, Shuhan Liu, Song Wang, Weili Shi, Chen Chen, Pan Li, Sheng Li, Jundong Li, Kaize Ding†",
      venueShort: "TKDD 2025", venue: "ACM Transactions on Knowledge Discovery from Data (TKDD), 2025",
      links: { paper: "https://arxiv.org/abs/2410.19265", project: "https://github.com/kaize0409/Awesome-Graph-OOD" }
    },

    // ---- Recommendation & search
    {
      id: "fusion", group: "rec",
      title: "Fusion Matters: Learning Fusion in Deep Click-through Rate Prediction Models",
      authors: "Kexin Zhang*, Fuyuan Lyu*, Xing Tang†, Dugang Liu, Chen Ma, Kaize Ding, Xiuqiang He, Xue Liu",
      venueShort: "WSDM 2025", venue: "ACM International Conference on Web Search and Data Mining (WSDM), 2025",
      links: { paper: "https://arxiv.org/abs/2411.15731", code: "https://github.com/kexin-kxzhang/OptFusion" }
    },
    {
      id: "incmsr", group: "rec",
      title: "IncMSR: An Incremental Learning Approach for Multi-Scenario Recommendation",
      authors: "Kexin Zhang*, Yichao Wang*, Xiu Li†, Ruiming Tang, Rui Zhang",
      venueShort: "WSDM 2024", venue: "ACM International Conference on Web Search and Data Mining (WSDM), 2024",
      links: { paper: "https://doi.org/10.1145/3616855.3635828" }
    },
    {
      id: "multibehavior", group: "rec",
      title: "Combinatorial Optimization Perspective Based Framework for Multi-Behavior Recommendation",
      authors: "Chenhao Zhai, Chang Meng, Yu Yang, Kexin Zhang, Xuhao Zhao, Xiu Li†",
      venueShort: "KDD 2025", venue: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2025",
      links: { paper: "https://arxiv.org/abs/2502.02232", code: "https://github.com/1918190/COPF" }
    },
    {
      id: "hcl4qc", group: "rec",
      title: "HCL4QC: Incorporating Hierarchical Category Structures Into Contrastive Learning for E-commerce Query Classification",
      authors: "Lvxing Zhu*, Kexin Zhang*, Hao Chen, Chao Wei, Weiru Zhang, Haihong Tang, Xiu Li†",
      venueShort: "CIKM 2023", venue: "ACM International Conference on Information and Knowledge Management (CIKM), 2023",
      links: { paper: "https://doi.org/10.1145/3583780.3614907" }
    }
  ],

  // ------------------------------------------ Professional Activities
  // The section appears automatically once this list has entries, e.g.
  //   { role: "Conference Reviewer", items: "ICML 2026, NeurIPS 2026, KDD 2026" },
  //   { role: "Journal Reviewer",    items: "IEEE TKDE, ACM TKDD" },
  //   { role: "Teaching Assistant",  items: "CSCI 567 Machine Learning, USC (Fall 2026)" },
  activities: [
    { role: "Conference Reviewer", items: "KDD 2025, KDD 2026, WWW 2026, ICLR 2027, AAAI 2027" }
  ]
};
