#include <bits/stdc++.h>
using namespace std;

int main() {
//     int a, b;

//     cin >> a >> b;

//     cout << max(a, b);


     // CHAR_MAX g;
     // cout<<"g: ";
     // cin>>g;
     // if(g=='m'){
     //      cout<<"hello sir";
     // }else if (g=='f'){
     //      cout<<"hello mam";
     // }else{
     //      cout<<"invalid i/p";
     // }

     // int a;
     // cout<<"a: ";
     // cin>>a;
     // if(a%2 == 0){
     //      cout<<"even";
     // }else{
     //      cout<<"odd";
     // }

     // int a;
     // cout<<"a: ";
     // cin>>a;
     // if(a >= 18){
     //      cout<<"Eligible voter";
     // }else{
     //      cout<<"Not eleigible";
     // }



//     int year;

//     cout << "Enter year: ";
//     cin >> year;

//     if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
//         cout << year << " is a Leap Year";
//     } else {
//         cout << year << " is NOT a Leap Year";
//     }

//      int  ammount;
//      cout<<"ammout: ";
//      cin>>ammount;
//      int diss;

//      if(ammount>0 && ammount<=5000){
//           diss = 0;
//      }else if(ammount>=5001 && ammount<=7000){
//           diss = 5;
//      }else if(ammount>= 7001 && ammount<=9000){
//           diss = 10;
//      }else{
//           diss = 20;
//      }

//      float finalPrice = (diss / 100.0) * ammount;
//      cout << "Final Price: " << ammount - finalPrice;



//     return 0;

     // for(int i =0; i<5; i++){
     //      cout<<"Hello W."<<endl;
     // }

     // int n ;
     // cout<<"n: ";
     // cin>>n;
     // for(int i = 1; i<=n; i++){
     //      cout<<i;
     // }


     // int n ;
     // cout<<"n: ";
     // cin>>n;
     // int sum=0;
     // for(int i = 1; i<=n; i++){
     //      sum+=i;
     // }


     // int n ;
     // cout<<"n: ";
     // cin>>n;
     // // int sum=1;
     // for(int i = 1; i<=10; i++){
     //      n*=i;
     // }

     // int n ;
     // cout<<"n: ";
     // cin>>n;
     // int eveSum=0;
     // int oddSum = 0;
     // for(int i = 1; i<=n; i++){
     //      if(i%2 == 0){
     //           eveSum+=i;
     //      }else{
     //           oddSum+=i;
     //      }
     // }


     //  int n ;
     // cout<<"n: ";
     // cin>>n;
     // int sum=n;
     // for(int i = 1; i<=n/2; i++){
     //      if(n%i == 0){
     //           cout<<i<<" ";
     //           sum+=i;
     //      }
     // }

     // cout<<n;

     // cout<<"sum: "<<sum;

     // int n;
     // cout<<"enyter n: ";
     // cin>>n;
     // int sum = 0;
     // while(n!=0){
     //      int digit = n%10;
     //      cout<<digit<<endl;
     //      sum+=digit; 
     //      n/=10;
     // }

     // cout<<sum;

//      int n;
//     cout << "Enter n: ";
//     cin >> n;
//     int c = 0;

// //     int p = n;
// //     int r = 0;

//     while (n != 0) {
//         c++;
//         n /= 10;
//     }
// cout<<c;
// //     if (p == r)
// //         cout << "Palindrome";
// //     else
// //         cout << "Not Palindrome";

//     return 0;


    int n;
    cout << "Enter a number: ";
    cin >> n;

    int square = n * n;

    int temp = n;
    int digits = 0;


    while (temp > 0) {
        digits++;
        temp /= 10;
    }
    if (n == 0)
        digits = 1;

    int divisor = pow(10, digits);

    if (square % divisor == n)
        cout << n << " is an Automorphic Number";
    else
        cout << n << " is Not an Automorphic Number";

    return 0;








}