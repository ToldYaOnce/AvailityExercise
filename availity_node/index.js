import IsValidLint from "./lisp.validator.js";
import ProcessInsuranceFiles from "./insurance.processor.js";

const code = 
`(defun filter(list predicate)
  (if (null list) '()
    (let (
      (the-rest (filter (cdr list) predicate))
    )
    (if (funcall predicate (car list))
        (cons (car list) the-rest)
        the-rest
      )
    )
  )
)`


console.log(IsValidLint(code))
ProcessInsuranceFiles();
