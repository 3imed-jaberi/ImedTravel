<h2>Add Places</h2> <br />

<form 
    action="<?php echo $_GET['edit'] == 'true' ? 'crud api/update.php' : 'crud api/add.php' ?>" 
    method="POST"
>

    <div class="form-group">
        <input 
            type="hidden" 
            name="id" 
            class="form-control form-control-lg" 
            value='<?php echo $_GET['edit'] == 'true' ? $_GET['id'] : ' ' ?>' 
        />
        <span class="invalid-feedback"></span>
    </div>

    <div class="form-group">
        <label>Name:<sup>*</sup></label>
        <input 
            type="text"
            name="name"
            class="form-control form-control-lg" 
            value='<?php echo $_GET['edit'] == 'true' ? $_GET['name'] : ' ' ?>' 
        />
        <span class="invalid-feedback"></span>
    </div> 

    <div class="form-group">
        <label>Description:<sup>*</sup></label>
        <textarea 
            name="desc" 
            class="form-control form-control-lg"
        > 
            <?php echo $_GET['edit'] == 'true' ? $_GET['desc'] : ' ' ?>
        </textarea>
        <span class="invalid-feedback"></span>
    </div>

    <div class="form-group">
        <label>Prix:<sup>*</sup></label>
        <input 
            type="text"
            name="prix" 
            class="form-control form-control-lg" 
            value='<?php echo $_GET['edit'] == 'true' ? $_GET['prix'] : ' ' ?>'
        />
        <span class="invalid-feedback"></span>
    </div>

    <div class="form-group">
        <label>Path:<sup>*</sup></label>
        <input 
            type="text" 
            name="path" 
            class="form-control form-control-lg" 
            value='<?php echo $_GET['edit'] == 'true' ? $_GET['path'] : ' ' ?>'
        />
        <span class="invalid-feedback"></span>
    </div>

    <div>
        <input 
            type="submit" 
            class="btn btn-success btn-block" 
            value="<?php echo $_GET['edit'] == 'true' ? 'update' : 'add' ?>"
        />
    </div>

</form>