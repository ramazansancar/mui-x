import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export interface YearCalendarClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type YearCalendarClassKey = keyof YearCalendarClasses;

export function getYearCalendarUtilityClass(slot: string) {
  return generateUtilityClass('MuiYearCalendar', slot);
}

export const yearCalendarClasses = generateUtilityClasses('MuiYearCalendar', ['root']);
