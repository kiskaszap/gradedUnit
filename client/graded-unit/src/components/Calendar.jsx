import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState,EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import axios from 'axios';
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  MonthView,
  ViewSwitcher,
  Toolbar,
  DateNavigator,
  TodayButton,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/calendarFetch')
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  const handleCurrentDateChange = (date) => {
    setCurrentDate(date);
  };

  const commitChanges = ({ added, changed, deleted }) => {
    let updatedData = [...data];

    if (added) {
      const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      updatedData = [...data, { id: startingAddedId, ...added }];
      axios.post('http://localhost:5000/calendar', {updatedData})
        .then( response => {
          console.log(response.data.status);
        })
        .catch(error => {
          console.log(error);
        });
    }
    if (changed) {
      updatedData = data.map((appointment) =>
        changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
      );
      axios.post('http://localhost:5000/calendar', {updatedData})
        .then( response => {
          console.log(response.data.status);
        })
        .catch(error => {
          console.log(error);
        });
    }
    if (deleted !== undefined) {
      updatedData = data.filter((appointment) => appointment.id !== deleted);
      axios.delete(`http://localhost:5000/calendarDelete/${deleted}`)
        .then( response => {
          console.log(response.data.status);
        })
        .catch(error => {
          console.log(error);
        });
    }
    setData(updatedData);
  };

  return (
    <Paper>
      <Scheduler
        data={data}
      >
        <ViewState
          currentDate={currentDate}
          defaultCurrentDate={currentDate}
          defaultCurrentViewName='Week'
          onCurrentDateChange={handleCurrentDateChange}
        />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />
        <DayView
          startDayHour={10}
          endDayHour={20}
        />
        <WeekView
          startDayHour={10}
          endDayHour={20}
        />
        <MonthView
          startDayHour={10}
          endDayHour={20}
        />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <ViewSwitcher />
        <ConfirmationDialog />
        <Appointments />
        <AppointmentTooltip showOpenButton showDeleteButton />
        <AppointmentForm />
      </Scheduler>
    </Paper>
  );
};

export default Calendar;
