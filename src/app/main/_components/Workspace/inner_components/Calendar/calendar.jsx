"use client";

import styles from "./calendar.module.css";
import DropdownList from "../DropdownList/dropdownList";
import { useState } from "react";

// data
const monthes = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
const years = [2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033];
const daysInMonth = new Map([
  ["January", 31],
  ["February", 28], 
  ["March", 31],
  ["April", 30],
  ["May", 31],
  ["June", 30],
  ["July", 31],
  ["August", 31],
  ["September", 30],
  ["October", 31],
  ["November", 30],
  ["December", 31]
]);

const groupDaysByWeeks = (month, year) => {

  const daysCounter = (month, year) => {
    return (month === "February" && year % 4 === 0 ) ? 29 : daysInMonth.get(month);
  }

  const monthNumber = monthes.indexOf(month);
  const monthDays = daysCounter(month, year);

  const prevMonthNumber = monthNumber !== 0 ? (monthNumber - 1) : 11;
  const prevMonthDays = daysCounter(monthes[prevMonthNumber], year);

  const firstDay = [7, 1, 2, 3, 4, 5, 6][new Date(year, monthNumber, 1).getDay()];

  const daysArr = [];
  let i;

  for (i = firstDay - 2; i >= 0; i--) {
    daysArr.push(-(prevMonthDays - i)); // negative cause not this month days 
  }

  for (i = 1; i <= monthDays; i++) {
    daysArr.push(i);
  }

  const restDays = 42 - daysArr.length;

  for (i = 1; i <= restDays; i++) {
    daysArr.push(-i); // negative cause not this month days 
  }

  // prepare days for displaying
  const daysGroupedByWeeks = [];
  for (let i = 0; i < 6; i++) {
    let week = [];
    for (let j = 0; j < 7; j++) {
      week.push(daysArr[7*i+j])
    }
    daysGroupedByWeeks.push(week);
  }

  return daysGroupedByWeeks;
}

const Calendar = ({onDateChange, isScrolling}) => {

  const currentDate = new Date();

  const [month, setMonth] = useState(monthes[currentDate.getMonth()]);
  const [year, setYear] = useState(currentDate.getFullYear());
  const [days, setDays] = useState(groupDaysByWeeks(month, year));
  const [choosedDay, setChoosedDay] = useState(currentDate.getDate());

  const handleMonthChange = (month) => {
    setMonth(month);
    setDays(groupDaysByWeeks(month, year));
    onDateChange(new Date(year, monthes.indexOf(month), choosedDay));
  }

  const handleYearChange = (year) => {
    setYear(year);
    setDays(groupDaysByWeeks(month, year));
    onDateChange(new Date(year, monthes.indexOf(month), choosedDay));
  }

  const handleDayChange = (day) => {
    setChoosedDay(day);
    onDateChange(new Date(year, monthes.indexOf(month), day));
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.monthYear}>
        <DropdownList current={month} elems={monthes} onChangeElem={(month) => handleMonthChange(month)} isScrolling={isScrolling} />
        <DropdownList current={year} elems={years} onChangeElem={(year) => handleYearChange(year)} isScrolling={isScrolling} />
      </div>
      <div className={styles.days}>
        <table>
          <tbody>
            <tr>
              {
                ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
                  <th key={day}>{day}</th>
                ))
              }
            </tr>
            {
              days.map((week, i1) => (
                <tr key={i1}>
                  {week.map(day => {
                    if (day > 0 && choosedDay !== day) return <td key={day} className={styles.cell} onClick={() => handleDayChange(day)}>{day}</td>;
                    if (choosedDay === day) return <td key={day} className={styles.choosedDay}>{day}</td>
                    return <td key={day} className={styles.cell + ' ' + styles.notThisMonth} >{-day}</td>
                  })}
                </tr>
              ))
            } 
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar;