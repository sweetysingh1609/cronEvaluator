I’ve built this project using Angular. The idea was to create a tool that helps developers understand cron expressions in a visual way, and also allows them to generate common recurrence patterns using a simple form.

There are two main parts in the tool:

1. Cron Expression Evaluator
In this part, the user can type a full cron expression (with six parts — seconds, minutes, hours, day of month, month, and day of week).
As the user types or changes the input, the code splits the expression and displays each part below it.
For example, if the user enters "0 15 10 * * ?", the app will show:

Seconds: 0 (active)

Minutes: 15 (active)

Hours: 10 (active)

Day: * (inactive)

Month: * (inactive)

Day of week: ? (active)

Any part with a specific value is marked as active. If the value is a star or the input is incorrect, it’s shown as inactive. Also, if the user types an invalid expression (for example, missing parts), an error message is displayed.

2. Recurrence Pattern Generator
This part allows the user to generate a schedule by choosing options instead of writing a cron expression manually.
The user can pick from Daily, Weekly, or Monthly patterns.

For Daily: They just pick a time.

For Weekly: They pick a time and can select multiple weekdays using checkboxes.

For Monthly: They pick a time and also choose the day of the month (1 to 31).

Based on what the user selects, the tool shows a simple sentence that explains the schedule.
For example, if someone selects all weekdays and sets the time to 12:00, the message will be:
"Runs every week on Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday at 12:00."

This part also handles grammar properly. If only one or two days are selected, it adjusts the sentence accordingly (like “Monday and Tuesday” instead of listing all with commas).

About the UI:
The layout is centered, clean, and easy to read. The weekday checkboxes appear in a single row (not stacked vertically), and the sections appear or hide based on the pattern selected. The colors and spacing are also kept simple and consistent for a better user experience.
