//Solution 1
function Palindrome(str) {
  let updateStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let newStr = "";

  for (let i = updateStr.length - 1; i >= 0; i--) {
    newStr += updateStr[i];
  }
  return newStr === updateStr ? true : false;
}
Palindrome("1 eye for of 1 eye.");

//Solution 2

const Palindrome = (str) => {
  let updateStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

 return updateStr === updateStr.split("").reverse().join("");
};

Palindrome("A man, a plan, a canal. Panama");
