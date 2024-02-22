/**
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example:
    - s = '12:01:00PM'
Return '12:01:00'.
    - s = '12:01:00AM'
Return '00:01:00'.
 */

function timeCovertion(timestr: string) {
  let hour = parseInt(timestr.substring(0, 2));
  const indicator = timestr.substring(timestr.length - 2);
  if(indicator === "AM" && hour === 12) {
    hour = 0;
  } else if (indicator === "PM" && hour !== 12) {
    hour += 12;
  }
  return hour.toString().padStart(2, "0") + timestr.substring(2, timestr.length - 2)

}
console.log(timeCovertion("12:01:00PM")) // expected 12:01:00
console.log(timeCovertion("07:05:45PM")) // expected 19:05:45
