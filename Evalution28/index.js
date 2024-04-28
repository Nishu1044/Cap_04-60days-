
let tbody = document.getElementById("container")
let arr = []

let getData = async(URL)=>{
    let res = await fetch(URL)
    let data = await res.json()
     
    arr = data.data
    showData(data.data)
    // console.log(data);
}

// getData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")

getData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10")


function showData(arr){
  tbody.innerHTML = ""
  arr.forEach((ele,i)=>{

   let tr = document.createElement("tr")

   let sno = document.createElement("td")
    sno.innerText = ele.id
 
    let Name = document.createElement("td")
    Name.innerText = ele.name

    let Department = document.createElement("td")
    Department.innerText = ele.department

    let Gender = document.createElement("td")
    Gender.innerText = ele.gender

    let Salary = document.createElement("td")
    Salary.innerText = ele.salary
    
    tr.append(sno,Name,Gender,Department,Salary)
    tbody.append(tr)
  })

}




// filter Department //

let filterDep = document.getElementById("filterDep")

filterDep.addEventListener("change", function(){

    if(filterDep.value == ""){
        showData(arr)
    }else{
        let filtered = arr.filter(function(element){
            if(element.department === filterDep.value){
              return true
            }else{
                return false
            }
        })
    showData(filtered)
    // console.log(filtered);
    }
   
})


// filter by Gender //

let filterGen = document.getElementById("filterGen")
filterGen.addEventListener("change", function(){

    if(filterGen.value == ""){
        showData(arr)
    }else{
        let filtered = arr.filter(function(element){
            if(element.gender === filterGen.value){
              return true
            }else{
                return false
            }
        })
    showData(filtered)
    // console.log(filtered);
    }
   
})


// sort by salary //

let sortBySalary = document.getElementById("sortBySalary")

sortBySalary.addEventListener("change", function(){

    let value = sortBySalary.value
    let newData 

    if(value == "asc"){
        newData = arr.sort(function(a,b){
            return a.salary - b.salary
        })
    }else if(value == "desc"){
        newData = arr.sort(function(a,b){
            return b.salary - a.salary
        }) 
    }else if(value == ""){
        newData = arr
    }
    showData(newData)
})


// }else if(value == "desc"){
//     return b.salary - a.salary
// }else if(value == ""){
//     newData = arr
// }
// showData(newData)


let PreBtn = document.getElementById("pre")
PreBtn.addEventListener("click", function(){


 console.log("clicked");
})


let NextBtn = document.getElementById("nex")
NextBtn.addEventListener("click", function(){
    console.log("Nextclicked");
})