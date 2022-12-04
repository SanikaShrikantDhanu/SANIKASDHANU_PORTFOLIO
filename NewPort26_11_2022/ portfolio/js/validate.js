function myFunction()
 {
 
  let x = document.getElementById("name").value;
  let y = document.getElementById("mail").value;
 
  if (x =="") 
  {
    text = "Input not valid";
  } 
  else
  {
    text = "Input OK";
  }

  if (y =="") 
  {
    text = "Input not valid";
  } 
  else
  {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
  document.getElementById("demo1").innerHTML = text;

}