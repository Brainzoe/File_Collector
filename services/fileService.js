// services/fileService.js
const fs = require('fs');
const excel = require('exceljs');

// Function to read Excel file
const readExcelFile = (filePath) => {
    return new Promise((resolve, reject) => {
        const data = [];
        const workbook = new excel.Workbook();
        workbook.xlsx.readFile(filePath)
            .then(() => {
                const worksheet = workbook.getWorksheet(1);
                worksheet.eachRow((row, rowNumber) => {
                    if (rowNumber !== 1) { // Skip header row
                        const rowData = {};
                        row.eachCell((cell, colNumber) => {
                            rowData[`column${colNumber}`] = cell.value;
                        });
                        data.push(rowData);
                    }
                });
                console.log('Data read from Excel file:', data);
                resolve(data);
            })
            .catch((err) => {
                console.error('Error reading Excel file:', err);
                reject(err);
            });
    });
};

module.exports = { readExcelFile };
