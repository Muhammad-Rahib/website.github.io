let obj = [{
    prod_image: "2.jpg",
    prod_name: "Flower 1",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "3.jpg",
    prod_name: "Flower 2",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "c6.jpg",
    prod_name: "Flower 3",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "c3.jpg",
    prod_name: "Flower 4",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
}
,{
    prod_image: "2.jpg",
    prod_name: "Flower 5",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "3.jpg",
    prod_name: "Flower 6",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "c6.jpg",
    prod_name: "Flower 7",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
},
{
    prod_image: "c3.jpg",
    prod_name: "Flower 8",
    prod_desc: "Many of our components require the use of JavaScript to function.",
    prod_price: "$500"
}
]

let a = document.getElementById('dom');
for (var i in obj) {
    a.innerHTML +=
        `
 <div class="col-lg-3">
                <div class="card" style="width: 18rem;">
                    <img src="${obj[i].prod_image}" class="card-img-top" height="200px" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${obj[i].prod_name}</h5>
                        <p class="card-text" id="des">${obj[i].prod_desc}</p>
                        <p class="card-text">${obj[i].prod_price}</p>
                        <a href="#" onclick="myfn()" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
`
}
let div = document.getElementById('des');
function myfn()
{
    
}