"use client";

import styles from './workspace.module.css';

import Calendar from './inner_components/Calendar/calendar';
import Editor from './inner_components/Editor/editor';
import Navbar from './inner_components/Navbar/navbar';
import List from './inner_components/List/list';

import React from 'react';
import { useState } from 'react';

function Workspace() {
  const user = {
    userName: "User",
    email: "user@gmail.com",
    toDo: [
      ['Hi', 'Madam', [5, 2, 2024]],
    ],
    done: [
      ['Hi', 'Sir', [3, 2, 2024]],
    ]
  }

  const currDate = new Date();
  const [date, setDate] = useState([currDate.getDate(), currDate.getMonth(), currDate.getFullYear()]);
  const [toDoList, setToDoList] = useState(user.toDo);
  const [doneList, setDoneList] = useState(user.done);
  const [task, setTask] = useState([-1, '', '', "todo"]);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleSave = (ind, title, desc, list) => {
    if (ind === -1) {
      if (list === "todo") setToDoList((prev) => [...prev, [title, desc, date]]);
      else setDoneList((prev) => [...prev, [title, desc, date]]);
    }
    else {
      console.log(list);
      if (list === "todo") setToDoList(prev => prev.map((el, i) => i === ind ? [title, desc, el[2]] : el));
      else setDoneList(prev => prev.map((el, i) => i === ind ? [title, desc, el[2]] : el))
    }
  }

  const containerRef = React.useRef();
  const handleChangeBG = (bg) => {
    containerRef.current.style.backgroundImage = `url(${bg})`;
  }

  let [theme, setTheme] = useState('');
  const handleChangeTheme = () => {
    if (theme === '') {
      setTheme(styles.dark);
    }
    else {
      setTheme('');
    }
  }

  return (
    <div className={styles.container + ' ' + theme} ref={containerRef} onScroll={() => setIsScrolling(!isScrolling)}>
      <Navbar
        userName={user.userName}
        email={user.email}
        onChangeBG={(bg) => handleChangeBG(bg)}
        donesUndones={{undones: user.toDo.length, dones: user.done.length}}
        changeTheme={handleChangeTheme}
      />
      <Calendar onDateChange={(d) => setDate([d.getDate(), d.getMonth(), d.getFullYear()])} isScrolling={isScrolling} />
      <Editor
        task={task}
        saveTask={(ind, title, desc, list) => handleSave(ind, title, desc, list)}
      />

      <div className={styles.lists}>
        <List
          title="TO-DO LIST"
          titleColor="rgb(218, 120, 0)"
          tasksMark="undone"
          data={toDoList.map((el, i) => [el[0], el[1], el[2], i]).filter(el => el[2].toString() === date.toString())}
          onEditTask={ind => setTask([ind, toDoList[ind][0], toDoList[ind][1], "todo"])}
          onDeleteTask={ind => setToDoList(prev => prev.filter((el, i) => i !== ind))}
          onChangeStatus={ind => {
            setDoneList(prev => [...prev, toDoList[ind]]);
            setToDoList(prev => prev.filter((el, i) => i !== ind));
          }}
        />
        <List
          title="DONE LIST"
          titleColor="rgb(35, 131, 0)"
          tasksMark="done"
          data={doneList.map((el, i) => [el[0], el[1], el[2], i]).filter(el => el[2].toString() === date.toString())}
          onEditTask={ind => setTask([ind, doneList[ind][0], doneList[ind][1], "done"])}
          onDeleteTask={ind => setDoneList(prev => prev.filter((el, i) => i !== ind))}
          onChangeStatus={ind => {
            setToDoList(prev => [...prev, doneList[ind]]);
            setDoneList(prev => prev.filter((el, i) => i !== ind));
          }}
        />
      </div>
    </div>
  );
}

export default Workspace;