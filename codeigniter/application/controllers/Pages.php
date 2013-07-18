<?php
class Pages extends CI_Controller{
	public function  __construct(){
		parent::__construct();
		$this->load->model('book_model');
		$this->load->helper('url');
	}
	public function index()
	{
		echo "hello world";	


	}
	public function view($page = 'home',$crap='')
	{

		if ( ! file_exists('application/views/pages/'.$page.'.php'))
		{
		// Whoops, we don't have a page for that!
			show_404();
		}
		    echo $crap;
		    echo base_url();
			$data['title'] = ucfirst($page); // Capitalize the first letter
			$data['books']=$this->book_model->getBooks();
			//var_dump($data['books']);

			$this->load->view('pages/'.$page, $data);



		}
		public function addbook()
		{
			$book =array(
				"book_name"=>"let us c",
				"author"=>"Yashwant Kanetkar",
				"status"=>"Yes");
			$data['addbookstatus']=$this->book_model->saveBook($book);
			echo  $data['addbookstatus'] ."!!!!!!!";
		}
	}
	?>
