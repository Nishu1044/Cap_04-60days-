

// let api = fetch("https://jsonplaceholder.typicode.com/todos")

// // console.log(api);
// api.then(function(response){
//      return response.json()
//     // console.log(response);
// })

// .then(function(res){
//     console.log(res);
   
// })


async function Data(){
    try {
             let response = await fetch("https://jsonplaceholder.typicode.com/todos");
                let data = await response.json();
                // console.log(data);
                showdata(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
}

// Data()

let btn = document.getElementById("button")
btn.addEventListener("click", function(){
    Data()
})



let container = document.getElementById("todolist")

function showdata(arr){
    arr.forEach( function(todo){
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        let box = document.createElement("div")
    
        let todolist = document.createElement("h3")
        todolist.innerText = todo.title
    
    
    
    box.append(todolist,checkbox)
    container.append(box)  
    
    });
}



    




