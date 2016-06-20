/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import Navigation from '../Navigation';
import Welcome from '../Welcome';
import Loader from '../Loader';
import Info from '../Info';
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Experience from '../Experience';
import Footer from '../Footer';
import Contact from '../Contact';
import options from '../../config';

class Layout extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div >
        <Loader />
		    <Welcome welcome={options.welcome} />
        <Navigation />
        <Info jobPosition={options.jobPosition} name={options.name} linkedinUrl={options.linkedinUrl} />
        <AboutMe description={options.description} slogan={options.slogan}  hobbies={options.hobbies} />
        <Skills skills={options.skills}/>
        <Experience experiences={options.experiences}/>
        <Contact contact={options.contact}/>
        <Footer socialMedia={options.socialMedia} domain={options.domain} year={options.year}/>
      </div>
    );
  }

}

export default Layout;
