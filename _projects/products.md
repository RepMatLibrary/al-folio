---
layout: page
title: Product Library
permalink: /productlibrary/
description: Product library section of RepMat Library
nav: false
nav_order: 2
display_categories: [Product - Cluster 001, Product - Cluster 002, Product - Cluster 003, Product - Cluster 004, Product - Cluster 005, Product - Cluster 006, Product - Cluster 007, Product - Cluster 008]
horizontal: false
category: Start your visit from here
importance: 3
img: assets/img/Home/Home_7.jpg
---

The Product Library section aims to show variations in the expressive-sensorial qualities of materials influenced by manufacturing processes, linking them to quantitative aspects, technical data, achievable geometries and shapes, and possible applications and exploitations.

Each sample has been identified with a specific name to facilitate identification and comparison. The name is composed by three different codes `Cxx_Lyy_Szz`, i.e., C02_L02_S05:
<br>`Cxx` Cluster of the samples and products (main spatial structure).
<br>`Lyy` Specific layer of the spatial.
<br>`Szz` Specific material sample in the layer.

Do you want to know more about the organization and taxonomy of the physical and virtual parts of the library? Visit the section [How it works](howitworks/)!
<br>
<br>
<div class="row justify-content-sm-center">
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:left">
    <a href="/materialslibrary/" target="_self"><b>←</b> Materials Library</a></div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:center">
    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:center">
    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:right">
        <td align="right">  <a href="/physicallibrary/" target="_self"><b>→</b> Physical Library</a></td>
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
    <a href="/materialslibrary/" target="_self"><b>←</b> Materials Library</a></div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:center">
    <td align="right"> <a href="/howitworks/" target="_self"><b>?</b> How it works</a></td>
    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:center">
    <td align="right">  <a href="#" target="_self"><b>↑</b> Top</a></td>
    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:right">
        <td align="right">  <a href="/physicallibrary/" target="_self"><b>→</b> Physical Library</a></td>
    </div>
</div>
