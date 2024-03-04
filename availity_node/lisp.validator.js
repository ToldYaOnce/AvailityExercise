
/**
 * 
 * @param {*} lispCode 
 * 
 * @returns a boolean indicating whether the given lisp code is valid
 */
export default function IsValidLint(lispCode){
  try{
    const count = lispCode.split("").reduce((acc, char) => {
      if(acc < 0) throw new Error("Invalid lisp code");
      return (char === "(")? acc + 1 : (char === ")")? acc -1 : acc;
    }, 0);
    return count === 0;
  }
  catch(e){
    return false;
  }
}
