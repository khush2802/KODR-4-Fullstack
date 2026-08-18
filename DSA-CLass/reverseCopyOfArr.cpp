#include <bits/stdc++.h>
using namespace std;

int main() {
    int arr[] = {1, -2, 3, -4, 5, -6};

    int n = sizeof(arr) / sizeof(arr[0]);

    int left = 0;
    int right = n - 1;

    while (left <= right) {
        if (arr[left] < 0) {
            left++;
        } else if (arr[right] >= 0) {
            right--;
        } else {
            swap(arr[left], arr[right]);
            left++;
            right--;
        }
    }

    for (int x : arr)
        cout << x << " ";
}






// #include <bits/stdc++.h>
// using namespace std;

// int main() {
//     int arr[] = {1,2,3,4,5};

//     int n = sizeof(arr) / sizeof(arr[0]);

// //     vector<int> temp;

// //     for (int i = n - 1; i >= 0; i--) {
// //         temp.push_back(arr[i]);
// //     }

// //     for (int i = 0; i < temp.size(); i++) {
// //         cout << temp[i] << " ";
// //     }

//      int k;
//      cout<<"enter the k to rotate till that index: ";
//      cin>>k;

//      k = k%n;

//      vector<int> temp(n);

//     for (int i = 0; i < n; i++) {
//         temp[(i + k) % n] = arr[i];
//     }

//     for (int x : temp)
//         cout << x << " ";



//     return 0;
// }