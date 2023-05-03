var Kadse = ['Britischkurzhaar', 'Russischblau', 'Angora', 'Siamkatze'];
var table = document.getElementById('myTable');
for (var i = 0; i < Kadse.length; i++){
    var row = table.insertRow(i+1);
    var indexCell = row.insertCell(0);
    var valueCell = row.insertCell(1);
    indexCell.innerHTML = i;
    valueCell.innerHTML = Kadse[i];
}
console.log(Kadse);