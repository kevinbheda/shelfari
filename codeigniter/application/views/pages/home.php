Hello world!!!
<?php 
$booklist=array("booklist"=>$books);
$json_a=json_encode($booklist);


print_r($json_a);
/*
foreach ( $books as $book_item):
echo  $book_item['book_id']."<br>";
echo  $book_item['book_name']."<br>";
echo  $book_item['Author']."<br>";
echo  $book_item['status']."<br>";
endforeach
*/

foreach ( $books as $book_item){
echo $book_item->id . "<br>";
echo  $book_item->book_name . "<br>";
echo $book_item->author . "<br>";
echo $book_item->status . "<br>";
}
?>