"use client";
import styles from './list.module.css';

const List = ({title, titleColor, tasksMark, data, onEditTask, onDeleteTask, onChangeStatus}) => {

  const undoneIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>);

  const doneIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-square"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>);

  const markTaskIcon = tasksMark === "undone" ? undoneIcon : doneIcon;

  return ( 
    <div 
      className={styles.container} 
    >
      <h1 className={styles.listTitle} style={{color: titleColor}}>{`— ${title} —`}</h1>
      <div className={styles.list}>
        {data.map((el, i) => (
          <div className={styles.task} key={i}>
            <div className={styles.taskMethods}>
              <div 
                onClick={() => onChangeStatus(el[3])}
              >
                {markTaskIcon}
              </div>
              <div onClick={() => onEditTask(el[3])}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
              </div>
              <div onClick={() => onDeleteTask(el[3])} >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </div>
            </div>
            <h2 className={styles.taskTitle}>{el[0]}</h2>
            <p className={styles.taskDescription}>{el[1]}</p>
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default List;