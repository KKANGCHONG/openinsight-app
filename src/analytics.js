
import { formatDate } from "./utils.js";

console.log("Starting analytics module...");

function analyzeData(data) {
  const result = data.map(item => ({
    ...item,
    timestamp: formatDate(Date.now())
  }));
  console.log("Analysis complete:", result)
} 