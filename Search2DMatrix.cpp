class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        
        int index =0, i = 0;
        std::vector<int>::iterator it;
        
        for(; i< matrix.size() ; i++ ){

            if(matrix[i][0]  ==  target ) return true;

            if(matrix[i][0] > target){

                if(i >0){
                   index = i - 1;
                   break ;
                   }
                
            }
        }

        if(i == matrix.size()) index = i -1;


        it = std::find(matrix[index].begin(),matrix[index].end(), target);

        if(it != matrix[index].end()) return true;

        return false;
    }
};
