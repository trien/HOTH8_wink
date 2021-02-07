<?php
if (!extension_loaded('sqlite3')) exit('Module sqlite3 not loaded');
class MyDB extends SQLite3 {
    function __construct() {
        $db = $_SERVER["SERVER_NAME"] == 'localhost' ? 'devpost.db': '../devpost.db';
        $this->open($db);
        $this->connectedUser = 1;
    }
    function insertEvent($event) {
        $event['idUser'] = $this->connectedUser;
        $sql = sprintf('INSERT INTO "TEvent" 
        VALUES (NULL, "%s", "%s", "%s", "%s", NULL)',
        $event['title'],
        $event['description'],
        $event['date'],
        $event['idUser']);
        
      
         $ret = $this->exec($sql);
         $error = [null];
         if(!$ret){
            $error = [$this->lastErrorMsg()];
         }
         return array_filter([
             'success' => true
         ] + $error);
    }
    /**
     * 
     */
    function getEvents() {
        $sql ='SELECT title, desc, "date", idUser, image FROM TEvent ORDER BY id DESC';
      
        $results = $this->query($sql);
        $events = [];
        while ($event = $results->fetchArray(SQLITE3_ASSOC)) {
            $events[]= $event;
        }
        return [
            'events' => $events
        ];
    }
    /**
     * 
     */
    function addPoints($points) {
        $sql = sprintf('INSERT INTO "TPoints" 
        VALUES (NULL, "%s", "%s", DATE("now"))',
        $this->connectedUser,
        $points);
        
      
         $ret = $this->exec($sql);
         $error = [null];
         if(!$ret){
            $error = [$this->lastErrorMsg()];
         }
         return array_filter([
             'success' => true
         ] + $error);
    }
    /**
     * 
     */
    function getPoints() {
        $sql =sprintf('SELECT SUM(points) points FROM Tpoints 
        WHERE userId = "%s"
        GROUP BY userId',
        $this->connectedUser);
      
        $results = $this->query($sql);
        $points = 0;
        $response = $results->fetchArray(SQLITE3_ASSOC);
        if ($response) {
            $points = $response['points'];
        }
        return [
            'points' => $points
        ];
    }
}
$route = 'index';
if (isset($_GET['route'])) {
    header('Access-Control-Allow-Origin: *');
    header('content-type:application/json');
    $route = $_GET['route'];
}
$data = ['route' => $route];
$db = new MyDB();
if(!$db) {
    echo $db->lastErrorMsg();
} else {
    switch ($route) {
        case 'addEvent':
            $event = json_decode(file_get_contents('php://input'), true);
            $response = $db->insertEvent($event);
            $data = array_merge($data, $response);
        break;
        case 'getEvents':
            $response = $db->getEvents();
            $data = array_merge($data, $response);
        break;
        case 'addPoints':
            $points = json_decode(file_get_contents('php://input'), true)['points'];
            $response = $db->addPoints($points);
            $data = array_merge($data, $response);
        break;
        case 'getPoints':
            $response = $db->getPoints();
            $data = array_merge($data, $response);
        break;
    }
    $db->close();
}

echo json_encode($data);
