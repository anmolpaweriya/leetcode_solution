/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let result = x;
        functions.forEach((e,i)=>{
            result = functions.at(-i-1)(result);
        })

        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
