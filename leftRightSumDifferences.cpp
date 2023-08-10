class Solution {
public:
    vector<int> leftRightDifference(vector<int>& nums) {
        vector<int> result;
        int totalSum = 0, i,
        left = 0;
        for(i = 0 ; i< nums.size() ; i++)
            totalSum += nums[i];

        for( i = 0 ; i< nums.size() ; i++){
            result.push_back(abs(totalSum- left - left - nums[i] ));
            left += nums[i];
        }



        return result;
    }
};
