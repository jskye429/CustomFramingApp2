//this code does not work at this time

function subtotal(array){
    var costs= Object.keys(array)
    .filter(key=>array.includes(key)).reduce((obj, key)=>{
            return{
                ...obj, 
                [key]: array[key]
            };
        }, {})
    
    console.log(costs)
 
}


var cart=[
    {
    "sku": 26956,
    "cost": 224
    },
    {
    "sku": 26958,
    "cost": 224
    }
]
    
subtotal(cart)