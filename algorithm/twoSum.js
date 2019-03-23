
'use strict';
var obj = {};
var secondNum = 0;
var sameKey = "_";
// 偷懒使用 random生成唯一hash
  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0; length = nums.length,i <length;i++){
        secondNum = target - nums[i];
        if(!obj[nums[i]]){
          obj[nums[i]] = {
            index: i,
            hash: Math.random()
          };
        }else {
          var key = "";
          while (obj[nums[i] + key]) {
            key += sameKey;
          }
          obj[nums[i] + key] = {
            index: i,
            hash: Math.random()
          };
        }

        if(obj[secondNum]){
          var index = null;;
          var key = sameKey;
          var result = [];
          if(obj[secondNum].hash === obj[nums[i]].hash){
            if(obj[nums[i] + sameKey]){
              index = obj[secondNum].index;
            }
          }else {
            index = obj[secondNum].index;
          }
          if(index !== null){
            result = [index,i]
            return result;
          }
        }
    }
};

var arr = [3,2,4];
var target = 6;
var result = twoSum(arr,target);
console.log(result)