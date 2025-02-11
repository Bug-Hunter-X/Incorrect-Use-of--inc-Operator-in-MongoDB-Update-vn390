```javascript
// Correct use of $inc operator in MongoDB update
db.collection('myCollection').updateOne({"_id": ObjectId("6515f56627f5676e5d654321")}, {"$inc": {"count": 10}});
```