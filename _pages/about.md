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

I am currently a Math+CS rising junior undergraduate at [Jiangsu University and Arcadia University](https://www.arcadia.edu/news/arcadia-and-jiangsu-university-celebrate-10-years-of-collaboration/). I began conducting research in my freshman year, joining the group led by [Prof. Zhe Liu](https://www.researchgate.net/profile/Zhe-Liu-28) and [Prof. Jun Chen](https://scholar.google.com/citations?hl=zh-CN&user=cDVzxXsAAAAJ), with co-advisor [Prof. Victor S. Sheng (IEEE Senior Member)](https://scholar.google.com/citations?user=0epc43IAAAAJ&hl=en) at Texas Tech University, [Prof. Lu Liu](https://le.ac.uk/people/lu-liu) at the University of Leicester, [Prof. Shuhui Wang](https://scholar.google.com/citations?user=h-JxBSYAAAAJ&hl=zh-CN) and [Prof. Qingming Huang (IEEE Fellow)](https://scholar.google.com.hk/citations?user=J1vMnRgAAAAJ&hl=en) at the Key Laboratory of Intelligent Information Processing, Institute of Computing Technology, Chinese Academy of Sciences. 

My previous research primarily foucuses on Trustworthy Machine Learning System for Medical Vision and Multimodal Learning. Specifically, it can be categoried into: (1) Construction of the world's first Multi-task Medical Image Benchmark Dataset, currently under reviewed by **Medical Image Analysis (SCI Q1, IF: 10.7)**. (2) Medical Image Segmentation with Noisy Labels, our work is currently under reviewed by **IEEE Transactions on Medical Imaging (SCI Q1, IF: 8.9)** and **Engineering Applications of Artificial Intelligence (SCI Q1, IF: 7.5)**. (3) Vision-language Models that proposes a Curriculum Learning framework for efficient and robust Medical Report Generation, currently under reviewed by a double-blind conference (CCF B). (4) Trustworthy Machine Learning System to address the imbalances from both sample and modality perspective, currently under reviewed by a double-blind conference (CCF A).

I am a self-motivated individual currently seeking a remote research internship in cutting-edge Computer Vision and Multimodal Learning. Additionally, I have obtained a 5-year F-1 USA Visa (2024-2029).


# 🔥 News
- *2024.06*: &nbsp;🎉🎉 My project "Dynamic Self-adaptive Fusion Framework for Medical Disease Dignosis" has been selected as a Chinese National Undergraduate College Students Innovation and Entrepreneurship Program (National Key Project).


# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MedIA 2024</div><img src='images/mia2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

LiMT: A Multi-task Liver Image Benchmark Dataset

**Medical Image Analysis (SCI Q1, IF: 10.7)(Under Review)**

Zhe Liu<sup>†</sup>, Kai Han, Siqi Ma, Jun Chen<sup>&dagger;</sup>, ..., **Chengxuan Qian**, Chongwen Lyu, ..., Victor S. Sheng<sup>&dagger;</sup>.  

- A multi-task medical image benchmark dataset for Segmentation, Classification and Detection of liver lesions, encompassing CT liver scans annotated for four common liver diseases. 

- Collaborated with researchers from Jiangsu University, Texas Tech University, and clinicians from the Affiliated Hospital of Jiangsu University.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TMI 2024</div><img src='images/TMI.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Region Uncertainty Estimation for Medical Image Segmentation with Noisy Labels

**IEEE Transaction on Medical Imaging (SCI Q1, CCF B, IF:8.9)(Under Review)**

Kai Han, Shuhui Wang<sup>&dagger;</sup>, IEEE Member, Jun Chen<sup>&dagger;</sup>, **Chengxuan Qian**, Chongwen Lyu, Siqi Ma, Victor S. Sheng<sup>&dagger;</sup>, IEEE Senior Member, Qingming Huang<sup>&dagger;</sup>, IEEE Fellow, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EAAI 2024</div><img src='images/EAAI2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

A Novel Noisy Label Adaptive Refinement Framework for Medical Image Segmentation

**Engineering Applications of Artificial Intelligence (SCI Q1, IF: 7.5)(Under Review)**

Kai Han<sup>*</sup>, **Chengxuan Qian**<sup>*</sup>, Lu Liu<sup>&dagger;</sup>, Jun Chen<sup>&dagger;</sup>, Siqi Ma, Liyuan Tian, Yuqing Song<sup>&dagger;</sup>, Victor S. Sheng<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCF A</div><img src='images/aaai2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Dynamic Curriculum for Multimodal Rebalance

**Under Reviewed by Double-blind Conference**

**Chengxuan Qian**<sup>*</sup>, Kai Han<sup>*</sup>,  Shuhui Wang<sup>&dagger;</sup>, Jun Chen<sup>&dagger;</sup>, Chongwen Lyu, Yuqing Song<sup>&dagger;</sup>, Victor S. Sheng<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>.

- we proposed a Trustworthy Multimodal Machine Learning System that introduces a Dynamic Curriculum Learning framework to address imbalances from both sample and modality perspective.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCF B</div><img src='images/accv2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

A Curriculum for Region-guided Automatic Radiology Report Generation

**Under Reviewed by Double-blind Conference**

Chongwen Lyu, Zhe Liu<sup>&dagger;</sup>, **Chengxuan Qian**, Kai Han, Yuqing Song<sup>&dagger;</sup>, Victor S. Sheng<sup>&dagger;</sup>, Jun Chen<sup>&dagger;</sup>.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCF B</div><img src='images/bibm_cl.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Curriculum Learning for Imbalanced Multimodal Disease Diagnosis

**Under Reviewed by Double-blind Conference**

Kai Han<sup>*</sup>, Chongwen Lyu<sup>*</sup>, **Chengxuan Qian**<sup>*</sup>, Siqi Ma, Jun Chen<sup>&dagger;</sup>, Zhe Liu<sup>&dagger;</sup>,

</div>
</div>

Note: Details of some papers above are not allowed to show since they are currently under reviewed by double-blind conference. * indicates euqal contribution and <sup>&dagger;</sup> is the note for advisor.

# 🎖 Honors and Awards
- *2023.10* First-Class Scholarship from Jiangsu University (Rank: 1/60).

# 📖 Educations
- *2024.06 - 2026.05*, Mathematics and Computer Science, Bachelor of Science, Arcadia University (Official 2+2 Program). 
- *2022.09 - 2024.06*, Mathematics and Applied Mathematics, Bachelor of Science, GPA: 93.1/100, Rank: 1/60, Jiangsu University.

# 💬 Research Projects
- Early Diagnosis of Pancreatic Tumors through the Integration of Domain Knowledge and Multimodal Data Collaboration, **National Natural Science Foundation of China**, *Participant*.

- Intelligent Staging and Classification of Hepatocellular Carcinoma through Multi-omics Feature Integration, **National Natural Science Foundation of China**, *Participant*.

- Classification Model for Cold and Hot Galvanized Surface Defects and Development of Application Software for C512 Electronic Balance Card System, **School-Enterprise Cooperation Project with Shanghai Baoshan Iron & Steel Co., Ltd.**, *Participant*.

- Dynamic Self-adaptive Fusion Framework for Medical Disease Dignosis, **Chinese National Undergraduate College Students Innovation and Entrepreneurship Program (National Key Project)**, *Program Director*.
