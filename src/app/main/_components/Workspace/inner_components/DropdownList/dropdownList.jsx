"use client";

import styles from './dropdownMenu.module.css'; 
import { useState, useEffect } from 'react';

const DropdownList = ({current, elems, onChangeElem, isScrolling}) => {

  const [currElem, setCurrElem] = useState(current);
  const [showList, setShowList] = useState(false);

  const onClickElem = (el) => {
    setCurrElem(el);
    onChangeElem(el);
    setShowList(false);
  }

  useEffect(() => {
    setShowList(false);
  }, [isScrolling]);


  return ( 
    <div className={styles.list}>
      <div 
        key={currElem}
        className={styles.elem} 
        style={{width: "118px", margin: 0}} 
        onMouseMove={() => setShowList(true)}
        onMouseOut={() => setShowList(false)}
      >
        {currElem}
      </div>
      <div 
        className={styles.dropdown} 
        style={{"max-height": showList ? "246.5px" : "0px"}}
        onMouseMove={() => setShowList(true)}
        onMouseOut={() => setShowList(false)}
      >
        {
          elems.filter(el => el !== currElem).map(el => (
            <div
              key={el}
              className={styles.elem}
              onClick={() => onClickElem(el)}
            >
              {el}
            </div>
          ))
        }
      </div>
    </div>
    
   );
}
 
export default DropdownList;