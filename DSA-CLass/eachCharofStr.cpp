#include <bits/stdc++.h>

using namespace std;

// int main(){
//      string str;

//      cout<<"Enter the string: ";

//      cin>>str;

//      // for(auto ch :str){
//      //      cout<<ch<<" ";
//      // }
//      int n = str.size();
//      string rev;
//      for(int i = 0; i<str.size(); i++){
//           rev[i] = str[n-1-i];
//      }


//      cout<<rev;

//      return 0;
// }



// int main() {
//     string str;

//     cout << "Enter the string: ";
//     cin >> str;

//     int n = str.size();

//     string rev(n, ' ');   // Create string of size n

//     for (int i = 0; i < n; i++) {
//         rev[i] = str[n - 1 - i];
//     }

//     cout << rev;


// for (int i = 0; i < str.size(); i++) {
//         if (str[i] >= 'A' && str[i] <= 'Z') {
//             str[i] = str[i] + 32;   // Uppercase -> Lowercase
//         }
//         else if (str[i] >= 'a' && str[i] <= 'z') {
//             str[i] = str[i] - 32;   // Lowercase -> Uppercase
//         }
//     }

//     cout << str;

//     return 0;
// }




// int prefixCount(vector<string>& words, string prefix){
//      int count = 0;
//      for(auto ch:words){
//           if(ch.find(prefix)==0){
//                count++;
//                cout<<ch<<endl;
//           }
//      }

//      return count;
// }


// int main(){
//      vector<string> strArr = {"pay", "attire", "practise", "attend"};

//      string prefix = "at";

//      cout<<prefixCount(strArr, prefix);
//      return 0;
// }



int main(){


     string str;

    cout << "Enter the string: ";
    getline(cin, str);

    int n = str.size();

    for(int i = 0; i<n; i++){
     // first char

     if((i==0 || (str[i-1] == ' ')) && islower(str[i])){
          str[i] = toupper(str[i]);
     }

     //last char 
     if((i==(n-1) || (str[i+1] == ' ')) && islower(str[i])){
          str[i] = toupper(str[i]);
     }
    }

    cout<<str;
     return 0;
}