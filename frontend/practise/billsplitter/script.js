let people = Number(prompt("Enter the number of people:"));
let totalAmm = 0;

while (true) {
    let item = prompt("Enter item:\nM\nN\nW\nP");

    if (item === "" || item === null) {
        break;
    }

    item = item.toUpperCase();

    if (item === "M") {
        totalAmm += 80;
    } else if (item === "N") {
        totalAmm += 80;
    } else if (item === "P") {
        totalAmm += 80;
    } else if (item === "W") {
        totalAmm += 100;
    } else {
        alert("Invalid Item");
    }
}

let perHead = totalAmm / people;

alert(`Total Amount = ${totalAmm}\nBill per Head = ${perHead}`);