---
title: Sample Listing
date: 2016-05-20 12:23 CEST
tags:
---
~~~
filter(
    max(
        join(
            match(TP, T1,
                self    <-  e0  ->  n1,
                n1      <-  e1  ->  n2
            ),
            match(TP, T3,
                self <- e2 -> n3)
            ),
        e0.weight),
    count(
        match(TP, T2, self - e3 -> n4)) = 0)
execute every match:
    at(self, TP, T2) add neighbor(n1)
~~~

