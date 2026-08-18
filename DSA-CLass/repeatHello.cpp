



#include <bits/stdc++.h>
using namespace std;


int main(){
     int n;
     cout<<"enter the size of array: ";
     cin>>n;

     vector<int>arr(n);

     for(int i = 0; i<n; i++){
          cout<<"enter the num at index"<<i+1<<": ";
          cin>>arr[i];
     }


     // int sum = 0;
     // int mean = 0;
     // for(int i=0; i<n; i++){
     //      sum+=arr[i];
     // }

     // mean = sum/n;

     // cout<<sum<<endl;
     // cout<<mean<<endl;
     // int mx = INT_MIN;
     // int idx = -1;
     for(int i = 1; i<=n; i++){
          if(arr[i-1]>=arr[i]){
               return false;
          }
     }

     // cout<<true;

     // for(int i =0; i<n; i++){
     //      cout<<arr[i]<<" ";
     // }

     // cout<<"max element idx: "<<idx;

     return true;
}

// int main() {
//     int tn;
//     cout << "Target number: ";
//     cin >> tn;

//     int n;

//     do {
//         cout << "Enter your guess: ";
//         cin >> n;

//         if (n > tn) {
//             cout << "Too high\n";
//         } else if (n < tn) {
//             cout << "Too low\n";
//         } else {
//             cout << "Got it!\n";
//         }

//     } while (n != tn);

//     return 0;
// }

// int main() {
// //     int n;

// //     do {
// //         cout << "Enter n: ";
// //         cin >> n;

// //         if (n == 1) {
// //             cout << "HELLO" << endl;
// //         } else {
// //             cout << "Exit" << endl;
// //         }

// //     } while (n != 1);

// //     return 0;



// // vowels n consonants

// char ch;
// cout<<"enter the char: ";
// cin>>ch;

// switch(ch){
//      case 'a':
//      cout<<"vowel";
//      break;
//      case 'e':
//      cout<<"vowel";
//       break;
//      case 'i':
//      cout<<"vowel";
//       break;
//      case 'o':
//      cout<<"vowel";
//       break;
//      case 'u':
//      cout<<"vowel";
//       break;




     
// }

// }



