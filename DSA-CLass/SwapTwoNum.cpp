#include <bits/stdc++.h>

using namespace std;

int main(){
     // int a = 5;
     // int b = 7;
     // int t;

     // cout<<"a: "<<a<<" b: "<<b<<endl;
     // t = a;
     // a = b;
     // b = t;

     // cout<<"a: "<<a<<" b: "<<b<<endl;

     // int l = 5, b = 3;
     // cout<<"area: "<<l*b<<" peri: "<<2*(l+b)<<endl;

     // double p = 1000;
     // double r = 1 + (5.0 / 100);
     // int t = 3;

     // double amount = p * pow(r, t) - p;

     // cout << fixed<<setprecision(2)<<amount;


     int a = 5,b = 7, c = 9;
     float s = (a+b+c)/2;

     float res = sqrt(s*(s-a)*(s-b)*(s-c));
     cout << fixed << setprecision(2) <<res;

}