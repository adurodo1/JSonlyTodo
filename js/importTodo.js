function importTodo(data){


    //functio for transdorming created data on local storage

    function createTodoItemforImport(item) {
 //function callbacks for events
   //delete item call back
     function deleteTodo(element) {
        
         console.log("working")
         history= history.filter(todo=>todo.id!=element.id);
         localStorage.saved= JSON.stringify(history);



     }
   //mark as done call back
     function markAsDone(element) {
         element.style.textDecoration='line-through';
         console.log("working")

     }



 //end of function call backs
 //create btn function that will be used with this function instance
     function createBtn(color, text, callback) {
         let btn = document.createElement('button');
         btn.className = "btn btn-danger";
         btn.innerHTML = text;
         btn.addEventListener('click', () => {
             callback(li)

         })
         return btn;
     }
     //create new list item with appropriat class 
     let li = document.createElement('li');
     li.className = "list-group-item";
     li.innerHTML = item.title;

     li.id=item.id;

     //create delete button
     //  <button id="addTodo" type="submit" class="btn btn-primary">Submit</button>

     // li.appendChild(btn)
     li.appendChild(createBtn("danger", "delete", deleteTodo))
     if(item.done===false)
     li.appendChild(createBtn("primary", "done", markAsDone))

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