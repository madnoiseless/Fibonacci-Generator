function fibonacciGenerator(n) {
  const ul = document.getElementById("output");
  ul.innerHTML = "";
  n = document.getElementById("n-input").value;
  if (n === 1) {
    A1 = [0];
  } else if (n === 2) {
    A1 = [0, 1];
  } else {
    var A1 = [0, 1];
    for (var i = 2; i < n; i++) {
      A1.push(A1[i - 2] + A1[i - 1]);
    }
  }
  let list = document.getElementById("output");
  for (i = 0; i < A1.length; i++) {
    let li = document.createElement("li");
    li.innerText = A1[i];
    list.appendChild(li);
  }
}
