<?php

if (isset($_POST['email']) && !empty($_POST['email'])) {

    // Email address of receipt
    $to = 'erinmtait@gmail.com';

    // Email subject
    $subject = 'New contact request by ' . strip_tags($_POST['name']).'';
	
	// Email from setting
    $headers = "From: ".strip_tags($_POST['name'])." <".strip_tags($_POST['email'])."> \r\n";

    // Email reply
    $headers .= "Reply-To: " . strip_tags($_POST['email']) . "\r\n";

    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

   /* Admin Email Start */
   
   $message = '<html><body><table width="800" border="0" align="center" cellpadding="0" cellspacing="0" style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px;">
  <tr>
    <td bgcolor="#163B6E"><table width="100%" border="0" cellspacing="1" cellpadding="5">
  <tr>
    <td height="80" colspan="2" align="center" valign="middle" bgcolor="#000">
		<a href="#" title="" target="">
			<img src="http://www.websitename.com/images/logo.png" alt="">
		</a>
	</td>
  </tr>
  <tr>
    <td height="80" colspan="2" valign="middle" bgcolor="#FFFFFF">Hello Admin,<br />
      <br />
      New enquiry has been received from the website. Details are:</td>
    </tr>
  
  <tr>
    <td width="28%" height="35" align="left" valign="middle" bgcolor="#FFFFFF"><strong>Name:</strong></td>
    <td width="72%" height="35" align="left" valign="middle" bgcolor="#FFFFFF">'.strip_tags($_POST['name']).'</td>
  </tr>
  <tr>
    <td height="35" align="left" valign="middle" bgcolor="#FFFFFF"><strong>Email:</strong></td>
    <td height="35" align="left" valign="middle" bgcolor="#FFFFFF">'.strip_tags($_POST['email']).'</td>
  </tr>
  <tr>
    <td height="35" align="left" valign="middle" bgcolor="#FFFFFF"><strong>Subject:</strong></td>
    <td height="35" align="left" valign="middle" bgcolor="#FFFFFF">'.strip_tags($_POST['subject']).'</td>
  </tr>
  <tr>
    <td height="35" align="left" valign="middle" bgcolor="#FFFFFF"><strong>Comments:</strong></td>
    <td height="35" align="left" valign="middle" bgcolor="#FFFFFF">'.strip_tags($_POST['comment']).'</td>
  </tr>
  <tr>
    <td height="50" colspan="2" align="left" valign="middle" bgcolor="#FFFFFF">This e-mail was sent from <a href="http://www.websitename.com" target="_blank">websitename.com</a> </td>
    </tr>
</table>
</td>
  </tr>
</table></body><br/><br/></html>';
    
    /* User Email Start */
    
    $body = '<html><body>
    <table width="800" border="0" align="center" cellpadding="0" cellspacing="0" style="font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px;">
	  <tr>
		<td bgcolor="#163B6E"><table width="100%" border="0" cellspacing="1" cellpadding="5">
	  <tr>
		<td width="100%" height="80" align="center" valign="middle" bgcolor="#000">
			<a href="#" title="" target="">
				<img src="http://www.websitename.com/images/logo.png" alt="">
			</a>
		</td>
	  </tr>
	  <tr>
		<td height="200" valign="middle" bgcolor="#FFFFFF">Hello '.strip_tags($_POST['name']).',<br />
		  <br />
		  Thank you for your interest in our website. <br />
		  <br />
		   We received your request. We will get back to you as soon as possible. <br />
		  <br /></td>
		</tr>
	  
	  <tr>
		<td height="50" align="left" valign="middle" bgcolor="#FFFFFF">Kind regards,<br />
		  <a href="#" target="_blank">Erin Tait</a></td>
		</tr>
	</table></body></html>';

	$headers2 = "From: WebsiteName <info@websitename.com> \r\n";
    $headers2 .= "Reply-To: " . 'noreplay@websitename.com'. "\r\n";
	$headers2 .= "MIME-Version: 1.0\r\n";
	$headers2 .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    
    mail(strip_tags($_POST['email']), 'Thank you for reaching out to us.', $body, $headers2);
    
	$responseArray = array('success' => true, 'message' => '');    
    if (mail($to, $subject, $message, $headers)) {
        $responseArray['success'] = true;
        $responseArray['message'] = "Request sent successfully.";
    } else {
        $responseArray['message'] = "Some problem occurred to send mail.";
        $responseArray['success'] = false;
    }
    echo json_encode($responseArray);
}
exit();
