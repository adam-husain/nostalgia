<?php

// Check the request method
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            getProduct($id);
        }
        else
            getAllProducts();
        break;
    default:
        http_response_code(404);
        echo json_encode(array("error" => "Invalid request method"));
        exit;
}

function getProduct($id)
{
    $products = accessTestData();

    $found = false;
    foreach ($products as $p) {
        if ($p['id'] == $id) {
            $found = true;
            echo json_encode($p);
            break;
        }
    }

    if (!$found) {
        http_response_code(404);
        echo json_encode(array("error" => "Could not find product"));
    }
}

function getAllProducts()
{
    $products = accessTestData();
    echo json_encode($products);
}

function accessTestData()
{
    $json_file_path = 'products.json';
    if (!file_exists($json_file_path)) {
        return [];
    }

    // Get the JSON file content
    $json_content = file_get_contents($json_file_path);

    // Decode the JSON string to a PHP variable
    // The second parameter being true means you want the result as an associative array
    // If you leave it out or set it to false, you'll get a result in the form of an object
    $data = json_decode($json_content, true);

    return $data;
}
