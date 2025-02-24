---
layout: page
permalink: /eventsandmedia/
title: Events and media resources
description: Press release, events, and media resources about RepMat.
years: [2025, 2024, 2023, 2022]
nav: false
nav_order: 3
---
<!-- _pages/publications.md -->

Here is a list of events, conferences, and online media resources mentioning or speaking about the <strong>RepMat</strong> library. Stay tuned for new insights about this work!

<br><br>
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f details -q @*[year={{y}}]* %}
{% endfor %}

</div>

<br><br><br><br><br>
<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/Home/Home_9.jpg" title="example image" class="img-fluid" %}
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/Home/Home_10.jpg" title="example image" class="img-fluid" %}
    </div>
</div>
<br>
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/Home/Home_11.jpg" title="example image" class="img-fluid" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/Home/Home_12.jpg" title="example image" class="img-fluid" %}
    </div>
</div>
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
