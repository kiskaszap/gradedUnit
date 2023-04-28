import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState,EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
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
   const handleCurrentDateChange = (date) => {
     setCurrentDate(date);
    };
    const schedulerData = [
      {
        startDate: '2023-05-15T09:45',
        endDate: '2023-05-15T11:00',
        title: 'Meeting',
      }
      
    ];
    const [data, setData] = useState(schedulerData);
  
  

  const commitChanges = ({ added, changed, deleted }) => {
    let updatedData = [...data];
    
    if (added) {
      const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      updatedData = [...data, { id: startingAddedId, ...added }];
    }
    if (changed) {
      updatedData = data.map((appointment) =>
        changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
      );
    }
    if (deleted !== undefined) {
      updatedData = data.filter((appointment) => appointment.id !== deleted);
    }
    setData(updatedData);
  };

  return (
    <Paper>
      <Scheduler
      data={schedulerData}
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
        {/* <MonthView /> */}
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
