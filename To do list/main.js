// var FromInput = document.querySelector('.inputToList').value
// const varFromInput = (".inputToList").value



//do this after you append it
// checkbox.checked = true;




document.querySelector(".addButton").onclick = addElement

function addElement(fromInput){
  // var button = document.createElement('button')
  // button.className = "toDo"
  //  var buttonText = document.createTextNode('Task Completed')
  //  button.appendChild(buttonText)
var fromInput = document.querySelector('.inputToList').value
  const childLi = document.createElement("li");
  childLi.className = "list"
  const newContent = document.createTextNode(fromInput);
  childLi.appendChild(newContent);
  // childLi.appendChild(button);
  let parent = document.querySelector(".newListItems");
    parent.appendChild(childLi);

    // let listItem = document.querySelectorAll("li");
    // listItem.addEventListener("click", markComplete());
    childLi.onclick = markComplete

}



function markComplete(){
  // console.log("I WORK!!!");
  this.className = "complete";
  crossOut();
  // let listItem = document.querySelectorAll(".list");
}


function crossOut(){
  let x = document.querySelectorAll(".complete");
  let i;
  for(i=0; i < x.length; i++){
    x[i].style.color = "grey";
    // x[i].style.textDecoration = "line-through";

  }
}


let clearC = document.getElementById("clearComplete");

clearC.onclick = clearAll;

function clearAll(){
  //console.log("I work too!")
  let y = document.querySelectorAll(".complete");

  for(let i=0; i < y.length; i++){
    y[i].style.display = "none"
  }

}


let clearA = document.getElementById("clearAll");

clearA.onclick = clearComp;

function clearComp(){
  console.log("I work too!")
  let z = document.querySelectorAll("li");
  let i;

  for(i=0; i < z.length; i++){
    z[i].style.display = "none";
  }

}


// childLi.addEventListener('click', event =>{
//   if(event.target.className === 'toDo'){
//    document.querySelector('.list').classList.add('completed')
//   }
// })

// parent.addEventListener('click', event =>{
// var elements  = document.getElementsByClassName('toDo');
// for(let i = 0; i < elements.length; i++) {
//   document.querySelectorAll('.list').classList.add('.completed')
// }
// })




  // let test = document.querySelectorAll(".completed")
  // let btn = document.querySelectorAll("button");
  // let item = document.getElementsByTagName("li");
  //
  // function markCompleted() {
  //
  //   for(i=0; i<btn.length; i++){
  //     item.style.textDecoration = "strike-through";
  //     item.style.color = "grey";
  //   }
  //
  // }
  //
  // btn.addEventListener("click", markCompleted());
  //






// parent.addEventListener ("click", function() {
// if(event.target.className === 'toDo'){
//   this.document.querySelector('.list').classList.add('completed')
// }
// })








// parent.addEventListener('click', event =>{
//   if(event.target.className === 'toDo'){
//   document.querySelectorAll('.list').forEach((e) => {
//     console.log(e)
//   })
//   }
// })
