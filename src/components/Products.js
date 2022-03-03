import React from "react";
import OrderBy from "./OrderBy";
import { connect } from "react-redux";
import { selectOrderByFilter, addProductToCart} from '../store/action';

function Products(props) {
  function handleOrderBy({ target }) {
    props.dispatch(selectOrderByFilter(target.value));
  }

  function filterProductsWithSizeSelected(products){
    let filteredProducts = [];
    if(props.size.length === 0){
      return filteredProducts = [...products];
    }else{
      for(let size of props.size){
        products.forEach(product => {
          if(product.availableSizes.includes(size)){
            filteredProducts.push(product);
          }
        })
      }
      return filteredProducts;
    }
  }

  function handleOrderProducts(order, products) {
    let sortedProducts = [...new Set(filterProductsWithSizeSelected(products))];
    if (order === "highest") {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
    if (order === "lowest") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    return sortedProducts;
  }

  function addToCart(product, id){
    props.dispatch(addProductToCart(product,id));
  }

  let products = handleOrderProducts(props.selectedOrder, props.data);

  return (
    <div>
      <div className="products-filter">
        <p>
          {`${props.data.length} Product${
            props.data.length > 1 ? "s" : ""
          } found.`}{" "}
        </p>
        <OrderBy selectedOrder={props.selectedOrder} handleOrderBy={handleOrderBy} />
      </div>
      <div className="flex wrap">
        {products.map(product => (
          <Product product={product} key={product.id} id={product.id} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

function Product(props) {
  let { product } = props;
  return (
    <div className="product-item">
      <div className="product-label">Free Shipping</div>
      <img
        className="product-item-img"
        src={`/static/products/${product.sku}_1.jpg`}
        alt={product.title}
      />
      <div className="product-item-details">
        <p className="product-item-title">{product.title}</p>
        <div className="line"></div>
        <h3 className="product-item-price">
          {product.currencyFormat + product.price}
        </h3>
        <button onClick={() => props.addToCart(product, props.id)}>Add To Cart</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    selectedOrder: state.filter.selectedOrder,
    size: state.size.size
  };
}

export default connect(mapStateToProps)(Products);
