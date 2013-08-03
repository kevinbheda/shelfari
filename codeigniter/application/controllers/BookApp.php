<?php
class bookapp extends CI_Controller {

    function  __construct(){
        parent::__construct();
        $this->load->model('book_model');
    }

    //delegates
    public function index()
    {
        switch ($_SERVER['REQUEST_METHOD']) {

            case 'GET':
                if(func_num_args() && is_numeric(func_get_arg(0))) {
                    // request for a specific book
                    $this->getBookById(func_get_arg(0));
                }
                else {
                    $this->getRandomBooks();
                    //general request from home page to display random books
                }
            break;
            //end of GET case

            case 'POST': //addbook request
            $this->add();
            break;
            //end of post case

            case  'PATCH': //update book request
                if(func_num_args() && is_numeric(func_get_arg(0))) {
                    $this->edit(func_get_arg(0));
                }
                else {
                    show_error($status_code = 400); //if book id is not present or not numeric
                    return ;
                }
            break; //end of POST case

            case 'DELETE': // delete book request
                if(func_num_args() && is_numeric(func_get_arg(0))) {
                    $this->delete(func_get_arg(0));
                }
                else {
                    show_error($status_code = 400); //if book id is not present or not numeric
                    return ;
                }
            break;
            //end of delete case
        }
    }

    public function getBookByid($id)
    {
        $data['books']=$this->book_model->getBookById($id);
        $this->load->view('pages/books', $data);
    }

    //for home page
    public function getRandomBooks()
    {
        $data['books']=$this->book_model->getRandomBooks();
        $this->load->view('pages/books', $data);
    }

    //book add conrolller func
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
        if(!$bookName) {
            show_error($status_code = 200); //malformed request
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
}
?>

