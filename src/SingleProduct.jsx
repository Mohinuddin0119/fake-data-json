import PropTypes from "prop-types";
const SingleProduct = ({ product }) => {
  const { title, image, category, description, price } = product;
  return (
    <div className="card-container">
      <div className="card">
        <div className="img-container">
          <img className="card-img" src={image} alt="" />
        </div>
        <h5>{title}</h5>
        <hr />
        <h5>{category}</h5>
        <p>{description}</p>
        <div className="card-footer">
          <h6>{price} $</h6>
          <button className="add-btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
SingleProduct.propTypes = {
  product: PropTypes.array.isRequired,
};
export default SingleProduct;
