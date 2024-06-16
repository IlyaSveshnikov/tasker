"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import styles from './navbar.module.css';

import React from 'react';
import { useState } from 'react';


const Navbar = ({userName, email, onChangeBG, donesUndones, changeTheme}) => {
  const router = useRouter();
  const logOutDialogRef = React.useRef();
  const manageAccountRef = React.useRef();
  const changeBGRef = React.useRef();
  const blackOutRef = React.useRef();

  const statusLogOutDialog = (status) => {
    logOutDialogRef.current.style.display = status;
    blackOutRef.current.style.display = status;
  }

  const statusManageAccountDialog = (status) => {
    manageAccountRef.current.style.display = status;
    blackOutRef.current.style.display = status;
  }

  const statusChangeBGDialog = (status) => {
    changeBGRef.current.style.display = status;
    blackOutRef.current.style.display = status;
  }

  const [choosedBG, setChoosedBG] = useState(1);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.userInfoContainer}>
          <div className={styles.userInfo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
            <div className={styles.userName}>{userName}</div>
          </div>   
          <div className={styles.userMenu}>
            <div className={styles.userMenuOption} onClick={() => statusManageAccountDialog("flex")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-2"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
              Manage account
            </div>
            <div className={styles.userMenuOption} onClick={() => statusLogOutDialog("flex")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
              Log out
            </div>
          </div>
        </div>
         
        <div className={styles.options}>

          <div onClick={() => changeTheme()} title='Сhange theme' className={styles.buttonHolder}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-moon"><path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.3 17.7-1.4 1.4"/><path d="m19.1 4.9-1.4 1.4"/></svg>
          </div>

          <div onClick={() => {statusChangeBGDialog("flex")}} title='Сhange background' className={styles.buttonHolder}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-to-back"><rect x="14" y="14" width="8" height="8" rx="2"/><rect x="2" y="2" width="8" height="8" rx="2"/><path d="M7 14v1a2 2 0 0 0 2 2h1"/><path d="M14 7h1a2 2 0 0 1 2 2v1"/></svg>
          </div>

        </div>
      </div>

      {/* Dialog windows */}
      <div className={styles.blackout} ref={blackOutRef}>
        <dialog className={styles.dialogWindow} ref={logOutDialogRef}>
          <div className={styles.dialogIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
          </div>
          Are you sure that you want to log out?
          <div className={styles.dialogBtns}>
            <button className={styles.dialogBtn} onClick={() => statusLogOutDialog("none")}>Cancel</button>
            <button className={styles.dialogBtn} onClick={() => {statusLogOutDialog("none"); router.push("/")}}>Log out</button>
          </div>
        </dialog>
 
        <dialog className={styles.dialogWindow} ref={manageAccountRef}>
          <div className={styles.dialogIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-2"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
          </div>

          <div>
            <h5 className={styles.inputTitle}>Username</h5>
            <input className={styles.manageAccountInput} type="text" value={userName} />
            <p className={styles.incorrectInput}>* This user already exists</p>
          </div>
          
          <div>
            <h5 className={styles.inputTitle}>Email</h5>
            <input className={styles.manageAccountInput} type="text" value={email} />
            <p className={styles.incorrectInput}>* Submit this email</p>
          </div>

          <div>
            <h5 className={styles.inputTitle}>Change password</h5>
            <div style={{display: "flex", flexDirection: "column", gap: "10px 0"}}>
              <div>
                <input className={styles.manageAccountInput} type="text" placeholder='Old password' />
              <p className={styles.incorrectInput}>* Incorrect password</p>
              </div>
              <div>
                <input className={styles.manageAccountInput} type="text" placeholder='New password' />
              <p className={styles.incorrectInput}>*</p>
              </div>
              <div>
                <input className={styles.manageAccountInput} type="text" placeholder='Repeat new password' />
              <p className={styles.incorrectInput}>* Passwords are not same</p>
              </div>
            </div>
          </div>

          <div className={styles.dialogBtns}>
            <button className={styles.dialogBtn} onClick={() => statusManageAccountDialog("none")}>Cancel</button>
            <button className={styles.dialogBtn}>Save changes</button>
          </div>
        </dialog>

        <dialog className={styles.dialogWindow} ref={changeBGRef}>
          <h3 className={styles.dialogTitle}>Choose a background</h3>
          <div className={styles.bgsList}>
            {
              Array.from({length: 4}, (_, i) => i+1).map(num => (
                <Image key={num} src={`/bgs/bg${num}.jpg`} height={150} width={270} alt="" onClick={() => {onChangeBG(`/bgs/bg${num}.jpg`); setChoosedBG(num);}} className={choosedBG === num ? styles.choosedBG : {}}/>
              ))
            }
          </div>
          <button className={styles.dialogBtn} onClick={() => statusChangeBGDialog("none")} style={{width: "120px", margin: "auto"}}>Done</button>
        </dialog>
      </div>       
    </>
    
  );
}

export default Navbar;