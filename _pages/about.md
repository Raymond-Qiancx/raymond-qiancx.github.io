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

I am a senior undergraduate student with a strong interest in Multimodal LLMs, Tool-Using Agents and Spatial Intelligence. I am fortunate to collaborate with [Manling Li](https://limanling.github.io/), [Han Liu](https://magics.cs.northwestern.edu/people.html), [Zhengzhong Tu](https://vztu.github.io/), and [Yue Zhao](https://viterbi-web.usc.edu/~yzhao010/lab). Prior to that, I worked with [Zhe Liu](https://scholar.google.com/citations?user=k32nt3sAAAAJ&hl=zh-CN) and [Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en) on research in Generalizable Medical Vision and Multimodal Machine Learning. I am deeply grateful to them for guiding me into the world of research. 

<span style="color:purple">I am actively seeking a 26 Fall CS PhD position. I am always open to collaborate, feel free to drop me an email or contact with me on wechat ID qiancxdotcom.</span>

# Research Interests 
- ***Multimodal Foundation Models (VLM, VLA, Video LLMs etc.)🔥***
- ***Spatial Intelligence (Scene Understanding, Robotic Maniplation, Embodied Navigation etc.)🔥🔥***
- ***Tool-Augmented Agentic RL (Thinking with Images/Videos, Deep Research etc.)🔥🔥***
- ***Agent in the wild (Embodied Robotics, Autonomous Driving, Biomedicine)🔥🔥***





# 📝 Publications 

## Multimodal LLMs Post-Training

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Video_star.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Video-STAR: Reinforcing Open-Vocabulary Action Recognition with Tools](https://arxiv.org/abs/2510.08480)


**Preprint**

Z Yuan, X Qu, **C Qian**<sup>†</sup>, R Chen, J Tang, L Sun, X Chu, D Zhu, [Y Wang](https://wangywust.github.io/), [Y Cai](https://vanoracai.github.io/), [S Li](https://scholar.google.com/citations?user=6WNtJa0AAAAJ&hl=en).


</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/autodriver2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AutoDrive-R²: Incentivizing Reasoning and Self-Reflection Capacity for VLA Model in Autonomous Driving](https://arxiv.org/abs/2509.01944v1)


**Preprint**

**Featured by [AutoDrive Heart (自动驾驶之心)](https://mp.weixin.qq.com/s/7y0-CMAkls16iumNK3mlXg)**

<span style="font-weight: bold;">Z Yuan*</span>**, <span style="font-weight: bold;">C Qian*</span>**, J Tang, J Luo, R Chen, L Sun, Y Cai, D Zhang, S Li.


</div>
</div>




<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2025</div><img src='images/realign.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Re-Align: Aligning Vision Language Models via Retrieval-Augmented Direct Preference Optimization](https://taco-group.github.io/Re-Align/)

**[EMNLP 2025 Main Conference](https://arxiv.org/abs/2502.13146)**

Shuo Xing, Yuping Wang, Peiran Li, Ruizheng Bai, Yueqi Wang, **Chengxuan Qian**, [Huaxiu Yao](https://www.huaxiuyao.io/), [Zhengzhong Tu](https://vztu.github.io/)<sup>&dagger;</sup>.


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/fmri-lm.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

fMRI-LM: Towards a Universal Foundation Model for Language-Aligned fMRI Understanding

**[Preprint](https://arxiv.org/abs/2511.21760)**

Yuxiang Wei, Yanteng Zhang, Xi Xiao, **Chengxuan Qian**, Tianyang Wang, [Vince D. Calhoun](https://scholar.google.com/citations?user=WNOoGKIAAAAJ&hl=en) <sup>&dagger;</sup>.


</div>
</div>

## Multimodal Foundation Models

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/decalign.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DecAlign: Hierarchical Cross-Modal Alignment for Decoupled Multimodal Representation Learning](https://arxiv.org/abs/2503.11892)

**[ArXiv Preprint](https://taco-group.github.io/DecAlign/)**

**Chengxuan Qian**, Shuo Xing, Shawn Li, [Yue Zhao](https://viterbi-web.usc.edu/~yzhao010/lab), [Zhengzhong Tu](https://vztu.github.io/)<sup>&dagger;</sup>.


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/aaai2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DynCIM: Dynamic Curriculum for Imbalanced Multimodal Learning](https://arxiv.org/abs/2503.06456)

**[Arxiv Preprint](https://arxiv.org/abs/2503.06456)**

**Chengxuan Qian**, Kai Han, Jingchao Wang, Zhenlong Yuan, Chongwen Lyu, Jun Chen<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MICCAI 2025</div><img src='images/bibm_cl.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[CLIMD: A Curriculum Learning Framework for Imbalanced Multimodal Diagnosis](https://arxiv.org/abs/2508.01594)

**MICCAI 2025 Early Accept (Top 9% Paper)**

Kai Han, Chongwen Lyu, **Chengxuan Qian**, Siqi Ma, Jun Chen<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>,

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/zzz.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Contrastive Intra- and Inter-modal Clustering for Multimodal Semantic Discovery

**Under Review**

Zhengzhong Zhu, Pei Zhou, **Chengxuan Qian**, Ruohong Yang, Yixuan Ye, Jiangping Zhu

</div>
</div>


## Medical Image Analysis

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">BIBM 2025</div><img src='images/EAAI2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Adaptive Label Correction Framework for Robust Medical Image Segmentation with Noisy Labels](https://arxiv.org/abs/2503.12218)

**[BIBM 2025](https://arxiv.org/abs/2503.12218)**

**Chengxuan Qian**, K Han, Siqi Ma, Chongwen Lyu, Zhenlong Yuan, Jun Chen<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE TMI 2025</div><img src='images/tmi_24.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Region Uncertainty Estimation for Medical Image Segmentation with Noisy Labels](https://ieeexplore.ieee.org/document/11080080)

**IEEE Transaction on Medical Imaging (Published July 2025)**

Kai Han, Shuhui Wang, Jun Chen<sup>&dagger;</sup>, **Chengxuan Qian**, Chongwen Lyu, Siqi Ma, [Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>, Qingming Huang<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/fass.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Frequency Domain Unlocks New Perspectives for Abdominal Medical Image Segmentation](https://arxiv.org/abs/2510.11005)

**arXiv Preprint**

Kai Han, Siqi Ma, **Chengxuan Qian**, Jun Chen<sup>&dagger;</sup>, Chongwen Lyu, [Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">JBHI 2025</div><img src='images/mia2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

LiMT: A Multi-task Liver Image Benchmark Dataset

**Journal of Biomedical and Health Informatics (JBHI 2025)**

Z Liu<sup>†</sup>, K Han, S Ma, J Chen<sup>&dagger;</sup>, ..., **C Qian**, C Lyu, ..., [V S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>.  


</div>
</div>









## 3D Vision


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TCSVT 2025</div><img src='images/DVP_MVS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DVP-MVS++: Synergize Depth-Normal-Edge and Harmonized Visibility Prior for Multi-View Stereo](https://arxiv.org/abs/2506.13215)

**IEEE Transactions on Circuits and Systems for Video Technology**

Zhenlong Yuan, Dapeng Zhang, Zehao Li, **Chengxuan Qian**, Jianing Chen, Yinda Chen, Kehua Chen, Tianlu Mao, Zhaoxin Li, Hao Jiang and Zhaoqi Wang

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='images/HALFGS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[HAIF-GS: Hierarchical and Induced Flow-Guided Gaussian Splatting for Dynamic Scene](https://arxiv.org/abs/2506.09518)

**[NeurIPS 2025](https://arxiv.org/abs/2506.09518)**

Jianing Chen, Zehao Li, Yujun Cai, Hao Jiang, **Chengxuan Qian**, Juyuan Kang, Shuqin Gao, Honglong Zhao, Tianlu Mao, Yucheng Zhang.

</div>
</div>



# 🎖 Academical Services
- **Journal Reviewer:** IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), IEEE Transactions on Multimedia (TMM).
- **Conference Reviewer:** ICME 2025-2026, AAAI 2026, ICASSP 2026, CVPR 2026
- **Workshop Reviewer:** ACL 2025 SRW, NeurIPS 2025 Imageomics, NeurIPS 2025 Efficient Reasoning


