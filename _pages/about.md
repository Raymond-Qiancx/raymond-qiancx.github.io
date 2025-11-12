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

I am a senior undergraduate student with a strong interest in Multimodal LLMs Post-Training, Spatial and Agent Applications. I am fortunate to collaborate with [Manling Li](https://limanling.github.io/), [Han Liu](https://magics.cs.northwestern.edu/people.html), [Zhengzhong Tu](https://vztu.github.io/), and [Yue Zhao](https://viterbi-web.usc.edu/~yzhao010/lab), and more broadly with [Jiacheng Zhu](https://jiachengzhuml.github.io/), [Yujun Cai](https://vanoracai.github.io/), [Yiwei Wang](https://wangywust.github.io/), and [Shuo Li](https://scholar.google.com/citations?user=6WNtJa0AAAAJ&hl=en). Prior to that, I worked with [Zhe Liu](https://scholar.google.com/citations?user=k32nt3sAAAAJ&hl=zh-CN) and [Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en) on research in Generalizable Medical Vision and Multimodal Machine Learning. I am deeply grateful to them for guiding me into the world of research. 

<span style="color:purple">I am actively seeking a 26 Fall CS PhD position. I am always open to collaborate, feel free to drop me an email or contact with me on wechat ID qiancxdotcom.</span>

# Research Interests 
- ***Multimodal Foundation Models🔥***
- ***Spatial Intelligence🔥🔥***
- ***Tool-Augmented Agentic RL🔥🔥***
- ***Agent Application (Embodied Robotics, Autonomous Driving, Biomedicine)🔥🔥***



# 🔥 News
- *2025.10*: &nbsp;🎉🎉 Our work [DVP-MVS++](https://arxiv.org/abs/2506.13215), a multi-view stereo method that integrates depth-normal-edge priors and visibility guidance for robust 3D Reconstruction, has been accepted by ***IEEE Transactions on Circuits and Systems for Video Technology***!
- *2024.10*: &nbsp;🎉🎉 My [first-author work](https://arxiv.org/abs/2503.12218) on Medical Segmentation under sparse and noisy labeled annotations has been accepted by ***BIBM 2025***!
- *2025.10*: &nbsp;🎉🎉 We propose [Video-STAR](https://arxiv.org/abs/2510.08480), a powerful Tool-Augmented Agentic RL approach for Thinking with Videos. On open-vocabulary action recognition benchmarks like K-400 and HMDB-51, our 3B VLM achieves nearly 40% accuracy improvement over base models!🔥
- *2025.09*: &nbsp;🎉🎉 Our work [HALF-GS](https://arxiv.org/abs/2506.09518), an efficient dynamic 3D reconstruction framework combining sparse anchors, self-supervised guidance, and hierarchical propagation to improve reconstruction quality and temporal consistency, has been accepted by ***NeurIPS 2025***!
- *2025.09*: &nbsp;🎉🎉 We propose [AutoDrive-R²](https://arxiv.org/abs/2509.01944v1), Incentivizing Reasoning and Self-Reflection Capacity for VLA Model in Autonomous Driving. We're also honored that our work was featured by [AutoDrive Heart (自动驾驶之心)](https://mp.weixin.qq.com/s/7y0-CMAkls16iumNK3mlXg)!
- *2025.08*: &nbsp;🎉🎉 Our work [Re-Align](https://taco-group.github.io/Re-Align/) has been accepted by ***EMNLP 2025 Main Conference***!
- *2025.07*: &nbsp;🎉🎉 Our work on [Generalizable Medical Vision](https://ieeexplore.ieee.org/document/11080080) has been ***Accepted*** by ***IEEE Transactions on Medical Imaging***.
- *2025.05*: &nbsp;🎉🎉 Our work [CLIMD](https://arxiv.org/abs/2508.01594) has been ***Early Accepted*** by ***MICCAI 2025*** (Top 9%).
- *2025.03*: &nbsp;🎉🎉 Excited to propose my first-author work [DecAlign](https://taco-group.github.io/DecAlign/), a novel cross-modal decoupling and alignment framwork for multimodal representation learning, which is now available on ArXiv!
- *2024.11*: &nbsp;🎉🎉 Excited to propose my first-author work [DynCIM](https://arxiv.org/abs/2503.06456), a novel dynamic multimodal curriculum learning framework in addressing cross-modal competition and imbalances, which is now available on ArXiv!
- *2024.10*: &nbsp;🎉🎉 We propose [FASS](https://arxiv.org/abs/2510.11005), a novel frequency domain-enhanced approach for Medical Image Segmentation under Low-Contrast environment.
- *2024.08*: &nbsp;🎉🎉 Excited to propose my first-author work [ALC](https://arxiv.org/abs/2503.12218), a novel adaptive label correction framework for medical image segmentation with noisy labels, which is now available on ArXiv!



# 📝 Publications 

## Multimodal LLMs Post-Training

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Video_star.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Video-STAR: Reinforcing Open-Vocabulary Action Recognition with Tools](https://arxiv.org/abs/2510.08480)


**Preprint**

Zhenlong Yuan, Xiangyan Qu, **Chengxuan Qian**<sup>†</sup> (corresponding author), Rui Chen, Jing Tang, Lei Sun, Xiangxiang Chu, Dapeng Zhu, [Yiwei Wang](https://wangywust.github.io/), [Yujun Cai](https://vanoracai.github.io/), [Shuo Li](https://scholar.google.com/citations?user=6WNtJa0AAAAJ&hl=en).


</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/autodriver2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AutoDrive-R²: Incentivizing Reasoning and Self-Reflection Capacity for VLA Model in Autonomous Driving](https://arxiv.org/abs/2509.01944v1)


**Preprint**

**Featured by [AutoDrive Heart (自动驾驶之心)](https://mp.weixin.qq.com/s/7y0-CMAkls16iumNK3mlXg)**

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

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TCSVT 2024</div><img src='images/fass.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Frequency Domain Unlocks New Perspectives for Abdominal Medical Image Segmentation](https://arxiv.org/abs/2510.11005)

**arXiv Preprint**

Kai Han, Siqi Ma, **Chengxuan Qian**, Jun Chen<sup>&dagger;</sup>, Chongwen Lyu, [Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/mia2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

LiMT: A Multi-task Liver Image Benchmark Dataset

**Medical Image Analysis (Major Revision)**

Z Liu<sup>†</sup>, K Han, S Ma, J Chen<sup>&dagger;</sup>, ..., **C Qian**, C Lyu, ..., [V S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>.  

- <span style="color:blue;">Dataset and Benchmarking work</span>

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
- **Conference Reviewer:** ICME 2025, ACL 2025, ICCV 2025, NeurIPS 2025, AAAI 2026, ICASSP 2026, CVPR 2026


