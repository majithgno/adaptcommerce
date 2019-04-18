import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";

import Layout from "theme/components/templates/Layout";
import Header from "theme/modules/Header";
import Footer from "theme/modules/Footer";
import Home from "theme/pages/Home";
import Product from "theme/pages/Product";
import Checkout from "theme/pages/Checkout";
import NotFound from "theme/pages/NotFound";

export default () => (
  <BrowserRouter>
    <Layout header={<Header />} footer={<Footer />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:sku" component={Product} />
        <Route path="/checkout" component={Checkout} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
