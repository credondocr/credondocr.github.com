---
layout: post
title: "Angular Fullstack Tutorial"
description: ""
category: 
tags: []
---
{% include JB/setup %}

Luego de investigar un poco de diferentes tecnologías Angularjs encontré una solución muy interesada y poderosa llamada [Angular-Fullstack](https://github.com/DaftMonk/generator-angular-fullstack).

##Features interesantes de Angular-Fullstack

Entre los features interesantes de Angular-Fullstack puedo destacar:

##Client Side
<ul class="posts">
    <li>Yeoman CLI.</li>
    <li>Grunt.</li>
    <li>Templates en html o Jade.</li>
    <li>Scripts en Javascript o CoffeeScript.</li>
    <li>Stylesheets en CSS, Less, Sass, Stylus.</li>
    <li>Angular Routers en ngRoute, ui-router. </li>
</ul>


##Server Side
<ul class="posts">
    <li>Integración con mongodb si lo deseas.</li>
    <li>Integracion con autentificación Boilerplate.</li>
    <li>Integración con oAuth: Facebook, Twitter y Google. </li>
    <li>Integración con Socket.io</li>
</ul>

Nota: Todos estos Features son configurables desde el Yeoman.

Bueno demos inicio al tutorial (Este tutorial esta enfocado en usuarios Linux ya que es la plataforma donde estoy desarrollando actualmente):

##Pre Requisitos:

<ul class="posts">
    <li>Node instalado [Tutorial](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)</li>
    <li>Grunt.</li>
    <li>[Yeoman](http://yeoman.io/) </li>
    <li>Mongo si al generar el proyecto seleccionamos que utilizaremos DB</li>
</ul>

##¿Como generar un proyecto desde 0?

Primero vamos a instalar el generador para angular-fullstack
	
	$ npm install -g generator-angular-fullstack

