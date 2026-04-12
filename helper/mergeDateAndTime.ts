export function mergeDateAndTime(date:Date,time:string){
  const [hours, minutes] = time.split(":").map(Number);

  const merged = new Date(date);
  
  merged.setHours(hours,minutes,0,0);

  return merged.toISOString()
}