<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Set headers for CORS and JSON response
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Use PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Load PHPMailer
require 'vendor/autoload.php';

// Log function for debugging
function logError($message) {
    error_log(date('[Y-m-d H:i:s] ') . $message . PHP_EOL, 3, 'mail_errors.log');
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
        // Get POST data
        $firstName = htmlspecialchars($_POST['firstName'] ?? '');
        $lastName = htmlspecialchars($_POST['lastName'] ?? '');
        $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
        $company = htmlspecialchars($_POST['company'] ?? '');
        $website = htmlspecialchars($_POST['website'] ?? '');
        $service = htmlspecialchars($_POST['service'] ?? '');
        $message = htmlspecialchars($_POST['message'] ?? '');

        // Validate required fields
        if (empty($firstName) || empty($lastName) || empty($email) || empty($message)) {
            throw new Exception("Missing required fields");
        }

        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception("Invalid email address");
        }

        // Create new PHPMailer instance
        $mail = new PHPMailer(true);

        // Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'kontakt@neoframe.ch';
        $mail->Password = 'Sami89521977.';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->CharSet = 'UTF-8';

        // Recipients
        $mail->setFrom('kontakt@neoframe.ch', 'neoframe Contact Form');
        $mail->addAddress('kontakt@neoframe.ch', 'neoframe');
        $mail->addReplyTo($email, "$firstName $lastName");

        // Email content
        $mail->isHTML(true);
        $mail->Subject = "Neue Kontaktanfrage von $firstName $lastName";
        
        // Create HTML email body
        $emailBody = "
        <div style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
            <h2 style='color: #000; border-bottom: 2px solid #feefde; padding-bottom: 10px;'>
                Neue Kontaktanfrage
            </h2>
            <table style='width: 100%; border-collapse: collapse;'>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #eee;'><strong>Name:</strong></td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #eee;'>$firstName $lastName</td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #eee;'><strong>E-Mail:</strong></td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #eee;'>$email</td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #eee;'><strong>Firma:</strong></td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #eee;'>$company</td>
                </tr>";
        
        if (!empty($website)) {
            $emailBody .= "
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #eee;'><strong>Website:</strong></td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #eee;'>$website</td>
                </tr>";
        }
        
        if (!empty($service)) {
            $emailBody .= "
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #eee;'><strong>Gewünschte Dienstleistung:</strong></td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #eee;'>$service</td>
                </tr>";
        }
        
        $emailBody .= "
            </table>
            <div style='margin-top: 20px;'>
                <strong>Nachricht:</strong>
                <p style='background: #f9f9f9; padding: 15px; border-radius: 5px;'>$message</p>
            </div>
        </div>";

        $mail->Body = $emailBody;
        $mail->AltBody = "Name: $firstName $lastName\nEmail: $email\nFirma: $company" . 
                        (!empty($website) ? "\nWebsite: $website" : "") .
                        (!empty($service) ? "\nDienstleistung: $service" : "") .
                        "\n\nNachricht:\n$message";

        // Send email
        $mail->send();
        
        // Return success response
        echo "success";
        
    } catch (Exception $e) {
        // Log error
        logError("Mailer Error: " . $e->getMessage());
        
        // Return error response
        echo "error";
    }
} else {
    // Return invalid method response
    echo "invalid";
}
?>