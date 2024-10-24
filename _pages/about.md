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

I am a 3rd-year undergraduate in Mathematics and Computer Science at Jiangsu University, currently working as a Research Intern specializing in Multimodal Perception and Cross-modal Interactions, supervised by [Prof. Shuhui Wang](https://scholar.google.com/citations?user=h-JxBSYAAAAJ&hl=zh-CN) and [Prof. Qingming Huang (IEEE Fellow)](https://scholar.google.com.hk/citations?user=J1vMnRgAAAAJ&hl=en) at the Key Laboratory of Intelligent Information Processing, Institute of Computing Technology, Chinese Academy of Sciences. Previously, I collaborated with Prof. Zhe Liu and Prof. Jun Chen, with co-advisor [Prof. Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en) and [Prof. Lu Liu](https://le.ac.uk/people/lu-liu), on developing Robust Machine Learning System for Medical Vision.

# Research Interests
My long-term vision is to develop efficient, robust and generalizable machine learning system capable of perceiving, understanding and interacting with the world through multimodal information from both 2D and 3D perspectives. Specifically, my previous research focuses on these topics:
- ***Enhancing the Robustness and Generalization of Medical Segmentation Models: Learning from Sparse and Noisy Labeled Data*** 
- ***Rethinking the Learning Strategies of Multimodal Foundation Models: from a Data Perspective***
- ***Exploring the Nature of Cross-Modal Cooperation: Quantifying the inherent Correlations and Interactions from a Disentangled Perspective***

Despite significant progress in 2D vision models, relying solely on 2D pixel-level input cannot capture the full complexity of the surrounding 3D world. Spacial information, such as depth, geometric structures, pose and orientation, plays a crucial role in achieving a more comprehensive perception and understanding of the environment. Integrating these 3D aspects enables more accurate scene interpretation, object recognition, and interaction, bridging the gap between artificial perception and real-world understanding. Based on my previous research in Multimodal Learning, my future research will focus on exploring Text-driven or LLM-guided 3D Generation, Reconstruction, Editing and Manipulation, along with related topics.

# 🔥 News
- *2024.06*: &nbsp;🎉🎉 My project "Dynamic Self-adaptive Fusion Framework for Medical Disease Dignosis" has been selected as a Chinese National Undergraduate College Students Innovation and Entrepreneurship Program (National Key Project).


# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCF A</div><img src='images/aaai2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Dynamic Curriculum for Multimodal Rebalance

**Under Reviewed by Double-blind CCF-A Conference**

**Chengxuan Qian**<sup>*</sup>, Kai Han<sup>*</sup>,  Shuhui Wang<sup>&dagger;</sup>, Jun Chen<sup>&dagger;</sup>, Chongwen Lyu, Yuqing Song<sup>&dagger;</sup>, Victor S. Sheng<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

- Existing multimodal learning approaches often face under-optimization challenges due to inherent imbalances from varying sample quality and discrepancies in modality representation . To this end, we propose a dynamic curriculum that quantifies inherent imbalances from both sample and modality perspectives, adaptively prioritizing multimodal samples based on their current difficulty relative to the model's capabilities and the effectiveness of modality collaboration. 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PR 2024</div><img src='images/EAAI2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Adaptive Label Correction Framework for Medical Image Segmentation with Noisy Labels

**Pattern Recognition (CCF-B, IF: 7.5)(Under Review)**

Kai Han<sup>*</sup>, **Chengxuan Qian**<sup>*</sup>, Lu Liu<sup>&dagger;</sup>, Jun Chen<sup>&dagger;</sup>, Siqi Ma, Liyuan Tian, Yuqing Song<sup>&dagger;</sup>, Victor S. Sheng<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCF A</div><img src='images/bibm_cl.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Curriculum Learning for Imbalanced Multimodal Disease Diagnosis

**Under Reviewed by Double-blind CCF-A Conference**

Kai Han<sup>*</sup>, Chongwen Lyu<sup>*</sup>, **Chengxuan Qian**<sup>*</sup>, Siqi Ma, Jun Chen<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>,

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TMI 2024</div><img src='images/tmi_24.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Region Uncertainty Estimation for Medical Image Segmentation with Noisy Labels

**IEEE Transaction on Medical Imaging (CCF B, IF:8.9)(Under Review)**

Kai Han, Shuhui Wang<sup>&dagger;</sup> (IEEE Member), Jun Chen<sup>&dagger;</sup>, **Chengxuan Qian**, Chongwen Lyu, Siqi Ma, Victor S. Sheng<sup>&dagger;</sup> (IEEE Senior Member), Qingming Huang<sup>&dagger;</sup> (IEEE Fellow), Zhe Liu<sup>&dagger;</sup>.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TCSVT 2024</div><img src='images/tcsvt_ma.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Frequency Domain Unlocks New Perspectives for Medical Image Segmentation

**IEEE Transactions on Circuits and Systems for Video Technology (CCF B, IF: 8.3)(Under Review)**

Kai Han, Siqi Ma, **Chengxuan Qian**, Jun Chen<sup>&dagger;</sup>, Chongwen Lyu, Shuhui Wang<sup>&dagger;</sup> (IEEE Member), Victor S. Sheng<sup>&dagger;</sup> (IEEE Senior Member), Qingming Huang<sup>&dagger;</sup> (IEEE Fellow), Zhe Liu<sup>&dagger;</sup>.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TCSVT 2024</div><img src='images/accv2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Curriculum for Region-guided Automatic Radiology Report Generation

**IEEE Transactions on Circuits and Systems for Video Technology (CCF B, IF: 8.3)(Under Review)**

Chongwen Lyu, **Chengxuan Qian**, Kai Han, Yuqing Song<sup>&dagger;</sup>, Jun Chen<sup>&dagger;</sup>, Shuhui Wang (IEEE Member)<sup>&dagger;</sup>, Victor S. Sheng<sup>&dagger;</sup>, Qingming Huang (IEEE Fellow)<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MedIA 2024</div><img src='images/mia2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

LiMT: A Multi-task Liver Image Benchmark Dataset

**Medical Image Analysis (IF: 10.7)(Under Review)**

Zhe Liu<sup>†</sup>, Kai Han, Siqi Ma, Jun Chen<sup>&dagger;</sup>, ..., **Chengxuan Qian**, Chongwen Lyu, ..., Victor S. Sheng<sup>&dagger;</sup>.  

- A multi-task medical image benchmark dataset for Segmentation, Classification and Detection of liver lesions, encompassing CT liver scans annotated for four common liver diseases. 

- Collaborated with researchers from Jiangsu University, Texas Tech University, and clinicians from the Affiliated Hospital of Jiangsu University.
</div>
</div>

Note: Details of some papers above are not allowed to show since they are currently under reviewed by double-blind conference. * indicates euqal contribution and <sup>&dagger;</sup> is the note for advisor.


# 🎖 Academical Services
- Reviewer of IEEE Transactions on Multimedia

# 📖 Educations
- *2024.06 - 2026.05*, Mathematics and Computer Science, Bachelor of Science, Arcadia University (Official 2+2 Program). 
- *2022.09 - 2024.06*, Mathematics and Applied Mathematics, Bachelor of Science, GPA: 93.1/100, Rank: 1/60, Jiangsu University (GPA: 93.1/100, Rank: 1/60).

# 💬 Open-source Projects
- Currently in progression...
