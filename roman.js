var romanNumeralMap = [
           ['M',  1000],
           ['CM', 900],
           ['D',  500],
           ['CD', 400],
           ['C',  100],
           ['XC', 90],
           ['L',  50],
           ['XL', 40],
           ['X',  10],
           ['IX', 9],
           ['V',  5],
           ['IV', 4],
           ['I',  1],
    ]


toRoman = function(n) {

    if ( n <= 0 || n > 5000)
        return null

    var r = ""
    romanNumeralMap.forEach(function(e){  
        var number = e[0]
        var integer = e[1]

        while (n >= integer){
            r += number
            n -= integer 
        }
    }) 
    return r
}

toNumber = function(r){

    var n = 0
    var index = 0

    romanNumeralMap.forEach(function(e){  

        var number = e[0]
        var integer = e[1]
        while (r.substring(index, index+number.length) == number){
            n += integer
            index += number.length 
        }
    }) 

   return n

}

