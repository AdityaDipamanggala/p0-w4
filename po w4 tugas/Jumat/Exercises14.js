function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var penumpang = []
        
    for(var a = 0 ; a <= arrPenumpang.length-1 ; a++){
        for (var b = 0 ; b <= rute.length-1 ; b++){
            if (rute[b] === arrPenumpang[a][1]){
                var titikAwal = b
            }
            else if (rute[b] === arrPenumpang[a][2]){
                var titikAkhir = b
            }
        }
        var jarak = Math.abs(titikAkhir - titikAwal)
        var bayar = jarak * 2000
        var infoPenumpang = {
            penumpang : arrPenumpang[a][0],
            naikDari : arrPenumpang[a][1],
            tujuan : arrPenumpang[a][2],
            bayar ,
        }
        penumpang.push(infoPenumpang) 
    }
    return penumpang
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]