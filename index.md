---
layout: page
title: Blog
tagline: Sandbox de cosas random que hago :P
---
{% include JB/setup %}

 {% for post in site.posts %}
<article class="unit-article layout-post">
    <div class="unit-inner unit-article-inner">
        <div class="content">
            <div class="bd">
                <div class="entry-content">
                     <a href="{{post.url}}"><h1>{{post.title}}</h1></a>
                    {{ post.content | split:"<!-- more -->" | first }}
                    <a href="{{post.url}}">Read more...</a>
                </div><!-- entry-content -->
            </div><!-- bd -->
        </div><!-- content -->
    </div><!-- unit-inner -->
</article>
  {% endfor %}







