<?php

$from="Peterhalborg55@hotmail.com";

$email="Peterhalborg55@hotmail.com";

$name=$_POST['name'];

$email=$_POST['email'];

$subject=$_POST['subject'];

mail ( $email, $name, $email, $subject );

print "you message has been send!"

?>