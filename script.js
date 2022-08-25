/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {

    const conversion = new Map();
    conversion.set('I', 1)
    conversion.set('V', 5)
    conversion.set('IV', 4)
    conversion.set('X', 10)
    conversion.set('IX', 9)
    conversion.set('L', 50)
    conversion.set('XL', 40)
    conversion.set('C', 100)
    conversion.set('XC', 90)
    conversion.set('D', 500)
    conversion.set('CD', 400)
    conversion.set('M', 1000)
    conversion.set('CM', 900)
  
    var intVal = 0
    for (var i=s.length-1; i>=0; i--) {
      if (conversion.get(`${s[i] ? s[i]:0}`) > conversion.get(`${s[i-1] ? s[i-1]:0}`)) {
        intVal += conversion.get(`${s[i-1] ? s[i-1]:0}${s[i] ? s[i]:0}`);
        i=i-1
      }
      else {
        intVal += conversion.get(`${s[i] ? s[i]:0}`);
      }
    }
    return intVal;  
  };