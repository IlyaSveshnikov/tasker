"use client";

import styles from './editor.module.css';

import { useState, useEffect } from 'react';

import React from 'react';

const Editor = ({saveTask, task}) => {
  // true - is editing, false - not editing
  const [editorMode, setEditorMode] = useState(false);

  const titleRef = React.useRef();
  const descriptionRef = React.useRef();

  useEffect(() => {
    setEditorMode(task[0] === -1 ? false : true);
    titleRef.current.value = task[1];
    descriptionRef.current.value = task[2];
  }, [task]);

  const closeEditorMode = () => {
    setEditorMode(false);
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    task = [-1, '', '', "todo"];
  }

  const onSave = () => {
    saveTask(task[0], titleRef.current.value, descriptionRef.current.value, task[3]);
    closeEditorMode();
  }

  const onAdd = () => {
    setEditorMode(true);
  }

  return ( 
    <div className={styles.editor}>
      <div className={styles.newTask} style={{display: editorMode ? "none" : "flex" }} onClick={() => onAdd()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg> 
        <div>Add new task</div>
      </div>
      <div className={styles.editTask} style={{display: editorMode ? "flex" : "none" }}>
        <div className={styles.titileAndClose}>
          <textarea className={styles.taskTitle} placeholder='Title' ref={titleRef}>{task[1]}</textarea>
          <div onClick={() => onSave()} className={styles.buttonHolder}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
          </div>
          <div onClick={() => closeEditorMode()} className={styles.buttonHolder}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-circle"><circle cx="12" cy="12" r="10"/><path d="M16 12H8"/><path d="m12 8-4 4 4 4"/></svg>
          </div>
        </div>
        <textarea name="" id="" className={styles.taskDescription} placeholder='Description' ref={descriptionRef}>{task[2]}</textarea>
      </div>
    </div>
   );
}
 
export default Editor;