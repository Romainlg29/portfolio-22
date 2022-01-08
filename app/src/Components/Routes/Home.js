import HomeLay from "../Layout/HomeLay";

const Home = ({ isPhone }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <HomeLay isPhone={isPhone}/>
    </div>
  );
};
export default Home;
