           *STEP 1*
           
           
Results for the  tinyArray
insert 58.032 μs
append 149.376 μs

Results for the  smallArray
insert 66.482 μs
append 156.327 μs

Results for the  mediumArray
insert 218.942 μs
append 202.402 μs

Results for the  largeArray
insert 8.442418 ms
append 841.659 μs


Results for the extraLargeArray
insert 1.191984736 s
append 5.152975 ms

| insert        | append      |
|---------------|-------------|
| 58.032 μs     | 149.376 μs  |
| 66.482 μs     | 156.327 μs  |
| 218.942 μs    | 202.402 μs  |
| 8.442418 ms   | 841.659 μs  |
| 1.191984736 s | 5.152975 ms |

 
 doublerInsert function performs poorly with increase in array size while doublerAppend time remains mostly stable.

 unshift() method adds the element at 0 index and all the values get shifted by 1 by ultimately returning the length of the array. 
 The push() method returns the last element adding a new element from the last index.

 doublerAppend function uses push function which is not shifting elements hence it's performing better even if it array size increases.