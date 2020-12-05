import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="relative full-width">
                    <div className="clearfix top-footer full-width">
                        <div className="clearfix container-web relative">
                            <div className=" container">
                                <div className="row">
                                    <div className="clearfix col-md-9 col-sm-12 clear-padding col-xs-12">
                                        <div className="clearfix text-subscribe">
                                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                            <p>sign up for newsletter</p>
                                            <p>Get updates on discount &amp; counpons.</p>
                                        </div>
                                        <div className="clearfix form-subscribe">
                                            <input type="text" name="email-subscribe" placeholder="Enter your email . . ." />
                                            <button className="animate-default button-hover-red">subscribe</button>
                                        </div>
                                    </div>
                                    <div className="clearfix col-md-3 col-sm-12 col-xs-12 clear-padding social-box text-right">
                                        <a href="#"><img src="img/social_tw-min.png" alt="Icon Social Twiter" /></a>
                                        <a href="#"><img src="img/social_fa-min.png" alt="Icon Social Facebook" /></a>
                                        <a href="#"><img src="img/social_int-min.png" alt="Icon Social Instagram" /></a>
                                        <a href="#"><img src="img/social_yt-min.png" alt="Icon Social Youtube" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix container-web relative">
                        <div className=" container clear-padding">
                            <div className="row">
                                <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                                    <p>my account</p>
                                    <ul className="list-footer">
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Login</a></li>
                                        <li><a href="#">My Cart</a></li>
                                        <li><a href="#">My Wishlist</a></li>
                                        <li><a href="#">My Compare</a></li>
                                    </ul>
                                </div>
                                <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                                    <p>information</p>
                                    <ul className="list-footer">
                                        <li><a href="#">Information</a></li>
                                        <li><a href="#">Orders History</a></li>
                                        <li><a href="#">My Wishlist</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Site Map</a></li>
                                    </ul>
                                </div>
                                <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                                    <p>our services</p>
                                    <ul className="list-footer">
                                        <li><a href="#">Product Recall</a></li>
                                        <li><a href="#">Gift Vouchers</a></li>
                                        <li><a href="#">Returns And Exchanges</a></li>
                                        <li><a href="#">Shipping Options</a></li>
                                        <li><a href="#">Terms Of Use</a></li>
                                    </ul>
                                </div>
                                <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                                    <p>contact us</p>
                                    <ul className="icon-footer">
                                        <li><i className="fa fa-home" aria-hidden="true"></i> 262 Milacina Mrest, Behansed, Paris</li>
                                        <li><i className="fa fa-envelope" aria-hidden="true"></i> contact@yourcompany.com</li>
                                        <li><i className="fa fa-phone" aria-hidden="true"></i> 070-7782-9137</li>
                                        <li><i className="fa fa-fax" aria-hidden="true"></i> 070-7782-9138</li>
                                        <li><i className="fa fa-clock-o" aria-hidden="true"></i> 09:00 AM - 18:00 PM</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" bottom-footer full-width">
                        <div className="clearfix container-web">
                            <div className=" container">
                                <div className="row">
                                    <div className="clearfix col-md-7 clear-padding copyright">
                                        <p>Copyright © 2020 by EngoCreative. All Rights Reserved.</p>
                                    </div>
                                    <div className="clearfix footer-icon-bottom col-md-5 float-right clear-padding">
                                        <div className="icon_logo_footer float-right">
                                            <img src="img/image_payment_footer-min.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}

export default Footer
