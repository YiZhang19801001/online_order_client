import { api, history } from "../../../_helpers";

const userLogin = async requestBody => {
  const response = await api.post("/login", requestBody);

  if (response.data.success) {
    localStorage.setItem(
      "staff_order_user",
      JSON.stringify(response.data.data)
    );
    history.push(`${process.env.PUBLIC_URL}/products`);
  } else {
    alert("email or password incorrect");
  }
};

const userChecking = async () => {
  const user = JSON.parse(localStorage.getItem("staff_order_user"));

  if (!user) {
    history.push(`${process.env.PUBLIC_URL}/login`);
  }

  history.push(`${process.env.PUBLIC_URL}/products`);
};

export { userLogin, userChecking };
