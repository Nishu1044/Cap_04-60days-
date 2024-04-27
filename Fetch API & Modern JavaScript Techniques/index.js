




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
             let response = await fetch("https://reqres.in/api/users");
                let data = await response.json();
                console.log(data);
                showdata(data.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
}

// Data()

let btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    Data()
})



let container = document.getElementById("Details")

function showdata(arr){
    arr.forEach( function(list){
    
        let box = document.createElement("div")
        box.classList.add("card");
    
        let name = document.createElement("h3")
          name.innerText = list.first_name

          let lastname = document.createElement("h3")
          lastname.innerText = list.last_name

          let Email = document.createElement("h3")
          Email.innerText = list.email
          
          let Avatar = document.createElement("img")
          Avatar.setAttribute("src",list.avatar)

    box.append(name,lastname,Email, Avatar)
    container.append(box)  
    
    });
}



    




