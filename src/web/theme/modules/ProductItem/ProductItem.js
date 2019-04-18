import React, { Fragment } from "react";
import ProductPrice from "theme/components/molecules/ProductPrice";
import createMediaUrlFromPath from "../../../utils/createMediaUrlFromPath";
import Link from "theme/components/atoms/Typography/Link";
import Tag from "theme/components/atoms/Typography/Tag";
import Media from "theme/components/organisms/Media";

const ProductItem = ({ name, prices, sku, imageUrl, commodityType }) => {
  return (
    <Media
      media={<img src={createMediaUrlFromPath(imageUrl)} alt={name} />}
      renderDetails={() => (
        <Fragment>
          <Link to={`product/${sku}`} type="reversed">
            {name}
          </Link>
          <ProductPrice prices={prices} />
          {commodityType && <Tag>{commodityType}</Tag>}
        </Fragment>
      )}
    />
  );
};

export default ProductItem;
