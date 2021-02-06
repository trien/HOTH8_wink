<?php
if (!extension_loaded('sqlite3')) exit('Module sqlite3 not loaded');

class MyDB extends SQLite3 {
    function __construct() {
        $this->open('devpost.db');
    }
    function create() {
        $sql ='
            CREATE TABLE IF NOT EXISTS COMPANY
            (ID INT PRIMARY KEY     NOT NULL,
            NAME           TEXT    NOT NULL,
            AGE            INT     NOT NULL,
            ADDRESS        CHAR(50),
            SALARY         REAL);
        ';
      
         $ret = $this->exec($sql);
         if(!$ret){
            echo $this->lastErrorMsg();
         }
    }
    function insertScore($data) {
        return [
            'raw' => json_decode($_POST['data'], true)
        ];
    }
    function countScore($type) {
        $sql ='SELECT pseudo, time FROM score where settings = "12366";';
      
        $results = $this->query($sql);
        return [
            'count' => $results->fetchArray(SQLITE3_ASSOC)
        ];
    }
    /**
     * 
     */
    function listScore($type) {
    }
}
$route = 'index';
if (isset($_GET['route'])) {
    header('content-type:application/json');
    $route = $_GET['route'];
}
$data = ['route' => $route];
$db = new MyDB();
if(!$db) {
    echo $db->lastErrorMsg();
} else {
    switch ($route) {
        case 'count':
            $response = $db->countScore([]);
            $data = array_merge($data, $response);
        break;
        case 'add':
            $response = $db->insertScore([]);
            $data = array_merge($data, $response);
        break;
    }
    $db->close();
}

echo json_encode($data);
