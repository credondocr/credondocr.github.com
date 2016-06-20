/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import './Skills.scss';
import Link from '../Link';

export default class extends Component {

  render() {
    var skills = this.props.skills;
    return (
      <section className="skills section colored" id="skills">
    		<div className="container">
    			<div className="divider"></div>
    			<div className="heading">
    				<h2>TECHNICAL SKILLS</h2>
    			</div>
    			<div id="skills-slide">

            {skills.map(function(skill) {
              return (
                <div className="skill">
        					<span className="chart" data-percent={skill.percent}>
        						<span className="percent"></span>
        					</span>
        					<h4>{skill.title}</h4>
        					<p>{skill.description}</p>
        				</div>
              );
            })}
    			</div>
    		</div>
    	</section>
    );
  }

}
