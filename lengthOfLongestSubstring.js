const lengthOfLongestSubstring = function (s) {


    let b = s[0], temp;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j <= s.length - i + 1; j++) {
            let a = s.slice(i, j)
            temp = 0
            for (let k = 0; k < a.length && temp == 0; k++) {

                if (a[k] == a[k + 1]) { temp++; break }
            }

            if (temp > 0) { continue }

            if (a != b && (a).length > b.length) {
                temp = 0;

                for (let k = 0; k < a.length && temp == 0; k++) {                // for the starting point of our substring
                    for (let l = k + 1; l < a.length && temp == 0; l++) {    // for the ending point of our substring
                        let sub_string = a.slice(k, l)

                        for (let m = 0; m < a.length && temp == 0; m += l - k) {
                            if (m != k) {

                                if (sub_string == a.slice(m, m + l - k)) {
                                    temp++;
                                    break;
                                }
                            }

                        }

                    }
                }
                if (temp == 0) { b = a }
            }


        }
    }

    if (b != undefined) { return b.length }
    else { return 0 }
};

