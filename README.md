🧩 Solution Overview — Cron Expression & Recurrence Pattern Visualizer
This tool is built using Angular and is divided into two main sections:

Cron Expression Evaluator

Recurrence Pattern Generator

The goal was to help developers visually understand and break down cron expressions, and also let them generate common recurrence patterns (daily, weekly, monthly) through a form-based UI.

🔹 Part 1: Cron Expression Evaluator
In the first section, I’ve implemented a clean UI with a single input field where the user can enter a full 6-part cron expression (including seconds, minutes, hours, day of month, month, and day of week).

As the user types or edits the expression, the input is dynamically parsed and each field is displayed below along with its value.
If a field has a specific value (e.g., "15" for minutes), it is marked as "active" in green. If it's using a wildcard (*) or left invalid, it's marked as "inactive".

There is also proper validation to check if the expression contains exactly six parts — otherwise, it shows a clear error message.

🔹 Part 2: Recurrence Pattern Generator
This section allows users to generate cron-like schedules using a simple form instead of writing cron strings manually.

Users can choose between three recurrence patterns:

Daily: Just pick a time (e.g., 12:00)

Weekly: Pick a time and select one or more weekdays using checkboxes (Monday to Sunday)

Monthly: Pick a time and choose a specific day of the month (1–31)

As users update their selections, a description is automatically generated in plain English. For example:

"Runs every week on Monday, Wednesday and Friday at 14:00."

The description logic handles all combinations cleanly and formats the sentence grammatically — with commas and a single "and" before the last item.

🎨 UI/UX
The UI closely follows the reference screenshots provided:

Clean, centered layout with proper spacing

Days of the week are displayed horizontally, not vertically

Dynamic sections appear only when relevant (e.g., weekly options only show when "Weekly" is selected)

Styling is subtle, using light background panels, padding, and font emphasis for better readability

✅ In Summary
This solution focuses on clarity, correctness, and ease of use for developers who often deal with cron expressions. Whether they prefer typing an expression or choosing from a form, the tool reflects their input in real-time — both structurally and in human-readable form.
