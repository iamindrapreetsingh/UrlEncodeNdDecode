const readline = require("readline-sync");

const input = readline.question("Welcome to UrlEncodeNdDecode.\n\nEnter Your String and Press Enter\n");

const choice = readline.question("\nEnter 1 to Encode\nEnter 2 to Decode\n");

if(choice==1)
{
  console.log("Encoded URI-\n"+encodeURIComponent(input));
}
else if(choice==2)
{
  console.log("Decoded URI-\n"+decodeURIComponent(input));
}

else
console.log("Enter a Valid Option!");