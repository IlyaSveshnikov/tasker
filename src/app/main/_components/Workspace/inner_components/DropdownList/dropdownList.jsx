"use client";

import styles from './dropdownMenu.module.css'; 
import { useState } from 'react';

const DropdownList = ({current, elems, onChangeElem}) => {

  const [currElem, setCurrElem] = useState(current);
  const [showList, setShowList] = useState(false);

  const onClickElem = (el) => {
    setCurrElem(el);
    onChangeElem(el);
  }

  return ( 
    <div className={styles.list}>
      <div 
        className={styles.elem} 
        style={{width: "118px", margin: 0}} 
        onMouseMove={() => setShowList(true)} 
        onMouseLeave={() => setShowList(false)}
      >
        {currElem}
      </div>
      <div 
        className={styles.dropdown} 
        style={{"max-height": showList ? "246.5px" : "0px"}}
        onMouseMove={() => setShowList(true)} 
        onMouseLeave={() => setShowList(false)}
      >
        {
          elems.filter(el => el !== currElem).map(el => (
            <div className={styles.elem} onClick={() => onClickElem(el)}>{el}</div>
          ))
        }
      </div>
    </div>
    
   );
}
 
export default DropdownList;