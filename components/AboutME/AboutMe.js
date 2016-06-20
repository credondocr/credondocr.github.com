/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import './AboutMe.scss';
import Link from '../Link';

export default class extends Component {

  render() {
    var hobbies = this.props.hobbies;
    return (
      <section className="services section" id="about">
    		<div className="container">
    			<div className="divider"></div>
    			<div className="heading wow bounceInUp">
    				<h2>HERE'S WHAT I'M DOING</h2>
    				<p>
              {this.props.description}
            </p>
            <p>
              <strong>
                {this.props.slogan}
              </strong>
            </p>
    				<script async defer src="http://slack.costaricajug.org/slackin.js?large"></script>
    			</div>
    			<div className="services-inner hidethis">
            {hobbies.map(function(hobbie) {
              return (
                <div className="service col-xs-12 col-sm-6 col-md-4 col-lg-4">
        					<p className="icon"><i className={hobbie.icon}></i></p>
        					<h3>{hobbie.title}</h3>
        				</div>
              );
            })}
    			</div>
    		</div>
    	</section>
    );
  }

}
