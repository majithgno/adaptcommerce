import React from "react";
import Link from "theme/components/atoms/Typography/Link";
import { H1 } from "theme/components/atoms/Typography/Heading";
import Paragraph from "theme/components/atoms/Typography/Paragraph";
import Page from "theme/components/templates/Page";

const Checkout = () => {
  return (
    <Page>
      <H1>Checkout</H1>
      <Paragraph>There is no checkout in adaptcommerce.</Paragraph>
      <Paragraph>
        However, feel free to take a look at{" "}
        <Link to="https://adaptcommerce.org/" external>
          adaptcommerce's demo
        </Link>{" "}
        to see how it could look like.
      </Paragraph>
    </Page>
  );
};

export default Checkout;
