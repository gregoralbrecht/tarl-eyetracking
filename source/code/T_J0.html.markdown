---
title: T_J0
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
for (Node n1: graph.getSelf().getNeighbors()) {
    for (Node n2: graph.getSelf().getNeighbors()) {
        if(!n1.equals(n2)) {
            graph.addEdge(n1, n2);
        }
    }
}
~~~

