const App = () => {
  return (
    <div>
      <Tweet
        name="John Doe"
        username="user1"
        date={new Date().toDateString()}
        message="The very first message"
      />
      <Tweet
        name="Jane Doe"
        username="Jany"
        date={new Date().toDateString()}
        message="I love to cook!"
      />      
      <Tweet
        name="Jacob Smith"
        username="The Smither"
        date={new Date().toDateString()}
        message="I love cute puppies!"
      />          
    </div>
  )
}