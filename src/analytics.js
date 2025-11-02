// analytics.js
// ❌ 빌드 실패 유도: 괄호 하나 빠진 문법 오류
import { formatDate } from "./utils.js";

console.log("Starting analytics module...");

function analyzeData(data) {
  const result = data.map(item => ({
    ...item,
    timestamp: formatDate(Date.now())
  }));
  console.log("Analysis complete:", result)
} // 👈 일부러 세미콜론/괄호 누락

// 의도적으로 export 안 함 → eslint나 type check 시 에러도 가능
