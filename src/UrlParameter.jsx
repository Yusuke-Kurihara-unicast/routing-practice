import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search); //JS標準の関数

  return (
    <div>
      <h1>UrlParameterのページ</h1>
      <p>パラメータは{id}</p>
      <p>クエリストリングから取得したnameパラメータは... {query.get("name")}</p>
    </div>
  );
};
