import Button from './Button';

function Card(props) {
  const { src, name, description, status, color } = props;
  return (
    <div className="card">
      <img src={src} alt="avatar" />
      <h4>{name}</h4>
      <p>{description}</p>
      <Button status={status} color={color} />
    </div>
  );
}

export default Card;
