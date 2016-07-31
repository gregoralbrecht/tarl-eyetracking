---
title: T_T5b
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 20
---
~~~
filter(
    min(
        match(T1, 
            self - e0 - n1,
            n1 - e1 - n2,
            n2 - e2 - self),
        e0.weight),
    e1.weight < 8 )
execute every match:
    at(self, T1) remove neighbor(n2)
~~~

