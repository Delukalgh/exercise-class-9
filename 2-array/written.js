/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * initalize the variable computer parts to an array with the values gpu, cpu, motherboard 
 * initialize the variable games to an array with the values league, valorant, apex
 * initialise the variable hobby to concat the 2 variable. 
 * console log hobby 
 */

var computerParts = ["gpu", "cpu", "motherboard"];
var games = ["league", "valorant", "apex"]; 
console.log(computerParts.concat(games));





/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * initilaize the variable league characters to an array with the Evelynn, Swain, Diana, Ashe make sure its a 2D array that is 2 by 4 and the other row add 
 * Ziggs, Sett, Brand, Briar 
 *  then console log out the sentence with the sentence My fravoirte league characters are Evelynn and Briar using concatenation
 */

var leagueCharacters = [
    ["Evelynn", "Swain", "Diana", "Ahse"],
    ["Ziggs", "Sett", "Brand", "Briar"],
];
console.log(`My favorite league characters are ${leagueCharacters[0][0]} and ${leagueCharacters[1][3]}`);