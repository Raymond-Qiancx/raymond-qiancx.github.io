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

I am a senior undergraduate student with a strong interest in Multimodal LLMs Post-Training and Tool-Augmented Agentic System. I am fortunate to collaborate with [Manling Li](https://limanling.github.io/), [Zhengzhong Tu](https://vztu.github.io/), [Yue Zhao](https://viterbi-web.usc.edu/~yzhao010/lab), and more broadly with [Jiacheng Zhu](https://jiachengzhuml.github.io/), [Yujun Cai](https://vanoracai.github.io/), [Yiwei Wang](https://wangywust.github.io/), [Shuo Li](https://scholar.google.com/citations?user=6WNtJa0AAAAJ&hl=en). Prior to that, I worked with [Zhe Liu](https://scholar.google.com/citations?user=k32nt3sAAAAJ&hl=zh-CN) and [Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en) on research in Generalizable Medical Vision and Multimodal Machine Learning. I am deeply grateful to them for guiding me into the world of research. 

<span style="color:purple">I am actively seeking a 26 Fall CS PhD position. I am always open to collaborate, feel free to drop me an email or contact with me on wechat ID qiancxdotcom.</span>

# Research Interests
- ***Multimodal Foundation Models (VLM, VLA, Videos, Spatial Intelligence etc.)🔥***
- ***Multimodal Post-Training (Reasoning, Alignment, Benchmarks, Agent)🔥🔥***
- ***Tool-Augmented Agentic RL (Visual Tools, RAG, Search Engine, Code Interpreter, APIs etc.)🔥🔥***
- ***Agent Application (Autonomous Driving, Biomedicine, Embodied AI)🔥🔥***


# 🔥 News
- *2025.09*: &nbsp;🎉🎉 Our work [HALF-GS](https://arxiv.org/abs/2506.09518), an efficient dynamic 3D reconstruction framework combining sparse anchors, self-supervised guidance, and hierarchical propagation to improve reconstruction quality and temporal consistency, has been accepted by NeurIPS 2025!
- *2025.09*: &nbsp;🎉🎉 Our work [AutoDrive-R²](https://arxiv.org/abs/2509.01944v1) was reported by [AutoDrive Heart (自动驾驶之心)](https://mp.weixin.qq.com/s/7y0-CMAkls16iumNK3mlXg)
- *2025.09*: &nbsp;🎉🎉 We propose [AutoDrive-R²](https://arxiv.org/abs/2509.01944v1), Incentivizing Reasoning and Self-Reflection Capacity for VLA Model in Autonomous Driving, which is now available on ArXiv!
- *2025.08*: &nbsp;🎉🎉 Our work [Re-Align](https://taco-group.github.io/Re-Align/) has been accepted by EMNLP 2025 Main Conference!
- *2025.08*: &nbsp;🎉🎉 I will serve as the Program Committee for AAAI 2026!.
- *2025.07*: &nbsp;🎉🎉 Our work on [Generalizable Medical Vision](https://ieeexplore.ieee.org/document/11080080) has been ***Accepted*** by ***IEEE Transactions on Medical Imaging***.
- *2025.06*: &nbsp;🎉🎉 We propose [DVP-MVS++](https://arxiv.org/abs/2506.13215), a multi-view stereo method that integrates depth-normal-edge priors and visibility guidance for robust 3D Reconstruction, which is now available on ArXiv!
- *2025.05*: &nbsp;🎉🎉 Our work [CLIMD](https://arxiv.org/abs/2508.01594) has been ***Early Accepted*** by ***MICCAI 2025*** (Top 9%).
- *2025.03*: &nbsp;🎉🎉 Excited to propose my first-author work [DecAlign](https://taco-group.github.io/DecAlign/), a novel cross-modal decoupling and alignment framwork for multimodal representation learning, which is now available on ArXiv!
- *2024.11*: &nbsp;🎉🎉 Excited to propose my first-author work [DynCIM](https://arxiv.org/abs/2503.06456), a novel dynamic multimodal curriculum learning framework in addressing cross-modal competition and imbalances, which is now available on ArXiv!
- *2024.10*: &nbsp;🎉🎉 Our work is now under ***Major Revision*** by ***Medical Image Analysis***.
- *2024.08*: &nbsp;🎉🎉 Excited to propose my first-author work [ALC](https://arxiv.org/abs/2503.12218), a novel adaptive label correction framework for medical image segmentation with noisy labels, which is now available on ArXiv!



# 📝 Publications 

## Multimodal LLMs Post-Training

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Video_star.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Video-STAR: Reinforcing Zero-shot Video Understanding with Tools


**Preprint**

Zhenlong Yuan<sup>*</sup>, **Chengxuan Qian**<sup>*</sup>, Xiangyan Qu, Rui Chen, Jing Tang, Lei Sun, Xiangxiang Chu, Dapeng Zhu, [Yiwei Wang](https://wangywust.github.io/), [Yujun Cai](https://vanoracai.github.io/), [Shuo Li](https://scholar.google.com/citations?user=6WNtJa0AAAAJ&hl=en).


</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/autodriver2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AutoDrive-R²: Incentivizing Reasoning and Self-Reflection Capacity for VLA Model in Autonomous Driving](https://arxiv.org/abs/2509.01944v1)


**Preprint**

**Reported by well-known media [AutoDrive Heart (自动驾驶之心)](https://mp.weixin.qq.com/s/7y0-CMAkls16iumNK3mlXg)**

Zhenlong Yuan, Jing Tang, Jinguo Luo, Rui Chen, Lei Sun, **Chengxuan Qian**, Yujun Cai, Dapeng Zhang, Shuo Li.


</div>
</div>




<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/realign.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Re-Align: Aligning Vision Language Models via Retrieval-Augmented Direct Preference Optimization](https://taco-group.github.io/Re-Align/)

**[EMNLP 2025 Main Conference](https://arxiv.org/abs/2502.13146)**

Shuo Xing, Yuping Wang, Peiran Li, Ruizheng Bai, Yueqi Wang, **Chengxuan Qian**, [Huaxiu Yao](https://www.huaxiuyao.io/), [Zhengzhong Tu](https://vztu.github.io/)<sup>&dagger;</sup>.


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

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/EAAI2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Adaptive Label Correction Framework for Robust Medical Image Segmentation with Noisy Labels](https://arxiv.org/abs/2503.12218)

**[Arxiv Preprint](https://arxiv.org/abs/2503.12218)**

**Chengxuan Qian**, K Han, Siqi Ma, Chongwen Lyu, Zhenlong Yuan, Jun Chen<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE TMI 2025</div><img src='images/tmi_24.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Region Uncertainty Estimation for Medical Image Segmentation with Noisy Labels](https://ieeexplore.ieee.org/document/11080080)

**IEEE Transaction on Medical Imaging (CCF B, IF:9.8)**

Kai Han, Shuhui Wang, Jun Chen<sup>&dagger;</sup>, **Chengxuan Qian**, Chongwen Lyu, Siqi Ma, [Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>, Qingming Huang<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TCSVT 2024</div><img src='images/tcsvt_ma.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Frequency Domain Unlocks New Perspectives for Medical Image Segmentation

**IEEE Transactions on Circuits and Systems for Video Technology (CCF B, IF: 8.3)(Under Review)**

Kai Han, Siqi Ma, **Chengxuan Qian**, Jun Chen<sup>&dagger;</sup>, Chongwen Lyu, [Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TCSVT 2024</div><img src='images/accv2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Curriculum for Region-guided Automatic Radiology Report Generation

**IEEE Transactions on Circuits and Systems for Video Technology (CCF B, IF: 8.3)(Under Review)**

Chongwen Lyu, **Chengxuan Qian**, Kai Han, Jun Chen<sup>&dagger;</sup>, [Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MedIA 2024</div><img src='images/mia2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

LiMT: A Multi-task Liver Image Benchmark Dataset

**Medical Image Analysis (IF: 10.7)(Major Revision)**

Z Liu<sup>†</sup>, K Han, S Ma, J Chen<sup>&dagger;</sup>, ..., **C Qian**, C Lyu, ..., [V S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>.  

- <span style="color:blue;">Dataset and Benchmarking work</span>

- A multi-task medical image benchmark dataset for Segmentation, Classification and Detection of liver lesions, encompassing CT liver scans annotated for four common liver diseases. 

- Collaborated with researchers from Jiangsu University, Texas Tech University, and clinicians from the Affiliated Hospital of Jiangsu University.
</div>
</div>









## 3D Vision


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/DVP_MVS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DVP-MVS++: Synergize Depth-Normal-Edge and Harmonized Visibility Prior for Multi-View Stereo](https://arxiv.org/abs/2506.13215)

**IEEE Transactions on Circuits and Systems for Video Technology (CCF B, IF: 8.3)(Under Review)**

Zhenlong Yuan, Dapeng Zhang, Zehao Li, **Chengxuan Qian**, Jianing Chen, Yinda Chen, Kehua Chen, Tianlu Mao, Zhaoxin Li, Hao Jiang and Zhaoqi Wang

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/HALFGS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[HAIF-GS: Hierarchical and Induced Flow-Guided Gaussian Splatting for Dynamic Scene](https://arxiv.org/abs/2506.09518)

**[NeurIPS 2025](https://arxiv.org/abs/2506.09518)**

Jianing Chen, Zehao Li, Yujun Cai, Hao Jiang, **Chengxuan Qian**, Juyuan Kang, Shuqin Gao, Honglong Zhao, Tianlu Mao, Yucheng Zhang.

</div>
</div>



# 🎖 Academical Services
- Reviewer of IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), IEEE Transactions on Multimedia (TMM), IEEE International Conference on Multimedia & Expo (ICME 2025), ICCV 2025, NeurIPS 2025, AAAI 2026.



