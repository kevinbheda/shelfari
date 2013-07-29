<?php

class bookapp extends CI_Controller {
	
function  __construct(){
	parent::__construct();
	$this->load->model('book_model');
}
//delegates 
public function index()     
{	
	switch ($_SERVER['REQUEST_METHOD']){
		case 'GET':
		if(func_num_args())
			$this->getBookById(func_get_arg(0));
		else 
			$this->getRandomBooks();
		break;
		case 'POST':
		$this->add();
		break;
		case  'PATCH':
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
public function getBookByid($id)
{
	$data['books']=$this->book_model->getBookById($id);
	$this->load->view('pages/books', $data);
}	
public function getRandomBooks()
{
	$data['books']=$this->book_model->getRandomBooks();
	$this->load->view('pages/books', $data);
}
//book add controlller func
public function add()
{		
	$payload=file_get_contents("php://input");
	$book=json_decode($payload,true);
	$data['result']=$this->book_model->saveBook($book);
	$this->load->view('pages/add.php',$data);
}
//book search controller func
public function search()
{	
	$bookName= $this->input->post('book_name');
	if(!$bookName){	
		echo "";
		return ;
	}
	$data['books']=$this->book_model->getByName($bookName);
	$this->load->view('pages/books', $data);
}
//book edit controller func
public function edit($id)
{    	
	$payload=file_get_contents("php://input");
	$book=json_decode($payload,true);
	$data['result']=$this->book_model->updateBook($id,$book);
	$this->load->view('pages/edit',$data);
}
//book delete controller func
public function delete($id)
{
	$result=$this->book_model->delete($id);
	$data=array("result"=>$result);	
	$this->load->view('/pages/delete',$data);
}

>

