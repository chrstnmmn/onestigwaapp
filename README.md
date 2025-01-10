# Welcome to Yet Another Personal Project! :blush:

This project was born out of frustration. I started working on it during my Christmas break, right after my first semester had ended. By that time, all my grades should have been finalized, and my GWA should have been available. However, when I checked my digital card—which is a web app provided by my school—my GWA was still missing. That’s when the idea struck me to create my own GWA calculator, tailored to match my school’s grading system.

I truly appreciate you stopping by to check this out! :flushed::flushed:

For now, I plan to enhance this website based on feedback from my peers as I share it with them. Additionally, I’m considering documenting this journey on YouTube, so stay tuned!

---
# Weighted Average Grade Calculation

This formula calculates a **weighted average grade** based on the percentage weights assigned to different grading periods in a course.

## Breakdown:
### Weights
- **Prelim, Midterm, and Prefinal** each account for **20%** of the final grade.
- **Final** accounts for **40%** of the final grade.

### Weight Constants
```
Percent.microPercent = 0.20 (20%)
Percent.macroPercent = 0.40 (40%)
```

## Individual Weighted Contributions
Each grade is multiplied by its respective weight:
```
Prelim   → prelim * 0.20
Midterm  → midterm * 0.20
Prefinal → prefinal * 0.20
Final    → final * 0.40
```

## Cumulative Grade
Adds up the weighted contributions to compute the **total average grade** for the course.

## General Formula:
```
Grade = (P ⋅ 0.20) + (M ⋅ 0.20) + (PF ⋅ 0.20) + (F ⋅ 0.40)
```

### Where:
- **P**  = Prelim grade
- **M**  = Midterm grade
- **PF** = Prefinal grade
- **F**  = Final grade

## Purpose:
This approach ensures that periods closer to the end of the course (**finals**) have a higher impact on the total grade, reflecting cumulative learning and performance trends.


---
# Grading Formula

## 1. Excellent (1.0–1.25)
```
Remarks =
  1.0  if 97.5 ≤ G ≤ 100
  1.25 if 94.5 ≤ G < 97.5
  1.5  if 91.5 ≤ G < 94.5
  1.75 if 88.5 ≤ G < 91.5
```

## 2. Satisfactory (2.0–2.5)
```
Remarks =
  2.0  if 85.5 ≤ G < 88.5
  2.25 if 81.5 ≤ G < 85.5
  2.5  if 77.5 ≤ G < 81.5
```

## 3. Fair (2.75–3.0)
```
Remarks =
  2.75 if 73.5 ≤ G < 77.5
  3.0  if 69.49 ≤ G < 73.5
```

## 4. Failed (5.0)
```
Remarks = 5.0 if G < 69.49
```

---
# Formula for Calculating General Weighted Average (GWA)

## Total Units:
```
Total Units = ∑(Ui) for i = 1 to n
```
Where:
- **U<sub>i</sub>** = Units value of the *i<sup>th</sup>* course
- **n** = Total number of courses

## Total Credits:
```
Total Credits = ∑(Ui × Ri) for i = 1 to n
```
Where:
- **R<sub>i</sub>** = Remarks (grade point equivalent) of the *i<sup>th</sup>* course

## General Weighted Average (GWA):
```
GWA = Total Credits / Total Units
```

## Purpose:
This formula calculates the **General Weighted Average (GWA)** by dividing the **total weighted credits** by the **total units**. It measures a student's overall academic performance, weighted by the number of units for each course.


---
### Follow My Social Links:
>**[Facebook](https://www.facebook.com/Chrstnmmnl):grin:**
>**[Instagram](https://www.instagram.com/chrstnmmnl/):heart_eyes:**
>**[Dribble](https://dribbble.com/chrstnmmnl):open_mouth:**
>**[Linkedin](https://www.linkedin.com/in/chrstnmmnl/?originalSubdomain=php):kissing:**
>**[Youtube](https://www.youtube.com/@chrstnmmnl):sweat_drops:**
