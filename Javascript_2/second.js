// Use of Strict Mode

// "use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //without strict mode we would not be able to find this bug as hasDriversLicense is not written correctly
if (hasDriversLicense) console.log("I can Drive :D");

const interface = "Audio"; //this will also not execute because interface it a reserved keyword even though it will not give error without strictmode
