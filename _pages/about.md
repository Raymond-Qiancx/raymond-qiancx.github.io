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

I am a senior undergraduate student with a strong interest in Multimodal LLMs, Tool-Using Agents and Spatial Intelligence. My research vision is to develop **super-intelligent** yet **lightweight** Multimodal LLMs, enabling machines to perceive, plan, reason, and act through the autonomous integration of multi-sensory signals, external tools, and knowledge, giving rise to superhuman yet controllable intelligence in downstream tasks such as Video Understanding, Embodied Robotics, Autonomous Driving, and Medical Diagnosis.

<span style="color:purple">I am actively looking for 26 Fall CS PhD position. I am always open to collaborate, feel free to drop me an email or contact with me on email address open.qiancx[at]gmail.com or wechat ID qiancxdotcom.</span>

# Research Interests and Highlights

- ***Multi-Sensory Perception, Integration and Reasoning:*** 
How can machines extract learnable neural-symbolic concepts from the complex physical world to enable grounded understanding, integration, interaction, and decision-making across multi-sensory signals, ultimately leading to superhuman yet interpretable intelligence?

- ***World Modeling, Long-Term Video Understanding and Spatial Intelligence:***
Toward multimodal superintelligence, guiding foundation models to deeply understand the underlying mechanisms of the complex physical world, internalize world dynamics within their parameter space, and reason about complex object properties and interactions in dynamic 3D environments.


- ***In-the-wild Environment-Interactive Foundation Agents*** 
How can we teach foundation models to see, plan, and act in open-world settings, while autonomously interacting with external environments such as tools, knowledge bases, and simulators, thereby continuously extending their capability boundaries in real-world applications?


# 🔥 News

<div style="max-height: 200px; overflow-y: auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 10px 15px; background-color: #fafafa;">

- *2025.11*: &nbsp;🎉🎉 Our work LiMT, an unified multi-task liver image benchmark work, has been accepted by ***Journal of Biomedical and Health Informatics (JBHI)***!
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

</div>

# 📝 Publications 

## Multimodal LLMs

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/autodriver2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AutoDrive-R²: Incentivizing Reasoning and Self-Reflection Capacity for VLA Model in Autonomous Driving](https://arxiv.org/abs/2509.01944v1)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Multimodal Reasoning</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Autonomous Driving</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #f3e5f5; color: #7b1fa2; border-radius: 15px; font-size: 12px;">Open-World Applications</span>

**Featured by [AutoDrive Heart (自动驾驶之心)](https://mp.weixin.qq.com/s/7y0-CMAkls16iumNK3mlXg)**

Zhenlong Yuan*, <span style="font-weight: bold;">Chengxuan Qian*</span>, Jing Tang, Jinguo Luo, Rui Chen, Lei Sun, Xiangxiang Chu, Yujun Cai, Dapeng Zhang, Shuo Li.


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Video_star.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Video-STAR: Reinforcing Open-Vocabulary Action Recognition with Tools](https://arxiv.org/abs/2510.08480)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Think with Videos</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Tool-Using Agent</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #f3e5f5; color: #7b1fa2; border-radius: 15px; font-size: 12px;">Multi-turn Agentic RL</span>

Zhenlong Yuan, Xiangyan Qu, **Chengxuan Qian**<sup>†</sup>, Rui Chen, Jing Tang, Lei Sun, Xiangxiang Chu, Dapeng Zhang, Yiwei Wang, Yujun Cai, Shuo Li.

</div>
</div>






<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2025</div><img src='images/realign.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Re-Align: Aligning Vision Language Models via Retrieval-Augmented Direct Preference Optimization](https://taco-group.github.io/Re-Align/)

**EMNLP 2025 Main Conference**

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Multimodal Alignment</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #ffebee; color: #c62828; border-radius: 15px; font-size: 12px;">Hallucination Mitigation</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Multimodal RAG</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f5e9; color: #2e7d32; border-radius: 15px; font-size: 12px;">DPO</span>

Shuo Xing, Yuping Wang, Peiran Li, Ruizheng Bai, Yueqi Wang, **Chengxuan Qian**, [Huaxiu Yao](https://www.huaxiuyao.io/), [Zhengzhong Tu](https://vztu.github.io/)<sup>&dagger;</sup>.


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/fmri-lm.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[fMRI-LM: Towards a Universal Foundation Model for Language-Aligned fMRI Understanding](https://arxiv.org/abs/2511.21760)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #ffebee; color: #c62828; border-radius: 15px; font-size: 12px;">Medical LLMs</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fffde7; color: #f9a825; border-radius: 15px; font-size: 12px;">Data-Centric</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f5e9; color: #2e7d32; border-radius: 15px; font-size: 12px;">Foundation Model</span>

Yuxiang Wei, Yanteng Zhang, Xi Xiao, **Chengxuan Qian**, Tianyang Wang, [Vince D. Calhoun](https://scholar.google.com/citations?user=WNOoGKIAAAAJ&hl=en) <sup>&dagger;</sup>.


</div>
</div>

## Multimodal Foundation Models

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/decalign.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DecAlign: Hierarchical Cross-Modal Alignment for Decoupled Multimodal Representation Learning](https://arxiv.org/abs/2503.11892)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Multimodal Alignment</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f5e9; color: #2e7d32; border-radius: 15px; font-size: 12px;">Foundation Model</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #f3e5f5; color: #7b1fa2; border-radius: 15px; font-size: 12px;">Interpretability</span>

**Chengxuan Qian**, Shuo Xing, Shawn Li, [Yue Zhao](https://viterbi-web.usc.edu/~yzhao010/lab), [Zhengzhong Tu](https://vztu.github.io/)<sup>&dagger;</sup>.


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/aaai2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DynCIM: Dynamic Curriculum for Imbalanced Multimodal Learning](https://arxiv.org/abs/2503.06456)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Multimodal Competition</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Modality Imbalances</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e0f7fa; color: #00838f; border-radius: 15px; font-size: 12px;">Curriculum Learning</span>

**Chengxuan Qian**, Kai Han, Jingchao Wang, Zhenlong Yuan, Chongwen Lyu, Jun Chen<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MICCAI 2025</div><img src='images/bibm_cl.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[CLIMD: A Curriculum Learning Framework for Imbalanced Multimodal Diagnosis](https://arxiv.org/abs/2508.01594)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Modality Imbalances</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #ffebee; color: #c62828; border-radius: 15px; font-size: 12px;">Medical AI</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e0f7fa; color: #00838f; border-radius: 15px; font-size: 12px;">Curriculum Learning</span>

**MICCAI 2025 Early Accept (Top 9% Paper)**

Kai Han, Chongwen Lyu, **Chengxuan Qian**, Siqi Ma, Jun Chen<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>,

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/zzz.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Contrastive Intra- and Inter-modal Clustering for Multimodal Semantic Discovery

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Multimodal Learning</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fffde7; color: #f9a825; border-radius: 15px; font-size: 12px;">Semantic Discovery</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #f3e5f5; color: #7b1fa2; border-radius: 15px; font-size: 12px;">Interpretability</span>

Zhengzhong Zhu, Pei Zhou, **Chengxuan Qian**, Ruohong Yang, Yixuan Ye, Jiangping Zhu

</div>
</div>


## Medical Image Analysis

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">BIBM 2025</div><img src='images/EAAI2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Adaptive Label Correction Framework for Robust Medical Image Segmentation with Noisy Labels](https://arxiv.org/abs/2503.12218)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #ffebee; color: #c62828; border-radius: 15px; font-size: 12px;">Medical Segmentation</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Noisy Labels</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e0f7fa; color: #00838f; border-radius: 15px; font-size: 12px;">Sparse Annotation</span>

**BIBM AIBH 2025**

**Chengxuan Qian**, K Han, Siqi Ma, Chongwen Lyu, Zhenlong Yuan, Jun Chen<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE TMI 2025</div><img src='images/tmi_24.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Region Uncertainty Estimation for Medical Image Segmentation with Noisy Labels](https://ieeexplore.ieee.org/document/11080080)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #ffebee; color: #c62828; border-radius: 15px; font-size: 12px;">Medical Segmentation</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Noisy Labels</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e0f7fa; color: #00838f; border-radius: 15px; font-size: 12px;">Sparse Annotation</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #f3e5f5; color: #7b1fa2; border-radius: 15px; font-size: 12px;">Uncertainty Estimation</span>

**IEEE Transaction on Medical Imaging, 2025**

Kai Han, Shuhui Wang, Jun Chen<sup>&dagger;</sup>, **Chengxuan Qian**, Chongwen Lyu, Siqi Ma, [Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>, Qingming Huang<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/fass.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Frequency Domain Unlocks New Perspectives for Abdominal Medical Image Segmentation](https://arxiv.org/abs/2510.11005)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #ffebee; color: #c62828; border-radius: 15px; font-size: 12px;">Medical Segmentation</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Low-contrast Environment</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f5e9; color: #2e7d32; border-radius: 15px; font-size: 12px;">Robustness</span>

Kai Han, Siqi Ma, **Chengxuan Qian**, Jun Chen<sup>&dagger;</sup>, Chongwen Lyu, [Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">JBHI 2025</div><img src='images/mia2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[LiMT: A Multi-task Liver Image Benchmark Dataset](https://arxiv.org/abs/2511.19889)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #ffebee; color: #c62828; border-radius: 15px; font-size: 12px;">Medical AI</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fffde7; color: #f9a825; border-radius: 15px; font-size: 12px;">Benchmarks</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e0f7fa; color: #00838f; border-radius: 15px; font-size: 12px;">Multi-task Unified Learning</span>

**Journal of Biomedical and Health Informatics (JBHI 2025)**

Z Liu<sup>†</sup>, K Han, S Ma, J Chen<sup>&dagger;</sup>, ..., **C Qian**, C Lyu, ..., [V S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>.  


</div>
</div>









## 3D Vision


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TCSVT 2025</div><img src='images/DVP_MVS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DVP-MVS++: Synergize Depth-Normal-Edge and Harmonized Visibility Prior for Multi-View Stereo](https://arxiv.org/abs/2506.13215)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fce4ec; color: #ad1457; border-radius: 15px; font-size: 12px;">3D Reconstruction</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Geometric Understanding</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #f3e5f5; color: #7b1fa2; border-radius: 15px; font-size: 12px;">Multi-View Stereo</span>

**IEEE Transactions on Circuits and Systems for Video Technology**

Zhenlong Yuan, Dapeng Zhang, Zehao Li, **Chengxuan Qian**, Jianing Chen, Yinda Chen, Kehua Chen, Tianlu Mao, Zhaoxin Li, Hao Jiang and Zhaoqi Wang

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='images/HALFGS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[HAIF-GS: Hierarchical and Induced Flow-Guided Gaussian Splatting for Dynamic Scene](https://arxiv.org/abs/2506.09518)

<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fce4ec; color: #ad1457; border-radius: 15px; font-size: 12px;">3D Reconstruction</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #e8f4f8; color: #0077b6; border-radius: 15px; font-size: 12px;">Gaussian Splatting</span>
<span style="display: inline-block; padding: 2px 10px; margin: 2px 4px 2px 0; background-color: #fff3e0; color: #e65100; border-radius: 15px; font-size: 12px;">Dynamic Scene</span>

**NeurIPS 2025**

Jianing Chen, Zehao Li, Yujun Cai, Hao Jiang, **Chengxuan Qian**, Juyuan Kang, Shuqin Gao, Honglong Zhao, Tianlu Mao, Yucheng Zhang.

</div>
</div>



# 🎖 Academical Services
- **Journal Reviewer:** IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), IEEE Transactions on Multimedia (TMM).
- **Conference Reviewer:** ICME 2025-2026, AAAI 2026, ICASSP 2026, CVPR 2026
- **Workshop Reviewer:** ACL 2025 SRW, NeurIPS 2025 Imageomics, NeurIPS 2025 Efficient Reasoning


