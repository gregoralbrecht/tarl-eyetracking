---
title: T_J0
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
public void modifyGraph(Graph graphToModify) {
    Node n1 = graphToModify.getSelf().getNeighbors()[0];
    Node n2 = graphToModify.getSelf().getNeighbors()[1];
    n1.addNeighbor(n2);
}
~~~

