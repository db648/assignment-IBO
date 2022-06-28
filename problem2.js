const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

const getUniquePrducts = () => {
  let arr=[],obj={};
  for(let i=0;i<listOfProducts.length;i++){
    if(obj[listOfProducts[i].productName] === undefined){
        obj[listOfProducts[i].productName] = 1;
        arr.push(listOfProducts[i]);
    }
    else{
        listOfProducts[i].quantity += listOfProducts[i].quantity
        arr.push(listOfProducts[i])
    }
  }
  console.log(arr)
}
getUniquePrducts()
