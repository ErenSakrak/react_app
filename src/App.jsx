import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const api = axios.create({
  baseURL: `http://localhost:3200/dersler`,
});
function App() {
  const [dersler, setDersler] = useState([]);

  useEffect(() => {
    dersleriAl();
  }, []);

  const dersleriAl = async () => {
    try {
      let veri = await api.get("/").then(({ data }) => data);
      setDersler(veri);
      console.log(veri);
    } catch (err) {
      console.log(err);
    }
  };

  const postDersler = async () => {
    await api.post("/", { id: 4, adi: "Flutter", hoca: "MD4" });
    dersleriAl();
  };

  const dersGuncelle = async (id, val) => {
    await api.patch(`/${id}`, { adi: val });
    dersleriAl();
  };

  const dersSil = async (id) => {
    await api.delete(`/${id}`);
    dersleriAl();
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>App Sayfası</h2>
        <br />
        <button onClick={postDersler}>Yeni Ders Ekle</button>
        {dersler.map((ders) => {
          return (
            <>
              <h3
                key={ders.id}
                onClick={() => dersGuncelle(ders.id, `${ders.adi}a`)}
              >
                {ders.adi}
                <button onClick={() => dersSil(ders.id)}>X</button>
              </h3>
            </>
          );
        })}
      </header>
    </div>
  );
}

export default App;
