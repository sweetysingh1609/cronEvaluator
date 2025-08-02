import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cronExpression = '';
  fields = ['*', '*', '*', '*', '*', '*'];
  fieldNames = ['Seconds', 'Minutes', 'Hours', 'Days', 'Month', 'Day of Week'];
  error = '';

  recurrencePattern = 'Daily';
  time = '12:00';
  selectedDays: string[] = [];
  selectedDate = '1';
  description = '';

  onCronChange(value: string) {
    this.cronExpression = value;
    const parts = value.trim().split(/\s+/);
    if (parts.length === 6) {
      this.error = '';
      this.fields = parts.map(p => p || '*');
    } else {
      this.fields = ['*', '*', '*', '*', '*', '*'];
      this.error = 'Invalid cron expression. Please enter exactly 6 parts.';
    }
  }

  isActive(value: string): boolean {
    return value !== '*';
  }

  onPatternChange() {
    this.generateDescription();
  }

  onTimeChange() {
    this.generateDescription();
  }

  onDayToggle(day: string) {
    if (this.selectedDays.includes(day)) {
      this.selectedDays = this.selectedDays.filter(d => d !== day);
    } else {
      this.selectedDays.push(day);
    }
    this.generateDescription();
  }

  onDateChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  this.selectedDate = value;
  this.generateDescription();
}

  generateDescription() {
  if (this.recurrencePattern === 'Daily') {
    this.description = `Runs every day at ${this.time}.`;
  }

  else if (this.recurrencePattern === 'Weekly') {
    const days = this.selectedDays;

    if (days.length === 0) {
      this.description = `Runs every week with no days selected.`;
    } 
    else if (days.length === 1) {
      this.description = `Runs every week on ${days[0]} at ${this.time}.`;
    } 
    else if (days.length === 2) {
      this.description = `Runs every week on ${days[0]} and ${days[1]} at ${this.time}.`;
    } 
    else {
      const lastDay = days[days.length - 1];
      const initialDays = days.slice(0, -1);
      const dayList = `${initialDays.join(', ')} and ${lastDay}`;
      this.description = `Runs every week on ${dayList} at ${this.time}.`;
    }
  }

  else if (this.recurrencePattern === 'Monthly') {
    this.description = `Runs every month on the ${this.selectedDate}th day at ${this.time}.`;
  }
}

}
