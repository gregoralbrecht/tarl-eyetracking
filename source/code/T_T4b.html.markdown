---
title: T_T4b
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 19
---
~~~
filter(
    match(T1, 
        self - e0 - n1,
        n1 - e1 - n2),
    e0.weight > 3 )
execute every match:
    at(self, T1) remove neighbor(n2)
~~~

