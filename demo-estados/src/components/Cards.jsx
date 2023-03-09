import Card from "./Card";

const Cards = (props) => {
  return (
    <>
      {props.users.map((user) => {
        return <Card name={user.name} email={user.email} />;
      })}
    </>
  );
};

export default Cards;
