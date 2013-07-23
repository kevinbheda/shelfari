<?php
class Book_model extends CI_Model {

	private $table_book='book';

	public function __construct()
	{
		$this->load->database();
	}
	//add a new book
	public function saveBook($book)
	{


		$insertQuery=$this->db->insert('book',$book);
		return $this->db->insert_id();
	}
	//search for books
	public function get_by_name($bookName)
	{	
		$this->db->like('book_name', $bookName,'after');
		$query=$this->db->get($this->table_book); 
		return $query->result();


	}
	//updatbook
	public function updateBook($id,$book)
	{  
		$this->db->where('id', $id);
		$query=$this->db->update($this->table_book, $book);
		return $query;

	}
	//deletebook
	public function delete($id)
	{
		$this->db->where('id', $id);
		return $this->db->delete($this->table_book);


	}

}




?>