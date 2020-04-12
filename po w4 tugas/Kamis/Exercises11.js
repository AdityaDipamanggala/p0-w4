function shoppingTime(memberId, money) {
    customerInfo = {
        memberId : memberId,
        money : money,
        listPurchased : [],
        changeMoney :0
    }
    barangDiskon = [
        {brand : `Stacattu`, harga : 1500000},
        {brand : `Zoro`, harga : 500000},
        {brand : `H&N`, harga : 250000},
        {brand : `Uniklooh`, harga : 175000},
        {brand : `Casing Handphone`, harga : 50000}
    ]
    if (customerInfo.memberId === '' || customerInfo.memberId === undefined){
        return `Hanya berlaku untuk member`
    }
    var count = 0
    for (var b = 0 ; b <= barangDiskon.length-1 ; b++){
        if (customerInfo.money < barangDiskon[b].harga){
            count ++
        }
    }
    if (count === barangDiskon.length){
        return `Maaf Uang Tidak Cukup`
    }
    var uang = customerInfo.money
    for (var a = 0 ; a <= barangDiskon.length-1 ; a++){
        if (uang >= barangDiskon[a].harga){
            customerInfo.listPurchased.push(barangDiskon[a].brand)
            uang -= barangDiskon[a].harga
        }
        customerInfo.changeMoney = uang
    }
    return customerInfo
}
  
  // TEST CASES
  console.log(shoppingTime('xox', 251000));
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
