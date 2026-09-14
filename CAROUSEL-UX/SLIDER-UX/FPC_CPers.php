<?php
// Establish connection to SQLite database
$database = new SQLite3('Arkin_CPers.db');

// Query to fetch all data from the 'Data' table
$query = "SELECT * FROM Data";
$result = $database->query($query);

// HTML table to display the data
echo "<table border='1'>
<tr>
<th>Name</th>
<th>Weight</th>
<th>Height</th>
<th>Status</th>
<th>Medication</th>
</tr>";

// Fetch and display each row from the database
while ($row = $result->fetchArray()) {
    echo "<tr>";
    echo "<td>" . $row['Name'] . "</td>";
    echo "<td>" . $row['Weight'] . "</td>";
    echo "<td>" . $row['Height'] . "</td>";
    echo "<td>" . $row['H_status'] . "</td>";
    echo "<td>" . $row['Medication'] . "</td>";
    echo "</tr>";
}

echo "</table>";

// Close database connection
$database->close();
?>
