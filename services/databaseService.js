// services/databaseService.js

// const { connectDB, disconnectDB } = require('../config/database'); // Import connectDB and disconnectDB functions
// const Data = require('../models/dataModel');

// const insertData = async (dataArray) => {
//     try {
//         // Connect to the database
//         await connectDB();

//         // Insert data with options for bulk insertion and increased timeout
//         await Data.insertMany(dataArray, { wtimeout: 60000 }); // Increased timeout to 60 seconds
//         console.log('Data inserted successfully');
//     } catch (err) {
//         console.error('Error inserting data:', err.message);
//     } finally {
//         // Disconnect from the database regardless of success or failure
//         await disconnectDB();
//     }
// };

// module.exports = { insertData };
//services/databaseService.js

const { connectDB, disconnectDB } = require('../config/database'); // Import connectDB and disconnectDB functions
const Data = require('../models/dataModel');

const insertData = async (dataArray) => {
    let resultMessage = ''; // Initialize result message variable

    try {
        // Connect to the database
        await connectDB();

        // Insert data with options for bulk insertion and increased timeout
        await Data.insertMany(dataArray, { wtimeout: 60000 }); // Increased timeout to 60 seconds
        console.log('Data inserted successfully');

        resultMessage = 'Data inserted successfully'; // Set success message
    } catch (err) {
        console.error('Error inserting data:', err.message);
        resultMessage = 'Error inserting data: ' + err.message; // Set error message
    } finally {
        // Disconnect from the database regardless of success or failure
        await disconnectDB();
    }

    return resultMessage; // Return the result message
};

module.exports = { insertData };

// services/databaseService.js

// const { connectDB, disconnectDB } = require('../config/database');
// const Data = require('../models/dataModel');

// const removeDuplicates = async () => {
//     try {
//         // Connect to the database
//         await connectDB();

//         // Aggregate pipeline to remove duplicates based on specific fields
//         const pipeline = [
//             {
//                 $group: {
//                     _id: {
//                         dateTime: '$dateTime', // Assuming dateTime is the unique field
//                         maskedPan: '$maskedPan', // Add other fields if needed
//                         // Add more fields if necessary
//                     },
//                     doc: { $first: '$$ROOT' } // Take the first document encountered for each group
//                 }
//             },
//             { $replaceRoot: { newRoot: '$doc' } }, // Replace the root with the document from the group
//             { $out: 'data' } // Write the de-duplicated data back to the same collection
//         ];

//         // Execute the aggregation pipeline
//         await Data.aggregate(pipeline).exec();

//         console.log('Duplicates removed successfully');
//     } catch (err) {
//         console.error('Error removing duplicates:', err.message);
//     } finally {
//         // Disconnect from the database regardless of success or failure
//         await disconnectDB();
//     }
// };

// module.exports = { removeDuplicates };
