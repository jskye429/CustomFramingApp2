const calculate = {
    footageCalc: function (length, height){
        length = length / 12;
        height = height / 12;
        return (length * height).toFixed(2)
    },
    priceCalc: function(footage, priceFT){
        return (footage * priceFT).toFixed(2)
    }
}
module.exports= calculate