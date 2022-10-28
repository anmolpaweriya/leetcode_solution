/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const db = {}
var encode = function(longUrl) {
    let c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let r = ''
    for(let i = 0 ; i< 6; i++){
        r += c[Math.floor(Math.random() * (c.length - 1))]
    }
    db[r] = longUrl;
            
        
    
    return `http://tinyurl.com/${r}`;
    // return r
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let a = shortUrl.slice(-6);
    return db[a];
    // delete db[a];
    // return b
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
