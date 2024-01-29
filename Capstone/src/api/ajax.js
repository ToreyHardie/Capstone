const API_URL = 'https://fakestoreapi.com';

export async function fetchProducts() {
  try {
    const resp = await fetch(`${API_URL}/products`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await resp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
}


export const fetchsingleProduct = async (productId) => {
    try {
      const rsp = await fetch(`${API_URL}/products/${productId}`);
      const json = await rsp.json();
      return json;
    } catch (err) {}
  };


  export async function userLogin(username, password) {
    try {
      const resp = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      });
      const json = await resp.json();
      return json;
    } catch (err) {
      console.error(err);
    }
  }






/*
export async function getUser(token) {
  try {
    const resp = await fetch(`${API_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await resp.json();
    console.log(json);
    return json;
  } catch (err) {
    console.error(err);
  }
}


export async function checkoutBook(id, token) {
  try {
    const rsp = await fetch(`${API_URL}/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
}

*/