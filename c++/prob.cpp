#include<iostream>
#include<bits/stdc++.h>

using namespace std;

#define ll long long

int main(int argc, char const *argv[])
{    
    #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
    #endif
    
    int tc;
    cin>>tc;
    while(tc--){
        int m,n;
        cin>>n>>m;
        int b[n],f[n];
        for (int i = 0; i < n; ++i)
        {
            /* code */
            cin>>b[i];
        }
        for (int i = 0; i < n; ++i)
        {
            /* code */
            cin>>f[i];
        }
        int min=2147483647;
        int c=0;int flag=0;
        for (int i = 0; i < m; ++i)
        {
            /* code */
            for(int j=0;j<n;j++){
                if(b[j]==i+1){
                    c+=f[j];flag=1;
                }
            }

            if(flag){
                if(c<min){
                min=c;
                }
            }
            flag=0;
            c=0;


        }
        cout << min << endl;
    }
    return 0;
}	