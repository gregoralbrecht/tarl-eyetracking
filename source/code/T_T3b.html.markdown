---
title: T_T3b
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 11
---
~~~
filter(
    min(
        join(
            match(T1, 
                self - e0 - n1),
            match(T2,
                self - e1 - n2)),
        e0.weight)
execute every match:
    at(n1, T1) add neighbor(n2)
~~~

