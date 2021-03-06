const ShoppingList = (props, i) => {
  return (
    <>
      <div className="col-md-4">
        <img
          src={
            'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
          }
          width="100%"
        ></img>
        <h4>{props.shoes.title}</h4>
        <p>
          {props.shoes.content} & {props.shoes.price}
        </p>
      </div>
    </>
  );
};
export default ShoppingList;
