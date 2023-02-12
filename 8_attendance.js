let attendance; 
 let classes = prompt("Enter the number of classes held:"); 
 classes = Number.parseInt(classes); 
 let attended = prompt("Enter the number of classes attended:"); 
 attended = Number.parseInt(attended); 
 attendance = attended/classes*100; 
 if (attendance>=75&&attendance<=100) 
 { 
   console.log("\n Percentage of classes attended = %d%", attendance); 
   console.log("\n You are allowed to sit for Exams."); 
 } 
 else if (attendance>=0&&attendance<=74) 
 { 
   console.log("\n Percentage of classes attended = %d%", attendance); 
   console.log("\n You are not allowed to sit for Exams."); 
 } 
 else 
 { 
   console.log("\n Invalid Input."); 
 }