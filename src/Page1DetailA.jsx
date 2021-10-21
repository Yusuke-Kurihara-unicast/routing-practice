import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  const history = useHistory();
  const onClickBuck = () => history.goBack();

  return (
    <div>
      <h1>[Page1DetailA]のページです</h1>
      <button onClick={onClickBuck}>戻る</button>
    </div>
  );
};
