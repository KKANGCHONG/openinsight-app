// src/analytics.js
import { formatDate } from "./utils.js";

console.log("Starting analytics module...");

// ❌ 일부러 문법 에러 (괄호 닫기 빠짐)
function analyzeData(data) {
  const result = data.map(item => ({
    ...item,
    timestamp: formatDate(Date.now())
  }));
  console.log("Analysis complete:", result);
