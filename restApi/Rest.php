<?php
require_once("RestConstants.php");

    class Rest
    {   
        private $statusCode = null;
        private $statusMessage = null;
        private $requesMethod = null;
        private $contentType = CONTENT_TYPE;
        private $HTTP_STATUS;

        /*
        * Constructor in charge to initialize Rest class and setting class atributes
        */
        public function __construct()
        {
            $this->HTTP_STATUS = unserialize(HTTP_STATUS);
            $this->statusCode = STATUS_OK;
            $this->requesMethod = $_SERVER['REQUEST_METHOD'];
            $this->statusMessage = $this->setStatusMessage();
        }

        /*
        * Build the information as json format and it is displayed 
        * @param    $data           Information as array to display as a json format
        * @param    $statusCode     Constant for Http Status code ex: 200, 406
        */
        public function response($data, $statusCode)
        {
            header("HTTP/1.1 ".$this->statusCode." ".$this->requesMethod);
            header("Content-Type:".$this->_contentType);
            $response['status'] = $statusCode;
            $response ['status_message'] = $this->HTTP_STATUS[$statusCode];
            $response['data'] = $data;
            $json_response = json_encode($response);
            echo $json_response;
            exit;
        }
        
        /*
        * Get a message from HTTP_STATUS constant
        * @return   A message according the value set in the object in other case return Internal Error
        */
        private function setStatusMessage()
        {
            $statusMessage = $this->HTTP_STATUS[STATUS_INTERNAL_ERROR];
            if(!is_null($this->statusCode)) 
            {   
                $statusMessage = $this->HTTP_STATUS[$this->statusCode];
            }
        
            return $statusMessage;
        }

        /*
        * Get the request method set in the page
        * @return   The REQUEST_METHOD set in the page ex: GET, POST, DELETE
        */
        public function getRequesMethod()
        {
            return $this->requesMethod;
        }
    }

?>