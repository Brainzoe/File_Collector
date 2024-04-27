// scripts/populateDB.js
const { connectDB} = require('../config/database'); // Import connectDB and disconnectDB functions
const { readExcelFile } = require('../services/fileService');
const { insertData} = require('../services/databaseService'); // Assuming you have a connectDB function

const populateDb = async () => {
    try {
        // Connect to the database
        await connectDB();
        console.log('Connected to the database.');

        const filePath = '../data/global-ptsp-report-2024-04-23.xlsx';
        console.log('File Path:', filePath);

        // Read Excel file
        const data = await readExcelFile(filePath);
        console.log('Data read from Excel file:', data);

        // Format the data
        const formattedData = data.map((row) => ({
            dateTime: row.column1,
            maskedPan: row.column2,
            merchantNameLocation: row.column3,
            merchantId: row.column4,
            messageType: row.column5,
            responseCodeDescription: row.column6,
            retrievalReferenceNumber: row.column7,
            settlementImpact: row.column8,
            settlementImpactDescription: row.column9,
            stan: row.column10,
            terminalId: row.column11,
            transactionId: row.column12,
            transactionAmountRequest: row.column13,
            transactionStatus: row.column14
        }));
        console.log('Formatted Data:', formattedData);

        // Insert data into MongoDB
        const result = await insertData(formattedData);
        console.log('Data inserted into MongoDB:', result);

    } catch (error) {
        console.error('Error:', error);
    }
};

populateDb();
