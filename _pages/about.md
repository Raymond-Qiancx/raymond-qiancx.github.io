---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/ 
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<p class="profile-intro">Hi, I am Chengxuan Qian (钱承炫), an incoming CS PhD student at <strong>University of California, Santa Barbara (UCSB)</strong>, advised by Prof. <a href="https://yaoqin1.github.io/">Yao Qin</a>. Prior to that, I'm grateful for the mentorship of Prof. <a href="https://vztu.github.io/">Zhengzhong Tu</a> (TAMU), Prof. <a href="https://viterbi-web.usc.edu/~yzhao010/">Yue Zhao</a> (USC), and Prof. <a href="https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/liu-han.html">Han Liu</a> (Northwestern University) during my undergraduate years.</p>

<p class="profile-intro profile-intro--research-focus">My research focuses on <strong>identifying and eliminating barriers</strong> to <strong>foundation models</strong> reaching <strong>superintelligence</strong>. Foundation models grow from large-scale, static, and idealized settings, yet the real world is dynamic and partially observable. Can they actively explore, interact with tools and environments, and connect with memory? Can they simulate world dynamics, imagine future states, and continually evolve from experience? <strong>I aim to teach machines to think like humans and explore frontiers beyond human reach</strong>.</p>

<div class="connect-panel" style="position: relative; border-radius: 12px; padding: 18px 22px; background: linear-gradient(135deg, #eaf5ff 0%, #d6e9ff 100%); margin: 1.2em 0; box-shadow: 0 4px 14px rgba(34, 75, 141, 0.12); border: 0;">
  <div class="connect-panel__title" style="color: #173b73; font-weight: 600; font-size: 1.02em; margin-bottom: 8px; letter-spacing: 0.2px;">
    ✨ Let's Connect
  </div>
  <div style="color: #2b5f9f; font-size: 0.95em; line-height: 1.55; margin-bottom: 10px;">
    I'm always open to <b>collaboration</b>, <b>discussion</b>, or just a friendly <b>hello</b> — feel free to reach out anytime!
  </div>
  <div style="color: #2b5f9f; font-size: 0.92em; line-height: 1.55; margin-bottom: 10px;">
    I will attend <b>CVPR 2026</b> from <b>June 2-6</b> — see you in Denver!<br>
    I will attend <b>ACL 2026</b> from <b>July 5-8</b> — see you in San Diego!<br>
    🏆 <b>ACL 2026 Oral Presentation</b>: I will present <b>ProgressLM</b> on Tuesday, July 7, Harbor H-I, Oral Session F, 09:00-10:30.
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 10px; font-size: 0.88em;">
    <span class="connect-panel__chip" style="background-color: rgba(255,255,255,0.72); color: #224b8d; padding: 5px 13px; border-radius: 20px; font-weight: 500; box-shadow: 0 1px 3px rgba(34, 75, 141, 0.08);">
      📧 chengxuanqian[at]ucsb.edu
    </span>
    <span class="connect-panel__chip" style="background-color: rgba(255,255,255,0.72); color: #224b8d; padding: 5px 13px; border-radius: 20px; font-weight: 500; box-shadow: 0 1px 3px rgba(34, 75, 141, 0.08);">
      💬 WeChat: qiancxdotcom
    </span>
  </div>
  <div style="color: #5f7fa8; font-size: 0.8em; line-height: 1.4; margin-top: 12px;">
    Last Update: June 10, 2026
  </div>
</div>

<div class="research-news-layout">
  <section class="research-news-column research-news-column--research">
    <span class='anchor' id='research'></span>
    <h1 class="section-heading"><span class="section-heading__icon">🧭</span>Research Interests</h1>

    <div class="research-board">
      <div class="research-card-grid">
        <article class="research-card research-card--pink research-card--wide">
          <h3><span></span>Multimodal Intelligence</h3>
          <p>
            <a href="https://arxiv.org/abs/2503.11892">DecAlign (ICLR 26)</a>,
            <a href="https://arxiv.org/abs/2503.06456">DynCIM (CVPRW 26)</a>,
            <a href="https://arxiv.org/abs/2601.15224">ProgressLM (ACL 26 Oral)</a>,
            <a href="https://arxiv.org/abs/2509.01944">AutoDrive-R2 (ICLR 26)</a>,
            <a href="https://arxiv.org/abs/2510.08480">Video-STAR (ICLR 26)</a>,
            <a href="https://link.springer.com/chapter/10.1007/978-3-032-05182-0_7">CLIMD (MICCAI 25)</a>,
            <a href="https://openaccess.thecvf.com/content/CVPR2026/html/Wei_fMRI-LM_Towards_a_Universal_Foundation_Model_for_Language-Aligned_fMRI_Understanding_CVPR_2026_paper.html">fMRI-LM (CVPR 26)</a>,
            <a href="https://aclanthology.org/2025.emnlp-main.121/">Re-Align (EMNLP 25 Main)</a>
          </p>
        </article>

        <article class="research-card research-card--orange">
          <h3><span></span>Spatial Intelligence and World Modeling</h3>
          <p>
            <a href="https://progresslm.github.io/ProgressLM/">Spatial Understanding and Mental Simulation (ACL 26 Oral)</a>,
            <a href="https://proceedings.neurips.cc/paper_files/paper/2025/hash/b690b88de1cd9694e356b021bc643ba1-Abstract-Conference.html">Dynamic Scene Generation (NeurIPS 25)</a>,
            <a href="https://ieeexplore.ieee.org/abstract/document/11225906">Multi-View Stereo (IEEE TCSVT 25)</a>,
            <a href="https://arxiv.org/abs/2602.11499">What If Agents Could Imagine?</a>
          </p>
        </article>

        <article class="research-card research-card--green">
          <h3><span></span>Medical AI, Autonomous Driving, Video Understanding, and Embodied Robotics</h3>
          <p>
            Medical AI (<a href="https://arxiv.org/abs/2503.12218">BIBM AIBH 25</a>,
            <a href="https://ieeexplore.ieee.org/abstract/document/11080080">IEEE TMI 25</a>,
            <a href="https://link.springer.com/chapter/10.1007/978-3-032-05182-0_7">MICCAI 25</a>,
            <a href="https://ieeexplore.ieee.org/abstract/document/11270172">IEEE JBHI 25</a>,
            <a href="https://openaccess.thecvf.com/content/CVPR2026/html/Wei_fMRI-LM_Towards_a_Universal_Foundation_Model_for_Language-Aligned_fMRI_Understanding_CVPR_2026_paper.html">CVPR 26</a>),
            <a href="https://arxiv.org/abs/2509.01944v3">Autonomous Driving (ICLR 26)</a>,
            <a href="https://arxiv.org/abs/2510.08480">Video Understanding (ICLR 26)</a>,
            <a href="https://progresslm.github.io/ProgressLM/">Embodied Robotics (ACL 26 Oral)</a>
          </p>
        </article>
      </div>
    </div>
  </section>

  <section class="research-news-column research-news-column--news">
    <span class='anchor' id='news'></span>
    <h1 class="section-heading"><span class="section-heading__icon">🔥</span>News</h1>

    <div class="news-panel" style="max-height: 350px; overflow-y: auto; border: 1px solid rgba(34, 75, 141, 0.18); border-radius: 8px; padding: 10px 15px; background: linear-gradient(135deg, rgba(234, 245, 255, 0.86) 0%, rgba(214, 233, 255, 0.74) 100%); box-shadow: 0 4px 14px rgba(34, 75, 141, 0.08);">
      <ul>
        <li><em>2026.05</em>: &nbsp;🏆🏆 Recognized as a <a href="https://media.eventhosts.cc/Conferences/CVPR2026/CVPR_main_conf_2026_15.pdf"><strong><em>CVPR 2026 Outstanding Reviewer</em></strong></a>, top 5% of 17,491 reviewers.</li>
        <li><em>2026.05</em>: &nbsp;🏆🏆 Our work <a href="https://progresslm.github.io/ProgressLM/">ProgressLM</a> has been selected as an <strong><em>ACL 2026 Oral Presentation (Top 3.3%)</em></strong> 🔥</li>
        <li><em>2026.04</em>: &nbsp;🎉🎉 Our work <a href="https://progresslm.github.io/ProgressLM/">ProgressLM</a> on General Reward Model for Embodied Agents has been accepted to <strong><em>ACL 2026 Main Conference</em></strong> and <strong><em>ICLR 2026 Workshop on World Models</em></strong>!</li>
        <li><em>2026.04</em>: &nbsp;🎉🎉 My first-author work <a href="https://arxiv.org/abs/2503.06456">DynCIM</a> on cross-modal imbalance in multimodal foundation models has been accepted by <strong><em>CVPR 2026 Workshop on Cognitive Foundations for Multimodal Models</em></strong>!</li>
        <li><em>2026.03</em>: &nbsp;🔥🔥 Joined University of California, Santa Barbara (UCSB) as a CS PhD student.</li>
        <li><em>2026.02</em>: &nbsp;🎉🎉 We release <a href="https://arxiv.org/abs/2602.11499">What If Agents Could Imagine?</a>, a study that breaks through the static perception barrier of VLMs via active generative world modeling.</li>
        <li><em>2026.02</em>: &nbsp;🎉🎉 Our work <a href="https://arxiv.org/abs/2511.21760">fMRI-LM</a> on Medical Foundation Models has been accepted by <strong><em>CVPR 2026</em></strong>!</li>
        <li><em>2026.01</em>: &nbsp;🎉🎉 Three first/co-first author papers have been accepted by <strong><em>ICLR 2026</em></strong>!
          <ul>
            <li><a href="https://arxiv.org/abs/2503.11892">DecAlign</a>: Aligning Cross-Modal Semantics for Multimodal Foundation Models</li>
            <li><a href="https://arxiv.org/abs/2509.01944v2">AutoDrive-R²</a>: Towards Physical-Grounded Multimodal Reasoning for Autonomous Driving</li>
            <li><a href="https://arxiv.org/abs/2510.08480">Video-STAR</a>: Tool-Augmented Agentic RL for Thinking with Videos</li>
          </ul>
        </li>
        <li><em>2026.01</em>: &nbsp;🎉🎉 We propose <a href="https://progresslm.github.io/ProgressLM/">ProgressLM</a>, which further investigates whether VLMs can acquire human-like, generalizable mental understanding and simulation in embodied scenarios from a single example, and serves as an early step toward building general-purpose reward models. See More: <a href="https://progresslm.github.io/ProgressLM/">[Website]</a> <a href="https://arxiv.org/abs/2601.15224">[Paper]</a> <a href="https://github.com/Raymond-Qiancx/ProgressLM">[Code]</a> <a href="https://huggingface.co/collections/Raymond-Qiancx/progresslm">[Model]</a> <a href="https://huggingface.co/datasets/Raymond-Qiancx/ProgressLM-Dataset">[Dataset]</a></li>
        <li><em>2025.11</em>: &nbsp;🎉🎉 Our work <a href="https://arxiv.org/abs/2511.19889">LiMT</a>, an unified multi-task liver image benchmark work, has been accepted by <strong><em>Journal of Biomedical and Health Informatics (JBHI)</em></strong>!</li>
        <li><em>2025.10</em>: &nbsp;🎉🎉 Our work <a href="https://arxiv.org/abs/2506.13215">DVP-MVS++</a>, Synergize Depth-Normal-Edge and Harmonized Visibility Prior for Multi-View Stereo, has been accepted by <strong><em>IEEE Transactions on Circuits and Systems for Video Technology (IEEE TCSVT)</em></strong>!</li>
        <li><em>2025.10</em>: &nbsp;🎉🎉 My <a href="https://arxiv.org/abs/2503.12218">first-author work</a> on Medical Segmentation under sparse and noisy labeled annotations has been accepted by <strong><em>BIBM AIBH 2025</em></strong>!</li>
        <li><em>2025.10</em>: &nbsp;🎉🎉 We propose <a href="https://arxiv.org/abs/2510.08480">Video-STAR</a>, a powerful Tool-Augmented Agentic RL approach for Thinking with Videos. On open-vocabulary action recognition benchmarks like K-400 and HMDB-51, our 3B VLM achieves nearly 40% accuracy improvement over base models!🔥</li>
        <li><em>2025.09</em>: &nbsp;🎉🎉 Our work <a href="https://arxiv.org/abs/2506.09518">HAIF-GS</a>, Hierarchical and Induced Flow-Guided Gaussian Splatting for Dynamic Scene, has been accepted by <strong><em>NeurIPS 2025</em></strong>!</li>
        <li><em>2025.09</em>: &nbsp;🎉🎉 We propose <a href="https://arxiv.org/abs/2509.01944v1">AutoDrive-R²</a>, Incentivizing Reasoning and Self-Reflection Capacity for VLA Model in Autonomous Driving. We're also honored that our work was featured by <a href="https://mp.weixin.qq.com/s/7y0-CMAkls16iumNK3mlXg">AutoDrive Heart (自动驾驶之心)</a>!</li>
        <li><em>2025.08</em>: &nbsp;🎉🎉 Our work <a href="https://taco-group.github.io/Re-Align/">Re-Align</a> has been accepted by <strong><em>EMNLP 2025 Main Conference</em></strong>!</li>
        <li><em>2025.07</em>: &nbsp;🎉🎉 Our work on <a href="https://ieeexplore.ieee.org/document/11080080">Generalizable Medical Vision</a> has been <strong><em>Accepted</em></strong> by <strong><em>IEEE Transactions on Medical Imaging</em></strong>.</li>
        <li><em>2025.05</em>: &nbsp;🎉🎉 Our work <a href="https://arxiv.org/abs/2508.01594">CLIMD</a> has been <strong><em>Early Accepted</em></strong> by <strong><em>MICCAI 2025</em></strong> (Top 9%).</li>
        <li><em>2025.03</em>: &nbsp;🎉🎉 Excited to propose my first-author work <a href="https://taco-group.github.io/DecAlign/">DecAlign</a>, a novel cross-modal decoupling and alignment framwork for multimodal representation learning.</li>
        <li><em>2024.11</em>: &nbsp;🎉🎉 Excited to propose my first-author work <a href="https://arxiv.org/abs/2503.06456">DynCIM</a>, a novel dynamic multimodal curriculum learning framework in addressing cross-modal competition and imbalances, which is now available on ArXiv!</li>
        <li><em>2024.10</em>: &nbsp;🎉🎉 We propose <a href="https://arxiv.org/abs/2510.11005">FASS</a>, a novel frequency domain-enhanced approach for Medical Image Segmentation under Low-Contrast environment.</li>
      </ul>
    </div>
  </section>
</div>

<span class='anchor' id='publications'></span>

# 📝 Selected Publications <span style="font-size: 0.6em; font-weight: normal;">(For the full list, please see <a href="https://scholar.google.com/citations?user=DZDZXtwAAAAJ&hl=en">Google Scholar</a>)</span>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/decalign.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DecAlign: Hierarchical Cross-Modal Alignment for Decoupled Multimodal Representation Learning](https://arxiv.org/abs/2503.11892)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Multimodal Alignment</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f5e9; color: #2e7d32; border-radius: 15px; font-size: 12px;">Foundation Model</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #f3e5f5; color: #7b1fa2; border-radius: 15px; font-size: 12px;">Interpretability</span>

<a href="https://taco-group.github.io/DecAlign/" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Website</a>
<a href="https://arxiv.org/abs/2503.11892" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Paper</a>
<a href="https://github.com/taco-group/DecAlign" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Code</a>

**ICLR 2026**

**Chengxuan Qian**, Shuo Xing, Shawn Li, [Yue Zhao](https://viterbi-web.usc.edu/~yzhao010/lab), [Zhengzhong Tu](https://vztu.github.io/)<sup>&dagger;</sup>.


</div>
</div>




<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2026</div><img src='images/progresslm.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ProgressLM: Towards Progress Reasoning in Vision-Language Models](https://progresslm.github.io/ProgressLM/)


<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Spatial Intelligence</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f5e9; color: #2e7d32; border-radius: 15px; font-size: 12px;">Embodied Robotics</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fffde7; color: #f9a825; border-radius: 15px; font-size: 12px;">Data-Centric</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e0f7fa; color: #00838f; border-radius: 15px; font-size: 12px;">Multimodal Reasoning</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #f3e5f5; color: #7b1fa2; border-radius: 15px; font-size: 12px;">Open-World Applications</span>

<a href="https://progresslm.github.io/ProgressLM/" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Website</a>
<a href="https://arxiv.org/abs/2601.15224" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Paper</a>
<a href="https://github.com/ProgressLM/ProgressLM" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Code</a>
<a href="https://huggingface.co/collections/Raymond-Qiancx/progresslm" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Model</a>
<a href="https://huggingface.co/datasets/Raymond-Qiancx/ProgressLM-Dataset" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Dataset</a>

🏆 **ACL 2026 (Oral Presentation, Top 3.3%) and ICLR 2026 Workshop on World Models**

Jianshu Zhang*, <span style="font-weight: bold;">Chengxuan Qian*</span>, Haosen Sun, Haoran Lu, Dingcheng Wang, Letian Xue, [Han Liu](https://magics.cs.northwestern.edu/people.html)


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/autodriver2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AutoDrive-R²: Incentivizing Reasoning and Self-Reflection Capacity for VLA Model in Autonomous Driving](https://arxiv.org/abs/2509.01944v2)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Multimodal Reasoning</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Autonomous Driving</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #f3e5f5; color: #7b1fa2; border-radius: 15px; font-size: 12px;">Open-World Applications</span>

<a href="https://arxiv.org/pdf/2509.01944" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Paper</a>
<a href="https://github.com/AMAP-ML/AutoDrive-R2" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Code</a>
<a href="https://huggingface.co/GD-ML/AutoDrive-R2-7B" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Model</a>
<a href="https://huggingface.co/datasets/GD-ML/AutoDrive-R2-all-data/tree/main" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Dataset</a>

**Featured by [AutoDrive Heart (自动驾驶之心)](https://mp.weixin.qq.com/s/7y0-CMAkls16iumNK3mlXg)**

**ICLR 2026**

Zhenlong Yuan*, <span style="font-weight: bold;">Chengxuan Qian*</span>, Jing Tang, Jinguo Luo, Rui Chen, Lei Sun, Xiangxiang Chu, Yujun Cai, Dapeng Zhang, Shuo Li.


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/Video_star.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Video-STAR: Reinforcing Open-Vocabulary Action Recognition with Tools](https://arxiv.org/abs/2510.08480)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Think with Videos</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Tool-Using Agent</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #f3e5f5; color: #7b1fa2; border-radius: 15px; font-size: 12px;">Multi-turn Agentic RL</span>

<a href="https://arxiv.org/pdf/2510.08480" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Paper</a>
<a href="https://github.com/AMAP-ML/Video-STAR" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Code</a>
<a href="https://huggingface.co/GD-ML/Video-STAR-3B" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">3B Model</a>
<a href="https://huggingface.co/GD-ML/Video-STAR-7B" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">7B Model</a>
<a href="https://github.com/AMAP-ML/Video-STAR#download-datasets" style="display: inline-block; padding: 4px 12px; margin: 4px 4px 4px 0; background-color: #f0f0f0; border-radius: 20px; font-size: 12px; color: #555; text-decoration: none; font-weight: 500;">Dataset</a>

**ICLR 2026**

Zhenlong Yuan<sup>*</sup>, Xiangyan Qu<sup>*</sup>, **Chengxuan Qian**<sup>*</sup>, Rui Chen, Jing Tang, Lei Sun, Xiangxiang Chu, Dapeng Zhang, Yiwei Wang, Yujun Cai, Shuo Li.

</div>
</div>



<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/aaai2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DynCIM: Dynamic Curriculum for Imbalanced Multimodal Learning](https://arxiv.org/abs/2503.06456)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Multimodal Competition</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Modality Imbalances</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e0f7fa; color: #00838f; border-radius: 15px; font-size: 12px;">Curriculum Learning</span>

**Chengxuan Qian**, Kai Han, Jingchao Wang, Zhenlong Yuan, Chongwen Lyu, Jun Chen<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.


</div>
</div> -->


<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/imagine.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[What if Agents Could Imagine?](https://arxiv.org/abs/2602.11499)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Multimodal LLMs</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Generative World Modeling</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e0f7fa; color: #00838f; border-radius: 15px; font-size: 12px;">Agentic RL</span>

Zhenlong Yuan, Xiangyan Qu, Jing Tang, Rui Chen, Lei Sun, Ruidong Chen, Hongwei Yu, **Chengxuan Qian**, Xiangxiang Chu, Shuo Li, Yuyin Zhou<sup>&dagger;</sup>.


</div>
</div> -->





<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/spa.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

System Prompt Auditing for User-centric Large Language Model Systems

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #f3e5f5; color: #7b1fa2; border-radius: 15px; font-size: 12px;">Human-centric AI</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #ffebee; color: #c62828; border-radius: 15px; font-size: 12px;">LLM Safety</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">AI Agents</span>

Xiangning Lin\*, Shenzhe Zhu\*, **Chengxuan Qian**, Tianwei Wang, Haoqian Zhang, Ziheng Zhang, Zhenlong Yuan, Dingcheng Wang, Juncheng Wu, Yuan Si, Jiaxin Liu, Baolong Bi, Shu Yang, Robert Mahari, Tobin South, Dazza Greenwood, Andreas Haupt, Samuele Marro, [Alex Pentland](https://www.media.mit.edu/people/sandy/overview/), [Jiaxin Pei](https://jiaxin-pei.github.io/)

</div>
</div> -->




<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2025</div><img src='images/realign.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Re-Align: Aligning Vision Language Models via Retrieval-Augmented Direct Preference Optimization](https://taco-group.github.io/Re-Align/)

**EMNLP 2025 Main Conference**

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Multimodal Alignment</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #ffebee; color: #c62828; border-radius: 15px; font-size: 12px;">Hallucination Mitigation</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Multimodal RAG</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f5e9; color: #2e7d32; border-radius: 15px; font-size: 12px;">DPO</span>

Shuo Xing, Yuping Wang, Peiran Li, Ruizheng Bai, Yueqi Wang, **Chengxuan Qian**, [Huaxiu Yao](https://www.huaxiuyao.io/), [Zhengzhong Tu](https://vztu.github.io/)<sup>&dagger;</sup>.


</div>
</div> -->


<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/zzz.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Contrastive Intra- and Inter-modal Clustering for Multimodal Semantic Discovery

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Multimodal Learning</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fffde7; color: #f9a825; border-radius: 15px; font-size: 12px;">Semantic Discovery</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #f3e5f5; color: #7b1fa2; border-radius: 15px; font-size: 12px;">Interpretability</span>

Zhengzhong Zhu, Pei Zhou, **Chengxuan Qian**, Ruohong Yang, Yixuan Ye, Jiangping Zhu

</div>
</div> -->



<!-- 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">BIBM 2025</div><img src='images/EAAI2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Adaptive Label Correction Framework for Robust Medical Image Segmentation with Noisy Labels](https://arxiv.org/abs/2503.12218)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #ffebee; color: #c62828; border-radius: 15px; font-size: 12px;">Medical Segmentation</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Noisy Labels</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e0f7fa; color: #00838f; border-radius: 15px; font-size: 12px;">Sparse Annotation</span>

**BIBM AIBH 2025**

**Chengxuan Qian**, K Han, Siqi Ma, Chongwen Lyu, Zhenlong Yuan, Jun Chen<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div> -->


<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/fass.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Frequency Domain Unlocks New Perspectives for Abdominal Medical Image Segmentation](https://arxiv.org/abs/2510.11005)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #ffebee; color: #c62828; border-radius: 15px; font-size: 12px;">Medical Segmentation</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Low-contrast Environment</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f5e9; color: #2e7d32; border-radius: 15px; font-size: 12px;">Robustness</span>

Kai Han, Siqi Ma, **Chengxuan Qian**, Jun Chen<sup>&dagger;</sup>, Chongwen Lyu, [Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div> -->



<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">JBHI 2025</div><img src='images/mia2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[LiMT: A Multi-task Liver Image Benchmark Dataset](https://arxiv.org/abs/2511.19889)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #ffebee; color: #c62828; border-radius: 15px; font-size: 12px;">Medical AI</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fffde7; color: #f9a825; border-radius: 15px; font-size: 12px;">Benchmarks</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e0f7fa; color: #00838f; border-radius: 15px; font-size: 12px;">Multi-task Unified Learning</span>

**Journal of Biomedical and Health Informatics (JBHI 2025)**

Zhe Liu<sup>†</sup>, Kai Han, Siqi Ma, Yan Zhu, Jun Chen, Chongwen Lyu, Xinyi Qiu, **Chengxuan Qian**, Yuqing Song, Yi Liu, Liyuan Tian, Yang Ji, Yuefeng Li

</div>
</div> -->




<span class='anchor' id='misc'></span>

# 🌟 Misc
Outside of research, I enjoy Photography📹, swimming🏊, biking🚴, billiards🎱, table tennis🏓. I strive to stay energetic every day and maintain a strong sense of passion for both academic research and life.

<span class='anchor' id='services'></span>

# 🎖 Academical Services
- **Journal Reviewer:** IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), IEEE Transactions on Multimedia (TMM), Pattern Recognition (PR), IEEE Transactions on Robot Learning (T-RL).
- **Conference Reviewer:** ICME 2025-2026, AAAI 2026, ICASSP 2026, CVPR 2026, NeurIPS 2026.
- **Workshop Reviewer:** ACL 2025 SRW, NeurIPS 2025 Imageomics, NeurIPS 2025 Efficient Reasoning, ICLR 2026 Workshop on Lifelong Agents, ICLR 2026 Workshop World Models, COLM 2026 Workshop Efficient Reasoning.
