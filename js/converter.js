var Converter = (function () {
    // private stuff goes here
    var convertovalue = 2.2

    //public methods here
    return {
        convertFromImperialToMetric: function (weight) {
            var num = parseInt(weight);
            if (isNaN(num)== true ) {
                throw new Error ("Not a number");
            }
           num = num / convertovalue;
            return Math.round(num);
        },
        convertFromMetricToImperial: function (weight) {
            var num = parseInt(weight);
            if (isNaN(num)== true ) {
                throw new Error ("Not a number");
            }
            num = num * convertovalue;
            return Math.round(num);
        }
    }
})();
