# First Unique Characters


Personally, I thought the first strat was to first, push the original string into an array. From there, you can check if that string is equal to the character next to it. If it was, break the loop, as well as at that character into another array that will be considered as the "character has appeared" place. 

Then when for() executes again, it will check first if that appeared character was being compared with again, if it was, break loop. Otherwise, same case scenario. 

If that original value did not appear multiple times, then the loop exits with a true boolean val, and the program will give that position.





## After

Looking at the solutions, I realized that there was more elements to it. Since I'm still very new to TS, I hadn't realized there was indexOf() as well as lastIndexOf(). I saw this after looking at documentation. 

Therefore, I was able to modify the code into 2 lines, as was able to get a much faster response time than before.
