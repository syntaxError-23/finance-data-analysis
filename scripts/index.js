//Array of financial data
var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];


var monthToMonth = [];


//Variable declarations
var totalMonths = 0;
var totalMoney = 0;

//These two arrays will contain the month and numeric data of the greatest upward and downard change in profit less respectively
//the second position of each is set to negative infinity and infinity respectively to ensure that initially they are lower or higher than any value in the data set
var greaterValue = ['', Infinity * -1]
var lesserValue = ['', Infinity]


var monthToMonthAverage = 0;
var monthToMonthTotal = 0;


//For loop
for(var i=0; i<finances.length; i++){ //iterate through array (for the length of the array)
  
  totalMonths++; //increment variable with each iteration - after loop value will represent total number of months
  
  totalMoney += finances[i][1]; //Add current value of finances to totalMoney to calculate total profit/loss

  //if statement checks if iteration has moved through at least one cycle i.e. one month has been analysed
  if(i>0 && i<finances.length){

    //with each iteration, a new array is pushed which will contain the month in one index and the numeric data in another
    monthToMonth.push([]);

    monthToMonth[i-1][1] = finances[i-1][1] - finances[i][1]; //calculate difference between last month and this month
    monthToMonth[i-1][0] = finances[i][0];
    //Check if last month value is greater than this month value (Decrease) AND difference calculated is postive (indicating increase)
     if(finances[i-1][1] > finances[i][1] && monthToMonth[i-1][1] > 0){
      monthToMonth[i-1][1] *=-1; //change to negative to reflect decrease
     }
     //check if last month value is less than this month value (increase) AND difference calculated is negative (indicating decrease)
     else if(finances[i-1][1] < finances[i][1] && monthToMonth[i-1][1] < 0){
      monthToMonth[i-1][1]*=-1; //change to positive to reflect increase
     }
  }
}

//for loop to iterate through each item in monthToMonth array
for(var j=0; j<monthToMonth.length; j++){

  monthToMonthTotal+=monthToMonth[j][1]; //adds up all changes in profit/loss

  //checks if at least one iteration has occurred
  if(j>0){ 
    
    //checks if previous value is greater than current and checks if that value is greater than greater value
    if(monthToMonth[j-1][1] > monthToMonth[j][1] && monthToMonth[j-1][1] > greaterValue[1]){
      greaterValue[1] = monthToMonth[j-1][1]; //assigns greaterValue with this value
      greaterValue[0] = monthToMonth[j-1][0];
    }
    //checks if current value is greater than previous and checks if that value is greater than greater value
    else if(monthToMonth[j-1][1] < monthToMonth[j][1] && monthToMonth[j][1] > greaterValue[1]){
      greaterValue[1] = monthToMonth[j][1];//assigns greaterValue with this value
      greaterValue[0] = monthToMonth[j][0];
    }
    
    //checks if previous value is less than current and checks if that value is less than the variable lesserValue
    else if(monthToMonth[j-1][1] < monthToMonth[j][1] && monthToMonth[j-1][1] < lesserValue[1]){
      lesserValue[1] = monthToMonth[j-1][1]; //assigns lesserValue with this value
      lesserValue[0] = monthToMonth[j-1][0];
    }
    //checks if current value is less than previous and checks if that value is less than the variable lesserValue
    else if(monthToMonth[j-1][1] > monthToMonth[j][1] && monthToMonth[j-1][1] < lesserValue[1]){
      lesserValue[1] = monthToMonth[j][1]; //assigns lesserValue with this value
      lesserValue[0] = monthToMonth[j][0];
    }
  }
  monthToMonthAverage = monthToMonthTotal / monthToMonth.length;
}

//lesserValue[1] (The numeric finance data) converted to string and sliced to put (-) sign at start rather than after dollar sign;

var lesserValueString = lesserValue[1].toString();
lesserValueString = lesserValueString.slice(0,1) + '$' + lesserValueString.slice(1);

lesserValue[1] = lesserValueString;

var greatestDecreaseDisplay = (lesserValue[0] + ' (' + lesserValue[1] + ')') //concatenates both indexes of lesserValue to make it more readable

//greaterValue[1] (The numeric finance data) converted to string and concatenated with ($) sign. This new string is assigned to greaterValue[1] to be displayed in console 

var greaterValueString = greaterValue[1].toString();
greaterValueString = ( '$' + greaterValueString)
greaterValue[1] = greaterValueString;

var greatestincreaseDisplay = (greaterValue[0] + ' (' + greaterValue[1] + ')') //concatenates both indexes of greaterValue to make it more readable


//monthToMonthAverage rounded to 2dp and converted to string. then it's sliced to put (-) sign at start rather than after dollar sign;

var averageChangeString = monthToMonthAverage.toFixed(2).toString();

averageChangeString = averageChangeString.slice(0,1) + '$' + averageChangeString.slice(1);

//Results logged to console
console.log('Financial Analysis');
console.log('------------------------------------------------')
console.log('')

console.log('Total Months: ' + totalMonths);
console.log('')
console.log('Total Profit/Loss: $' + totalMoney);
console.log('')
console.log('Average change: ' + averageChangeString);
console.log('')
console.log('Greatest increase in profits/losses: ' + greatestincreaseDisplay);
console.log('')
console.log('Greatest decrease in profits/losses: ' + greatestDecreaseDisplay);



