/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import './Welcome.scss';
import Link from '../Link';

export default class extends Component {

  render() {
    var frames = this.props.welcome.frames;
    return (
		<section id="welcome">
			<div id="slides">
				<div className="overlay"></div>
				<div className="slides-container">
          {frames.map(function(frame) {
            return <img src={frame} alt="1" />;
          })}
				</div>
				<nav className="slides-navigation">
					<a href="#" className="next"></a>
					<a href="#" className="prev"></a>
				</nav>
				<div className="welcome-message">
					<div className="heading">
						<p>HI, I am {this.props.welcome.name}</p>
						<p className="small">{this.props.welcome.job} from {this.props.welcome.country}</p>
					</div>
					<a href="#home" className="borderBtn scrollto">MORE ABOUT ME</a>
				</div>
			</div>
		</section>
    );
  }

}
