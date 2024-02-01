#include<iostream>
#include<string>
#include<vector>
using namespace std;
vector<vector<int>> dp;
bool f(int x,int y,bool flag){
        if(x==0 && y==0){
            return flag;
        }
        if(x<0 || y<0) {
            return false;
        }
        if(dp[x][y]!=-1) {
            if(flag==false){
                return dp[x][y];
            }else return !(dp[x][y]);
        }
        if(flag==false){
            return dp[x][y]= (f(x-1,y,true) ||f(x,y-1,true));
        }else {
            return dp[x][y]= (f(x-1,y,false) ||f(x,y-1,false));
        }
    }
    long long flowerGame(int n, int m) {
        dp.clear();
        dp.resize(n + 1, vector<int>(m + 1, -1));
        int count=0;
        for(int i=n;i>=1;i--){
            for(int j=m;j>=1;j--){
                if(f(i,j,false)){
                    cout<<i<<" "<<j<<endl;
                    count++;
                } 
            }
        }
        return count;
    }

int main(){
    int n = 3, m = 2;
    long long result = flowerGame(n, m);
    cout << "Result: " << result << endl;
    for(int i=0;i<=n;i++){
        for(int j=0;j<=m;j++){
            cout<<dp[i][j]<<" ";
        }
        cout<<endl;
    }
    return 0;
}