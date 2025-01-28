import PropTypes from "prop-types";
const SingleProduct = ({ product, handleCart }) => {
  const { title, image, category, description, price } = product;
  return (
    <div className="card-container">
      <div className="card ">
        <div className="img-container">
          <img className="card-img" src={image} alt="" />
        </div>
        <h5>{title.slice(0,10)}</h5>
        <hr />
        <h5  className="text-fuchsia-400">{category}</h5>
        <p className="text-xl">{description}</p>
        <hr className="m-3" />
        <div className="card-footer">
          <h6>{price} $</h6>
          <button onClick={() => handleCart(product)} className="add-btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
SingleProduct.propTypes = {
  product: PropTypes.array.isRequired,
  handleCart:PropTypes.func.isRequired,
};
export default SingleProduct;
