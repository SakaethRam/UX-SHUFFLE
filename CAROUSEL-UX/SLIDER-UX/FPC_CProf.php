<?php
// Function to create the database
function create_database() {
    try {
        $connection = new SQLite3('Arkin_CProf.db');
        
        // Create the table if it doesn't exist
        $connection->exec("CREATE TABLE IF NOT EXISTS Data_Prof (Time INTEGER, Goal TEXT, Workshop TEXT, Cost INTEGER, Maintanence TEXT, Investment TEXT)");
        
        echo "Database created successfully.";
    } catch (Exception $e) {
        echo "Error creating database: " . $e->getMessage();
    }
}

// Function to insert data into the database
function insert_data($data) {
    try {
        $connection = new SQLite3('Arkin_CProf.db');
        
        // Insert data into the table
        $statement = $connection->prepare("INSERT INTO Data_Prof (Time, Goal, Workshop, Cost, Maintanence, Investment) VALUES (:time, :goal, :workshop, :cost, :maintanence, :investment)");
        
        foreach ($data as $row) {
            $statement->bindValue(':time', $row[0]);
            $statement->bindValue(':goal', $row[1]);
            $statement->bindValue(':workshop', $row[2]);
            $statement->bindValue(':cost', $row[3]);
            $statement->bindValue(':maintanence', $row[4]);
            $statement->bindValue(':investment', $row[5]);
            $statement->execute();
        }
        
        echo "Data inserted successfully.";
    } catch (Exception $e) {
        echo "Error inserting data: " . $e->getMessage();
    }
}

// Function to print all data from the database
function print_all_data() {
    try {
        $connection = new SQLite3('Arkin_CProf.db');
        
        // Print all rows in the table
        $result = $connection->query("SELECT * FROM Data_Prof");
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            print_r($row);
        }
    } catch (Exception $e) {
        echo "Error printing data: " . $e->getMessage();
    }
}

// Function to search data by status
function search_by_status($status) {
    try {
        $connection = new SQLite3('Arkin_CProf.db');
        
        // Search for rows with the specified status
        $statement = $connection->prepare("SELECT * FROM Data_Prof WHERE Goal = :goal");
        $statement->bindValue(':goal', $status);
        $result = $statement->execute();
        
        echo "Data with status '$status':<br>";
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            print_r($row);
        }
    } catch (Exception $e) {
        echo "Error searching data: " . $e->getMessage();
    }
}

// Main block
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Create the database
    create_database();
    
    // Sample data to insert
    $fpc_Prof_list = [
        [1, "Shredded", "-", 5000, "No", "-"],
        [1.5, "Shredded", "-", 10000, "Some Time", "-"],
        [5, "Slim", "-", 2000, "No", "-"],
        [8, "Shredded", "-", 15000, "Yes", "-"]
    ];

    // Insert sample data
    insert_data($fpc_Prof_list);

    // Print all data
    echo "************************<br>";
    echo "-- All Data --<br>";
    print_all_data();

    // Search for data by status
    echo "************************<br>";
    echo "-- People Who wants shredded --<br>";
    search_by_status("Shredded");
}
?>
