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
                    <h1><a href="{{post.url}}">{{post.title}}</a></h1>
                    {{ post.content | split:"<!-- more -->" | first }}
                </div><!-- entry-content -->
            </div><!-- bd -->
        </div><!-- content -->
    </div><!-- unit-inner -->
</article>
  {% endfor %}







