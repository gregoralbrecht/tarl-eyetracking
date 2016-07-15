---
title: T_T2b
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 18
---
~~~
min(
    match(T1, 
        self - e0 - n1,
        n1 - e1 - n2),
    e1.weight)
execute every match:
    at(self, T1) remove neighbor(n1),
~~~

