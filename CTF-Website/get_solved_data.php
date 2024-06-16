<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "elearning";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch solved data
$sql = "SELECT challenge_type, COUNT(*) as solved_count FROM solved_challenges GROUP BY challenge_type";
$result = $conn->query($sql);

$data = [
    'web_dev' => 0,
    'web_security' => 0
];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        if ($row['challenge_type'] == 'web_dev') {
            $data['web_dev'] = $row['solved_count'];
        } else if ($row['challenge_type'] == 'web_security') {
            $data['web_security'] = $row['solved_count'];
        }
    }
}

$conn->close();

echo json_encode($data);
?>
