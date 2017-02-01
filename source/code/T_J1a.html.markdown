---
title: T_J1a
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 1
---
~~~
for (Node n1: graph.getSelf().getNeighbors()) {
    for (Node n2: n1.getNeighbors()) {
        if(!n2.equals(graph.getSelf())) {
            graph.addEdge(graph.getSelf(), n2);
        }
        
        for (Node n3: n2.getNeighbors()) {
            if(!n3.equals(n1)) {
                graph.addEdge(graph.getSelf(), n3);
            }
        }
    }
}
~~~

