let string = "";

for(let i = 0;i<document.querySelectorAll(".button");i++)
{
    document.querySelectorAll(".button")[i].addEventListener("click",function(e){
        if(e.target.innerHTML == "=")
            string = eval(string);

        else if(e.target.innerHTML == "C")
            string = "";
        
        else if(e.target.innerHTML == "M+")
        {
            string = Math.abs(string);
        }

        else
        {
            string = string + e.target.innerHTML;
        }

        document.getElementsByTagName("input").value = string;
    })
}