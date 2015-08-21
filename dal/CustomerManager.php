<?php
require_once("ConnectionManager.php");

	class CustomerManager
	{
		private $connection;

		public function __construct()
		{
			$this->connection = new ConnectionManager();
		}

		public function getCustomers()
		{	
			$query="SELECT distinct c.customerNumber, 
									c.customerName, 
									c.email, c.address, 
									c.city, c.state, 
									c.postalCode, c.country 
					FROM angularcode_customers c 
					order by c.customerNumber desc";

			$tuples = $this->connection->runQuery($query);
			return $tuples;
		}

		public function getCustomer($id)
		{	
			$query="SELECT distinct c.customerName
					FROM angularcode_customers c 
					WHERE c.customerNumber = $id";

			$tuples = $this->connection->runQuery($query);
			return $tuples;
		}

	}

?>