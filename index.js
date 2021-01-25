var katzDeliLine = [];
function takeANumber(katzDeliLine,name)
{
  for(let i=0;i<katzDeliLine.length;i++)
  {
    if (i==7)
    {
      return "The line is currently empty.";
    }
    else{
      return `Welcome, $name You are number $i in line.`;
    }
  }
}
