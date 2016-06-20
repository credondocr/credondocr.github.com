/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import './Footer.scss';
import Link from '../Link';

export default class extends Component {

  render() {
    var socialMedia = this.props.socialMedia;
    return (
      <footer className="section">
    		<div className="container">
    			<p>&copy; {this.props.year} {this.props.domain} All Rights Reserved.</p>
    			<ul>
            {socialMedia.map(function(media){
              return (
                  <li>
                    <a target="_blank" className={media.name} href={media.url}></a>
                  </li>
                )
            })}
    			</ul>
    		</div>
    	</footer>
    );
  }

}
