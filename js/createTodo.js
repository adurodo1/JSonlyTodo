//initialize counter and local storage

let idCnt=0;

let todoHistory =[{
    id:1,
    title:"tah tah",
    done:true
 }]
 localStorage.savedState="false";

 for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
if(key=='saved')
{
 
   
    localStorage.savedState="true";
    break;
}
 


  }
 
if(localStorage.savedState==="false")
localStorage.saved= JSON.stringify(todoHistory);

//function to create Todo item
function createTodoItem(item) {
//function callbacks for events
  //delete item call back
    function deleteTodo(element) {
        element.remove();
      

    }
  //mark as done call back
    function markAsDone(element) {
        element.style.textDecoration='line-through';
     

    }



//end of function call backs
//create btn function that will be used with this function instance
    function createBtn(color, text, callback) {
        let btn = document.createElement('button');
        btn.className = `btn btn-${color} `;
        btn.innerHTML = text;
        btn.addEventListener('click', () => {
            callback(li)

        })
        return btn;
    }
    //create new list item with appropriat class 
    let li = document.createElement('li');
    li.className = "list-group-item text-center";

   if(item=='')return;
    li.innerHTML = `<span >${item}</span> `;
    //add id to todo
    li.id=`${idCnt}`
    idCnt++;

    //create delete button
    //  <button id="addTodo" type="submit" class="btn btn-primary">Submit</button>

    // li.appendChild(btn)
    li.appendChild(createBtn("danger", "delete", deleteTodo))
    li.appendChild(createBtn("warning", "done", markAsDone))

    //create mark as done btn
  
    let prevLocalStorageState=[];
    if((localStorage.saved))
      {
    console.log(JSON.parse(localStorage.saved));
     prevLocalStorageState=JSON.parse(localStorage.saved)
    prevLocalStorageState.push(  {
        id:idCnt,
        title:item,
        done:false
     });
      }
      else
    
{    prevLocalStorageState.push(  {
        id:idCnt,
        title:item,
        done:false
     });}
     let newState=prevLocalStorageState;
     localStorage.setItem('saved', JSON.stringify(newState));
    
  
  
    return li;
}

//End of function to create Todo 

//function to import from local storage


 // code snippet on how to renove propert from obj
//          const{['title']:unused,...rest} =obj[0];
//     console.log(unused);

//                      OR 

//           const{title,...rest} =obj[0];
// console.log(title);






document.querySelector("#addTodo").addEventListener('click', (e) => {
    e.preventDefault();

    //create new todo item
    var newTodo = document.querySelector("#todoBox").value;
 
    document.querySelector("#todoList").appendChild(createTodoItem(newTodo))
});



