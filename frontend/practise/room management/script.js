let rooms = [
    {
        roomNo: 101,
        type: "AC",
        price: 1000,
        booked: true
    },
    {
        roomNo: 102,
        type: "NON AC",
        price: 800,
        booked: false
    },
    {
        roomNo: 103,
        type: "AC",
        price: 1000,
        booked: true
    },
    {
        roomNo: 104,
        type: "AC",
        price: 1000,
        booked: false
    },
    {
        roomNo: 105,
        type: "NON AC",
        price: 800,
        booked: false
    },
    {
        roomNo: 106,
        type: "NON AC",
        price: 800,
        booked: true
    }
];

if (rooms.length === 0) {
    alert("No rooms ");
} else {
    let name = prompt("Enter Customer Name:");
    let roomType = prompt("Enter Room Type (AC - 1000 / NON AC - 800):");

    let found = false;

    for (let i = 0; i < rooms.length; i++) {
     if (rooms[i].type.toLowerCase() === roomType.toLowerCase() && rooms[i].booked === false) {

            rooms[i].booked = true;
            alert(
               `Room Booked Successfully!
               Customer Name : ${name}
               Room No       : ${rooms[i].roomNo}
               Room Type     : ${rooms[i].type}
               Price         : ₹${rooms[i].price}`
            );

            found = true;
            break;
        }
    }

    if (!found) {
        alert(`Sorry ${name}, no ${roomType} room is available.`);
    }
}