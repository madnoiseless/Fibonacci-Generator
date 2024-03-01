function fibonacciGenerator(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var A1 = [0, 1];
    for (var i = 2; i < n; i++) {
      A1.push(A1[i - 2] + A1[i - 1]);
    }
    return A1;
  }
}
