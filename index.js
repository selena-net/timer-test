let last = process.hrtime.bigint();
// 191051479007711n

setInterval(() => {
  const now = process.hrtime.bigint();
  // 191052633396993n

  console.log(`Benchmark took ${(now - last)/(BigInt)(Math.pow(10,3))} microseconds`);
  // Benchmark took 1154389282 nanoseconds
  last = now;
}, 10);