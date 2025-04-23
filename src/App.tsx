import { useEffect, useState } from "react";
import "./App.css";
import { URL } from "./constants/prodURL";

function App() {
  type ProdType = {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
  };
  const [prod, setProd] = useState<ProdType[] | null>(null);

  async function fetchProdId(id: number) {
    try {
      const response = await fetch(`${URL}/?id=${id}`);

      const data = await response.json();
      setProd(data);
      console.log(prod);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProdId(1);
  }, []);

  return (
    <>
      <div>{prod && prod[0].title}</div>
      <button onClick={() => fetchProdId(2)}>BUTTON</button>
    </>
  );
}

export default App;
