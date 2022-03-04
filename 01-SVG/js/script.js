/* const rec = document.getElementById('rectangle').className;

rec.addEventListener('click', function onClick() {
    if (rec.style.fill = "red") {
        rec.style.fill = "black";
    }
     else {
        rec.style.fill = "red"
    }
  }); */

/*   function myFunction(el, color) {
    el.style.fill = color;
      if (rectangle.style.fill == "black") {
        document.getElementById("rectangle").style.fill = "red";
      } else {
        document.getElementById("rectangle").style.fill = "red";
      }

  }
 */

const rec = document.getElementById("rectangle").className;
function onClick(el)
{
  if(rec.baseVal == "red")
  {
    el.style.fill = "black";
    document.getElementById("rectangle").classList.remove("red");
    document.getElementById("rectangle").classList.add("black");
  }
  else
  { 
    el.style.fill = "red";
    document.getElementById("rectangle").classList.remove("black");
    document.getElementById("rectangle").classList.add("red");
  }
}

//solution trouvée par Tanya Kemm Pereira
