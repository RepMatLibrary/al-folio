---
layout: page
permalink: /press/
title: Press
description: Press release, publications, and events about RepMat.
years: [2023, 2022, 2021]
nav: true
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

<br><br><br>


<h4><b><a name="events">Events and media</a></b></h4>
<h5>International conferences, talks, presentations, and media</h5>
<br>

<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f events -q @*[year={{y}}]* %}
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
