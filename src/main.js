// main.js
import { formatDate } from "./utils.js";
import { APP_NAME, VERSION } from "./config.js";

console.log(`🚀 Starting ${APP_NAME} v${VERSION}`);

const dataset = [
  { id: 1, value: 42 },
  { id: 2, value: 73 },
];

function analyzeData(data) {
  return data.map(item => ({
    ...item,
    analyzedAt: formatDate(Date.now()),
  }));
}

const result = analyzeData(dataset);
console.log("✅ Analysis complete:", result);
console.log("🎉 Build succeeded at", new Date().toLocaleTimeString());
