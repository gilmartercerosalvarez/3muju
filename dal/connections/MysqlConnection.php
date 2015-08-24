<?php 
    class MysqlConnection
    {
        private static $instance;
        private $connection = null;

        // Constructor class that initialize DBConnection class
        public function __construct()
        {
            $this->connectDataBase();
        }

        // Create an instance from MysqlConnection if it was not created before
        public static function getInstance()
        {
            if (!self::$instance instanceof self)
            {
                self::$instance = new self;
            }
            return self::$instance;
        }

        // Method in charge of connect to mysql database
        // $dbServer    ip or server name from database 127.0.0.1
        // $dbUser      User with permission from database
        // $dbPassword  Password from database
        // $db          database name
        private function connectDataBase()
        {
            $this->connection = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB);
            if ($this->connection->connect_error) 
            {
                die("Connection failed: " . $this->connection->connect_error);
            }
        }

        // Return tuples from data base requested by an query
        // $query   query to be executed
        // return   Information from database tables as a array
        public function executeQuery($query)
        {
            $tuples = $this->connection->query($query) or die($this->connection->error.__LINE__);
            $result = array();
            while($row = $tuples->fetch_assoc())
            {
                $result[] = $row;
            }
            return $result;
        }
    }

?>