<?php
require_once("Rest.php");
require_once("../DAL/CustomerManager.php");

	class CustomerController extends Rest
	{
		private $manager;
		public function __construct()
		{
			parent::__construct();
			$this->manager = new CustomerManager();
		}

		public function customers()
		{	
			if($this->getRequesMethod() != "GET")
			{
				$this->response('', STATUS_NOT_ACCEPTABLE);
			}
			$data = $this->manager->getCustomers();
			$this->response($data, STATUS_OK);	
		}

		public function customer($id)
		{	
			if($this->getRequesMethod() != "GET")
			{
				$this->response('', STATUS_NOT_ACCEPTABLE);
			}
			$data = $this->manager->getCustomer($id);
			$this->response($data, STATUS_OK);	
		}


		/*
		public function processApi(){
			
			echo $_REQUEST['x'];
			$requiredFunction = trim(str_replace("/","", $_REQUEST['x']));
			
			echo "holaaaaaaaaaaaaaaaaaaaa".$requiredFunction;

			echo method_exists($this, $requiredFunction);
			
			if(method_exists($this, $requiredFunction))
			{
				//$this->$requiredFunction();
				echo method_exists($this, $requiredFunction);
			}
			else
			{
				//$this->response('',STATUS_NOT_FOUND);
				print "fuera";
				echo method_exists($this, $requiredFunction);
			}
		}
		*/
	}	

	$c = new CustomerController();
	$value = $_GET['name'];
	echo "hola".$value;
	$c->customer($value);
	//$c->processApi();

?>