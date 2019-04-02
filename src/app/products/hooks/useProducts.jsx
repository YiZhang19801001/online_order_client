import { useEffect, useState } from "react";
import { api } from "../../../_helpers";
const useProducts = () => {
  const [productsList, setProdutsList] = useState([]);

  useEffect(() => {
    callApi(setProdutsList);
  }, []);

  return productsList;
};

const callApi = async setProdutsList => {
  const response = await api.get("/products", {
    params: {
      language_id: 1
    }
  });

  setProdutsList(response.data.productsList);
};
export { useProducts };
