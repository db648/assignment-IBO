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

const getUniquePrducts = (list) => {
    let newList=[]
    list.forEach(element => {
        let ifExists=newList.find((elem)=>elem.productName===element.productName);
        if(ifExists){
        newList= newList.map((product)=>{
            if(product.productName===ifExists.productName){
                product.quantity+=ifExists.quantity
                return product
            }else return product
        })
        }else newList.push(element)
    });

    console.log(newList)
}
getUniquePrducts(listOfProducts);
