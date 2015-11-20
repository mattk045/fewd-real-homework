$("#entryBtn").hide()

var total = 0;

function currencyFormat(number) {
    
    number = parseFloat(number); 
    number = number.toFixed(2); 
    number = "$" + number;
    return number;
}

  
function addvalue() {
 
    var entryElement = document.getElementById('newEntry');
        entriesElement = document.getElementById('entries'),
        totalElement = document.getElementById('total');


    var entry = entryElement.value;

    
    entry = parseFloat(entry);

    
    var currency = currencyFormat(entry);

    
    var entriesHTML = entriesElement.innerHTML;

    
    entriesHTML = entriesHTML + "<div>" + currency + "</div>";

   
    entriesElement.innerHTML = entriesHTML;

    
    
    
    total = parseFloat(total);

    total = total + entry;

    
    totalElement.innerHTML = currencyFormat(total);

    // Empty the entry element

    
}



// Set total value to 0.
// Listen for a click.
document.getElementById('entryBtn').onclick = addvalue;

//$('entryBtn').onclick(addvalue);

//