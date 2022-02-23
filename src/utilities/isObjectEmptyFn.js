export default function isObjectEmpty(obj) {
    return ( //true if empty {} 
      Object.keys(obj).length === 0 &&
      Object.getOwnPropertySymbols(obj).length === 0 &&
      obj.constructor === Object
    );
}