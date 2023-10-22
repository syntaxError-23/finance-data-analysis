# Finance Data Analysis

## About The Project

The program analyses a set of data - profits and losses - and logs some helpful information in the console. The information logged consists of:

1. Number of Months in data set
2. Total amount of profit/loss 
3. Average change in profit/loss from month to month
4. Greatest increase in profit and loss
5. Greatest decrease in profit and loss


## How do I use the program

## How does it work

The program's code (written in javascript) can be roughly split into 4 parts:

1. Variable declarations
2. For loop 1 - Calculates difference between profit/loss of 2 adjacent months
3. For loop 2 - Ensures the difference actively reflects trajectory of profit/loss 
4. Formatting and displaying information

The data set is stored in the array `finances` , Which can be viewed below.

<details>
**<summary><b><span style ="color: red;">Click to view data set</span></b></summary>

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

</details>


---
### Variable Declarations

The variables are given names that suggest the type of data they will store.

The code for this section is as follows: 

<details>
<summary><b><span style ="color: red;">Click here to view code block </span></b></summary>


```
var monthToMonth = [];

var totalMonths = 0;;
var totalMoney = 0;

var greaterValue = ['', Infinity * -1]
var lesserValue = ['', Infinity]

var monthToMonthAverage = 0;
var monthToMonthTotal = 0;

```

</details>

`monthToMonth` is an array that stores numerous arrays inside it (This will become clearer when reading about **For loop 1**). These arrays store the difference between two adjacent months and the name of the latter month in seperate indexes.

`totalMonths` uses the structure of **For loop 1** to count the number of months there are in the data set and store this value.

`totalMoney` simply adds up all the profit/loss values and stores the result. It exploits the structure of **For loop 1** to do this.

`greaterValue` is an array that stores the greatest increase in profit/loss between two months as well as the month it occured in. 

The first index of the array, `greaterValue[0]` , stores the name of the month and is initialised with a blank string. the second index, `greaterValue[1]` , is set to negative infinity. This is to ensure it is below any number in the data set. 

`lesserValue` is virtually the same as `greaterValue`. The first position, `lesserValue[0]` , stores the month in which the biggest decrease in profit/loss occurred and is initialised with a blank string.

the second position, `lesserValue[1]` is set to (positive) infinity to ensure it is above any value in the data set initially.

The operation of these variables and importance of these initial values will become more apparent when reading about **For loop 2**

`MonthToMonthAverage` stores the average (mean) of the changes in profit/loss between months.

`monthToMonthTotal` stores the sum of all the changes in profit/loss between months.

---

### For loop 1

The purpose of **For loop 1** is to iterate through the financial data. As it does, the difference (in profit/loss) between 2 adjacent months is calculated. 

The total amount of months (stored in `totalMonths`) is also calculated here as well as the total amount of profit/loss across the entire data set (stored on `totalMoney`). 

The code for this section is as follows: 

<details>
<summary><b><span style ="color: red;">Click here to view code block </span></b></summary>

```
for(var i=0; i<finances.length; i++){ 
  
  totalMonths++;
  
  totalMoney += finances[i][1];


  if(i>0 && i<finances.length){

    monthToMonth.push([]);

    monthToMonth[i-1][1] = finances[i-1][1] - finances[i][1]; 
    
    monthToMonth[i-1][0] = finances[i][0];

     if(finances[i-1][1] > finances[i][1] && monthToMonth[i-1][1] > 0){
      monthToMonth[i-1][1] *=-1; 
     }
     
     else if(finances[i-1][1] < finances[i][1] && monthToMonth[i-1][1] < 0){
      monthToMonth[i-1][1]*=-1; //change to positive to reflect increase
     }
  }
}



```

</details>

The conditional statement `for(var i=0; i<finances.length; i++){ ...}` ensures that the loop has already run once. 

next an array is pushed to the array `monthToMonth` (initialised in the variable declarations section). This adds the new array *inside* the already existing `monthToMonth` array

The difference between the previous and current month is then calculated like so: 

`monthToMonth[i-1][1] = finances[i-1][1] - finances[i][1];`

The result of the calculation is stored in the second position if the newly created (inner) array.

The name of the current month (found in the first postion of the finances array at the current iteration) is set as the value of the first index of the `monthToMonth` array.

`monthToMonth[i-1][0] = finances[i][0];`

To make sure that the difference in profit/loss calculated above correctly reflects the trajectory of profit/loss. 

To this end there is another conditional statement: 

`if(finances[i-1][1] > finances[i][1] && monthToMonth[i-1][1] > 0){...}`

This statement checks if the profit/loss of the previous month is higher than the current month (indicating a downward movement) AND the difference calculated is positive (indicating an upward movement). 

When this condition is met, the difference calculated is multiplied by -1: 

`monthToMonth[i-1][1] *=-1;`

the next line, `else if(finances[i-1][1] < finances[i][1] && monthToMonth[i-1][1] < 0){...}` checks if the inverse is true and corrects it when the condition is met.


---

### For loop 2

**For loop 2** iterates through the `monthToMonth` array and contains conditional statements that determine greatest increase in profit/loss between two adjacent months (stored in `greaterValue`) and the greatest decrease in profit/loss between two adjacent months (stored in `lesserValue`). 

these to variables (`greaterValue` and `lesserValue`) are arrays. in the first index they store the month (by name) of greatest increase and decrease in profit/loss respectively. 

in the second index they store numeric value of this increase or decrease. 

The code for this section is as follows: 

<details>
<summary><b><span style ="color: red;">Click here to view code block </span> </b></summary>

```

for(var j=0; j<monthToMonth.length; j++){

  monthToMonthTotal+=monthToMonth[j][1]; 
  
if(j>0){ 
    

    if(monthToMonth[j-1][1] > monthToMonth[j][1] && monthToMonth[j-1][1] > greaterValue[1]){
      greaterValue[1] = monthToMonth[j-1][1]; 
      greaterValue[0] = monthToMonth[j-1][0];
    }
    
    else if(monthToMonth[j-1][1] < monthToMonth[j][1] && monthToMonth[j][1] > greaterValue[1]){
      greaterValue[1] = monthToMonth[j][1];
      greaterValue[0] = monthToMonth[j][0];
    }
    

    else if(monthToMonth[j-1][1] < monthToMonth[j][1] && monthToMonth[j-1][1] < lesserValue[1]){
      lesserValue[1] = monthToMonth[j-1][1]; 
      lesserValue[0] = monthToMonth[j-1][0];
    }
    
    else if(monthToMonth[j-1][1] > monthToMonth[j][1] && monthToMonth[j-1][1] < lesserValue[1]){
      lesserValue[1] = monthToMonth[j][1]; 
      lesserValue[0] = monthToMonth[j][0];
    }
  }
  
  monthToMonthAverage = monthToMonthTotal / monthToMonth.length;
}

```

</details>

firstly the total amount of profit/loss changes is calculated and stored in  `monthToMonthTotal`. This is later used to calculate the average (mean) change in profit/loss between months.

The conditional statement `if(j>0){...}` checks if the loop has iterated once so that the 'previous month' (`monthToMonth[j-1]`) is not accessed. This would be an undefined value. 

Nested within this statement is a series of conditional statements. The first one looks like this: 

`if(monthToMonth[j-1][1] > monthToMonth[j][1] && monthToMonth[j-1][1] > greaterValue[1]){`

This checks if the change in profit/loss of the previous month is greater than the profit/loss change of the current month AND if the change in profit/loss of the previous month is greater than the value stored in `greaterValue[1]`. 

If these conditions are met, `greaterValue[1]` is set to the value of the profit/loss change in the previous month. 

The name of this month is set as the value of `greaterValue[0]`

This is why it was important to set the initial value of `greaterValue[1]` to negative infinity - to guarantee it does not inadvertently affect the data.



```
      else if(monthToMonth[j-1][1] < monthToMonth[j][1] && monthToMonth[j][1] > greaterValue[1]){
      greaterValue[1] = monthToMonth[j][1];
      greaterValue[0] = monthToMonth[j][0];
    }
    

    else if(monthToMonth[j-1][1] < monthToMonth[j][1] && monthToMonth[j-1][1] < lesserValue[1]){
      lesserValue[1] = monthToMonth[j-1][1]; 
      lesserValue[0] = monthToMonth[j-1][0];
    }
    
    else if(monthToMonth[j-1][1] > monthToMonth[j][1] && monthToMonth[j-1][1] < lesserValue[1]){
      lesserValue[1] = monthToMonth[j][1]; 
      lesserValue[0] = monthToMonth[j][0];
    }
    
```

The rest of the conditionals follow a similar logic to determine the highest or lowest value. 


---

### Formatting and displaying information

The code for this section is as follows: 

<details>
<summary><b><span style ="color: red;">Click here to view code block </span> </b></summary>

```

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

```

</details> 







