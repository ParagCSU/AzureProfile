function onLoad()
{ 
  //This is an example of an alert function.
  //alert("Function onLoad() called");
  document.getElementById("timestamp").innerHTML = Date();
}
fuction checkNumber() {

   var theNumber, theMessage;
   theNumber = document.getElementById('smallnumber').value;
// If x is Not a Number or less than one or
if(isNaN(TheNumber) || theNumber < 1 || theNumber > 10 )
{
  theMessage = "Number was expected to be between 1 and 10";

} else {
  theMessage = "Number is Good";
}
document.getElementById("numberMessage").innerHTML = theMessage;
}Submit </button>