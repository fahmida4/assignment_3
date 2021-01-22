

//Problem Number One----------------------------------->
function kilometerToMeter(km){
  if(km <=0){
      return 1;
  }
else{
   var meter=km*1000;
    return  meter;
}
}
//  var result1 = kilometerToMeter(-5);
//  console.log(result1);


//Problem Number Two--------------------------------->


function budgetCalculator(w,m,l){
    var watch,mobile,laptop,addition;
  
    watch  =  w * 50;
    mobile = m * 100;
    laptop = l * 500;

    addition = watch + mobile + laptop;
    
    return addition;

}
// var result2 = budgetCalculator(2,3,4);
// console.log(result2);





//Problem Number Three------------------------------------------------>


function hotelCost(day){
    var stayDay=0;
    if(day <= 10){
        stayDay= day * 100;
    }
    else if (day<=20){
       var firstTenDay = 10 * 100;
       var remaining = day - 10;
       var secondTenday = remaining * 80;
       var stayDay = firstTenDay + secondTenday;
    }
    else{
        var firstTenDay = 10 * 100;
        var secondTenday = 10 * 80;
        var remaining = day - 20;
        var thirdTenDay = remaining * 50;
        var stayDay= firstTenDay + secondTenday + thirdTenDay;

    }
    return stayDay;
}
// var result3 = hotelCost(23);
// console.log(result3);



//Problem number Four---------------------------------------------------->



function megaFriend(strs) {
    var longest = '';
    for (var i = 0; i < strs.length; i++) {
    if (strs[i].length > longest.length){
    longest = strs[i];
    }
    }
    return longest;

    
}
// var result4 = megaFriend(["fahmida","shahnaaz","shimu","ahia","Rahela begum"]);
// console.log(result4);