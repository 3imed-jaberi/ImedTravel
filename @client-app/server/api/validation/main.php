<?php 
  
  //TODO: 
  // * import all errors msg from other file .. 



  // main function for testing the lenght you want .. 
  function isValidLength($unit, $size, $operation='') {
    if ($operation === 'supp') {
      $res = strlen($unit) > $size-1; 
    }else if ($operation === 'min') {
      $res = strlen($unit) < $size+1;    
    }else{
      $res = strlen($unit) === $size;    
    }

    return $res ? 'true' : 'false';
  }  

  // main function for testing all the unit is numbers .. 
  function isValidNumber($unit){
    return  preg_match_all('/[^0-9]/', $unit) ? 'false' : 'true';	
  } 

  // main function for testing all the unit is alphabet .. 
  function isValidAlphabet($unit){
    return  preg_match_all('/[^A-Z]/', strtoupper($unit)) ? 'false' : 'true';	
  } 

  $errors = [];

  // test cin1 .. 
  if (isValidLength($cin1, 8) === 'false'){  
    $errors = array_merge($errors, ["cin1" => "the cin should be exact 8 chiffre .."]);
  }else{
    if (isValidNumber($cin1) === 'false') {
      $errors =  array_merge($errors, ["cin1" => "should be numbers .. "]);
    }
  }
  
  // test firstName1 .. 
  if (isValidLength($firstName1, 3, 'supp') === 'false' || isValidLength($firstName1, 30, 'min') === 'false'){  
    $errors = array_merge($errors, ["firstName1" => "the frist name should be minimaum 3 chars & maximum 30 chars .."]);
  }else{
    if (isValidAlphabet($firstName1) === 'false') {
      $errors =  array_merge($errors, ["firstName1" => "the frist name should be strings content alphabet (a-z / A-Z) .."]);
    }
  }
  
  // test lastName1 .. 
  if (isValidLength($lastName1,3,'supp') === 'false' || isValidLength($lastName1,30,'min') === 'false'){  
    $errors = array_merge($errors, ["lastName1" => "the lastname should be minimaum 3 chars & maximum 30 chars .."]);
  }else{
    if (isValidAlphabet($lastName1) === 'false') {
      $errors =  array_merge($errors, ["lastName1" => "the lastname should be strings content alphabet (a-z / A-Z) .."]);
    }
  }

  // phone1 .. 
  if (isValidLength($phone1,8) === 'false'){  
    $errors = array_merge($errors, ["phone1" => "the phone should be exact 8 chiffre .."]);
  }else{
    if (isValidNumber($phone1) === 'false') {
      $errors =  array_merge($errors, ["phone1" => "should be numbers .. "]);
    }
  }

  // address .. 
  if (isValidLength($address1,10,'supp') === 'false' || isValidLength($address1,120,'min') === 'false'){  
    $errors = array_merge($errors, ["address1" => "the address should be minimaum 10 chars & maximum 120 chars .."]);
  }

  /* else{
    if (isValidAlphabet($address1) === 'false') {
      $errors =  array_merge($errors, ["$address1" => "the address should be strings content alphabet (a-z / A-Z) .."]);
    }
  } */

  if ($nbP == '-1'){
    $errors = array_merge($errors, ["nbP" => " should be select nubmer of your companys > min two peoples < .. "]);
  }else if ($nbP == '2') {
    if (isValidLength($cin2,8) === 'false'){  
      $errors = array_merge($errors, ["cin2" => "the cin should be exact 8 chiffre .."]);
    }else{
      if (isValidNumber($cin2) === 'false') {
        $errors =  array_merge($errors, ["cin2" => "should be numbers .. "]);
      }
    }
    
    if (isValidLength($firstName2,3,'supp') === 'false' || isValidLength($firstName2,30,'min') === 'false'){  
      $errors = array_merge($errors, ["firstName2" => "the frist name should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
      if (isValidAlphabet($firstName2) === 'false') {
        $errors =  array_merge($errors, ["firstName2" => "the frist name should be strings content alphabet (a-z / A-Z) .."]);
      }
    }
    
    if (isValidLength($lastName2,3,'supp') === 'false' || isValidLength($lastName2,30,'min') === 'false'){  
      $errors = array_merge($errors, ["lastName2" => "the lastname should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
      if (isValidAlphabet($lastName2) === 'false') {
        $errors =  array_merge($errors, ["lastName2" => "the lastname should be strings content alphabet (a-z / A-Z) .."]);
      }
    }
  }else if ($nbP == '3'){

    if (isValidLength($cin2,8) === 'false'){  
      $errors = array_merge($errors, ["cin2" => "the cin should be exact 8 chiffre .."]);
    }else{
            if (isValidNumber($cin2) === 'false') {
                $errors =  array_merge($errors, ["cin2" => "should be numbers .. "]);
            }
    }
    
    if (isValidLength($firstName2,3,'supp') === 'false' || isValidLength($firstName2,30,'min') === 'false'){  
      $errors = array_merge($errors, ["firstName2" => "the frist name should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($firstName2) === 'false') {
                $errors =  array_merge($errors, ["firstName2" => "the frist name should be strings content alphabet (a-z / A-Z) .."]);
            }
    }
    
    if (isValidLength($lastName2,3,'supp') === 'false' || isValidLength($lastName2,30,'min') === 'false'){  
      $errors = array_merge($errors, ["lastName2" => "the lastname should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($lastName2) === 'false') {
                $errors =  array_merge($errors, ["lastName2" => "the lastname should be strings content alphabet (a-z / A-Z) .."]);
            }
    }

    if (isValidLength($cin3,8) === 'false'){  
      $errors = array_merge($errors, ["cin3" => "the cin should be exact 8 chiffre .."]);
    }else{
            if (isValidNumber($cin3) === 'false') {
                $errors =  array_merge($errors, ["cin3" => "should be numbers .. "]);
            }
    }
    
    if (isValidLength($firstName3,3,'supp') === 'false' || isValidLength($firstName3,30,'min') === 'false'){  
      $errors = array_merge($errors, ["firstName3" => "the frist name should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($firstName3) === 'false') {
                $errors =  array_merge($errors, ["firstName3" => "the frist name should be strings content alphabet (a-z / A-Z) .."]);
            }
    }
    
    if (isValidLength($lastName3,3,'supp') === 'false' || isValidLength($lastName3,30,'min') === 'false'){  
      $errors = array_merge($errors, ["lastName3" => "the lastname should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($lastName3) === 'false') {
                $errors =  array_merge($errors, ["lastName3" => "the lastname should be strings content alphabet (a-z / A-Z) .."]);
            }
    }
  }else if ($nbP == '4'){

    if (isValidLength($cin2,8) === 'false'){  
      $errors = array_merge($errors, ["cin2" => "the cin should be exact 8 chiffre .."]);
    }else{
            if (isValidNumber($cin2) === 'false') {
                $errors =  array_merge($errors, ["cin2" => "should be numbers .. "]);
            }
    }
    
    if (isValidLength($firstName2,3,'supp') === 'false' || isValidLength($firstName2,30,'min') === 'false'){  
      $errors = array_merge($errors, ["firstName2" => "the frist name should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($firstName2) === 'false') {
                $errors =  array_merge($errors, ["firstName2" => "the frist name should be strings content alphabet (a-z / A-Z) .."]);
            }
    }
    
    if (isValidLength($lastName2,3,'supp') === 'false' || isValidLength($lastName2,30,'min') === 'false'){  
      $errors = array_merge($errors, ["lastName2" => "the lastname should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($lastName2) === 'false') {
                $errors =  array_merge($errors, ["lastName2" => "the lastname should be strings content alphabet (a-z / A-Z) .."]);
            }
    }

    if (isValidLength($cin3,8) === 'false'){  
      $errors = array_merge($errors, ["cin3" => "the cin should be exact 8 chiffre .."]);
    }else{
            if (isValidNumber($cin3) === 'false') {
                $errors =  array_merge($errors, ["cin3" => "should be numbers .. "]);
            }
    }
    
    if (isValidLength($firstName3,3,'supp') === 'false' || isValidLength($firstName3,30,'min') === 'false'){  
      $errors = array_merge($errors, ["firstName3" => "the frist name should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($firstName3) === 'false') {
                $errors =  array_merge($errors, ["firstName3" => "the frist name should be strings content alphabet (a-z / A-Z) .."]);
            }
    }
    
    if (isValidLength($lastName3,3,'supp') === 'false' || isValidLength($lastName3,30,'min') === 'false'){  
      $errors = array_merge($errors, ["lastName3" => "the lastname should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($lastName3) === 'false') {
                $errors =  array_merge($errors, ["lastName3" => "the lastname should be strings content alphabet (a-z / A-Z) .."]);
            }
    }

    if (isValidLength($cin4,8) === 'false'){  
      $errors = array_merge($errors, ["cin4" => "the cin should be exact 8 chiffre .."]);
    }else{
            if (isValidNumber($cin4) === 'false') {
                $errors =  array_merge($errors, ["cin4" => "should be numbers .. "]);
            }
    }
    
    if (isValidLength($firstName4,3,'supp') === 'false' || isValidLength($firstName4,30,'min') === 'false'){  
      $errors = array_merge($errors, ["firstName4" => "the frist name should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($firstName4) === 'false') {
                $errors =  array_merge($errors, ["firstName4" => "the frist name should be strings content alphabet (a-z / A-Z) .."]);
            }
    }
    
    if (isValidLength($lastName4,3,'supp') === 'false' || isValidLength($lastName4,30,'min') === 'false'){  
      $errors = array_merge($errors, ["lastName4" => "the lastname should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($lastName4) === 'false') {
                $errors =  array_merge($errors, ["lastName4" => "the lastname should be strings content alphabet (a-z / A-Z) .."]);
            }
    }

  }else if ($nbP == '5') {
    if (isValidLength($cin2,8) === 'false'){  
      $errors = array_merge($errors, ["cin2" => "the cin should be exact 8 chiffre .."]);
    }else{
            if (isValidNumber($cin2) === 'false') {
                $errors =  array_merge($errors, ["cin2" => "should be numbers .. "]);
            }
    }
    
    if (isValidLength($firstName2,3,'supp') === 'false' || isValidLength($firstName2,30,'min') === 'false'){  
      $errors = array_merge($errors, ["firstName2" => "the frist name should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($firstName2) === 'false') {
                $errors =  array_merge($errors, ["firstName2" => "the frist name should be strings content alphabet (a-z / A-Z) .."]);
            }
    }
    
    if (isValidLength($lastName2,3,'supp') === 'false' || isValidLength($lastName2,30,'min') === 'false'){  
      $errors = array_merge($errors, ["lastName2" => "the lastname should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($lastName2) === 'false') {
                $errors =  array_merge($errors, ["lastName2" => "the lastname should be strings content alphabet (a-z / A-Z) .."]);
            }
    }

    if (isValidLength($cin3,8) === 'false'){  
      $errors = array_merge($errors, ["cin3" => "the cin should be exact 8 chiffre .."]);
    }else{
            if (isValidNumber($cin3) === 'false') {
                $errors =  array_merge($errors, ["cin3" => "should be numbers .. "]);
            }
    }
    
    if (isValidLength($firstName3,3,'supp') === 'false' || isValidLength($firstName3,30,'min') === 'false'){  
      $errors = array_merge($errors, ["firstName3" => "the frist name should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($firstName3) === 'false') {
                $errors =  array_merge($errors, ["firstName3" => "the frist name should be strings content alphabet (a-z / A-Z) .."]);
            }
    }
    
    if (isValidLength($lastName3,3,'supp') === 'false' || isValidLength($lastName3,30,'min') === 'false'){  
      $errors = array_merge($errors, ["lastName3" => "the lastname should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($lastName3) === 'false') {
                $errors =  array_merge($errors, ["lastName3" => "the lastname should be strings content alphabet (a-z / A-Z) .."]);
            }
    }

    if (isValidLength($cin4,8) === 'false'){  
      $errors = array_merge($errors, ["cin4" => "the cin should be exact 8 chiffre .."]);
    }else{
            if (isValidNumber($cin4) === 'false') {
                $errors =  array_merge($errors, ["cin4" => "should be numbers .. "]);
            }
    }
    
    if (isValidLength($firstName4,3,'supp') === 'false' || isValidLength($firstName4,30,'min') === 'false'){  
      $errors = array_merge($errors, ["firstName4" => "the frist name should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($firstName4) === 'false') {
                $errors =  array_merge($errors, ["firstName4" => "the frist name should be strings content alphabet (a-z / A-Z) .."]);
            }
    }
    
    if (isValidLength($lastName4,3,'supp') === 'false' || isValidLength($lastName4,30,'min') === 'false'){  
      $errors = array_merge($errors, ["lastName4" => "the lastname should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($lastName4) === 'false') {
                $errors =  array_merge($errors, ["lastName4" => "the lastname should be strings content alphabet (a-z / A-Z) .."]);
            }
    }

    if (isValidLength($cin5,8) === 'false'){  
      $errors = array_merge($errors, ["cin5" => "the cin should be exact 8 chiffre .."]);
    }else{
            if (isValidNumber($cin5) === 'false') {
                $errors =  array_merge($errors, ["cin5" => "should be numbers .. "]);
            }
    }
    
    if (isValidLength($firstName5,3,'supp') === 'false' || isValidLength($firstName5,30,'min') === 'false'){  
      $errors = array_merge($errors, ["firstName5" => "the frist name should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($firstName5) === 'false') {
                $errors =  array_merge($errors, ["firstName5" => "the frist name should be strings content alphabet (a-z / A-Z) .."]);
            }
    }
    
    if (isValidLength($lastName5,3,'supp') === 'false' || isValidLength($lastName5,30,'min') === 'false'){  
      $errors = array_merge($errors, ["lastName5" => "the lastname should be minimaum 3 chars & maximum 30 chars .."]);
    }else{
            if (isValidAlphabet($lastName5) === 'false') {
                $errors =  array_merge($errors, ["lastName5" => "the lastname should be strings content alphabet (a-z / A-Z) .."]);
            }
    }
  }