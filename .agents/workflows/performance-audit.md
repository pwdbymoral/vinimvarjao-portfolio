---
description: Audits the application for performance bottlenecks and Core Web Vitals (LCP, INP, CLS).
---

1. Run `lighthouse-audit` in mobile and desktop modes to get baseline scores.
2. // turbo
   Execute `performance_start_trace` during a typical user journey (e.g., landing and scrolling to projects).
3. Analyze the trace data to identify long tasks, render-blocking resources, or layout shifts.
4. Suggest specific optimizations (image compression, code splitting, font loading) to reach a 90+ performance score.
