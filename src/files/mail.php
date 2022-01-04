<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_POST['fio_name'] != '' && $_SERVER['HTTP_REFERER'] == '') {
        exit();
    }

    header("Content-Type: application/json");
    $to = 'poring.m@mail.ru';

    $error = 'Произошла ошибка. Попробуйте позже.';

    // получаем поля
    $post_row = json_decode(file_get_contents('php://input'));

    var_dump($post_row);

    $headers = "MIME-Version: 1.0\r\n"
        . "Content-type: text/html; charset=UTF-8\r\n"
        . "From: Loftdc  <no-reply@" . $_SERVER['HTTP_HOST'] . ">\r\n"
        . "Reply-To: no-reply@" . $_SERVER['HTTP_HOST'] . "\r\n"
        . "X-Mailer: PHP/" . phpversion();

    switch ($_GET['op']) {
        case 'question':
            $name = htmlspecialchars($post_row->name);
            $phone = htmlspecialchars($post_row->phone);
            $question = htmlspecialchars($post_row->question);
            $subject = "Заявка с формы ЗАДАТЬ ВОПРОС";
            $message = '<html><head><title>' . $subject . '</title></head><body>				
			Имя: <b>' . $name . '</b><br>	
			Телефон: <b>' . $phone . '</b><br>
			Вопрос: <b>' . $question . '</b><br>	<br>
			От куда пришел запрос: ' . $_SERVER['HTTP_REFERER'] . '</body></html>';
            $mail = mail($to, $subject, $message, $headers);
            if ($mail)
                echo 'Сообщение отправлено';
            else echo '<div class="notification_error">' . $error . '</div>';

            break;

        case 'call_bottom':
            $name = htmlspecialchars($post_row->name);
            $phone = htmlspecialchars($post_row->phone);
            $subject = "Заявка с формы ЗАКАЗАТЬ ЗВОНОК";
            $message = '<html><head><title>' . $subject . '</title></head><body>				
			Имя: <b>' . $name . '</b><br>	
			Телефон: <b>' . $phone . '</b><br>
			От куда пришел запрос: ' . $_SERVER['HTTP_REFERER'] . '</body></html>';
            $mail = mail($to, $subject, $message, $headers);
            if ($mail)
                echo 'Сообщение отправлено';
            else echo '<div class="notification_error">' . $error . '</div>';
            break;

        case 'measurment_bottom':
            $name = htmlspecialchars($post_row->name);
            $phone = htmlspecialchars($post_row->phone);
            $subject = "Заявка с формы Вызвать замерщика (низ страницы)";
            $message = '<html><head><title>' . $subject . '</title></head><body>				
			Имя: <b>' . $name . '</b><br>	
			Телефон: <b>' . $phone . '</b><br>
			От куда пришел запрос: ' . $_SERVER['HTTP_REFERER'] . '</body></html>';
            $mail = mail($to, $subject, $message, $headers);
            if ($mail)
                echo 'Сообщение отправлено';
            else echo '<div class="notification_error">' . $error . '</div>';
            break;

        case 'question_middle_form':
            $name = htmlspecialchars($post_row->name);
            $phone = htmlspecialchars($post_row->phone);
            $question = htmlspecialchars($post_row->question);
            $subject = "Заявка с формы Вопросы\замер центр страницы";
            $message = '<html><head><title>' . $subject . '</title></head><body>				
        Имя: <b>' . $name . '</b><br>	
        Телефон: <b>' . $phone . '</b><br>
        Вопрос: <b>' . $question . '</b><br>	<br>
        От куда пришел запрос: ' . $_SERVER['HTTP_REFERER'] . '</body></html>';
            $mail = mail($to, $subject, $message, $headers);
            if ($mail)
                echo 'Сообщение отправлено';
            else echo '<div class="notification_error">' . $error . '</div>';
            break;

        case 'consultation':
            $name = htmlspecialchars($post_row->name);
            $phone = htmlspecialchars($post_row->phone);
            $email = htmlspecialchars($post_row->email);
            $question = htmlspecialchars($post_row->question);
            $subject = "Заявка с формы Консультация";
            $message = '<html><head><title>' . $subject . '</title></head><body>				
        Имя: <b>' . $name . '</b><br>	
        Телефон: <b>' . $phone . '</b><br>
        Почта: <b>' . $email . '</b><br>
        Вопрос: <b>' . $question . '</b><br>	<br>
        От куда пришел запрос: ' . $_SERVER['HTTP_REFERER'] . '</body></html>';
            $mail = mail($to, $subject, $message, $headers);
            if ($mail)
                echo 'Сообщение отправлено';
            else echo '<div class="notification_error">' . $error . '</div>';
            break;

        case 'measurment_modal':
            $name = htmlspecialchars($post_row->name);
            $phone = htmlspecialchars($post_row->phone);
            $email = htmlspecialchars($post_row->email);
            $question = htmlspecialchars($post_row->question);
            $subject = "Заявка с формы Вызов замерщика - модалка";
            $message = '<html><head><title>' . $subject . '</title></head><body>				
        Имя: <b>' . $name . '</b><br>	
        Телефон: <b>' . $phone . '</b><br>
        Почта: <b>' . $email . '</b><br>
        Вопрос: <b>' . $question . '</b><br>	<br>
        От куда пришел запрос: ' . $_SERVER['HTTP_REFERER'] . '</body></html>';
            $mail = mail($to, $subject, $message, $headers);
            if ($mail)
                echo 'Сообщение отправлено';
            else echo '<div class="notification_error">' . $error . '</div>';
            break;

        case 'get_product':
            $name = htmlspecialchars($post_row->name);
            $phone = htmlspecialchars($post_row->phone);
            $email = htmlspecialchars($post_row->email);
            $prod_name = htmlspecialchars($post_row->prod_name);
            $prod_img = htmlspecialchars($post_row->prod_img);
            $question = htmlspecialchars($post_row->question);
            $subject = "Заявка с формы Вызов замерщика - модалка";
            $message = '<html><head><title>' . $subject . '</title></head><body>				
        Имя: <b>' . $name . '</b><br>	
        Телефон: <b>' . $phone . '</b><br>
        Почта: <b>' . $email . '</b><br>
        Нзвание товара: <b>' . $prod_name . '</b><br>
        Изображение: <b>' . $prod_img . '</b><br>	<br>
        От куда пришел запрос: ' . $_SERVER['HTTP_REFERER'] . '</body></html>';
            $mail = mail($to, $subject, $message, $headers);
            if ($mail)
                echo 'Сообщение отправлено';
            else echo '<div class="notification_error">' . $error . '</div>';
            break;
    }
} else echo "error";
