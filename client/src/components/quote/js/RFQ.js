const calculate = {
    footageCalc: function (length, height){
        length = length / 12;
        height = height / 12;
        return (length * height)
    },
    priceCalc: function(footage, priceFT){
        return footage * priceFT
    }
}
module.exports= calculate