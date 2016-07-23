---
title: Introduction
date: 2016-05-20 12:23 CEST
tags:
gh_issue: 6
---

**Before we begin, please read this short introduction on network topologies and topology adaptations carefully. It's vital that you understand what this experiment is about because we will present you with several tasks that we ask you to solve.**


**What are topology adaptations?**
A network topology is a schematic description of the arrangement of nodes and connecting links - also referred to as edges - that compose a network. Network applications often use at least two topology layers: the underlay and the overlay. While the underlay reflects physical connectivity between the devices, the overlay describes logical communication patterns. Many topology adaptations consider multiple topologies - think of it like multiple layers - for the decision and the execution of changes. As a result, one adaptation may affect one or more topologies of the same network. During this experiment the various topologies without a network will be numbered T1, T2, etc.

Because the overlay topology and its performance is immensely dependent on the underlying physical network, it’s important that the overlay topology is able to react to changes and adapt accordingly. Many networking applications implement such topology adaptations to cope with network dynamics, however, they are lacking a unified and general model to express and compare them. 

**What is the purpose of this experiment?**
This experiment seeks to analyze and compare two specific programming languages that can be applied to express abstract topology adaptations. You will be presented with an introduction to both and after that you will be asked to solve small tasks in each language. The experiment will be concluded with a short survey about your experience.