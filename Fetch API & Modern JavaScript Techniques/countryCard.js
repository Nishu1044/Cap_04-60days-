
let sort=document.querySelector(".sortData")

async function Data(){
    try {
             let response = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries");
                let data = await response.json();
                // console.log(data);
                showdata(data.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
}
Data()

let container = document.getElementById("container")

function showdata(arr){
    arr.forEach( function(list){
        
        let box = document.createElement("div")

        let rank = document.createElement("h3")
        rank.innerText = list.Rank
    
        let Country = document.createElement("h4")
        Country.innerText = list.country
    
        let Population = document.createElement("h5")
        Population.innerText = list.population

    box.append(rank,Country,Population)
    container.append(box)  
    
    });
}

function sortDataByPopulation(order) {
    Array.from(container.children)
        .sort((a, b) => {
            let populationA = parseInt(a.querySelector("h5").innerText);
            let populationB = parseInt(b.querySelector("h5").innerText);
            return order === "asc" ? populationA - populationB : populationB - populationA;
        })
        .forEach(box => container.appendChild(box));
}



sort.addEventListener("change", function() {
    // Toggle between ascending and descending orders
    let sortOrder = sort.dataset.order === "asc" ? "desc" : "asc";
    sort.dataset.order = sortOrder;
    sortDataByPopulation(sortOrder);
});




