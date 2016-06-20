/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import './Experience.scss';
import Link from '../Link';

export default class extends Component {

  render() {
    var experiences = this.props.experiences;
    return (
      <section className="experience section" id="experience">
    		<div className="container">
    			<div className="divider"></div>
    			<div className="heading">
    				<h2>WORK EXPERIENCE</h2>
    			</div>
    			<div className="row">
    				<div className="timeline">
    					<ul>

                {experiences.map(function(experience, index) {

                  return (

                    <li className={ (index % 2 ) == 0 ?  'animated' : 'animated odd'}>
                      <div className="point"></div>
                      <div className="bubble">
                        <div className="bubble-arrow"></div>
                        <p className="date">{experience.date}</p>
                        <p className="name">{experience.name}</p>
                        <p className="title">{experience.title}</p>
                      </div>
                    </li>
                  );
                })}
    					</ul>
    				</div>
    			</div>
    		</div>
    	</section>
    );
  }

}
