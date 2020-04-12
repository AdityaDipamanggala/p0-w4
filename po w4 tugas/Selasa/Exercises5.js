function ubahHuruf(kata) {
  var hasil = ``
  var struktur = 'abcdefghijklmnopqrstuvwxyz'
  var indexAwal = []
  for (var a = 0 ; a <= kata.length-1 ; a ++){
    for (var b = 0 ; b <= struktur.length-1 ; b++){
      if (kata[a] === struktur[b]){
        if (kata[a] === 'z'){
          indexAwal.push(0)
        }
        else {
          indexAwal.push(b+1)
        }
      }
    }
  }
  for (var c = 0 ; c <= indexAwal.length-1 ; c++){
    hasil += struktur[indexAwal[c]]
  }
  return hasil  
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  console.log(ubahHuruf(`zzzzz`))
  console.log(ubahHuruf(`bazlina`))