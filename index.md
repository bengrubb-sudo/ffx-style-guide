---
title: Fairfax Media Style Guide 
layout: doc
info: 🔍 Use browser search to quickly find what you're after.
---

# Foreword

Fairfax Media produces hundreds of publications, be they digital, newspapers or magazines.

As with its predecessors, this 2015 version of the _Fairfax Media Stylebook_ is designed to help create consistency in the way we communicate with our audiences regardless of the platform they choose.

Our journalism needs to be clear, accurate and concise, and there are many entries in this guide to help achieve those ends.

Grammar, punctuation and spelling are covered, and the stylebook is also a handy reference tool for many of the facts that crop up regularly in our work. It will also help writers and editors avoid many common pitfalls.

The English language is constantly evolving: meanings change, nouns become verbs and new words appear. There will be times when it makes sense to break or bend the rules, but do so with care.

We use the _Oxford Dictionary_ as our reference for words not found in this guide and _The Times Atlas_ for foreign place names. _The Australian Oxford Dictionary_ can be found on the Fairfax intranet. For more up-to-date general references go to [oxforddictionaries.com](https://oxforddictionaries.com).

Thanks go to all those who have given of their time and expertise in producing this update.

**January 2015**

# Styles

{% assign style-general = site.docs | where: 'type', 'style-general' | sort: 'url' %}
{% assign style-business = site.docs | where: 'type', 'style-business' | sort: 'url' %}
{% assign style-internet-and-it = site.docs | where: 'type', 'style-internet-and-it' | sort: 'url' %}
{% assign style-all = style-general | concat: style-business | concat: style-internet-and-it | sort: 'title' %}
{% for doc in style-all %}
<div class="{{doc.type}}" markdown="1">
## {{ doc.title }}
{{ doc.content }}
<hr>
</div>
{% endfor %}

# Guides

{% assign guides = site.docs | where: 'type', 'guides' | sort: 'url' %}
{% for guide in guides %}
## {{ guide.title }}
{{ guide.content }}
<hr>
{% endfor %}