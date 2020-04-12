function urutkanAbjad(str) {
    var hasil = ''
    var arrStr = []
    for (var i = 0 ; i <= str.length-1 ; i ++){
        arrStr.push(str[i])
    }
    for (var a = 0 ; a <= arrStr.length-1 ; a++){
        for (var b = 0 ; b <= arrStr.length-1 ; b++){
            if (arrStr[b] > arrStr[b+1]){
                var temp 
                temp = arrStr[b]
                arrStr[b] = arrStr[b+1]
                arrStr[b+1] = temp
            }
        }
    }
    for (var j = 0 ; j <= arrStr.length-1 ; j++){
        hasil += arrStr[j]
    }
    return hasil
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'