---
layout: post
title: "Angular Fullstack Tutorial"
description: "Tutorial completo desde 0 de como usar Angular-fullstack"
category: angular-fullstack 
tags: [angular, yeoman, nodejs, expressjs, mongoose, mongo, angular-fullstack, tutorial]
---
{% include JB/setup %}

Luego de investigar un poco de diferentes tecnologías Angularjs encontré una solución muy interesada y poderosa llamada [Angular-Fullstack](https://github.com/DaftMonk/generator-angular-fullstack).

##Features interesantes de Angular-Fullstack

Entre los features interesantes de Angular-Fullstack puedo destacar:

##Client Side
- Yeoman CLI.
- Grunt.
- Templates en html o Jade.
- Scripts en Javascript o CoffeeScript.
- Stylesheets en CSS, Less, Sass, Stylus.
- Angular Routers en ngRoute, ui-router.



##Server Side
- Integración con mongodb si lo deseas.
- Integracion con autentificación Boilerplate.
- Integración con oAuth: Facebook, Twitter y Google. 
- Integración con Socket.io


Nota: Todos estos Features son configurables desde el Yeoman.

Bueno demos inicio al tutorial (Este tutorial esta enfocado en usuarios Linux ya que es la plataforma donde estoy desarrollando actualmente):

##Pre Requisitos:

- Node instalado [Tutorial](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
- Grunt.
-[Yeoman](http://yeoman.io)
- Mongo si al generar el proyecto seleccionamos que utilizaremos DB


##¿Como generar un proyecto desde 0?

Primero vamos a instalar el generador para angular-fullstack
	
	$ npm install -g generator-angular-

Luego crearemos la carpeta donde estará nuestro proyecto

	$ mkdir angular-fullstack-tutorial && cd $_

Ya en esa carpeta ejecutaremos el Wizard para generar el proyecto

	$ yo angular-fullstack

Con este comando Yeoman te va a preguntar que deseas y que no deseas en tu proyecto, en mi caso seleccione:

##Client
- javaScript
- HTML
- Less
-UIRouter
-Inclui Bootstrap
-Inclui UI Bootstrap

##Server
- Mongo with Mongoose
- Boilerplate Authentication
- OAuth Strategies: Facebook
-Inclui Socket.io

<p>Luego de seleccionar tu proyecto durará unos cuantos minutos configurando y descargando las dependencias del proyecto.</p>

Vamos ahora a correr nuestro proyecto con el siguiente comando:

	$ sudo grunt serve

Nota: Si ejecutamos este comando sin permiso de administrador va a dar un loop en el watch asi que si les dio ese error no olviden ejecutar con sudo.

##Estructura del proyecto

	├── client
	│   ├── app                 - All of our app specific components go in here
	│   ├── assets              - Custom assets: fonts, images, etc…
	│   ├── components          - Our reusable components, non-specific to to our app
	│
	├── e2e                     - Our protractor end to end tests
	│
	└── server
	    ├── api                 - Our apps server api
	    ├── auth                - For handling authentication with different auth strategies
	    ├── components          - Our reusable or app-wide components
	    ├── config              - Where we do the bulk of our apps configuration
	    │   └── local.env.js    - Keep our environment variables out of source control
	    │   └── environment     - Configuration specific to the node environment
	    └── views               - Server rendered views

	.
    |-- _client
    |   |-- app
    	|-- assets
    	|--components 
    |-- _includes
    |-- _layouts
    |   |-- default.html
    |   |-- post.html
    |-- _posts
    |   |-- 2011-10-25-open-source-is-good.markdown
    |   |-- 2011-04-26-hello-world.markdown
    |-- _site
    |-- index.html
    |-- assets
        |-- css
            |-- style.css
        |-- javascripts

Tomado de la página del desarrollador.


