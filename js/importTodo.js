function importTodo(data){


    //functio for transdorming created data on local storage

    function createTodoItemforImport(item) {
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
         item.done=true;

         history.map((data)=>{
             if(data.id===item.id)
             {
                 data.done=item.done
             }

         });
         localStorage.saved= JSON.stringify(history);
         console.log(item)
         
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
     li.className = "list-group-item text-center ";
     li.innerHTML = item.title;

     li.id=item.id;

     //create delete button
     //  <button id="addTodo" type="submit" class="btn btn-primary">Submit</button>
     if(item.done===true)
     {
        li.style.textDecoration='line-through';
     }
     // li.appendChild(btn)
     li.appendChild(createBtn("danger", "delete", deleteTodo))
     li.setAttribute("draggable",true);
  
     li.appendChild(createBtn("warning", "done", markAsDone))

     //create mark as done btn
     return li;
 }



 data.map((todo)=>{

     document.querySelector("#todoList").appendChild(createTodoItemforImport(todo))

     
     var id=todo.id;
 var title=todo.title;
 var done=todo.done;

 })




}

 //Main

 let history=JSON.parse(localStorage.getItem('saved'))
 console.log(history)
 
if( localStorage.savedState==="true")
importTodo(history );