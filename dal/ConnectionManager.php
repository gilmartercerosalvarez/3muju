<?php
require_once("ConnectionConstants.php");
require_once("connections/MysqlConnection.php");

	class ConnectionManager
	{
		private $dbManager = DB_MANAGEMENT;
		private $bdConnection;
		private $dbSign;

		public function __construct()
		{
			$dbManager = strtolower($this->dbManager);
			$this->dbSign = $dbManager;
			switch ($dbManager) 
			{
				case 'mysql':
					$this->bdConnection = MysqlConnection::getInstance();
					break;
				case 'postgres':
					$this->bdConnection = null;
					break;
				default:
					echo "There is not any connection for this configuration";
					break;
			}
		}

		public function runQuery($query)
		{
			return $this->bdConnection->executeQuery($query);
		}


	}

?>