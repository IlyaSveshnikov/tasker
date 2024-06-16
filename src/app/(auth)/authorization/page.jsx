"use client";

import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LogInPage = () => {
  const router = useRouter();
  const [incorrectStatus, setIncorrectStatus] = useState("none");

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "1" && formData.password === "1") {
      router.push("/main");
    }
    else {
      setIncorrectStatus("block");
    }
  };

  return ( 
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign in</h1>
        <form action="" className={styles.form}>
          <input 
            type="text" 
            placeholder="Email" 
            name="email"
            onChange={handleInputChange}
          />
          <input 
            type="text" 
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
          />
          <button className={styles.logInButton} onClick={handleSubmit}>Sign in</button>
        </form>
        <p style={{display: incorrectStatus}} className={styles.incorrectData}>* Incorrect email or password</p>
        <p className={styles.reg}>{"Don't have an account? "}<a href="/registration">Register now</a></p>
      </div>
    </main>
   );
}
 
export default LogInPage;