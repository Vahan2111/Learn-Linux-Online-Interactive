const Data = [
    "Content for Tab 1 goes here.",
    "Content for Tab 2 goes here.",
    "Content for Tab 3 goes here."
];

function Tab(index) {
    const Elem = document.getElementById('tabContent');
    Elem.textContent = Data[index];
}
Tab(0);