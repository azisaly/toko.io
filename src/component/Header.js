import React, { Component } from 'react'


export class Header extends Component {

    render() {
        return (
            <div>
                <header className="relative full-width box-shadow">
                    <div className="clearfix container-web relative">
                        <div className=" container">
                            <div className="row">
                                <div className=" header-top">
                                    <p className="contact_us_header col-md-4 col-xs-12 col-sm-3 clear-margin">
                                        <img src="img/icon_phone_top.png" alt="Icon Phone Top Header" /> Call us <span className="text-red bold">070-7782-7137</span>
                                    </p>
                                    <div className="clear-padding menu-header-top text-right col-md-8 col-xs-12 col-sm-6">
                                        <ul className="clear-margin">
                                            <li className="relative"><a href="#">My Account</a></li>
                                            <li className="relative"><a href="#">Wishlist</a></li>
                                            <li className="relative">
                                                <a href="#">EN</a>
                                                <ul>
                                                    <li className="relative"><a href="#">JP</a></li>
                                                    <li className="relative"><a href="#">EN</a></li>
                                                    <li className="relative"><a href="#">CN</a></li>
                                                </ul>
                                            </li>
                                            <li className="relative">
                                                <a href="#">USD</a>
                                                <ul>
                                                    <li className="relative"><a href="#">AUD</a></li>
                                                    <li className="relative"><a href="#">USD</a></li>
                                                    <li className="relative"><a href="#">CAD</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="clearfix header-content full-width relative">
                                    <div className="clearfix icon-menu-bar">
                                        <i className="data-icon data-icon-arrows icon-arrows-hamburger-2 icon-pushmenu js-push-menu"></i>
                                    </div>
                                    <div className="clearfix logo">
                                        <a href="#"><img alt="Logo" src="img/logo.png" /></a>
                                    </div>
                                    <div className="clearfix search-box relative float-left">
                                        <form method="GET" action="/" className="">
                                            <div className="clearfix category-box relative">
                                                <select name="cate_search">
                                                    <option>All Category</option>
                                                    <option>Food</option>
                                                    <option>Mobile &amp; Tablet</option>
                                                    <option>Electric Appliances</option>
                                                    <option>Electronics &amp; Technology</option>
                                                    <option>Fashion</option>
                                                    <option>Health &amp; Beauty</option>
                                                    <option>Mother &amp; Baby</option>
                                                    <option>Books &amp; Stationery</option>
                                                    <option>Home &amp; Life</option>
                                                    <option>Sports &amp; Outdoors</option>
                                                    <option>Auto &amp; Moto</option>
                                                    <option>Voucher Service</option>
                                                </select>
                                            </div>
                                            <input type="text" name="s" placeholder="Mau Belanjaaa Apaa..?" />
                                            <button type="submit" className="animate-default button-hover-red">Search</button>
                                        </form>
                                    </div>
                                    <div className="clearfix icon-search-mobile absolute">
                                        <i onclick="showBoxSearchMobile()" className="data-icon data-icon-basic icon-basic-magnifier"></i>
                                    </div>
                                    <div className="clearfix cart-website absolute" onclick="showCartBoxDetail()">
                                        <img alt="Icon Cart" src="img/icon_cart.png" />
                                        <p className="count-total-shopping absolute">0</p>
                                    </div>
                                    <div className="cart-detail-header border">
                                        <div className="relative">
                                            <div className="product-cart-son clearfix">
                                                <div className="image-product-cart float-left center-vertical-image ">
                                                    <a href="#"><img src="img/product_image_6-min.png" alt="" /></a>
                                                </div>
                                                <div className="info-product-cart float-left">
                                                    <p className="title-product title-hover-black"><a className="animate-default" href="#">MH02-Black09</a></p>
                                                    <p className="clearfix price-product">$350 <span className="total-product-cart-son">(x1)</span></p>
                                                </div>
                                            </div>
                                            <div className="product-cart-son">
                                                <div className="image-product-cart float-left center-vertical-image">
                                                    <a href="#"><img src="img/product_image_7-min.png" alt="" /></a>
                                                </div>
                                                <div className="info-product-cart float-left">
                                                    <p className="title-product title-hover-black"><a className="animate-default" href="#">Voyage Yoga Bag</a></p>
                                                    <p className="clearfix price-product">$350 <span className="total-product-cart-son">(x1)</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative border no-border-l no-border-r total-cart-header">
                                            <p className="bold clear-margin">Subtotal:</p>
                                            <p className=" clear-margin bold">$700</p>
                                        </div>
                                        <div className="relative btn-cart-header">
                                            <a href="#" className="uppercase bold animate-default">view cart</a>
                                            <a href="#" className="uppercase bold button-hover-red animate-default">checkout</a>
                                        </div>
                                    </div>
                                    <div className="mask-search absolute clearfix" onclick="hiddenBoxSearchMobile()"></div>
                                    <div className="clearfix box-search-mobile">
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <a className="menu-vertical hidden-md hidden-lg" onclick="showMenuMobie()">
                                    <span className="animate-default"><i className="fa fa-list" aria-hidden="true"></i> all categories</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="header-ontop">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="clearfix logo">
                                        <a href="#"><img alt="Logo" src="img/logo.png" /></a>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="menu-header">
                                        <ul className="main__menu clear-margin">
                                            <li className="title-hover-red">
                                                <a className="animate-default" href="#">home</a>
                                                <ul className="sub-menu mega-menu">
                                                    <li className="relative">
                                                        <a className="animate-default center-vertical-image" href="home_v1.html"><img src="img/home_1_menu-min.png" alt="" /></a>
                                                        <p><a href="home_v1.html">Home 1</a></p>
                                                    </li>
                                                    <li className="relative">
                                                        <a className="animate-default center-vertical-image" href="home_v2.html"><img src="img/home_2_menu-min.png" alt="" /></a>
                                                        <p><a href="home_v2.html">Home 2</a></p>
                                                    </li>
                                                    <li className="relative">
                                                        <a className="animate-default center-vertical-image" href="home_v3.html"><img src="img/home_3_menu-min.png" alt="" /></a>
                                                        <p><a href="home_v3.html">Home 3</a></p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="title-hover-red">
                                                <a className="animate-default" href="#">shop</a>
                                                <div className="sub-menu mega-menu-v2">
                                                    <ul>
                                                        <li>Catgory Type</li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="category_v1.html">Category v1</a></li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="category_v1_2.html">Category v1.2</a></li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="category_v2.html">Category v2</a></li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="category_v2_2.html">Category v2.2</a></li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="category_v3.html">Category v3</a></li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="category_v3_2.html">Category v3.2</a></li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="category_v4.html">Category v4</a></li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="category_v4_2.html">Category v4.2</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li>Single Product Type</li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="product_v1.html">Product Single 1</a></li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="product_v2.html">Product Single 2</a></li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="product_v3.html">Product Single 3</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li>Order Page</li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="cartpage.html">Cart Page</a></li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="checkout.html">Checkout</a></li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="compare.html">Compare</a></li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="quickview.html">QuickView</a></li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="trackyourorder.html">Track Order</a></li>
                                                        <li className="title-hover-red"><a className="animate-default clear-padding" href="wishlist.html">WishList</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="title-hover-red">
                                                <a className="animate-default" href="#">pages</a>
                                                <ul>
                                                    <li className="title-hover-red"><a className="animate-default" href="about.html">About Us</a></li>
                                                    <li className="title-hover-red"><a className="animate-default" href="contact.html">Contact</a></li>
                                                    <li className="title-hover-red"><a className="animate-default" href="404.html">404</a></li>
                                                </ul>
                                            </li>
                                            <li className="title-hover-red">
                                                <a className="animate-default" href="#">Blog</a>
                                                <ul>
                                                    <li className="title-hover-red"><a className="animate-default" href="blog.html">Blog Category</a></li>
                                                    <li className="title-hover-red"><a className="animate-default" href="blogdetail.html">Blog Detail</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header
