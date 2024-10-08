function minimumBribes(q: Array<number>) {
  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > 2) {
      console.log('Too chaotic')
      return
    }
  }
  console.log(1)
}

minimumBribes([4,1,2,3])

// t = 2, number of test cases
// n = 5, final state of the queue