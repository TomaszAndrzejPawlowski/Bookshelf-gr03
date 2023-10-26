let t;function e(t){return t&&t.__esModule?t.default:t}var r,n,o,i,s,a=globalThis;function l(t,e){return function(){return t.apply(e,arguments)}}// utils is a library of generic helper functions non-specific to axios
const{toString:u}=Object.prototype,{getPrototypeOf:c}=Object,f=(r=Object.create(null),t=>{let e=u.call(t);return r[e]||(r[e]=e.slice(8,-1).toLowerCase())}),h=t=>(t=t.toLowerCase(),e=>f(e)===t),d=t=>e=>typeof e===t,{isArray:p}=Array,m=d("undefined"),g=h("ArrayBuffer"),y=d("string"),b=d("function"),E=d("number"),w=t=>null!==t&&"object"==typeof t,v=t=>{if("object"!==f(t))return!1;let e=c(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},A=h("Date"),S=h("File"),C=h("Blob"),L=h("FileList"),O=h("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function R(t,e,{allOwnKeys:r=!1}={}){let n,o;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),p(t))for(n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else{let o;// Iterate over object keys
let i=r?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;for(n=0;n<s;n++)o=i[n],e.call(null,t[o],o,t)}}}function k(t,e){let r;e=e.toLowerCase();let n=Object.keys(t),o=n.length;for(;o-- >0;)if(e===(r=n[o]).toLowerCase())return r;return null}const T=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:a,B=t=>!m(t)&&t!==T,_=(n="undefined"!=typeof Uint8Array&&c(Uint8Array),t=>n&&t instanceof n),U=h("HTMLFormElement"),x=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),N=h("RegExp"),j=(t,e)=>{let r=Object.getOwnPropertyDescriptors(t),n={};R(r,(r,o)=>{let i;!1!==(i=e(r,o,t))&&(n[o]=i||r)}),Object.defineProperties(t,n)},P="abcdefghijklmnopqrstuvwxyz",I="0123456789",F={DIGIT:I,ALPHA:P,ALPHA_DIGIT:P+P.toUpperCase()+I},D=h("AsyncFunction");var H={isArray:p,isArrayBuffer:g,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!m(t)&&null!==t.constructor&&!m(t.constructor)&&b(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||b(t.append)&&("formdata"===(e=f(t))||// detect form-data instance
"object"===e&&b(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&g(t.buffer)},isString:y,isNumber:E,isBoolean:t=>!0===t||!1===t,isObject:w,isPlainObject:v,isUndefined:m,isDate:A,isFile:S,isBlob:C,isRegExp:N,isFunction:b,isStream:t=>w(t)&&b(t.pipe),isURLSearchParams:O,isTypedArray:_,isFileList:L,forEach:R,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function t(){let{caseless:e}=B(this)&&this||{},r={},n=(n,o)=>{let i=e&&k(r,o)||o;v(r[i])&&v(n)?r[i]=t(r[i],n):v(n)?r[i]=t({},n):p(n)?r[i]=n.slice():r[i]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&R(arguments[t],n);return r},extend:(t,e,r,{allOwnKeys:n}={})=>(R(e,(e,n)=>{r&&b(e)?t[n]=l(e,r):t[n]=e},{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:(t,e,r,n)=>{let o,i,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(i=(o=Object.getOwnPropertyNames(t)).length;i-- >0;)s=o[i],(!n||n(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=!1!==r&&c(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype)return e},kindOf:f,kindOfTest:h,endsWith:(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;let n=t.indexOf(e,r);return -1!==n&&n===r},toArray:t=>{if(!t)return null;if(p(t))return t;let e=t.length;if(!E(e))return null;let r=Array(e);for(;e-- >0;)r[e]=t[e];return r},forEachEntry:(t,e)=>{let r;let n=t&&t[Symbol.iterator],o=n.call(t);for(;(r=o.next())&&!r.done;){let n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let r;let n=[];for(;null!==(r=t.exec(e));)n.push(r);return n},isHTMLForm:U,hasOwnProperty:x,hasOwnProp:x,reduceDescriptors:j,freezeMethods:t=>{j(t,(e,r)=>{// skip restricted props in strict mode
if(b(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=t[r];if(b(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(t,e)=>{let r={};return(t=>{t.forEach(t=>{r[t]=!0})})(p(t)?t:String(t).split(e)),r},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,r){return e.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:k,global:T,isContextDefined:B,ALPHABET:F,generateString:(t=16,e=F.ALPHA_DIGIT)=>{let r="",{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&b(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),r=(t,n)=>{if(w(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;let o=p(t)?[]:{};return R(t,(t,e)=>{let i=r(t,n+1);m(i)||(o[e]=i)}),e[n]=void 0,o}}return t};return r(t,0)},isAsyncFn:D,isThenable:t=>t&&(w(t)||b(t))&&b(t.then)&&b(t.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function M(t,e,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}H.inherits(M,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:H.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const q=M.prototype,z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{z[t]={value:t}}),Object.defineProperties(M,z),Object.defineProperty(q,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
M.from=(t,e,r,n,o,i)=>{let s=Object.create(q);return H.toFlatObject(t,s,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),M.call(s,t.message,e,r,n,o),s.cause=t,s.name=t.name,i&&Object.assign(s,i),s},o=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,r=t.length,n=r%3// if we have 1 byte left, pad 2 bytes
,o=[],i=0,s=r-n;i<s;i+=16383// must be multiple of 3
)o.push(function(t,e,r){for(var n,o=[],i=e;i<r;i+=3)o.push($[(n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]))>>18&63]+$[n>>12&63]+$[n>>6&63]+$[63&n]);return o.join("")}(t,i,i+16383>s?s:i+16383));return 1===n?o.push($[(e=t[r-1])>>2]+$[e<<4&63]+"=="):2===n&&o.push($[(e=(t[r-2]<<8)+t[r-1])>>10]+$[e>>4&63]+$[e<<2&63]+"="),o.join("")};for(var $=[],J=[],W="undefined"!=typeof Uint8Array?Uint8Array:Array,V="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",K=0,G=V.length;K<G;++K)$[K]=V[K],J[V.charCodeAt(K)]=K;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
J["-".charCodeAt(0)]=62,J["_".charCodeAt(0)]=63,i=function(t,e,r,n,o){var i,s,a=8*o-n-1,l=(1<<a)-1,u=l>>1,c=-7,f=r?o-1:0,h=r?-1:1,d=t[e+f];for(f+=h,i=d&(1<<-c)-1,d>>=-c,c+=a;c>0;i=256*i+t[e+f],f+=h,c-=8);for(s=i&(1<<-c)-1,i>>=-c,c+=n;c>0;s=256*s+t[e+f],f+=h,c-=8);if(0===i)i=1-u;else{if(i===l)return s?NaN:(d?-1:1)*(1/0);s+=Math.pow(2,n),i-=u}return(d?-1:1)*s*Math.pow(2,i-n)},s=function(t,e,r,n,o,i){var s,a,l,u=8*i-o-1,c=(1<<u)-1,f=c>>1,h=23===o?5960464477539062e-23:0,d=n?0:i-1,p=n?1:-1,m=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+f>=1?e+=h/l:e+=h*Math.pow(2,1-f),e*l>=2&&(s++,l/=2),s+f>=c?(a=0,s=c):s+f>=1?(a=(e*l-1)*Math.pow(2,o),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;t[r+d]=255&a,d+=p,a/=256,o-=8);for(s=s<<o|a,u+=o;u>0;t[r+d]=255&s,d+=p,s/=256,u-=8);t[r+d-p]|=128*m};var Y="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function X(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
var e=new Uint8Array(t);return Object.setPrototypeOf(e,Q.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function Q(t,e,r){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return te(t)}return Z(t,e,r)}function Z(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!Q.isEncoding(e))throw TypeError("Unknown encoding: "+e);var r=0|ti(t,e),n=X(r),o=n.write(t,e);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(tw(t,Uint8Array)){var e=new Uint8Array(t);return tn(e.buffer,e.byteOffset,e.byteLength)}return tr(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(tw(t,ArrayBuffer)||t&&tw(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tw(t,SharedArrayBuffer)||t&&tw(t.buffer,SharedArrayBuffer)))return tn(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return Q.from(n,e,r);var o=function(t){if(Q.isBuffer(t)){var e,r=0|to(t.length),n=X(r);return 0===n.length||t.copy(n,0,0,r),n}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?X(0):tr(t):"Buffer"===t.type&&Array.isArray(t.data)?tr(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return Q.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function tt(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function te(t){return tt(t),X(t<0?0:0|to(t))}function tr(t){for(var e=t.length<0?0:0|to(t.length),r=X(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function tn(t,e,r){var n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Q.prototype),n)}function to(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function ti(t,e){if(Q.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||tw(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(// Use a for loop to avoid recursion
var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return ty(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return tb(t).length;default:if(o)return n?-1:ty(t).length// assume utf8
;e=(""+e).toLowerCase(),o=!0}}function ts(t,e,r){var n,i,s=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=tv[t[i]];return o}(this,e,r);case"utf8":case"utf-8":return tc(this,e,r);case"ascii":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}(this,e,r);case"base64":return n=e,i=r,0===n&&i===this.length?o(this):o(this.slice(n,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(var n=t.slice(e,r),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,e,r);default:if(s)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),s=!0}}function ta(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function tl(t,e,r,n,o){var i;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return -1;r=t.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=Q.from(e,n)),Q.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:tu(t,e,r,n,o));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):tu(t,[e],r,n,o);throw TypeError("val must be string, number or Buffer")}function tu(t,e,r,n,o){var i,s=1,a=t.length,l=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;s=2,a/=2,l/=2,r/=2}function u(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var c=-1;for(i=r;i<a;i++)if(u(t,i)===u(e,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===l)return c*s}else -1!==c&&(i-=i-c),c=-1}else for(r+l>a&&(r=a-l),i=r;i>=0;i--){for(var f=!0,h=0;h<l;h++)if(u(t,i+h)!==u(e,h)){f=!1;break}if(f)return i}return -1}function tc(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,s,a,l,u=t[o],c=null,f=u>239?4:u>223?3:u>191?2:1;if(o+f<=r)switch(f){case 1:u<128&&(c=u);break;case 2:(192&(i=t[o+1]))==128&&(l=(31&u)<<6|63&i)>127&&(c=l);break;case 3:i=t[o+1],s=t[o+2],(192&i)==128&&(192&s)==128&&(l=(15&u)<<12|(63&i)<<6|63&s)>2047&&(l<55296||l>57343)&&(c=l);break;case 4:i=t[o+1],s=t[o+2],a=t[o+3],(192&i)==128&&(192&s)==128&&(192&a)==128&&(l=(15&u)<<18|(63&i)<<12|(63&s)<<6|63&a)>65535&&l<1114112&&(c=l)}null===c?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
c=65533,f=1):c>65535&&(// encode to utf16 (surrogate pair dance)
c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=f}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;for(// Decode in chunks to avoid "call stack size exceeded".
var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function tf(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function th(t,e,r,n,o,i){if(!Q.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function td(t,e,r,n,o,i){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function tp(t,e,r,n,o){return e=+e,r>>>=0,o||td(t,e,r,4,34028234663852886e22,-34028234663852886e22),s(t,e,r,n,23,4),r+4}function tm(t,e,r,n,o){return e=+e,r>>>=0,o||td(t,e,r,8,17976931348623157e292,-17976931348623157e292),s(t,e,r,n,52,8),r+8}/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */Q.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),Q.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Q.prototype,"parent",{enumerable:!0,get:function(){if(Q.isBuffer(this))return this.buffer}}),Object.defineProperty(Q.prototype,"offset",{enumerable:!0,get:function(){if(Q.isBuffer(this))return this.byteOffset}}),Q.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/Q.from=function(t,e,r){return Z(t,e,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Q.prototype,Uint8Array.prototype),Object.setPrototypeOf(Q,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/Q.alloc=function(t,e,r){return(tt(t),t<=0)?X(t):void 0!==e?"string"==typeof r?X(t).fill(e,r):X(t).fill(e):X(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */Q.allocUnsafe=function(t){return te(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */Q.allocUnsafeSlow=function(t){return te(t)},Q.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==Q.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},Q.compare=function(t,e){if(tw(t,Uint8Array)&&(t=Q.from(t,t.offset,t.byteLength)),tw(e,Uint8Array)&&(e=Q.from(e,e.offset,e.byteLength)),!Q.isBuffer(t)||!Q.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},Q.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Q.concat=function(t,e){if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Q.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;var r,n=Q.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(tw(i,Uint8Array))o+i.length>n.length?Q.from(i).copy(n,o):Uint8Array.prototype.set.call(n,i,o);else if(Q.isBuffer(i))i.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=i.length}return n},Q.byteLength=ti,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Q.prototype._isBuffer=!0,Q.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)ta(this,e,e+1);return this},Q.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)ta(this,e,e+3),ta(this,e+1,e+2);return this},Q.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)ta(this,e,e+7),ta(this,e+1,e+6),ta(this,e+2,e+5),ta(this,e+3,e+4);return this},Q.prototype.toString=function(){var t=this.length;return 0===t?"":0==arguments.length?tc(this,0,t):ts.apply(this,arguments)},Q.prototype.toLocaleString=Q.prototype.toString,Q.prototype.equals=function(t){if(!Q.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===Q.compare(this,t)},Q.prototype.inspect=function(){var t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},Y&&(Q.prototype[Y]=Q.prototype.inspect),Q.prototype.compare=function(t,e,r,n,o){if(tw(t,Uint8Array)&&(t=Q.from(t,t.offset,t.byteLength)),!Q.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var i=o-n,s=r-e,a=Math.min(i,s),l=this.slice(n,o),u=t.slice(e,r),c=0;c<a;++c)if(l[c]!==u[c]){i=l[c],s=u[c];break}return i<s?-1:s<i?1:0},Q.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},Q.prototype.indexOf=function(t,e,r){return tl(this,t,e,r,!0)},Q.prototype.lastIndexOf=function(t,e,r){return tl(this,t,e,r,!1)},Q.prototype.write=function(t,e,r,n){// Buffer#write(string)
if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,s,a,l,u,c,f,h=this.length-e;if((void 0===r||r>h)&&(r=h),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var d=!1;;)switch(n){case"hex":return function(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;n>i/2&&(n=i/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(a!=a)break;t[r+s]=a}return s}(this,t,e,r);case"utf8":case"utf-8":return o=e,i=r,tE(ty(t,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return s=e,a=r,tE(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return l=e,u=r,tE(tb(t),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=e,f=r,tE(function(t,e){for(var r,n,o=[],i=0;i<t.length&&!((e-=2)<0);++i)n=(r=t.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(t,this.length-c),this,c,f);default:if(d)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),d=!0}},Q.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},Q.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,Q.prototype),n)},Q.prototype.readUintLE=Q.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tf(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},Q.prototype.readUintBE=Q.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tf(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},Q.prototype.readUint8=Q.prototype.readUInt8=function(t,e){return t>>>=0,e||tf(t,1,this.length),this[t]},Q.prototype.readUint16LE=Q.prototype.readUInt16LE=function(t,e){return t>>>=0,e||tf(t,2,this.length),this[t]|this[t+1]<<8},Q.prototype.readUint16BE=Q.prototype.readUInt16BE=function(t,e){return t>>>=0,e||tf(t,2,this.length),this[t]<<8|this[t+1]},Q.prototype.readUint32LE=Q.prototype.readUInt32LE=function(t,e){return t>>>=0,e||tf(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Q.prototype.readUint32BE=Q.prototype.readUInt32BE=function(t,e){return t>>>=0,e||tf(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Q.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tf(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},Q.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tf(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},Q.prototype.readInt8=function(t,e){return(t>>>=0,e||tf(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},Q.prototype.readInt16LE=function(t,e){t>>>=0,e||tf(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},Q.prototype.readInt16BE=function(t,e){t>>>=0,e||tf(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},Q.prototype.readInt32LE=function(t,e){return t>>>=0,e||tf(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Q.prototype.readInt32BE=function(t,e){return t>>>=0,e||tf(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Q.prototype.readFloatLE=function(t,e){return t>>>=0,e||tf(t,4,this.length),i(this,t,!0,23,4)},Q.prototype.readFloatBE=function(t,e){return t>>>=0,e||tf(t,4,this.length),i(this,t,!1,23,4)},Q.prototype.readDoubleLE=function(t,e){return t>>>=0,e||tf(t,8,this.length),i(this,t,!0,52,8)},Q.prototype.readDoubleBE=function(t,e){return t>>>=0,e||tf(t,8,this.length),i(this,t,!1,52,8)},Q.prototype.writeUintLE=Q.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;th(this,t,e,r,o,0)}var i=1,s=0;for(this[e]=255&t;++s<r&&(i*=256);)this[e+s]=t/i&255;return e+r},Q.prototype.writeUintBE=Q.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;th(this,t,e,r,o,0)}var i=r-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+r},Q.prototype.writeUint8=Q.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,1,255,0),this[e]=255&t,e+1},Q.prototype.writeUint16LE=Q.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},Q.prototype.writeUint16BE=Q.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},Q.prototype.writeUint32LE=Q.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},Q.prototype.writeUint32BE=Q.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Q.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);th(this,t,e,r,o-1,-o)}var i=0,s=1,a=0;for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+r},Q.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);th(this,t,e,r,o-1,-o)}var i=r-1,s=1,a=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+r},Q.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},Q.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},Q.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},Q.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},Q.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Q.prototype.writeFloatLE=function(t,e,r){return tp(this,t,e,!0,r)},Q.prototype.writeFloatBE=function(t,e,r){return tp(this,t,e,!1,r)},Q.prototype.writeDoubleLE=function(t,e,r){return tm(this,t,e,!0,r)},Q.prototype.writeDoubleBE=function(t,e,r){return tm(this,t,e,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Q.prototype.copy=function(t,e,r,n){if(!Q.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Q.prototype.fill=function(t,e,r,n){// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!Q.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){var o,i=t.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(t=i)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var s=Q.isBuffer(t)?t:Q.from(t,n),a=s.length;if(0===a)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=s[o%a]}return this};// HELPER FUNCTIONS
// ================
var tg=/[^+/0-9A-Za-z-_]/g;function ty(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],s=0;s<n;++s){// is surrogate component
if((r=t.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||s+1===n){// unexpected trail
(e-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function tb(t){return function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),o=n[0],i=n[1],s=new W((o+i)*3/4-i),a=0,l=i>0?o-4:o;for(r=0;r<l;r+=4)e=J[t.charCodeAt(r)]<<18|J[t.charCodeAt(r+1)]<<12|J[t.charCodeAt(r+2)]<<6|J[t.charCodeAt(r+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;return 2===i&&(e=J[t.charCodeAt(r)]<<2|J[t.charCodeAt(r+1)]>>4,s[a++]=255&e),1===i&&(e=J[t.charCodeAt(r)]<<10|J[t.charCodeAt(r+1)]<<4|J[t.charCodeAt(r+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e),s}(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(tg,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function tE(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length)&&!(o>=t.length);++o)e[o+r]=t[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function tw(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var tv=function(){for(var t="0123456789abcdef",e=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)e[n+o]=t[r]+t[o];return e}();/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function tA(t){return H.isPlainObject(t)||H.isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function tS(t){return H.endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function tC(t,e,r){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=tS(t),!r&&e?"["+t+"]":t)}).join(r?".":""):e}const tL=H.toFlatObject(H,{},null,function(t){return/^is[A-Z]/.test(t)});var tO=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(t,e,r){if(!H.isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new FormData,// eslint-disable-next-line no-param-reassign
r=H.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!H.isUndefined(e[t])});let n=r.metaTokens,o=r.visitor||c,i=r.dots,s=r.indexes,a=r.Blob||"undefined"!=typeof Blob&&Blob,l=a&&H.isSpecCompliantForm(e);if(!H.isFunction(o))throw TypeError("visitor must be a function");function u(t){if(null===t)return"";if(H.isDate(t))return t.toISOString();if(!l&&H.isBlob(t))throw new M("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(t)||H.isTypedArray(t)?l&&"function"==typeof Blob?new Blob([t]):Q.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function c(t,r,o){let a=t;if(t&&!o&&"object"==typeof t){if(H.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var l;if(H.isArray(t)&&(l=t,H.isArray(l)&&!l.some(tA))||(H.isFileList(t)||H.endsWith(r,"[]"))&&(a=H.toArray(t)))return(// eslint-disable-next-line no-param-reassign
r=tS(r),a.forEach(function(t,n){H.isUndefined(t)||null===t||e.append(!0===s?tC([r],n,i):null===s?r:r+"[]",u(t))}),!1)}}return!!tA(t)||(e.append(tC(o,r,i),u(t)),!1)}let f=[],h=Object.assign(tL,{defaultVisitor:c,convertValue:u,isVisitable:tA});if(!H.isObject(t))throw TypeError("data must be an object");return!function t(r,n){if(!H.isUndefined(r)){if(-1!==f.indexOf(r))throw Error("Circular reference detected in "+n.join("."));f.push(r),H.forEach(r,function(r,i){let s=!(H.isUndefined(r)||null===r)&&o.call(e,r,H.isString(i)?i.trim():i,n,h);!0===s&&t(r,n?n.concat(i):[i])}),f.pop()}}(t),e};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function tR(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function tk(t,e){this._pairs=[],t&&tO(t,this,e)}const tT=tk.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tB(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function t_(t,e,r){let n;/*eslint no-param-reassign:0*/if(!e)return t;let o=r&&r.encode||tB,i=r&&r.serialize;if(n=i?i(e,r):H.isURLSearchParams(e)?e.toString():new tk(e,r).toString(o)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+n}return t}tT.append=function(t,e){this._pairs.push([t,e])},tT.toString=function(t){let e=t?function(e){return t.call(this,e,tR)}:tR;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var tU=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(t){this.handlers[t]&&(this.handlers[t]=null)}/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(t){H.forEach(this.handlers,function(e){null!==e&&t(e)})}},tx={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tN="undefined"!=typeof URLSearchParams?URLSearchParams:tk,tj="undefined"!=typeof FormData?FormData:null,tP="undefined"!=typeof Blob?Blob:null;/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */const tI=("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&"undefined"!=typeof window&&"undefined"!=typeof document,tF="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var tD={classes:{URLSearchParams:tN,FormData:tj,Blob:tP},isStandardBrowserEnv:tI,isStandardBrowserWebWorkerEnv:tF,protocols:["http","https","file","blob","url","data"]},tH=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if(H.isFormData(t)&&H.isFunction(t.entries)){let e={};return H.forEachEntry(t,(t,r)=>{!function t(e,r,n,o){let i=e[o++],s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&H.isArray(n)?n.length:i,a)return H.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!s;n[i]&&H.isObject(n[i])||(n[i]=[]);let l=t(e,r,n[i],o);return l&&H.isArray(n[i])&&(n[i]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,r;let n={},o=Object.keys(t),i=o.length;for(e=0;e<i;e++)n[r=o[e]]=t[r];return n}(n[i])),!s}(H.matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),r,e,0)}),e}return null};const tM={transitional:tx,adapter:["xhr","http"],transformRequest:[function(t,e){let r;let n=e.getContentType()||"",o=n.indexOf("application/json")>-1,i=H.isObject(t);i&&H.isHTMLForm(t)&&(t=new FormData(t));let s=H.isFormData(t);if(s)return o&&o?JSON.stringify(tH(t)):t;if(H.isArrayBuffer(t)||H.isBuffer(t)||H.isStream(t)||H.isFile(t)||H.isBlob(t))return t;if(H.isArrayBufferView(t))return t.buffer;if(H.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,l;return(a=t,l=this.formSerializer,tO(a,new tD.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,n){return tD.isNode&&H.isBuffer(t)?(this.append(e,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},l))).toString()}if((r=H.isFileList(t))||n.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return tO(r?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||o?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,r){if(H.isString(t))try{return(0,JSON.parse)(t),H.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||tM.transitional,r=e&&e.forcedJSONParsing,n="json"===this.responseType;if(t&&H.isString(t)&&(r&&!this.responseType||n)){let r=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!r&&n){if("SyntaxError"===t.name)throw M.from(t,M.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tD.classes.FormData,Blob:tD.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],t=>{tM.headers[t]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const tq=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */tz=t=>{let e,r,n;let o={};return t&&t.split("\n").forEach(function(t){n=t.indexOf(":"),e=t.substring(0,n).trim().toLowerCase(),r=t.substring(n+1).trim(),!e||o[e]&&tq[e]||("set-cookie"===e?o[e]?o[e].push(r):o[e]=[r]:o[e]=o[e]?o[e]+", "+r:r)}),o};const t$=Symbol("internals");function tJ(t){return t&&String(t).trim().toLowerCase()}function tW(t){return!1===t||null==t?t:H.isArray(t)?t.map(tW):String(t)}const tV=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function tK(t,e,r,n,o){if(H.isFunction(n))return n.call(this,e,r);if(o&&(e=r),H.isString(e)){if(H.isString(n))return -1!==e.indexOf(n);if(H.isRegExp(n))return n.test(e)}}class tG{constructor(t){t&&this.set(t)}set(t,e,r){let n=this;function o(t,e,r){let o=tJ(e);if(!o)throw Error("header name must be a non-empty string");let i=H.findKey(n,o);i&&void 0!==n[i]&&!0!==r&&(void 0!==r||!1===n[i])||(n[i||e]=tW(t))}let i=(t,e)=>H.forEach(t,(t,r)=>o(t,r,e));return H.isPlainObject(t)||t instanceof this.constructor?i(t,e):H.isString(t)&&(t=t.trim())&&!tV(t)?i(tz(t),e):null!=t&&o(e,t,r),this}get(t,e){if(t=tJ(t)){let r=H.findKey(this,t);if(r){let t=this[r];if(!e)return t;if(!0===e)return function(t){let e;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=n.exec(t);)r[e[1]]=e[2];return r}(t);if(H.isFunction(e))return e.call(this,t,r);if(H.isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=tJ(t)){let r=H.findKey(this,t);return!!(r&&void 0!==this[r]&&(!e||tK(this,this[r],r,e)))}return!1}delete(t,e){let r=this,n=!1;function o(t){if(t=tJ(t)){let o=H.findKey(r,t);o&&(!e||tK(r,r[o],o,e))&&(delete r[o],n=!0)}}return H.isArray(t)?t.forEach(o):o(t),n}clear(t){let e=Object.keys(this),r=e.length,n=!1;for(;r--;){let o=e[r];(!t||tK(this,this[o],o,t,!0))&&(delete this[o],n=!0)}return n}normalize(t){let e=this,r={};return H.forEach(this,(n,o)=>{let i=H.findKey(r,o);if(i){e[i]=tW(n),delete e[o];return}let s=t?o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r):String(o).trim();s!==o&&delete e[o],e[s]=tW(n),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return H.forEach(this,(r,n)=>{null!=r&&!1!==r&&(e[n]=t&&H.isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let r=new this(t);return e.forEach(t=>r.set(t)),r}static accessor(t){let e=this[t$]=this[t$]={accessors:{}},r=e.accessors,n=this.prototype;function o(t){let e=tJ(t);r[e]||(!function(t,e){let r=H.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(t,r,o){return this[n].call(this,e,t,r,o)},configurable:!0})})}(n,t),r[e]=!0)}return H.isArray(t)?t.forEach(o):o(t),this}}function tY(t,e){let r=this||tM,n=e||r,o=tG.from(n.headers),i=n.data;return H.forEach(t,function(t){i=t.call(r,i,o.normalize(),e?e.status:void 0)}),o.normalize(),i}function tX(t){return!!(t&&t.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function tQ(t,e,r){M.call(this,null==t?"canceled":t,M.ERR_CANCELED,e,r),this.name="CanceledError"}tG.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),H.reduceDescriptors(tG.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[r]=t}}}),H.freezeMethods(tG),H.inherits(tQ,M,{__CANCEL__:!0});var tZ=tD.isStandardBrowserEnv?{write:function(t,e,r,n,o,i){let s=[];s.push(t+"="+encodeURIComponent(e)),H.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),H.isString(n)&&s.push("path="+n),H.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function t0(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t:e}var t1=tD.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let t;let e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function n(t){let n=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=n(window.location.href),function(e){let r=H.isString(e)?n(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0},t2=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let r;t=t||10;let n=Array(t),o=Array(t),i=0,s=0;return e=void 0!==e?e:1e3,function(a){let l=Date.now(),u=o[s];r||(r=l),n[i]=a,o[i]=l;let c=s,f=0;for(;c!==i;)f+=n[c++],c%=t;if((i=(i+1)%t)===s&&(s=(s+1)%t),l-r<e)return;let h=u&&l-u;return h?Math.round(1e3*f/h):void 0}};function t6(t,e){let r=0,n=t2(50,250);return o=>{let i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,l=n(a),u=i<=s;r=i;let c={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&u?(s-i)/l:void 0,event:o};c[e?"download":"upload"]=!0,t(c)}}const t8="undefined"!=typeof XMLHttpRequest;var t5=t8&&function(t){return new Promise(function(e,r){let n,o,i=t.data,s=tG.from(t.headers).normalize(),a=t.responseType;function l(){t.cancelToken&&t.cancelToken.unsubscribe(n),t.signal&&t.signal.removeEventListener("abort",n)}H.isFormData(i)&&(tD.isStandardBrowserEnv||tD.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.getContentType(/^\s*multipart\/form-data/)?H.isString(o=s.getContentType())&&s.setContentType(o.replace(/^\s*(multipart\/form-data);+/,"$1")):s.setContentType("multipart/form-data"));let u=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(e+":"+r))}let c=t0(t.baseURL,t.url);function f(){if(!u)return;// Prepare the response
let n=tG.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),o=a&&"text"!==a&&"json"!==a?u.response:u.responseText,i={data:o,status:u.status,statusText:u.statusText,headers:n,config:t,request:u};!function(t,e,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?t(r):e(new M("Request failed with status code "+r.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(t){e(t),l()},function(t){r(t),l()},i),// Clean up request
u=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(u.open(t.method.toUpperCase(),t_(c,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
u.timeout=t.timeout,"onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(f)},// Handle browser request cancellation (as opposed to a manual cancellation)
u.onabort=function(){u&&(r(new M("Request aborted",M.ECONNABORTED,t,u)),// Clean up request
u=null)},// Handle low level network errors
u.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new M("Network Error",M.ERR_NETWORK,t,u)),// Clean up request
u=null},// Handle timeout
u.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||tx;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new M(e,n.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,t,u)),// Clean up request
u=null},tD.isStandardBrowserEnv){// Add xsrf header
let e=(t.withCredentials||t1(c))&&t.xsrfCookieName&&tZ.read(t.xsrfCookieName);e&&s.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===i&&s.setContentType(null),"setRequestHeader"in u&&H.forEach(s.toJSON(),function(t,e){u.setRequestHeader(e,t)}),H.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),a&&"json"!==a&&(u.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&u.addEventListener("progress",t6(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",t6(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=e=>{u&&(r(!e||e.type?new tQ(null,t,u):e),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(n),t.signal&&(t.signal.aborted?n():t.signal.addEventListener("abort",n)));let h=function(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(c);if(h&&-1===tD.protocols.indexOf(h)){r(new M("Unsupported protocol "+h+":",M.ERR_BAD_REQUEST,t));return}// Send the request
u.send(i||null)})};const t3={http:null,xhr:t5};H.forEach(t3,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});const t4=t=>`- ${t}`,t7=t=>H.isFunction(t)||null===t||!1===t;var t9={getAdapter:t=>{let e,r;t=H.isArray(t)?t:[t];let{length:n}=t,o={};for(let i=0;i<n;i++){let n;if(r=e=t[i],!t7(e)&&void 0===(r=t3[(n=String(e)).toLowerCase()]))throw new M(`Unknown adapter '${n}'`);if(r)break;o[n||"#"+i]=r}if(!r){let t=Object.entries(o).map(([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build"));throw new M("There is no suitable adapter to dispatch the request "+(n?t.length>1?"since :\n"+t.map(t4).join("\n"):" "+t4(t[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r},adapters:t3};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function et(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new tQ(null,t)}function ee(t){et(t),t.headers=tG.from(t.headers),// Transform request data
t.data=tY.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=t9.getAdapter(t.adapter||tM.adapter);return e(t).then(function(e){return et(t),// Transform response data
e.data=tY.call(t,t.transformResponse,e),e.headers=tG.from(e.headers),e},function(e){return!tX(e)&&(et(t),e&&e.response&&(e.response.data=tY.call(t,t.transformResponse,e.response),e.response.headers=tG.from(e.response.headers))),Promise.reject(e)})}const er=t=>t instanceof tG?t.toJSON():t;function en(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let r={};function n(t,e,r){return H.isPlainObject(t)&&H.isPlainObject(e)?H.merge.call({caseless:r},t,e):H.isPlainObject(e)?H.merge({},e):H.isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function o(t,e,r){return H.isUndefined(e)?H.isUndefined(t)?void 0:n(void 0,t,r):n(t,e,r)}// eslint-disable-next-line consistent-return
function i(t,e){if(!H.isUndefined(e))return n(void 0,e)}// eslint-disable-next-line consistent-return
function s(t,e){return H.isUndefined(e)?H.isUndefined(t)?void 0:n(void 0,t):n(void 0,e)}// eslint-disable-next-line consistent-return
function a(r,o,i){return i in e?n(r,o):i in t?n(void 0,r):void 0}let l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>o(er(t),er(e),!0)};return H.forEach(Object.keys(Object.assign({},t,e)),function(n){let i=l[n]||o,s=i(t[n],e[n],n);H.isUndefined(s)&&i!==a||(r[n]=s)}),r}const eo="1.5.1",ei={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ei[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const es={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ei.transitional=function(t,e,r){function n(t,e){return"[Axios v"+eo+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,o,i)=>{if(!1===t)throw new M(n(o," has been removed"+(e?" in "+e:"")),M.ERR_DEPRECATED);return e&&!es[o]&&(es[o]=!0,// eslint-disable-next-line no-console
console.warn(n(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,o,i)}};var ea={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,r){if("object"!=typeof t)throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);let n=Object.keys(t),o=n.length;for(;o-- >0;){let i=n[o],s=e[i];if(s){let e=t[i],r=void 0===e||s(e,i,t);if(!0!==r)throw new M("option "+i+" must be "+r,M.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new M("Unknown option "+i,M.ERR_BAD_OPTION)}},validators:ei};const el=ea.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class eu{constructor(t){this.defaults=t,this.interceptors={request:new tU,response:new tU}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let r,n;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=en(this.defaults,e);let{transitional:o,paramsSerializer:i,headers:s}=e;void 0!==o&&ea.assertOptions(o,{silentJSONParsing:el.transitional(el.boolean),forcedJSONParsing:el.transitional(el.boolean),clarifyTimeoutError:el.transitional(el.boolean)},!1),null!=i&&(H.isFunction(i)?e.paramsSerializer={serialize:i}:ea.assertOptions(i,{encode:el.function,serialize:el.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&H.merge(s.common,s[e.method]);s&&H.forEach(["delete","get","head","post","put","patch","common"],t=>{delete s[t]}),e.headers=tG.concat(a,s);// filter out skipped interceptors
let l=[],u=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(u=u&&t.synchronous,l.unshift(t.fulfilled,t.rejected))});let c=[];this.interceptors.response.forEach(function(t){c.push(t.fulfilled,t.rejected)});let f=0;if(!u){let t=[ee.bind(this),void 0];for(t.unshift.apply(t,l),t.push.apply(t,c),n=t.length,r=Promise.resolve(e);f<n;)r=r.then(t[f++],t[f++]);return r}n=l.length;let h=e;for(f=0;f<n;){let t=l[f++],e=l[f++];try{h=t(h)}catch(t){e.call(this,t);break}}try{r=ee.call(this,h)}catch(t){return Promise.reject(t)}for(f=0,n=c.length;f<n;)r=r.then(c[f++],c[f++]);return r}getUri(t){t=en(this.defaults,t);let e=t0(t.baseURL,t.url);return t_(e,t.params,t.paramsSerializer)}}H.forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/eu.prototype[t]=function(e,r){return this.request(en(r||{},{method:t,url:e,data:(r||{}).data}))}}),H.forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(r,n,o){return this.request(en(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}eu.prototype[t]=e(),eu.prototype[t+"Form"]=e(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class ec{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let r=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!r._listeners)return;let e=r._listeners.length;for(;e-- >0;)r._listeners[e](t);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let n=new Promise(t=>{r.subscribe(t),e=t}).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t(function(t,n,o){r.reason||(r.reason=new tQ(t,n,o),e(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new ec(function(e){t=e});return{token:e,cancel:t}}}const ef={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ef).forEach(([t,e])=>{ef[e]=t});// Create the default instance to be exported
const eh=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let r=new eu(e),n=l(eu.prototype.request,r);return H.extend(n,eu.prototype,r,{allOwnKeys:!0}),H.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return t(en(e,r))},n}(tM);// Expose Axios class to allow class inheritance
eh.Axios=eu,// Expose Cancel & CancelToken
eh.CanceledError=tQ,eh.CancelToken=ec,eh.isCancel=tX,eh.VERSION=eo,eh.toFormData=tO,// Expose AxiosError class
eh.AxiosError=M,// alias for CanceledError for backward compatibility
eh.Cancel=eh.CanceledError,// Expose all/spread
eh.all=function(t){return Promise.all(t)},eh.spread=function(t){return function(e){return t.apply(null,e)}},// Expose isAxiosError
eh.isAxiosError=function(t){return H.isObject(t)&&!0===t.isAxiosError},// Expose mergeConfig
eh.mergeConfig=en,eh.AxiosHeaders=tG,eh.formToJSON=t=>tH(H.isHTMLForm(t)?new FormData(t):t),eh.getAdapter=t9.getAdapter,eh.HttpStatusCode=ef,eh.default=eh;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:ed,AxiosError:ep,CanceledError:em,isCancel:eg,CancelToken:ey,VERSION:eb,all:eE,Cancel:ew,isAxiosError:ev,spread:eA,toFormData:eS,AxiosHeaders:eC,HttpStatusCode:eL,formToJSON:eO,getAdapter:eR,mergeConfig:ek}=eh;async function eT(t){let e=`https://books-backend.p.goit.global/books/category?category=${t}`;try{let t=await eh.get(e);if(200!==t.status)throw Error("Failed to fetch books");return t.data}catch(t){throw console.error("Error fetching books:",t),Error("Failed to fetch books")}}//////////////////////////////////////////////////////////////////////// karty ksiazki po id///////////////////////////////////
async function eB(t){let e=`https://books-backend.p.goit.global/books/${t}`;try{let t=await eh.get(e);if(200!==t.status)throw Error("Failed to fetch book details");let r=t.data;//console.log(bookDetails);
return r}catch(t){// można obsługę błędu - np. wyświetlenie komunikatu dla użytkownika
throw console.error("Error fetching book details:",t),Error("Failed to fetch book details")}}async function e_(){try{let t=await eh.get("https://books-backend.p.goit.global/books/category-list");return t.data}catch(t){throw console.error("Error fetching categories:",t),Error("Failed to fetch categories")}}async function eU(t){try{let t=await eh.get("https://books-backend.p.goit.global/books/top-books");if(200!==t.status)throw Error("Failed to fetch books");return t.data}catch(t){throw console.error("Error fetching books:",t),Error("Failed to fetch books")}}var ex={};ex=new URL("book.eff40568.png",import.meta.url).toString();var eN={};eN=new URL("amazon.8d9e86b1.png",import.meta.url).toString();var ej={};ej=new URL("trash.12ed25ac.svg",import.meta.url).toString();const eP=document.getElementById("shoppBookList");//funkcja do pobierania dancyh oraz do tworzenia pojedynczego elementu
async function eI(t){let r=await eB(t);!//tworzenie pojedynczej karty książki
function({bookDetails:t}){let r=`<li class="shopList-item">
  <button class="remove-button" type="button"><p class="bookId">${t._id}</p>
  <img class="remove-button__icon" alt="trash icon" src=${/*@__PURE__*/e(ej)}/>
</button>
<div class="shopList-item__wrapp">
<img class="shopList-item__photo" src=${t.book_image} alt="book photo" loading="lazy"/>
</div>
<div class="shopList-item__information">
<h1>${t.title}</h1>
<p class="shopList-item__category">${t.list_name}</p>
<div class="shopList-item__summary"> 
<p>${t.description}</p>       
</div>
<div class="shopList-item__wrapper">
<p class="shopList-item__author">${t.author}</p>   
<div class="shopList-item__icons">
<a href=${t.amazon_product_url} target="_blank" rel="noopener noreferrer nofollow">
<img alt ="amazon icon" class="icon-shopping amazon-icon" width="32" height:"11" src=${/*@__PURE__*/e(eN)} />
</a>  
<a href=${t.buy_links[1].url} target="_blank">
<img class="icon-shopping aple-icon" src=${/*@__PURE__*/e(ex)} width="16" height="16" alt="aple icon"  rel="noopener noreferrer nofollow"/>
</a>  
</div>
</div>
</div>
</li>`;eP.innerHTML+=r}({bookDetails:r})}function eF(t){let e=document.createElement("div");e.classList.add("book-card"),e.innerHTML=`
    <div class="modal-card-container">
        <div class="popup">
            <button class="modal-close-button">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7L7 21M7 7L21 21" stroke="#111111" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></button>
            <div class="popup-image-desc">
            <div>
                <img class="popup-img" src="${t.book_image}" alt="${t.title}" />
            </div>
            <div class="popup-authorandtitle">
                <h2 class="popup-title">${t.title}</h2>
                <p class="popup-author">Author: ${t.author}</p>
                <p class="popup-desc"> ${t.description}</p>
            </div>
            </div>
          <div class="modal-button-position">
                  <button class="add-to-cart-button" data-book-id="${t._id}">add to shopping list</button>
                  <p class="add-to-cart-message"></p>
          </div>
        </div>
      </div>
  `;let r=e.querySelector(".modal-close-button");r.addEventListener("click",()=>{let t=document.getElementById("bookCardContainer");t.innerHTML=""});let n=e.querySelector(".add-to-cart-button"),o=e.querySelector(".add-to-cart-message"),i=JSON.parse(localStorage.getItem("shoppingList"))||[],s=t._id;i.includes(s)&&(n.textContent="remove from list"),n.addEventListener("click",()=>{if(i.includes(s)){let t=i.indexOf(s);i.splice(t,1),n.textContent="add to shopping list",o.textContent="The book has been removed from the shopping list."}else i.push(s),n.textContent="remove from list",o.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list."';localStorage.setItem("shoppingList",JSON.stringify(i)),console.log("Lista zakup\xf3w w localStorage:",i)});let a=document.getElementById("bookCardContainer");return a.innerHTML="",a.appendChild(e),document.addEventListener("keydown",function(t){if("Escape"===t.key){let t=document.getElementById("bookCardContainer");t.innerHTML=""}}),document.addEventListener("click",function(t){if(t.target.classList.contains("modal-card-container")){let t=document.getElementById("bookCardContainer");t.innerHTML=""}}),e}!// function test() {
//   const booksIdArray = localStorage.getItem('shoppingList');
//   const parsedArrayofBook = JSON.parse(booksIdArray);
//   return parsedArrayofBook;
// }
// function test2(parsedArrayofBookaaaa) {
//   if (parsedArrayofBookaaaa === null) {
//     const emptyTemplate = document.querySelector('.empty-shopping-list');
//     emptyTemplate.classList.add('visible');
//     return;
//   } else {
//     parsedArrayofBookaaaa.forEach(e => createShoppingCard(e));
//   }
// }
// async function creatSchoppingList() {
//   const parsedArrayofBookaaaa = await test();
//   console.log(parsedArrayofBookaaaa);
//   await test2(parsedArrayofBookaaaa);
//   const trash = document.querySelector('.remove-button');
//   console.log(trash);
// }
// funckja do tworzenia całej sekcji shopping list
function(){let t=localStorage.getItem("shoppingList"),e=JSON.parse(t);if(console.log(e),null===e||0===e.length){let t=document.querySelector(".empty-shopping-list");t.classList.add("visible");return}e.forEach(t=>eI(t))}();var eD={};eD=new URL("1org.11712742.svg",import.meta.url).toString();var eH={};eH=new URL("support2.6d865306.svg",import.meta.url).toString();var eM={};eM=new URL("support3.a3ca15ad.svg",import.meta.url).toString();var eq={};eq=new URL("support4.16605e64.svg",import.meta.url).toString();var ez={};ez=new URL("support5.0237806b.svg",import.meta.url).toString();var e$={};e$=new URL("support6.2b2d4d01.svg",import.meta.url).toString();var eJ={};eJ=new URL("support7.30f6f4bc.svg",import.meta.url).toString();var eW={};eW=new URL("support8.c13591df.svg",import.meta.url).toString();var eV={};eV=new URL("support9.217f8265.svg",import.meta.url).toString();const eK=[// ... (fundacje charytatywne)
{title:"",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:/*@__PURE__*/e(eD)},{title:"",url:"https://www.projecthope.org/country/ukraine/",img:/*@__PURE__*/e(eH)},{title:"",url:"https://internationalmedicalcorps.org/country/ukraine/",img:/*@__PURE__*/e(eM)},{title:"",url:"https://www.razomforukraine.org/",img:/*@__PURE__*/e(eq)},{title:"",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:/*@__PURE__*/e(ez)},{title:"",url:"https://prytulafoundation.org/en",img:/*@__PURE__*/e(e$)},{title:"",url:"https://www.msf.org/ukraine",img:/*@__PURE__*/e(eJ)},{title:"",url:"https://www.wvi.org/emergencies/ukraine",img:/*@__PURE__*/e(eW)},{title:"",url:"https://u24.gov.ua/uk",img:/*@__PURE__*/e(eV)}],eG=document.getElementById("charitiesSlider");for(;eG.firstChild;)eG.removeChild(eG.firstChild);eK.forEach(t=>{let e=document.createElement("a");e.href=t.url,e.target="_blank";let r=document.createElement("div");r.classList.add("charity-item");let n=document.createElement("img");n.src=t.img,n.alt=t.title;let o=document.createElement("div");o.textContent=t.title,o.classList.add("charity-title"),r.appendChild(n),r.appendChild(o),e.appendChild(r),eG.appendChild(e)});//import { handleSeeMoreButtonClick } from './indexCallbacks';
//export { fetchBooksData, renderBooks };
const eY=document.getElementById("charitiesSlider");//////////////////////////////////////////////////
// funkcja oblsugi button 'See more'
function eX(t){let e;if("string"==typeof t)e=t;else{let r=t.target.closest(".category-button");if(r){let t=r.closest(".category-container");t&&t.querySelector("h2")&&(e=t.querySelector("h2").textContent)}}e&&eT(e).then(t=>{document.querySelectorAll(".category-container").forEach(t=>{t.classList.remove("selected-category")});let r=document.querySelectorAll(".category-container");r.forEach(t=>{t.textContent.includes(e)&&t.classList.add("selected-category")}),e0.textContent=e,eZ(t,e)}).catch(t=>{console.error("Error fetching books data:",t)})}// funkjca tworzenia karty
// ksiaki w best selerss, po kliknieciu w best selerss
function eQ(t){let e=document.getElementById("booksList");e.innerHTML="",t.forEach(t=>{let r=document.createElement("div");r.classList.add("category-container"),e.appendChild(r);let n=document.createElement("h2");n.textContent=t.list_name,n.classList.add("category-title"),r.appendChild(n);let o=document.createElement("ul");o.classList.add("books-list"),r.appendChild(o),t.books.forEach(t=>{let e=document.createElement("li");e.classList.add("book-item"),e.innerHTML=`
        <div>                    
          <img src="${t.book_image}" alt="${t.title}" />
          <h3>${t.title}</h3>
          <p>Author: ${t.author}</p>
        </div>
      `,o.appendChild(e),// /////////
//Modal, ten sam kod dodany w 4 miejscach
e.addEventListener("click",async()=>{let e=document.getElementById("bookCardContainer");e.innerHTML="";try{let r=await eB(t._id),n=eF(r);e.appendChild(n)}catch(t){console.error(t)}});// /////////
});// Przycisk "See more" dodany raz dla całej kategorii, na końcu zestawu książek
let i=document.createElement("button");i.textContent="See more",i.classList.add("category-button"),r.appendChild(i),i.addEventListener("click",()=>eX(t.list_name))})}////////////////////////////
function eZ(t,e){let r=document.getElementById("booksList");if(r.innerHTML="",t&&t.length>0)t.forEach(t=>{let e=document.createElement("li");e.innerHTML=`
        <div>             
          <img src="${t.book_image}" alt="${t.title}" />
          <h3>${t.title}</h3>
          <p>Author: ${t.author}</p>
        </div>
      `,e.addEventListener("click",async()=>{let e=document.getElementById("bookCardContainer");e.innerHTML="";try{let r=await eB(t._id),n=eF(r);e.appendChild(n)}catch(t){console.error(t)}}),r.appendChild(e)});else{let t=document.createElement("p");t.textContent="No books found in this category.",r.appendChild(t)}}eK.forEach(t=>{let e=document.createElement("div");e.innerHTML=`<a href="${t.url}" target="_blank">${t.title}</a>`,eY.appendChild(e)}),e_().then(t=>{//console.log('Categories Received:', categoriesData);
!////////////////////////////
// lista kategorii
function(t){let e=document.getElementById("categoriesList");t.forEach(t=>{let r=document.createElement("li");r.classList.add("category"),/// kategoria - powiekszona trzcionka po wyborze
//li.classList.add('selected-category');
r.textContent=t.list_name,e.appendChild(r)})}(t)}).catch(t=>{// Obsługa błędów
console.error("Error in promise chain:",t)}),eU("some-category").then(t=>{let e=document.getElementById("booksList");t.forEach(t=>{// tworzy sekcję dla danej kategorii
let r=document.createElement("div");r.className="category-section";let n=document.createElement("h2");n.innerHTML=t.list_name,n.classList.add("category-title"),r.appendChild(n);let o=document.createElement("ul");window.innerWidth<=768?t.books.slice(0,1).forEach(t=>{let e=document.createElement("li"),r=document.createElement("div");r.className="image-container";let n=document.createElement("img");n.src=t.book_image,n.alt=t.title;let i=document.createElement("h3");i.textContent=t.title,i.classList.add("book-title");let s=document.createElement("p");s.textContent=`Author: ${t.author}`,s.classList.add("book-author"),r.appendChild(n),e.appendChild(r),e.appendChild(i),e.appendChild(s),o.appendChild(e),// ////////////////
//Modal, ten sam kod dodany w 4 miejscach
e.addEventListener("click",async()=>{let e=document.getElementById("bookCardContainer");e.innerHTML="";try{let r=await eB(t._id),n=eF(r);e.appendChild(n)}catch(t){console.error(t)}});// /////////
}):window.innerWidth>768&&window.innerWidth<=1200?t.books.slice(0,3).forEach(t=>{let e=document.createElement("li"),r=document.createElement("div");r.className="image-container";let n=document.createElement("img");n.src=t.book_image,n.alt=t.title;let i=document.createElement("h3");i.textContent=t.title,i.classList.add("book-title");let s=document.createElement("p");s.textContent=`Author: ${t.author}`,s.classList.add("book-author"),r.appendChild(n),e.appendChild(r),e.appendChild(i),e.appendChild(s),o.appendChild(e),// /////////
//Modal, ten sam kod dodany w 4 miejscach
e.addEventListener("click",async()=>{let e=document.getElementById("bookCardContainer");e.innerHTML="";try{let r=await eB(t._id),n=eF(r);e.appendChild(n)}catch(t){console.error(t)}});// /////////
}):t.books.slice(0,5).forEach(t=>{let e=document.createElement("li"),r=document.createElement("div");r.className="image-container";let n=document.createElement("img");n.src=t.book_image,n.alt=t.title;let i=document.createElement("h3");i.textContent=t.title,i.classList.add("book-title");let s=document.createElement("p");s.textContent=`Author: ${t.author}`,s.classList.add("book-author"),r.appendChild(n),e.appendChild(r),e.appendChild(i),e.appendChild(s),o.appendChild(e),// /////////
//Modal, ten sam kod dodany w 4 miejscach
e.addEventListener("click",async()=>{let e=document.getElementById("bookCardContainer");e.innerHTML="";try{let r=await eB(t._id),n=eF(r);e.appendChild(n)}catch(t){console.error(t)}});// /////////
}),// Dodanie klasę "category-list" do elementu <ul>
o.classList.add("category-list"),r.appendChild(o);// Dodanie przycisku "See more" dla całego zestawu książek
let i=document.createElement("button");i.className="category-button",i.innerText="See more",r.appendChild(i),i.addEventListener("click",()=>eX(t.list_name)),// Dodaj sekcję kategorii do kontenera
e.appendChild(r)})}).catch(t=>{// Obsługa błędów
console.error("Error in promise chain:",t)}),document.getElementById("bestSellers").addEventListener("click",async t=>{if("LI"===t.target.tagName){let e=t.target.textContent;if("Best Sellers Books"===e)try{let t=await eU("best-sellers");document.getElementById("bestSellersHeader").textContent="Best Sellers Books",eQ(t,"booksList")}catch(t){console.error("Error fetching best sellers:",t),alert("Failed to fetch best sellers. Please try again.")}else{let t=await eU(e);document.getElementById("bestSellersHeader").textContent=e,eQ(t,"booksList")}}}),document.querySelectorAll(".category");const e0=document.getElementById("bestSellersHeader");document.getElementById("categoriesList").addEventListener("click",async t=>{let e=t.target.closest(".category, .categoryTop");if(e){let t=e.textContent,r=await eT(t);// usuwamy klasę selected-category od wszystkich kategorii
document.querySelectorAll(".category, .categoryTop").forEach(t=>{t.classList.remove("selected-category")}),e0.textContent=t,eZ(r,t),// dodana  klasa selected-category tylko do klikniętej kategorii
e.classList.add("selected-category")}});///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ciemny motyw
/*const themeSwitch = document.getElementById('themeSwitch');
const isDarkMode = localStorage.getItem('darkMode') === 'true';

document.body.classList.toggle('dark-mode', isDarkMode);

themeSwitch.addEventListener('change', () => {
  const isDarkMode = themeSwitch.checked;
  document.body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('darkMode', isDarkMode.toString());
});*///# sourceMappingURL=index.52a0bffa.js.map

//# sourceMappingURL=index.52a0bffa.js.map
