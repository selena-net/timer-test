const microtime = require('microtime');

let last = microtime.now();
// 191051479007711n

setInterval(() => {
  const now = microtime.now();
  // 191052633396993n

  console.log(`Benchmark took ${(now - last)/(Math.pow(10,3))} microseconds`);
  // Benchmark took 1154389282 nanoseconds
  last = now;
}, 1);

