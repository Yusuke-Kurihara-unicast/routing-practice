import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();
  const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>[Page1]のページです</h1>
      <Link to={{ pathname: "/Page1/DetailA", state: arr }}>Page1DatailA</Link>
      <br />
      <Link to="/Page1/DetailB">Page1DatailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
