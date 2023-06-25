function canAttendMeetings(intervals) {
    // Sort the intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);
  
    // Check for overlapping intervals
    for (let i = 0; i < intervals.length - 1; i++) {
      if (intervals[i][1] > intervals[i + 1][0]) {
        return false; // Overlapping intervals found
      }
    }
  
    return true; // No overlapping intervals found
  }
  
  // Test the function
  const intervals = [[0, 30], [5, 10], [15, 20]];
  const result = canAttendMeetings(intervals);
  console.log(result);
  