import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    if (user === "eren" && pass === "12345") navigate("/home");
    else alert("Kullanıcı Adı veya Şifre Hatalı!");
  };

  return (
    <div>
      <br />
      <br />
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <label>
          Kullanıcı Adı:
          <input
            style={{ marginLeft: "20px" }}
            type="text"
            value={user}
            autoFocus
            required
            placeholder="user@gmail.com"
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Şifre:
          <input
            style={{ marginLeft: "20px" }}
            type="password"
            value={pass}
            required
            placeholder="Şifrenizi Giriniz."
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <br />
        <input type='submit'/>
      </form>
    </div>
  );
};

export default Login;
