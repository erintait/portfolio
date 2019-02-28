<?php
require_once('email_config.php');
require_once('phpmailer/PHPMailer/src/Exception.php');
require_once('phpmailer/PHPMailer/src/PHPMailer.php');
require_once('phpmailer/PHPMailer/src/SMTP.php');

foreach($_POST as $key=>$value){
    $_POST[$key] = htmlentities( addslashes( $value));
}

$mail = new PHPMailer\PHPMailer\PHPMailer;
$mail->SMTPDebug = 0;           // Enable verbose debug output. Change to 0 to disable debugging output.

$mail->isSMTP();                // Set mailer to use SMTP.
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers.
$mail->SMTPAuth = true;         // Enable SMTP authentication


$mail->Username = EMAIL_USER;   // SMTP username
$mail->Password = EMAIL_PASS;   // SMTP password
$mail->SMTPSecure = 'tls';      // Enable TLS encryption, `ssl` also accepted, but TLS is a newer more-secure encryption
$mail->Port = 587;              // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->smtpConnect($options);
$mail->From = 'erinmtaitserver@gmail.com';  // sender's email address (shows in "From" field)
$mail->FromName = 'Mailer Daemon';   // sender's name (shows in "From" field)
$mail->addAddress('erinmtait@gmail.com', 'Erin Tait');  // Add a recipient (name is optional)
//$mail->addAddress('ellen@example.com');                        // Add a second recipient
$mail->addReplyTo($_POST['email']);                          // Add a reply-to address
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Mailer message from '.$_POST['name'];
$mail->Body    = "
    time: ".date('Y-m-d: H:is:s')."<br>
    from: {$_SERVER['REMOTE_ADDR']}<br>
    name: {$_POST['name']}<br>
    email: {$_POST['email']}<br>
    subject: {$_POST['subject']}<br>
    message: {$_POST['comment']}
";
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

$response = [
    "success" => false,
    "message" => null
];

if(!$mail->send()) {
    echo json_encode($response);
} else {
    $response["success"] = true;
    $response["message"] = "Message sent successfully!";
    echo json_encode($response);
}
?>
