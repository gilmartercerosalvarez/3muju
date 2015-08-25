<?php
require_once("Rest.php");
require_once("TeamControllers.php");

    class ControllerFactory 
    {
        private $controller;

        public function __construct()
        {
            $controller = null;
        }

        public function setController($method)
        {   
            switch ($method) {
                case 'teams':
                {
                    $this->controller = new TeamController();

                    break;
                }
                default:
                    # code...
                    break;
            }

        }
        
    }   

    $c = new ControllerFactory();
    $c->setController("teams");
    //$c->processApi();

?>