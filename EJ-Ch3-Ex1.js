function min(a,b) {
  if (a < b) {
    return a;
  }
  else if (a > b) {
    return b;
  }
  else {
    return null;
  }
}

console.log(min(0, -10));