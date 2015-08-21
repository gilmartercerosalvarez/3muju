<?php
	define("HTTP_STATUS",  serialize (array(
						200 => 'OK',
						201 => 'Created',  
						204 => 'No Content',  
						404 => 'Not Found',  
						406 => 'Not Acceptable',
						500 => 'Internal Error'))
		   );
	define("CONTENT_TYPE", "application/json");
	define("STATUS_OK", 200);
	define("STATUS_NOT_ACCEPTABLE", 406);
	define("STATUS_INTERNAL_ERROR", 500);
	define("STATUS_NOT_FOUND", 404);
	
?>