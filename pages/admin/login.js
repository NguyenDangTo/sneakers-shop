import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/Login.module.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username: username,
        password: password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Admin Dashboard</h1>
        <label className={styles.label}>Username</label>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className={styles.label}>Password</label>
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={handleSubmit}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!!!</span>}
      </div>
    </div>
  );
};

export default Login;
