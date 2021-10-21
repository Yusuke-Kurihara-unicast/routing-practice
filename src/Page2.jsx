import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>[Page2]のページです</h1>
      <Link to="/page2/10">URLParameter</Link>
      <br />
      <Link to="/page2/10?name=hoge">Query Parameter</Link>
      <br />
    </div>
  );
};
