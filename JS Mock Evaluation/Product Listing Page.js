

let container = document.getElementById("container")
let filter = document.getElementById("filter")


let getData = async(URL)=>{
    try {
        let res = await fetch(URL)
        let data = await res.json()
        showData(data)
        arr = data
        console.log(data);
    } catch (error) {
        console.log(error);
    }
   
};

getData("https://fakestoreapi.com/products");

 function showData(arr){
    container.innerHTML = ""
    arr.forEach(function(ele,i){ 
     let box = document.createElement("div");

    //  let Id = document.createElement("p")
    //    Id.innerText = ele.id

       let price = document.createElement("p")
       price.innerText = ele.price

       let title = document.createElement("p")
       title.innerText = ele.title

       let image = document.createElement("img")
       image.src = ele.image

       box.append(image,title,price)
       container.append(box)
    })
 };


 let arr = []


 filter.addEventListener("change",function(){
   
    if(filter.value == ""){
        showData(arr)
    }else{
        let filtered = arr.filter(function(element){
            if(element.category === filter.value){
                return true
            }else{
                return false
            }
        })
        showData(filtered)
        console.log(filtered);
    }

 })



 let search = document.getElementById("search")

 search.addEventListener("input", function(){

   let searchValue = arr.filter(function(ele){

     if(ele.title.toLowerCase().includes(search.value.toLowerCase()) === true ){
         return true
     }else{
        return false
     }
   })
   showData(searchValue)

    console.log(search.value);
 })
 

 let sort = document.getElementById("sort")

 sort.addEventListener("change", function(){

    let value = sort.value
    let newData 

     if(value == "asc"){
        newData = arr.sort(function(a,b){
          return a.price - b.price
        })
     }else if(value == "desc"){
        newData = arr.sort(function(a,b){
            return b.price - a.price
        })
     }else if(value == ""){
        newData = arr
     }
     showData(newData)
 })