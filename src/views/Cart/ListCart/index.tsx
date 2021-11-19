import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { Product } from "../../../models/Product/product.model";
import CartItem from "./CartItem";
import "./listCart.scss";

interface ListCartProps {
  products: Product[];
}

const ListCart: FC<ListCartProps> = (props) => {
  const { products = [] } = props;

  const history = useHistory();

  const goBack = () => history.goBack();

  const BackButton = (
    <p className="text-primary text-bold continue-shopping" onClick={goBack}> <i className="icon-ic_keyboard_backspace_24px" /> Continue Shopping</p>
  );

  return (
    <div className="list-cart">
      <div className="title">
        <h1>
          Cart
          <p className="items">{products.length} Items</p>
        </h1>
        {BackButton}
      </div>
      {products.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
      <div className="bottom">{BackButton}</div>
    </div>
  );
};

export default ListCart;
