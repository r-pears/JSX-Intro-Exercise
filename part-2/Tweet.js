const Tweet = (props) => {
  return (
    <div className="tweet">
      <h4>{props.name}</h4>
      <p>@{props.username}</p>
      <p>{props.date}</p>
      <p>{props.message}</p>
    </div>
  )
}