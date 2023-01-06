export default function Header({ followers } ) {
    return (
        <div className="header">
        Social Media Dashboard
        <div className="sub-header">Total followers: {followers.reduce((total, follower) => total + follower, 0)}</div>
      </div>
    );
  }
  