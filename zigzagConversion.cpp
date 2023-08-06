class Solution {
public:


    string convert(string s, int numRows) {


        if(numRows < 2) return s;

        int initialStart = 0,
        index = 0;
        bool inBetween = false;
        string result ;




        for(int i = 0 ; i < s.length() ; i++){

            if(index >s.length() - 1 ){
                initialStart++ ;
                index = initialStart;
                inBetween = false;
            }


            result += s[index];

            if(initialStart == 0 || initialStart == numRows-1)
                index += (numRows - 1) * 2;
            else if(inBetween){
                inBetween = false;
                index += initialStart*2 ;
            }else {
                index += (numRows - 1) * 2;
                index -= initialStart*2 ;
                inBetween = true;
            }



        }



        return result ;
    }
};
