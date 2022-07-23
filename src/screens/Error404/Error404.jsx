import Header from "commons/Header";
import ErrorImg from "assets/404.png";
import "./Error404.scss";

export const Error404 = () => {
  return (
    <div className="Error404">
      <Header />
      <img src={ErrorImg} alt="error" />
      <div>
        <a href="/" className="App-">
          Go to home
        </a>
      </div>
    </div>
  );
};
