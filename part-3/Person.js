const Person = (props) => {
  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {props.name.slice(0, 6)}</li>
        <li>Age: {props.age}</li>
        <li>Hobbies:</li>
        <ul>
          {props.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
        </ul>
      </ul>
      <h3>{props.age >= 18 ? 'Go vote!' : 'Go study!'}</h3>
    </div>
  )
}