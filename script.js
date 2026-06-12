// Output helper
function print(msg) {
    document.getElementById("output").textContent += msg + "\n";
}

// Clear output each time
function clearOutput() {
    document.getElementById("output").textContent = "";
}

//STEP 2: IF-ELSE CONDITION//

function checkNumber() {
    clearOutput();

    let number = 0; // Change this to test different values

    if (number > 0) {
        print("The number is positive.");
    } else if (number < 0) {
        print("The number is negative.");
    } else {
        print("The number is zero.");
    }
}
//STEP 3: SWITCH STATEMENT//
function showDay() {
    clearOutput();

    let day = 3; // Change this to test (1–7)

    switch (day) {
        case 1:
            print("Sunday");
            break;
        case 2:
            print("Monday");
            break;
        case 3:
            print("Tuesday");
            break;
        case 4:
            print("Wednesday");
            break;
        case 5:
            print("Thursday");
            break;
        case 6:
            print("Friday");
            break;
        case 7:
            print("Saturday");
            break;
        default:
            print("Invalid day number.");
    }
}
   //STEP 4: LOOPS (FOR, WHILE, DO-WHILE)//

function runLoops() {
    clearOutput();

    print("For Loop:");
    for (let i = 1; i <= 5; i++) {
        print(i);
    }

    print("\nWhile Loop:");
    let i = 1;
    while (i <= 5) {
        print(i);
        i++;
    }

    print("\nDo...While Loop:");
    let j = 1;
    do {
        print(j);
        j++;
    } while (j <= 5);
}

   //STEP 5: BREAK & CONTINUE//

function breakContinue() {
    clearOutput();

    print("Break Example:");
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            print("Stopping at 3");
            break;
        }
        print(i);
    }

    print("\nContinue Example:");
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            print("Skipping 3");
            continue;
        }
        print(i);
    }
}


  // STEP 6: SCOPE //

let globalVar = "I'm global!";

function scopeTest() {
    clearOutput();

    let localVar = "I'm local!";

    print(globalVar); // Accessible
    print(localVar);  // Accessible inside function

    // Trying to access localVar outside would cause an error
}
