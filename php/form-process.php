<?php

$errorMSG = "";

// NAME
if (empty($_GET["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_GET["name"];
}

// EMAIL
if (empty($_GET["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_GET["email"];
}

// phone
if (empty($_GET["phone"])) {
    $errorMSG .= "Subject is required ";
} else {
    $phone = $_GET["phone"];
}

// MESSAGE
if (empty($_GET["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_GET["message"];
}


$EmailTo = "alessia.amitranobo@gmail.com";
$Subject = "Messaggio da sito web Inoxlab";

// prepare email body text
$Body = "";
$Body .= "Nome: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Telefono: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "Messaggio: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>
