---
layout: about
title: Home
permalink: /
subtitle: <strong>Democratize</strong> materials and technological knowledge.
news: false  # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true  # includes social icons at the bottom of the page
display_categories: [Start your visit from here]
---
<br>
<hr>
<br>
<h5><i>Welcome to the Virtual library of Rep<strong>Mat!</strong></i></h5>
<br>
<strong>RepMat</strong> Library, <strong>REP</strong>licating <strong>MAT</strong>erials Library, is an Open Source Materials Library designed to share circular sustainable practices linked to new materials and technologies, in particular 3D printing.

This library contains useful data and information regarding materials, products, and 3D printing processes connected to circular economy and sustainable development practices. It has been designed to encourage the use and spread the knowledge and use of materials for new applications and products connected to circular economy principles, stimulating new work on them.
<br><br>
<strong>Do you want to know more about it?</strong> <a href="/about/" target="_self">Check this link!</a>
<br>
<br>


<!-- pages/projects.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>

<hr>

<br>
<br>
<h5><i>A <strong>collaborative</strong>, <strong>distributed</strong>, and <strong>open source</strong> materials library</i></h5>
<br>
<strong>RepMat</strong> is meant as a collaborative distributed materials library, following the principles of open source and open design. It can be freely replicated within collaborative spaces, such as makerspaces, and the library itself can grow thanks to the contribution of different users and communities.
<br><br>
<strong>Do you want to contribute with your samples?</strong> <a href="/joinus/" target="_self">Check this link!</a>

<br>
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.html path="assets/img/Home/Home_1.jpg" title="example image" class="img-fluid" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/Home/Home_2.jpg" title="example image" class="img-fluid" %}
    </div>
</div>
<br>
<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/Home/Home_3.jpg" title="example image" class="img-fluid" %}
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/Home/Home_4.jpg" title="example image" class="img-fluid" %}
    </div>
</div>
<hr>


<br>
<br>
