---
title: T_T3a
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 9
---
~~~
max(
    join(
        match(T1, 
            self - e0 - n1,
            self - e1 - n2),
        match(T2,
            self - e2 - n3)),
    e1.weight)
execute every match:
    at(n2, T1) add neighbor(n3)
~~~

