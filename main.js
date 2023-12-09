let gridContainer = document.querySelector(".main-container")
let colorChoice = document.getElementById("color")
var range = document.getElementById("size");
let rainbow = document.getElementById("rainbow");
let clearGrid = document.getElementById("clearGrid");
var btn = document.querySelectorAll(".buttons")
let changecolor= false;
let rows = 0;
let columns = 0;
// div crereating for grid layout
function show(rows,columns)
        {  
             // Clear existing grid items
            gridContainer.innerHTML=" ";

            gridContainer.style.setProperty("--grid-rows", rows)
            gridContainer.style.setProperty("--grid-columns", columns)
           
                for(let i=0;i< rows * columns;i++)
                {
                    var div = document.createElement("div");
                    div.classList.add("grid-item");
                    gridContainer.appendChild(div);
                    
            
                }   
                
                var gridItems = document.querySelectorAll(".grid-item");
                gridItems.forEach((i)=>{
                    i.addEventListener("mousedown",()=>{
                        changecolor= false;
                    })
                    i.addEventListener("mouseup",()=>{
                        changecolor = true;
                    })
                }) 
            
        }
    
   
       

//selection of range
       
function rangeSelection()
{
    var rangeDisplay= document.getElementById("number");
    rangeDisplay.innerHTML= `${range.value} x ${range.value}`;
    rows = range.value;
    columns = range.value;
    show(rows,columns);
    colorPeaker();
    chooseRandomColor();
    clear();
} 
function  colorPeaker(){
    var gridItems = document.querySelectorAll(".grid-item");
      colorChoice.addEventListener("input",()=>{
            gridItems.forEach((i)=>{
                 i.addEventListener("mouseover",()=>{
                    i.style.backgroundColor = colorChoice.value;
                });
              
            
                
            })
        });

    };
    function randomColor(max)
    {
        return Math.floor(Math.random()*(max+1))
    }  
    function rainbowColor(){

        let r = randomColor(255);
        let g = randomColor(255);
        let b = randomColor(255);
    
         return [r,g,b];
    
    }
    function chooseRandomColor()
    {
     var gridItems = document.querySelectorAll(".grid-item");
        rainbow.addEventListener("click",()=>{
           

            gridItems.forEach((i)=>{

                i.addEventListener("mouseover",()=>{
                    const[r,g,b] =rainbowColor();
                    i.style.backgroundColor = `rgb(${r},${g},${b})`
                })
            })
        })
    } 

    function clear(){
        var gridItems = document.querySelectorAll(".grid-item");
        clearGrid.addEventListener("click",()=>{
             gridItems.forEach((i)=>{
                i.style.backgroundColor="";
             })
        })
    }