# Incorrect Use of $inc Operator in MongoDB Update

This example demonstrates an incorrect use of the `$inc` operator in a MongoDB update operation. The `$inc` operator is used to increment a numerical field by a specified value.  However, providing a string value instead of a number will lead to an error.

## Bug
The bug lies in the incorrect usage of the `$inc` operator.  The value to increment by should be a number, but a string is provided.