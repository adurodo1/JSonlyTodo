//initialize counter and local storage

let idCnt=0;

let todoHistory =[]
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
        
        history= history.filter(todo=>todo.id!=element.id);
        localStorage.saved= JSON.stringify(history);
        element.remove();
      
      

    }
  //mark as done call back
    function markAsDone(element) {
        element.style.textDecoration='line-through';
     

    }



//end of function call backs
function createBtn(fav, fav_style, callback) {
    let btn = document.createElement('i');
      //<i class="fa-solid fa-trash"></i>

    //<i class="fa-solid fa-check"></i>
    btn.className = `fa-solid ${fav} ${fav_style} `;
    btn.innerHTML ;
    btn.addEventListener('click', () => {
        callback(tr)

    })

    let td = document.createElement('td');
    td.className='todo-table-activities-item-container'
   td.appendChild(btn);
   return td;
}



         //create new list item with appropriat class 
         let tr = document.createElement('tr');
        // tr.className = "";
         tr.innerHTML = `<td class="todo-table-activities-item">${item}</td>`;
    
             //add id to todo
    tr.id=`${idCnt}`
    idCnt++;
    
         //create delete button
         //  <button id="addTodo" type="submit" class="btn btn-primary">Submit</button>
         if(item.done===true)
         {
            li.style.textDecoration='line-through';
         }
         // li.appendChild(btn)
          //<i class="fa-solid fa-trash"></i>

    //<i class="fa-solid fa-check"></i>
         tr.appendChild(createBtn("fa-trash", "delete", deleteTodo))
         tr.setAttribute("draggable",true);
      
         tr.appendChild(createBtn("fa-check", "done", markAsDone))
    //create new list item with appropriat class 
//     let li = document.createElement('li');
//     li.className = "list-group-item text-center";

//    if(item=='')return;
//     li.innerHTML = `<span >${item}</span> `;
//     //add id to todo
//     li.id=`${idCnt}`
//    // idCnt++;

//     //create delete button
//     //  <button id="addTodo" type="submit" class="btn btn-primary">Submit</button>

//     // li.appendChild(btn)
//     li.appendChild(createBtn("danger", "delete", deleteTodo))
//     li.appendChild(createBtn("warning", "done", markAsDone))

//     //create mark as done btn
  
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
     });
    }
     let newState=prevLocalStorageState;
     localStorage.setItem('saved', JSON.stringify(newState));

     
     //tr approach



     //tr approach end

     //create mark as done btn
     return tr;
    
  
  
   
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
    if(document.querySelector("#todoBox").value)
    var newTodo = document.querySelector("#todoBox").value;
    else
   { alert("you must add a todo first");return;}
 
    document.querySelector("#todoList").appendChild(createTodoItem(newTodo))
});



