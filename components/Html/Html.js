/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import GoogleAnalytics from '../GoogleAnalytics';
import { title, description } from '../../config';

class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string.isRequired,
    debug: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{this.props.title || title}</title>
        <meta name="description" content={this.props.pageDescription || description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        <script src={'/app.js?' + new Date().getTime()}></script>
    		<link href="css/reset.css" rel="stylesheet" type="text/css" />
    		<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/>
    		<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    		<link href="css/jquery.fs.boxer.css" rel="stylesheet" type="text/css" />
        <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />
    		<link href="css/owl.carousel.css" rel="stylesheet" type="text/css" />
    		<link href="css/style.css" rel="stylesheet" type="text/css" />
    		<link rel="stylesheet" href="css/animate.css"/>
        <script src="js/jquery-1.9.1.min.js" type="text/javascript"></script>
	      <script src="js/modernizr-2.6.2.min.js" type="text/javascript"></script>
	      <script src="js/wow.min.js"></script>
        <script>
	        new WOW().init();
	      </script>
      </head>
      <body data-spy="scroll" data-target=".navbar-flat" data-offset="55">
        <div id="app" dangerouslySetInnerHTML={{__html: this.props.body}} />
        <script src="js/jquery.easing.1.3.js" type="text/javascript"></script>
      	<script src="js/jquery.easypiechart.min.js" type="text/javascript"></script>
      	<script src="js/isotope.pkgd.min.js" type="text/javascript"></script>
      	<script src="js/bootstrap.min.js" type="text/javascript"></script>
      	<script src="js/jquery.fs.boxer.min.js" type="text/javascript"></script>
      	<script src="js/jquery.form-validator.min.js" type="text/javascript"></script>
      	<script src="https://maps.googleapis.com/maps/api/js?sensor=false" type="text/javascript"></script>
      	<script src="js/owl.carousel.min.js" type="text/javascript"></script>
      	<script src="js/jquery.superslides.min.js" type="text/javascript"></script>
      	<script src="js/jquery.inview.min.js" type="text/javascript"></script>
      	<script src="js/script.js" type="text/javascript"></script>
        <GoogleAnalytics />
      </body>
      </html>
    );
  }

}

export default Html;
