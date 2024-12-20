---
layout: page
permalink: /publications/
title: Publications
description: Press release, publications, and events about RepMat.
years: [2024, 2023, 2022, 2021]
nav: false
nav_order: 3
---
<!-- _pages/publications.md -->

<br>


<h4><b><a name="publications">Publications</a></b></h4>
<h5>Journal articles, Book chapters, Conference papers</h5>
<br>
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>


<br><br>
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
