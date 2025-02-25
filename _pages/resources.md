---
layout: page
permalink: /resources/
title: Resources
description: Materials for the use and replication of the RepMat Library.
nav: false
nav_order: 4
display_categories: [Resources]
---

The resources for the replication of the physical part of the <strong>RepMat</strong> library are available at this <a href="https://osf.io/z2wnu/">OSF Repository</a>. They mainly support: the definition of the <strong>organization and taxonomy</strong>, the <strong>fabrication of the physical structures</strong>, and the <strong>use of the physical part</strong> of the library.

<strong>Do you want to contribute with your samples?</strong> <a href="/joinus/" target="_self">Check this link!</a>
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
        <td align="right">  <a href="/joinus/" target="_self"><b>→</b> Join Us</a></td>
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
    <a href="/about/" target="_self"><b>?</b> About</a></div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:center">

    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:center">

    </div>
    <div class="col-sm-3 mt-3 mt-md-0" style="text-align:right">
        <td align="right">  <a href="#" target="_self"><b>↑</b> Top</a></td>
    </div>
</div>
