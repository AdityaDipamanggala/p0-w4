function digitPerkalianMinimum(angka) {
    var kumpulanFaktor = []
    var pasanganFaktor = []
    for ( var a = 0 ; a <= angka ; a++ ){
        if (angka % a === 0){
            kumpulanFaktor.push(a)
        }
    }
    if (kumpulanFaktor.length % 2 !==0){
        kumpulanFaktor.push(kumpulanFaktor[(kumpulanFaktor.length - 1)/2])
    }
    for (var f =0 ; f <= kumpulanFaktor.length-1 ; f++){
        for (var g = 0 ; g <= kumpulanFaktor.length-1 ; g++){
            if (kumpulanFaktor[g] > kumpulanFaktor[g+1]){
                var temp
                temp = kumpulanFaktor[g]
                kumpulanFaktor[g] = kumpulanFaktor[g+1]
                kumpulanFaktor[g+1] = temp
            }
        }
    }
    for ( b = 0 ; b <= kumpulanFaktor.length/2 -1 ; b++){
        pasanganFaktor.push([])
    }
    for (var d = 0 ; d <= kumpulanFaktor.length/2 -1 ; d++){
        for ( var c = kumpulanFaktor.length-1 ; kumpulanFaktor.length/2 <= c ; c--){
            if (c + d === kumpulanFaktor.length-1){
                pasanganFaktor[d].push(kumpulanFaktor[d],kumpulanFaktor[c])
            }
        }
    }
    var jumlahDigit = []
    for (var e = 0; e <= pasanganFaktor.length-1 ; e++ ){
        jumlahDigit.push((String(pasanganFaktor[e][0]) + String(pasanganFaktor[e][1])).length)
    }
    for (var f =0 ; f <= jumlahDigit.length-1 ; f++){
        for (var g = 0 ; g <= jumlahDigit.length-1 ; g++){
            if (jumlahDigit[g] > jumlahDigit[g+1]){
                var temp
                temp = jumlahDigit[g]
                jumlahDigit[g] = jumlahDigit[g+1]
                jumlahDigit[g+1] = temp
            }
        }
    }
   
return jumlahDigit[0]
}
  
//   TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
console.log(digitPerkalianMinimum(324)); // 3