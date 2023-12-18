class Solution {
    static int gameOfXor(int N , int[] A) {
         int result = 0;
         for (int i = 0; i < N; i++) {
         int frequency = (i + 1) * (N - i); // +1*(3-3)= 4*0 =0  
             if (frequency % 2 == 1) { //0%2==1
                result ^= A[i];  
              }
    }
    return result;
    }
};