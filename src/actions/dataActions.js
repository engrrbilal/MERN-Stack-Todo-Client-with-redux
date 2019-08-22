
// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
  });
//Add Todo
export const addTodo = (todo = {}) =>{
    console.log("Adding todo ...",todo);
    return dispatch =>{
        db.collection("Todos").doc("test").add({
            ques:"dddsdssd"
        })
            db.collection("Todos").add({
                todo:todo.todo
            }).then(()=>{
                dispatch({
                    type:'ADD-TODO',
                    todo:todo
                })
        }).catch(console.log("error"))
    }   
  }
//Get-Todos
  export const getTodos = (test = {}) =>{
    console.log("Getting todo ...");
    return dispatch =>{
        let docRef = db.collection("Todos")
        docRef.get().then((doc) =>{
            if (doc.exists) {
                console.log("Document data:", doc.data());
                dispatch({
                    type:'GET-TODOS',
                    todo:doc.data()
                })
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        })
    }   
  }
