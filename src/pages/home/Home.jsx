import useLST from "../../hooks/useLST";
import "./style.scss";
const Home = () => {
  const [user] = useLST("user", null);
  console.log(user.email);
  return (
    <div className="home_container">
      <h1>Welcome to your Dashboard</h1>
      <h2>{user.email}</h2>
    </div>
  );
};

export default Home;
