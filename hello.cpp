#include<bits/stdc++.h>
using namespace std;
int main() {
    int sum = 0;
    int a[] = {10,20,30,40};
    int n = sizeof(a)/sizeof(a[0]);
    for(int i=0;i<n;i++) {
        sum += a[i];
    }
    cout<<"The sum is: "<<sum;
    return 0;
}