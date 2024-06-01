function generateReport() {
    //TODO

    let rows = document.querySelectorAll("tr");
    let columns = document.querySelectorAll("tr th");
    let rowsArr = [];

    for (const row of rows) {
        let elements = row.querySelectorAll("td");
        let newRow = [];
        for (const element of elements) {
            newRow.push(element.textContent);
        }
        rowsArr.push(newRow);
    }

    rowsArr = rowsArr.slice(1);

    let columnsArr = [];
    for (let i = 0; i < rowsArr[0].length; i++) {
        let column = [];
        for (let j = 0; j < rowsArr.length; j++) {
            column.push(rowsArr[j][i]);
        }
        columnsArr.push(column);
    }

    let outputArr = [];

    for (let j = 0; j < rowsArr.length; j++) {
        let tempObj = {};

        for (let i = 0; i < columns.length; i++) {
            let element = columns[i].getElementsByTagName("input");
            if (element[0].checked) {
                tempObj[element[0].name] = columnsArr[i][j];
            }
        }

        if (Object.keys(tempObj).length != 0) {
            outputArr.push(tempObj);
        }
    }

    if (outputArr.length != 0) {
        let outputJSON = JSON.stringify(outputArr);
        document.getElementById("output").value = outputJSON;
    }
}
