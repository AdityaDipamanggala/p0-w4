function checkAB(num) {
    var posisiA = []
    var posisiB = []
    var jarakAB = []
    for (var a = 0 ; a <= num.length-1 ; a++){
        if (num[a] === `a`){
            posisiA.push(a)
        }
        else if (num[a] === `b`){
            posisiB.push(a)
        }
    }
    for (var b = 0 ; b <= posisiB.length-1 ; b++){
        for (var c = 0 ; c <= posisiA.length-1 ; c++){
            jarakAB.push(Math.abs(posisiA[c] - posisiB[b]))
        }
    }
    var count = 0
    for (var d = 0 ; d <= jarakAB.length-1 ; d++){
        if (jarakAB[d] === 4){
            count ++
        }
    }
    if (count > 0){
        return true
    }
    else{
        return false
    }
    return count
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
  console.log(checkAB('barbarbadbsaian')); // true
