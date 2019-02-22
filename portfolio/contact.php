<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <title>Fatima's Porfolio Website</title>
    <meta name="description" content="Contact">
    <meta name="author" content="Fatima Malo Torres Trueba">
    <link rel="stylesheet" type="text/css" href="style/global.css?random.number">
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
</head>

<body>
    <header>
		<div id="name">
            <p>Fátima Malo Torres Trueba</p>
        </div>
            <div id="buttons">
                <a href="home" id="home"><p>Home</p></a>
                <a href="about" id="about"><p>About</p></a>
                <a href="work" id="work"><p>Work</p></a>
                <a href="contact" id="contact"><p>Contact</p></a>
            </div>
        
        <hr id="header-line">
	</header>
    
    <main>
		<!--<p>Hello there! We are currently fixing some issues that we encountered on this page. If you need to contact Fatima, please email her at fatimaanimation@gmail.com Thank you! </p>-->
		
        <?php
        if(isset($_POST['submit'])){
            
            $first_name = trim ($_POST['first_name']);
            $last_name = trim ($_POST['last_name']);
            $from = trim ($_POST['email']);
            
            if ( ($first_name=='') || ($from=='') ) {
                $error = 'First Name and Email are required fields.';
            } else {
                $error = false;
            }
            
            if ($error == false) {
            $to = "fatimaanimation@gmail.com";
            $from = $_POST['email'];
            $first_name = $_POST['first_name'];
            $last_name = $_POST['last_name'];
            $subject = "Form submission";
            $subject2 = "Copy of your form submission";
            $message = $first_name . " " . $last_name . " wrote:" . "\n\n" . $_POST['message'];
            $message2 = "Dear $first_name, thank you for contacting Fatima Malo Torres Trueba. Here is a copy of your message: " . "\n\n" .
                $_POST['message'];
            
            $headers = "From:" . $from;
            $headers2 = "From:" . $to;
            mail($to,$subject,$message,$headers);
            mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
            echo "Your email has been sent, we will contact you shortly.";
            }
            
            if ($error != false) {
                echo "<p>$error</p>";
            }
        }
        ?>
        
        <form id="contact-form" action="" method="post">
            <p>First Name</p> <input type="text" name="first_name" placeholder="Your name">
            <p>Last Name </p> <input type="text" name="last_name" placeholder="Your last name">
            <p>Email</p> <input type="text" name="email" placeholder="example@example.com">
            <p>Message</p> <textarea rows="5" name="message" cols="30" placeholder="Message"></textarea>
            <input id="submit-button" type="submit" name="submit" value="Submit">
        </form>
    </main>

    <footer>
        <small>Website created by Fátima Malo Torres Trueba</small>
        <small>© 2019</small>
    </footer>

</body>
</html>