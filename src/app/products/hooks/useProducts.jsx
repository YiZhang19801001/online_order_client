import { useEffect } from "react";
import { useDispatch } from "redux-react-hook";
import { api } from "../../../_helpers";
const useProducts = async () => {
  console.log("useProducts called");

  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      const response = await api.get("/products", {
        params: {
          language_id: 1
        }
      });

      dispatch({ type: "getProducts", products: response.data.productsList });
    };
    console.log("useProducts useEffect called");

    fn();
  }, []);
};

export { useProducts };
