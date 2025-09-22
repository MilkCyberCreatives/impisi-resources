<?php
/**
 * Simple contact form mailer for Impisi Resources.
 * Place this file at: public/mail/send.php  (served at /mail/send.php)
 *
 * NOTE: Requires PHP on the server. On cPanel/Apache or Nginx+PHP-FPM this will work.
 * If you deploy only to a Node/Next host without PHP, the script will not execute.
 */

// ---------- CONFIG ----------
$to      = 'info@impisiresources.com';   // <-- Change to your destination email
$subject_prefix = 'Impisi Resources Website Enquiry: ';
$from_fallback  = 'no-reply@impisiresources.com'; // used if sender email is missing/invalid
// ----------------------------

// Helper: JSON response
function respond_json($ok, $message, $code = 200) {
  http_response_code($ok ? 200 : $code);
  header('Content-Type: application/json; charset=UTF-8');
  echo json_encode(['ok' => $ok, 'status' => $ok ? 'ok' : 'error', 'message' => $message], JSON_UNESCAPED_UNICODE);
  exit;
}

// Allow only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  respond_json(false, 'Invalid request method.', 405);
}

// Basic anti-spam (honeypot)
if (!empty($_POST['company'])) {
  respond_json(true, 'Thanks!'); // pretend success for bots
}

// Collect/clean input
$name    = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$email   = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
$phone   = trim(filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$subject = trim(filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$message = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS));

if ($name === '' || $email === '' || $message === '') {
  respond_json(false, 'Please provide your name, email and a message.', 422);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  respond_json(false, 'Please provide a valid email address.', 422);
}

// Build email
$subject_line = $subject_prefix . ($subject !== '' ? $subject : 'General Enquiry');

$body = "New enquiry from Impisi Resources website:\n\n";
$body .= "Name:   {$name}\n";
$body .= "Email:  {$email}\n";
$body .= "Phone:  {$phone}\n";
$body .= "Subject: " . ($subject !== '' ? $subject : '—') . "\n\n";
$body .= "Message:\n{$message}\n\n";
$body .= "IP:      " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";
$body .= "Agent:   " . ($_SERVER['HTTP_USER_AGENT'] ?? 'unknown') . "\n";

// Headers
$headers   = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=UTF-8';
$headers[] = 'From: ' . ($name !== '' ? $name : 'Website') . " <{$from_fallback}>";
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Mailer: PHP/' . phpversion();

$sent = @mail($to, $subject_line, $body, implode("\r\n", $headers));

if ($sent) {
  respond_json(true, 'Message sent successfully.');
} else {
  respond_json(false, 'Mail server failed to send the message. Please try again later.', 500);
}
