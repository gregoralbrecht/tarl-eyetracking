---
title: T_T5a
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 12
---
~~~
filter(
    max(
        match(T1, 
            self - e0 - n1,
            n1 - e1 - n2,
            n2 - e3 - self),
        e1.weight),
    e0.weight < 5 )
execute every match:
    at(n1, T1) remove neighbor(self)
~~~

