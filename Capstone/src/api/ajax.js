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


/*

export async function getProducts(userobject) {
  try {
    const resp = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userobject),
    });

    const json = await resp.json();
    console.log(json.token);
    return json.token;

  } catch (err) {
    console.error(err);
  }
}


export async function userLogin(userobject) {
  try {
    const resp = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userobject),
    });

    const json = await resp.json();
    return json.token;
  } catch (err) {
    console.error(err);
  }
}

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

export const fetchSingleBook = async (bookId) => {
  try {
    const rsp = await fetch(`${API_URL}/books/${bookId}`);
    const json = await rsp.json();
    return json.book;
  } catch (err) {}
};

*/