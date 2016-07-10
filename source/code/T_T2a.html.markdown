---
title: T_T2a
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 8
---
~~~
filter(
    max(
        match(T1, 
            self - e0 - n1,
            n1 - e1 - n2)
    e0.weight))
execute every match:
    at(self, T1) remove neighbor(n1),
~~~

