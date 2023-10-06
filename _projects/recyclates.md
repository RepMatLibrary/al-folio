---
layout: page
title: Recyclate Library
permalink: /recyclatelibrary/
description: Recyclate library section of RepMat Library
nav: false
nav_order: 2
display_categories: [Recyclates - Cluster 001, Recyclates - Cluster 002, Recyclates - Cluster 003, Recyclates - Cluster 004, Recyclates - Cluster 005, Recyclates - Cluster 006, Recyclates - Cluster 007]
horizontal: false
category: Start your visit from here
importance: 1
img: assets/img/Home/Home_5.jpg
---
The Recyclate Library section aims to showcase the recycled feedstock used as raw materials and visible in the whole library.

Each recyclate has been identified with a specific name to facilitate identification and comparison. The name is composed by three different codes `Gxxx_Myy`, i.e., G001_M02:
<br>`Gxxx` Materials and Products main group.
<br>`Myy` Specific material of the main group.

Do you want to know more about the organization and taxonomy of the physical and virtual parts of the library? Visit the section [How it works](howitworks/)!
<br>
<br>
<div class="row justify-content-sm-center">
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:left">
    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:center">
    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:center">
    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:right">
        <td align="right">  <a href="/materialslibrary/" target="_self"><b>→</b> Materials Library</a></td>
    </div>
</div>

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

<br>
<hr>

<br>
<div class="row justify-content-sm-center">
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:left">
  </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:center">
    <td align="right"> <a href="/howitworks/" target="_self"><b>?</b> How it works</a></td>
    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:center">
    <td align="right">  <a href="#" target="_self"><b>↑</b> Top</a></td>
    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:right">
        <td align="right">  <a href="/materialslibrary/" target="_self"><b>→</b> Materials Library</a></td>
    </div>
</div>
