---
layout: page
title: Materials Library
permalink: /materialslibrary/
description: Materials library section of RepMat Library
nav: false
nav_order: 2
display_categories: [Material - Cluster 001, Material - Cluster 002, Material - Cluster 003, Material - Cluster 004, Material - Cluster 005, Material - Cluster 006]
horizontal: false
category: Start your visit from here
importance: 2
img: assets/img/Home/Home_6.jpg
---
The Material Library section aims to show variations in the expressive-sensorial qualities of materials, linking them to quantitative aspects, such as waste percentage.

Each sample has been identified with a specific name to facilitate identification and comparison. The name is composed by three different codes `Cxxx_Lyy_Szz`, i.e., C002_M03_S11:
<br>`Cxxx` Cluster of the secondary raw materials.
<br>`Lyy` Specific layer of the cluster.
<br>`Szz` Specific material sample.

Do you want to know more about the organization and taxonomy of the physical and virtual parts of the library? Visit the section [How it works](howitworks/)!
<br>
<br>
<div class="row justify-content-sm-center">
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:left">
    <a href="/recyclatelibrary/" target="_self"><b>←</b> Recyclate Library</a></div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:center">
    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:center">
    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:right">
        <td align="right">  <a href="/productlibrary/" target="_self"><b>→</b> Product Library</a></td>
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
    <a href="/recyclatelibrary/" target="_self"><b>←</b> Recyclate Library</a></div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:center">
    <td align="right"> <a href="/howitworks/" target="_self"><b>?</b> How it works</a></td>
    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:center">
    <td align="right">  <a href="#" target="_self"><b>↑</b> Top</a></td>
    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:right">
        <td align="right">  <a href="/productlibrary/" target="_self"><b>→</b> Product Library</a></td>
    </div>
</div>
