<?php

class BookApp extends CI_Controller{
	
	function  __construct(){
		parent::__construct();
		$this->load->model('book_model');
	
		
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
		
		$bookName= $this->input->post('book_name');

		if(!$bookName)
		{	
		echo "";
		return ;
		}
		$data['books']=$this->book_model->get_by_name($bookName);
		$this->load->view('pages/search', $data);

		
	}


	//book edit controller
	public function edit($id)
	{    
	

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