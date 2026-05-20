function palindrome (myString) {
    //in case if any special characters or spaces are given in input that has to be removed
    var input = myString.replace(/[^A-Z0-9]/ig,"").toLowerCase();

    //check palindrome or not not string needs to be rversed so we are reversing bit by splitting and joining it
    var reversedinput = input.split("").reverse().join("");

    //checking for palindrome
    if (input === reversedinput) {
        document.write("<div>" + myString + "is a palindrome <div>");
    } else{
        document.write("<div>" + myString + "is not a palindrome <div>");
    }
}

//invoking function
palindrome("Ma")
