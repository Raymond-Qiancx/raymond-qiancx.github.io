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

I am a 3rd-year undergraduate in Mathematics and Computer Science at Jiangsu University, currently working as a Research Intern specializing in Multimodal Perception and Cross-modal Interactions, supervised by [Prof. Shuhui Wang](https://scholar.google.com/citations?user=h-JxBSYAAAAJ&hl=zh-CN) and [Prof. Qingming Huang (IEEE Fellow)](https://scholar.google.com.hk/citations?user=J1vMnRgAAAAJ&hl=en) at the Key Laboratory of Intelligent Information Processing, Institute of Computing Technology, Chinese Academy of Sciences. Previously, I collaborated with Prof. Zhe Liu and Prof. Jun Chen, with co-advisor [Prof. Victor S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en) and [Prof. Lu Liu](https://le.ac.uk/people/lu-liu), on developing Robust Machine Learning System for Medical Vision. Additionally, I serve as a reviewer for IEEE Transactions on Circuits and Systems for Video Technology (TCSVT) and IEEE Transactions on Multimedia (TMM).

# Research Interests
My long-term vision is to develop efficient, robust and generalizable machine learning system capable of perceiving, understanding and interacting with the world through multimodal information from both 2D and 3D perspectives. Specifically, my previous research focuses on these topics:
- ***Enhancing the Robustness and Generalization of Medical Segmentation Models: Learning from Sparse and Noisy Labeled Data*** 
- ***Rethinking the Learning Strategies of Multimodal Foundation Models: from a Data Perspective***
- ***Exploring the Nature of Cross-Modal Cooperation: Quantifying the inherent Correlations and Interactions from a Disentangled Perspective***


# 🔥 News
- *2024.06*: &nbsp;🎉🎉 My project "Dynamic Self-adaptive Fusion Framework for Medical Disease Dignosis" has been selected as a Chinese National Undergraduate College Students Innovation and Entrepreneurship Program (National Key Project).


# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCF A</div><img src='images/aaai2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Dynamic Curriculum for Multimodal Rebalance

**Under Reviewed by Double-blind CCF-A Conference**

**C Qian**<sup>*</sup>, K Han<sup>*</sup>,  [S Wang](https://scholar.google.com/citations?user=h-JxBSYAAAAJ&hl=zh-CN)<sup>&dagger;</sup>, J Chen<sup>&dagger;</sup>, C Lyu, Y Song<sup>&dagger;</sup>, [V S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>, Z Liu<sup>&dagger;</sup>.

- Existing multimodal learning approaches often face under-optimization challenges due to inherent imbalances from varying sample quality and discrepancies in modality representation . To this end, we propose a dynamic curriculum framework that quantifies inherent imbalances from both sample and modality perspectives, adaptively prioritizing multimodal samples based on their current difficulty relative to the model's capabilities and the effectiveness of modality collaboration. 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PR 2024</div><img src='images/EAAI2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Adaptive Label Correction Framework for Medical Image Segmentation with Noisy Labels

**Pattern Recognition (CCF-B, IF: 7.5)(Under Review)**

**C Qian**, K Han, L Liu<sup>&dagger;</sup>, J Chen<sup>&dagger;</sup>, S Ma, L Tian, Y Song<sup>&dagger;</sup>, [V S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>, Z Liu<sup>&dagger;</sup>.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCF A</div><img src='images/bibm_cl.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Curriculum Learning for Imbalanced Multimodal Disease Diagnosis

**Under Reviewed by Double-blind CCF-A Conference**

K Han<sup>*</sup>, C Lyu<sup>*</sup>, **C Qian**<sup>*</sup>, S Ma, Jun Chen<sup>&dagger;</sup>, Z Liu<sup>&dagger;</sup>,

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TMI 2024</div><img src='images/tmi_24.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Region Uncertainty Estimation for Medical Image Segmentation with Noisy Labels

**IEEE Transaction on Medical Imaging (CCF B, IF:8.9)(Under Review)**

K Han, [S Wang](https://scholar.google.com/citations?user=h-JxBSYAAAAJ&hl=zh-CN)<sup>&dagger;</sup> (IEEE Member), J Chen<sup>&dagger;</sup>, **C Qian**, C Lyu, S Ma, [V S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup> (IEEE Senior Member), [Q Huang](https://scholar.google.com.hk/citations?user=J1vMnRgAAAAJ&hl=en)<sup>&dagger;</sup> (IEEE Fellow), Z Liu<sup>&dagger;</sup>.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TCSVT 2024</div><img src='images/tcsvt_ma.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Frequency Domain Unlocks New Perspectives for Medical Image Segmentation

**IEEE Transactions on Circuits and Systems for Video Technology (CCF B, IF: 8.3)(Under Review)**

K Han, S Ma, **C Qian**, J Chen<sup>&dagger;</sup>, C Lyu, [S Wang](https://scholar.google.com/citations?user=h-JxBSYAAAAJ&hl=zh-CN)<sup>&dagger;</sup> (IEEE Member), [V S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup> (IEEE Senior Member), [Q Huang](https://scholar.google.com.hk/citations?user=J1vMnRgAAAAJ&hl=en)<sup>&dagger;</sup> (IEEE Fellow), Zhe Liu<sup>&dagger;</sup>.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TCSVT 2024</div><img src='images/accv2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Curriculum for Region-guided Automatic Radiology Report Generation

**IEEE Transactions on Circuits and Systems for Video Technology (CCF B, IF: 8.3)(Under Review)**

C Lyu, **Chengxuan Qian**, K Han, Y Song<sup>&dagger;</sup>, J Chen<sup>&dagger;</sup>, S Wang (IEEE Member)<sup>&dagger;</sup>, [V S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>, [Q Huang](https://scholar.google.com.hk/citations?user=J1vMnRgAAAAJ&hl=en) (IEEE Fellow)<sup>&dagger;</sup>, Z Liu<sup>&dagger;</sup>.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TCSVT 2024</div><img src='images/CVPR_Zhu.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Diffusion Contrastive Learning for Image Classification

**Under Reviewed by Double-blind CCF-A Conference**

X Zhu, Y Lu, K Han, C Lyu, **C Qian**, J Chen<sup>&dagger;</sup>, Z Liu<sup>&dagger;</sup>.

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MedIA 2024</div><img src='images/mia2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

LiMT: A Multi-task Liver Image Benchmark Dataset

**Medical Image Analysis (IF: 10.7)(Under Review)**

Z Liu<sup>†</sup>, K Han, S Ma, J Chen<sup>&dagger;</sup>, ..., **C Qian**, C Lyu, ..., [V S. Sheng](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en)<sup>&dagger;</sup>.  

- A multi-task medical image benchmark dataset for Segmentation, Classification and Detection of liver lesions, encompassing CT liver scans annotated for four common liver diseases. 

- Collaborated with researchers from Jiangsu University, Texas Tech University, and clinicians from the Affiliated Hospital of Jiangsu University.
</div>
</div>

Note: Details of some papers above are not allowed to show since they are currently under reviewed by double-blind conference. * indicates euqal contribution and <sup>&dagger;</sup> is the note for advisor.


# 🎖 Academical Services
- Reviewer of IEEE Transactions on Multimedia (TMM), IEEE Transactions on Circuits and Systems for Video Technology (TCSVT).

# 📖 Educations
- *2024.06 - 2026.05*, Mathematics and Computer Science, Bachelor of Science, Arcadia University (Official 2+2 Program). 
- *2022.09 - 2024.06*, Mathematics and Applied Mathematics, Bachelor of Science, GPA: 93.1/100, Rank: 1/60, Jiangsu University (GPA: 93.1/100, Rank: 1/60).

# 💬 Open-source Projects
- Currently in progression...
