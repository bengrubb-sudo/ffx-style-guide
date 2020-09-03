---
title: General
type: index-general
---

{% assign style = site.docs | where: 'type', 'style-general' | sort: 'url'%}
{% for doc in style %}
## {{ doc.title }}
{{ doc.content }}
<hr>
{% endfor %}