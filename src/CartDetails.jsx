import PropTypes from "prop-types";
const CartDetails = ({ item,index,handleCartDelete }) => {
  return (
    <div>
      <div className="cart-info">
        <p>{index + 1}</p>
        <h5>{item?.title?.slice(0, 10)}</h5>
        <h6>{item?.price}</h6>
        <button onClick={() => handleCartDelete(item)} className="del-btn">Delete</button>
      </div>
    </div>
  );
};

CartDetails.propTypes = {
  item: PropTypes.object.isRequired,
  index:PropTypes.number.isRequired,
  handleCartDelete:PropTypes.func.isRequired
};
export default CartDetails;
