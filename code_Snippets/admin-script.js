// Simulated data for vacant and booked parking slots
const vacantSlots = [1, 3, 5, 7, 9];
const bookedSlots = [2, 4, 6, 8, 10];

document.addEventListener('DOMContentLoaded', function () {
    const vacantSlotsList = document.getElementById('vacantSlotsList');
    const bookedSlotsList = document.getElementById('bookedSlotsList');

    // Populate the vacant parking slots
    vacantSlots.forEach(slot => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = `Slot ${slot}`;
        link.href = 'calculator.html#calculate'; // Replace 'combined.html' with the correct HTML file
        listItem.appendChild(link);
        vacantSlotsList.appendChild(listItem);
    });

    // Populate the booked parking slots
    bookedSlots.forEach(slot => {
        const listItem = document.createElement('li');
        listItem.className = 'booked-slot'; // Apply the booked-slot class
        listItem.textContent = `Slot ${slot}`;
        bookedSlotsList.appendChild(listItem);
    });
});
