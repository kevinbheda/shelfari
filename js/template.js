

<script type="text/template" id="addbook_template">

<legend>Add Book</legend>
<!-- book name-->
<div class="control-group">
<label class="control-label" for="addbokinputBookName"><b>Book Name</b></label>
<div class="controls">

<input type="text" class="input-medium" id="addbook_book_name" placeholder="Book Name">

</div>

</div>

<div class="control-group">
<label class="control-label" for="inputAuthorName"><b>Author Name</b></label>
<div class="controls">

<input type="text" class="input-medium" id="addbook_author_Name" placeholder="Author">

</div>

</div>

<div class="control-group">
<label class="control-label" for="inputStatus"><b>Read Status</b></label>
<div class="controls">

<select class="addbook_status" >
<option selected="selected">Choose Read status</option>
<option value="YES">YES</option>
<option value="NO">No</option>
<option value="Reading">Reading</option>
</select>

</div>

</div>



<div class="control-group">

<div class="controls">
<button type="submit" class="btn">Save</button>

</div>

</div>


</script>

<script type="text/template" id="editbook_template">
<legend>Edit book</legend>
<div class="control-group">
<label class="control-label" for="editBookName"><b>Book Name</b></label>
<div class="controls">
<input type="text" class="input-medium" id="editbook_book_name" placeholder="Book Name">
</div>
</div>

<div class="control-group">
<label class="control-label" for="editAuthorName"><b>Author Name</b></label>
<div class="controls">
<input type="text" class="input-medium" id="editbook_author_Name" placeholder="Author">
</div>
</div>
<div class="control-group">
<label class="control-label" for="inputStatus"><b>Read Status</b></label>
<div class="controls">
<select class="editbook_status" >
<option>Yes</option>
<option>No</option>
<option>Reading</option>
</select>

</div>

</div>
<input type="hidden" id="editbook_book_id">
<div class="control-group">

<div class="controls">
<button type="submit" class="btn">Save</button>

</div>

</div>
</script>
