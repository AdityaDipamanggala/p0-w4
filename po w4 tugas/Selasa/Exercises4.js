function cariModus(arr) {
    var count = 0
    for (var a = 0 ; a <= arr.length-1 ; a++){
      if (arr[0] > arr[a] || arr[0] < arr [a]) {
        count ++
      }
    }
    if (count === 0) {
      return -1
    }
    var banyakAngka = {}
    for ( var i = 0 ; i <= arr.length-1 ; i++ ){
        if (!banyakAngka[arr[i]]){
          banyakAngka[arr[i]] = 1
        }
        else {
          banyakAngka[arr[i]]++
        }
    }
    var jumlahAngka = []
    for ( key in banyakAngka ){
     jumlahAngka.push(banyakAngka[key])
    }
    var count2 = 0
    for (var a = 0 ; a <= jumlahAngka.length-1 ; a++){
      if (jumlahAngka[0] > jumlahAngka[a] || jumlahAngka[0] < jumlahAngka [a]) {
        count2 ++
      }
    }
    if (count2 === 0) {
      return -1
    }
    for (var j = 0 ; j <= jumlahAngka.length-1 ; j++){
      for (var k = 0 ; k <= jumlahAngka.length-1 ; k++){
        var temp = 0
        if (jumlahAngka[k] >= jumlahAngka[k+1]){
          temp += jumlahAngka[k]
          jumlahAngka[k] = jumlahAngka[k+1]
          jumlahAngka[k+1] = temp
        }
      }
    }
    for ( key in banyakAngka ){
      if (banyakAngka[key]===jumlahAngka[jumlahAngka.length-1]) {
        return parseInt(key)
      }
    }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1


