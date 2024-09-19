export function formatTime(milliseconds) {
  
  const totalSeconds = Math.floor(milliseconds / 1000);
  
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedSeconds = seconds.toString().padStart(2, '0');
  
  if (minutes > 0) {
    return `${minutes}:${formattedSeconds}`;
  } else {
    return `0:${formattedSeconds}`;
  }
}