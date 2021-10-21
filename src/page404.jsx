import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>[404] NOT Found</h1>
      <Link to={{ pathname: "/" }}> 戻る </Link>
    </div>
  );
};
