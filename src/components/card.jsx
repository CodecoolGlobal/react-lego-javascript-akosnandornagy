export default function Card({ user, icon, followers, setFollowers, index } ) {

  function handleDecrease() {
    setFollowers(followers => {
      const newFollowers = [...followers];
      newFollowers[index] = newFollowers[index] - 1;
      return newFollowers;
    });
  }

  function handleIncrease() {
    setFollowers(followers => {
      const newFollowers = [...followers];
      newFollowers[index] = newFollowers[index] + 1;
      return newFollowers;
    });
  }

  let positive = true;
  if(user.difference < 0) {
      positive = false;
  }

  return (
      <section className="platform">
      <div className="icon">
        <img src={icon} alt=""></img>
        <p>{user.name}</p>
      </div>
      <div className="followers">
        <button className="update-followers-button" onClick={handleDecrease}>-</button>
        {followers[index] <= 9999 && followers[index]}
        {followers[index] > 9999 && followers[index].toString().slice(0, -3) + "k"}
        <button className="update-followers-button" onClick={handleIncrease}>+</button>
      </div>
      <div className={`subscribers${positive ? "-green" : "-red"}`}>F O L O W E R S</div>
      <div>
      {positive && <span className="trend-ascend">▲</span>}
      {!positive && <span className="trend-descend">▼</span>}
        {user.difference >= 0 && user.difference}
        {user.difference < 0 && -1 * user.difference}
      </div>
    </section>
  );
}