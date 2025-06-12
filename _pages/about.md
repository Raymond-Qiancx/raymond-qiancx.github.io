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

I am a rising senior undergraduate student with a strong interest in Multimodal Large Language Models (MLLMs), Agentic AI, Embodied AI, Spatial Intelligence and Video Understanding. I am fortunate to collaborate with [Zhengzhong Tu](https://vztu.github.io/), [Yue Zhao](https://viterbi-web.usc.edu/~yzhao010/lab), [Jiacheng Zhu](https://jiachengzhuml.github.io/), [Yiqing Liang](https://lynl7130.github.io/), and [Huaxiu Yao](https://www.huaxiuyao.io/) on research focused on Reasoning and Alignment in Vision-Language Models (VLMs). Prior to that, I worked with [Prof. Zhe Liu](https://scholar.google.com/citations?user=k32nt3sAAAAJ&hl=zh-CN), and [Prof. Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en) on research in Robust Medical Vision and Multimodal Machine Learning. I am deeply grateful to them for guiding me into the world of research. 

<span style="color:purple">I am actively seeking a Ph.D. position in Computer Science for Fall 2026. I would be excited to collaborate with like-minded researchers on a broad range of topics, including Large Language Models (LLMs), Vision-Language Models (VLMs), Agentic AI, and Embodied AI. Please feel free to reach out if our interests align.</span>



# Research Interests
My long-term vision is to develop efficient, robust, and generalizable machine learning systems capable of perceiving, understanding, and interacting with the world through multimodal information. I am particularly interested in advancing LLMs combined with vision, audio, action, and other modalities toward Agentic and Embodied AI systems that can reason, plan, and act in complex environments — enabling intelligent agents to interact with humans and make decisions across both physical and web-based settings. Specifically, my previous research focuses on these topics:
- ***Generalizable Medical Image Segmentation with Sparse and Noisy Labeled Data*** 
- ***Modality Competition and Imbalances for Multimodal Machine Learning***
- ***Cross-modal Decoupling and Alignment for Multimodal Foundation Models***
- ***Aligning Large Vision-language Models with Human Preference***
- ***Reasoning and Alignment for Large Vision-language Models***
- ***Reforcement Learning-driven Open-World Embodied Agents***

# 🔥 News
- *2025.05*: &nbsp;🎉🎉 Our work CLIMD has been ***Early Accepted*** by ***MICCAI 2025*** (Top 9%), ArXiv is coming soon.
- *2025.05*: &nbsp;🎉🎉 Our paper is now under ***Accept pending minor revision*** by ***IEEE Transaction on Medical Imaging (IF: 8.9)***.
- *2025.03*: &nbsp;🎉🎉 Excited to propose my first-author work [DecAlign](https://taco-group.github.io/DecAlign/), a novel cross-modal decoupling and alignment framwork for multimodal representation learning, which is now available on ArXiv!
- *2025.02*: &nbsp;🎉🎉 Excited to propose [Re-Align](https://taco-group.github.io/Re-Align/), a novel alignment framework that leverages image retrieval to mitigate hallucinations in Vision Language Models, which is now available on ArXiv!
- *2025.01*: &nbsp;🎉🎉 I will collaborate with [Prof. Zhengzhong Tu](https://vztu.github.io/) on advancing cutting-edge research in the alignment of Multimodal Foundation Models and Multimodal Large Language Models (MLLMs)！
- *2024.11*: &nbsp;🎉🎉 Excited to propose my first-author work [DynCIM](https://arxiv.org/abs/2503.06456), a novel dynamic multimodal curriculum learning framework in addressing cross-modal competition and imbalances, which is now available on ArXiv!
- *2024.11*: &nbsp;🎉🎉 Our work is now under ***Major Revision*** by ***IEEE Transaction on Medical Imaging (IF: 8.9)***.
- *2024.10*: &nbsp;🎉🎉 Our work is now under ***Major Revision*** by ***Medical Image Analysis (IF: 10.9)***.
- *2024.08*: &nbsp;🎉🎉 Excited to propose my first-author work [ALC](https://arxiv.org/abs/2503.12218), a novel adaptive label correction framework for medical image segmentation with noisy labels, which is now available on ArXiv!
- *2024.06*: &nbsp;🎉🎉 My project "Dynamic Self-adaptive Fusion Framework for Medical Disease Dignosis" has been selected as a Chinese National Undergraduate College Students Innovation and Entrepreneurship Program (National Key Project).


# 📝 Publications 

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


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">preprint</div><img src='images/realign.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Re-Align: Aligning Vision Language Models via Retrieval-Augmented Direct Preference Optimization](https://taco-group.github.io/Re-Align/)

**[Arxiv Preprint](https://arxiv.org/abs/2502.13146)**

Shuo Xing, Yuping Wang, Peiran Li, Ruizheng Bai, Yueqi Wang, **Chengxuan Qian**, [Huaxiu Yao](https://www.huaxiuyao.io/), [Zhengzhong Tu](https://vztu.github.io/)<sup>&dagger;</sup>.


</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/EAAI2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Adaptive Label Correction Framework for Robust Medical Image Segmentation with Noisy Labels](https://arxiv.org/abs/2503.12218)

**[Arxiv Preprint](https://arxiv.org/abs/2503.12218)**

**Chengxuan Qian**, K Han, Siqi Ma, Chongwen Lyu, Zhenlong Yuan, Jun Chen<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MICCAI 2025</div><img src='images/bibm_cl.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

CLIMD: A Curriculum Learning Framework for Imbalanced Multimodal Diagnosis

**MICCAI 2025 Early Accept (Top 9% Paper)**

Kai Han, Chongwen Lyu, **Chengxuan Qian**, Siqi Ma, Jun Chen<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>,

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TMI 2024</div><img src='images/tmi_24.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Region Uncertainty Estimation for Medical Image Segmentation with Noisy Labels

**IEEE Transaction on Medical Imaging (CCF B, IF:8.9)(Accept pending minor revision)**

Kai Han, Shuhui Wang, Jun Chen<sup>&dagger;</sup>, **Chengxuan Qian**, Chongwen Lyu, Siqi Ma, [Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>, Qingming Huang<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/DVP_MVS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

DVP-MVS++: Synergize Depth-Normal-Edge and Harmonized Visibility Prior for Multi-View Stereo

**IEEE Transactions on Circuits and Systems for Video Technology (CCF B, IF: 8.3)(Under Review)**

Zhenlong Yuan, Dapeng Zhang, Zehao Li, **Chengxuan Qian**, Jianing Chen, Yinda Chen, Kehua Chen, Tianlu Mao, Zhaoxin Li, Hao Jiang and Zhaoqi Wang

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/HALFGS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

HAIF-GS: Hierarchical and Induced Flow-Guided Gaussian Splatting for Dynamic Scene

**Under Review**

Jianing Chen, Zehao Li, Yujun Cai, Hao Jiang, **Chengxuan Qian**, Juyuan Kang, Shuqin Gao, Honglong Zhao, Tianlu Mao, Yucheng Zhang.

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

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">preview</div><img src='images/CVPR_Zhu.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Diffusion Contrastive Learning for Image Classification

**Under Review**

Xincheng Zhu, Yonghan Lu, Kai Han, Chongwen Lyu, **Chengxuan Qian**, J Chen<sup>&dagger;</sup>, Z Liu<sup>&dagger;</sup>.

</div>
</div>



Note: Details of some papers above are not allowed to show since they are currently under reviewed by double-blind conference. <sup>&dagger;</sup> is the note for advisor.


# 🎖 Academical Services
- Reviewer of IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), IEEE Transactions on Multimedia (TMM), IEEE International Conference on Multimedia & Expo (ICME 2025) and ICCV 2025.



# 💬 Open-source Projects
- [Re-Align](https://github.com/taco-group/Re-Align), a novel Direct Preference Optimization (DPO)-based alignment framework that leverages image retrieval to mitigate hallucinations in Vision Language Models. See more in the corresponding [website](https://taco-group.github.io/Re-Align/) with [codes](https://taco-group.github.io/Re-Align/).
- [DecAlign](https://taco-group.github.io/DecAlign/), a novel cross-modal decoupling and alignment framwork for multimodal representation learning. See more in the corresponding [website](https://taco-group.github.io/DecAlign/) with [codes](https://github.com/taco-group/DecAlign)(Will be fully released soon!).

