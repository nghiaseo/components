export const makeAddressBook = (data) => {
  const keys = new Array(26).fill(65).map((v, i) => String.fromCharCode(v + i));
  const addressBook = {};
  for (const key of keys) {
    addressBook[key] = [];
    for (const v of data) {
      if (
        (v.fullname.charCodeAt(0) === key.charCodeAt(0) ||
          v.fullname.charCodeAt(0) === key.charCodeAt(0) + 32)
      ) {
        addressBook[key].push(v.fullname);    
    }
  }
};
return addressBook
}
