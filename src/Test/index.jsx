function Test() {
  const data = {
    path: "/products/thieu-nhi/manga-comic",
    amount: 29,
    author: "Tatsuya Endo",
    category1: {
      accents: "Thiếu nhi",
      noAccents: "thieu-nhi",
    },
    category2: {
      accents: "Manga-comic",
      noAccents: "manga-comic",
    },
    img: [
      "https://cdn0.fahasa.com/media/catalog/product/s/p/spy-x-family-tap-5---ban-thuong.jpg",
    ],
    importDate: "2022-12-15T20:38:14.087Z",
    name: "spy x family tập 5",
    price: 20000,
    publishingCompany: "Kim Đồng",
    salePercentage: 10,
    sold: 12,
  };
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  return (
    <div>
      <button
        onClick={() => {
          postData(
            "https://react-bookstore-3f517-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
            data
          );
        }}
      >
        click
      </button>
    </div>
  );
}

export default Test;
