<?php

class BookApp extends CI_Controller{
	
	function  __construct(){
		parent::__construct();
		$this->load->model('book_model');
		 //$this->load->helper('form');

        //helper for redirecting url
		
	}


	//default index page
	public function index()
	{	

		switch ($_SERVER['REQUEST_METHOD']) {
			case 'POST':
			$this->add();
			break;
			
			case  'PUT':
			$this->edit(func_get_arg(0));
			break;

			case 'DELETE':
			$this->delete(func_get_arg(0));
			break;		

			default:
				# code...
			break;
		}
		
		/*if($_SERVER['REQUEST_METHOD'] == 'POST')
		{
			
			$this->add();
		}
		else if($_SERVER['REQUEST_METHOD'] == 'PUT')
		{
			$this->edit();
		}
		else if($_SERVER['REQUEST_METHOD'] == 'DELETE')
		{
			
			$this->delete($parameter);
		}*/
		/*else if($_SERVER['REQUEST_METHOD'] == 'GET')
		{
			$this->search();
		}*/
		

	}


	//book add controlller
	public function add()
	{		
		$payload=file_get_contents("php://input");
		$book=json_decode($payload,true);
		$data['result']=$this->book_model->saveBook($book);
		$this->load->view('pages/add.php',$data);

	}


	//book search controller
	public function search()
	{	
		//$this->input->post('some_data');
		$bookName= $this->input->post('book_name');
		/*$payload=file_get_contents("php://input");
		$bookName=json_decode($payload,true);

		print_r($bookName);

*/
		if(!$bookName)
			echo "";
		return ;
		$data['books']=$this->book_model->get_by_name($bookName);
		$this->load->view('pages/search', $data);

		
	}


	//book edit controller
	public function edit($id)
	{    
		//mostly post variables
		//$this->input->post('some_data');
		//$id=func_get_arg(0);
		/*$book =array(
			"book_name"=>"Let us C plus plus",
			"status"=>"Yes");*/

		$payload=file_get_contents("php://input");
		$book=json_decode($payload,true);

		$data['result']=$this->book_model->updateBook($id,$book);
		$this->load->view('pages/edit',$data);



	}


	//book delete controller
	public function delete($id)
	{

		$result=$this->book_model->delete($id);
		$data=array("result"=>$result);	
		

		$this->load->view('/pages/delete',$data);


	}



}
?>