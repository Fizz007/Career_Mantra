import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  const datePickerStyle = {
    marginLeft: '16px', // Adjust the left margin as needed
    marginTop: '-4px',
    width:'450px'
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <div style={datePickerStyle}>
          <DatePicker label="Basic date picker" />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
