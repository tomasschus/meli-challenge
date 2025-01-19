const express = require("express");
const axios = require("axios");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/api/items", async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    );
    res.json({
      author: {
        name: "Tomás",
        lastname: "Schuster",
      },
      items: response.data.results.map((product) => {
        return {
          id: product.id,
          title: product.title,
          price: {
            currency: product.currency_id,
            amount: product.price,
            decimals: 0,
          },
          picture: product.thumbnail,
          condition: product.condition,
          free_shipping: product.shipping.free_shipping,
          location: product.address.state_name,
        };
      }),
    });
  } catch (error) {
    res.status(500).send("Error al obtener los productos");
  }
});

app.get("/api/items/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const productResponse = await axios.get(
      `https://api.mercadolibre.com/items/${id}`
    );
    const descriptionResponse = await axios.get(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    res.json({
      item: productResponse.data,
      description: descriptionResponse.data.plain_text,
    });
  } catch (error) {
    res.status(500).send("Error al obtener el detalle del producto");
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
