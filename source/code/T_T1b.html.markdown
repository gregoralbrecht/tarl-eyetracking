---
title: T_T1b
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 17
---
~~~
match(T1,
    self - e0 - n1,
    n1 - e1 - n2,
    n2 - e2 - n3)
execute every match:
    at(self, T1) add neighbor(n2),
    at(n3, T1) add neighbor(self)
~~~

