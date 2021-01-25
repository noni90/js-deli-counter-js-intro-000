
function takeANumber(line,name)
{
line.push(name);
return `Welcome, ${name} You are number ${line.length} in line.`;
}
 function nowServing(line){
   if(!line.length)
   {
     return "There is nobody waiting to be served!";
   }
   else {
     return `Currently serving ${line.shift()}`;
   }
}

 function currentLine(line)
 {
   if (!line.length)
   {
     return "The line is currently empty.";
   }
       const now=[];
     for(let i =0, k=line.length;i<k;i++)
     {
       now.push(`${i+1.line[i]}`);
     }

    return `The line is currently:${now.join(', ')}`;
 }
