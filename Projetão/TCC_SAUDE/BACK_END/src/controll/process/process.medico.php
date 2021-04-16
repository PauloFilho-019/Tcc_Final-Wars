<?php

	require("../../domain/connection.php");
	require("../../domain/medico.php");

	class MedicoProcess {
		var $md;

		function doGet($arr){
			$md = new MedicoDAO();
			$result = "use to result to DAO";
			http_response_code(200);
			echo json_encode($result);
		}


		function doPost($arr){
			$md = new MedicoDAO();
			$result = "use to result to DAO";
			http_response_code(200);
			echo json_encode($result);
		}


		function doPut($arr){
			$md = new MedicoDAO();
			$result = "use to result to DAO";
			http_response_code(200);
			echo json_encode($result);
		}


		function doDelete($arr){
			$md = new MedicoDAO();
			$result = "use to result to DAO";
			http_response_code(200);
			echo json_encode($result);
		}
	}