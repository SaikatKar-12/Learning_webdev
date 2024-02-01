#include<iostream>
#include<string>
#include<vector>
using namespace std;
long long flowerGame(int n, int m) {
    // Initialize the dp table
    vector<vector<vector<int>>> dp(n + 5, vector<vector<int>>(m + 5, vector<int>(3, -1)));

    // Base case: f(x, y, false) and f(x, y, true) for x=0 and y=0
    for (int flag = 0; flag <= 1; ++flag) {
        dp[0][0][flag] = flag;
    }

    // Iterate over all possible subproblems in bottom-up manner
    for (int x = 0; x <= n; ++x) {
        for (int y = 0; y <= m; ++y) {
            for (int flag = 0; flag <= 1; ++flag) {
                if (x > 0) {
                    dp[x][y][flag] = dp[x][y][flag] || dp[x - 1][y][(flag == 0) ? 1 : 0];
                }
                if (y > 0) {
                    dp[x][y][flag] = dp[x][y][flag] || dp[x][y - 1][(flag == 0) ? 1 : 0];
                }
            }
        }
    }

    // Count the valid configurations
    int count = 0;
    for (int i = n; i >= 1; i--) {
        for (int j = m; j >= 1; j--) {
            count += dp[i][j][0];
        }
    }

    return count;
}

int main(){
    int n = 3, m = 2;
    long long result = flowerGame(n, m);
    cout << "Result: " << result << endl;
    return 0;
}