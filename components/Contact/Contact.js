/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import './Contact.scss';
import Link from '../Link';

export default class extends Component {

  render() {
    var phones = this.props.contact.phones;
    var emails = this.props.contact.emails;
    return (
            <section className="section contact-section active" id="contact">
      				<div className="container contact-box">
                <div className="center">
      					<div className="section-block contact-block">
      						<div className="block-header">
      							<h2>Contact Me</h2>
      							<p>I'll be happy to hear from you</p>
      						</div>
      						<div className="row contact-infos">
      							<div className="col-sm-4 col-xs-6 ">
      								<div className="contact-info">
      									<i className="ion-ios-location-outline"></i>
      									<h4>Address</h4>
      									<p>
      										{this.props.contact.address}
      									</p>
      								</div>
      							</div>
      							<div className="col-sm-4 col-xs-6">
      								<div className="contact-info">
      									<i className="ion-ios-telephone-outline"></i>
      									<h4>Phone</h4>
                          {phones.map(function(phone) {
                            return (
                              <p>
            										{phone}
            									</p>
                            );
                          })}

      								</div>
      							</div>
      							<div className="col-sm-4 col-xs-12">
      								<div className="contact-info">
      									<i className="ion-ios-email-outline"></i>
      									<h4>Email</h4>
                        {emails.map(function(email) {
                          return (
                            <p>
                              {email}
                            </p>
                          )
                        })}
      								</div>
      							</div>
    	            </div>
                  </div>
      					</div>
      				</div>
      			</section>
    );
  }

}
