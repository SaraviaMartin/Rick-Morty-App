const Card = (props) => {
  return (
    <>
      <hr />
      <h3>{props.name}</h3>
      <h3>{props.email}</h3>
      <hr />
    </>
  );
};

export default Card;
