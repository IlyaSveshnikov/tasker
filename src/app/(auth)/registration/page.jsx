"use client";

import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignUpPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return ( 
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign up</h1>
        <form action="" className={styles.form}>
          <input 
            type="text" 
            placeholder="User name" 
            name="userName"
            onChange={handleInputChange}
          />
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
          <input 
            type="text" 
            placeholder="Repeat password" 
            name="repeatPassword"
            onChange={handleInputChange}
          />
          <button className={styles.logInButton}>Sign up</button>
        </form>
        <p className={styles.reg}>{"Already have an account? "}<a href="/authorization">Sign in</a></p>
      </div>
    </main>
   );
}
 
export default SignUpPage;