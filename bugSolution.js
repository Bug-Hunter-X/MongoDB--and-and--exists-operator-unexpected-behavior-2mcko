```javascript
const query = { $or: [ { "field1": { $exists: false } }, { "field2": { $exists: false } } ] };
//This solution uses $or operator to handle empty fields. It will return an empty array if both fields are missing.
//This is the expected behavior because it checks if either field1 or field2 is missing.
```