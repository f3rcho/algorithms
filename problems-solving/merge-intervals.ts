/*
4. Merge Intervals
Question
Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

*/

function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  const merged: number[][] = [intervals[0]];
  console.log({merged})

  for (let i = 1; i < intervals.length; i++) {
      const last = merged[merged.length - 1];
      const current = intervals[i];
      console.log(`last:${last} - current: ${current}`)
      if (current[0] <= last[1]) {
          last[1] = Math.max(last[1], current[1]);
          console.log(last[1], "last[1]")
      } else {
          merged.push(current);
      }
  }
  return merged;
}


const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(intervals)); // Output: [[1, 6], [8, 10], [15, 18]]

/*
Intervals [1, 3] and [2, 6] overlap, so they are merged into [1, 6].
Intervals [8, 10] and [15, 18] do not overlap with any other intervals.
*/