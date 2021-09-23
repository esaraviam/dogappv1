### Introduction

Usually, when we develop react Apps, we only concern about separate in our directory map, hooks, components, pages, store,  etc. But this directory separation doesn't guarantee that our application will scale or be maintainable in the future.

Here's comes to help the <b>Domain-Driven Desing(DDD)<b> in particular in this article Hexagonal Architecture.

We will implement a typescript project using react to apply some of the concepts of HA (Hexagonal Architecture)

First of all, to maintain this real we implement an existing API to get Dog Breeds Photos in the link bellow you can find the api documentation.
[Dog CEO Api documentation](https://dog.ceo/dog-api/documentation/)


### Let's get started

I'm gonna create a react app, using yarn and create react app CLI and typescript template to do this you need to type the following:


```javascript
yarn create react-app dogapp --template typescript
```

this will create a boilerplate react app that we will modify to implement HA, first of all let's talk about design.


###Hexagonal Architecture.

The Hexagonal Architecture is based in layers like an onion, and propose three base layers, Domain , Application and Infrastructure. 

![alt HA Diagram](https://raw.githubusercontent.com/esaraviam/esaraviam/main/images/hexagon.png "Hexagonal Architecture Diagram")

Hexagonal Architecture proposes that our domain is the core of the layers and that it does not couple to anything external. Instead of making explicit use and through the principle of inversion of dependencies, we couple ourselves to contracts (interfaces or ports) and not to specific implementations.

### The code.

we will make a dog breed app so let's create some directories to implement HA.

To implement HA we need to separate our domain of the implementations so let create the layer proposed by HA.

so we need to create 3 main folders to contain our app.

I'll upload this in a github repository at the end of the post.

<ul>
<li>src</li>
<ul>
  <li>--domain</li>
  <li>--application</li>
  <li>--infrastructure</li>

</ul>

</ul>

using this approach the domain folder does know how will be implemented, and the application layer only can access to domain but doesn't know how the infrastructure will be implemented

