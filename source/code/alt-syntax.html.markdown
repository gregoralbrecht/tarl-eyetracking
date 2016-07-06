---
title: Alternative Syntax
date: 2016-06-12 12:23 CEST
tags:
gh_issue: 1
---
~~~
match(self - e0 - n1)
    .filter(n1.size > 5)
    .join(match(self - e1 -n1)).max(e.weight)
    .execute(self).addNeighbor(n1)
~~~

