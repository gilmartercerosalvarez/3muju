<?php
require_once("Rest.php");
require_once("../DAL/TeamManager.php");

    class TeamController extends Rest
    {
        private $teamManager;

        /*
        * Constructor class in charge to manage controllers for teams
        */
        public function __construct()
        {
            parent::__construct();
            $this->manager = new TeamManager();
        }

        /*
        * Display all teams registered in the data base as array
        */
        public function getTeams()
        {   
            if($this->getRequesMethod() != "GET")
            {
                $this->response('', STATUS_NOT_ACCEPTABLE);
            }
            $data = $this->teamManager->getTeams();
            $this->response($data, STATUS_OK);  
        }

        /*
        * Display All information related to one team acording an unique identifier idteam
        * @param    $idTeam     Unique identifier team
        */
        public function getTeam($idTeam)
        {   
            if($this->getRequesMethod() != "GET")
            {
                $this->response('', STATUS_NOT_ACCEPTABLE);
            }
            $data = $this->teamManager->getTeam($idTeam);
            $this->response($data, STATUS_OK);  
        }
    }   
?>