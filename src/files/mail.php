<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_POST['fio_name'] != '' && $_SERVER['HTTP_REFERER'] == '') {
        exit();
    }


    $to = 'poring.m@mail.ru';

    $error = 'Произошла ошибка. Попробуйте позже.';





    $result = [];
    $rawPost = file_get_contents('php://input');
    mb_parse_str($rawPost, $result);
    //     var_dump($result);



    // var_dump($_POST[""]$post_row);
    // var_dump($_FILES);
    // var_dump($_POST);








    $headers = "MIME-Version: 1.0\r\n"
        . "Content-type: text/html; charset=UTF-8\r\n"
        . "From: Loftdc  <no-reply@" . $_SERVER['HTTP_HOST'] . ">\r\n"
        . "Reply-To: no-reply@" . $_SERVER['HTTP_HOST'] . "\r\n"
        . "X-Mailer: PHP/" . phpversion();

    switch ($_GET['op']) {
        case 'question':
            $name = htmlspecialchars($_POST["name"]);
            $phone = htmlspecialchars($_POST["phone"]);
            $question = htmlspecialchars($_POST["question"]);
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
            $name = htmlspecialchars($_POST["name"]);
            $phone = htmlspecialchars($_POST["phone"]);
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
            $name = htmlspecialchars($_POST["name"]);
            $phone = htmlspecialchars($_POST["phone"]);
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
            $name = htmlspecialchars($_POST["name"]);
            $phone = htmlspecialchars($_POST["phone"]);
            $question = htmlspecialchars($_POST["question"]);
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
            $name = htmlspecialchars($_POST["name"]);
            $phone = htmlspecialchars($_POST["phone"]);
            $email = htmlspecialchars($_POST["email"]);
            $question = htmlspecialchars($_POST["question"]);
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


        case 'modal_consultation':
            $name = htmlspecialchars($_POST["name"]);
            $phone = htmlspecialchars($_POST["phone"]);
            $email = htmlspecialchars($_POST["email"]);
            $question = htmlspecialchars($_POST["question"]);
            $subject = "Заявка с формы Задать вопрос (модалка)";
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
            $name = htmlspecialchars($_POST["name"]);
            $phone = htmlspecialchars($_POST["phone"]);
            $email = htmlspecialchars($_POST["email"]);
            $question = htmlspecialchars($_POST["question"]);
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



        case 'get_measure_own_size':
            if (isset($_FILES["file"])) {
                $myfile = $_FILES["file"]["tmp_name"];
                $myfile_name = $_FILES["file"]["name"];
                $myfile_size = $_FILES["file"]["size"];
                $myfile_type = $_FILES["file"]["type"];
                $error_flag = $_FILES["file"]["error"];

                // Если ошибок не было
                if ($error_flag == 0) {
                    print("Имя файла на нашем сервере (во время запроса): " . $myfile . "<br>");
                    print("Имя файла на компьютере пользователя: " . $myfile_name . "<br>");
                    print("MIME-тип файла: " . $myfile_type . "<br>");
                    print("Размер файла: " . $myfile_size . "<br><br>");

                    // Сохранение файла (Перемещаем файл в нужную директорию)
                    $uploaddir = $_SERVER["DOCUMENT_ROOT"] . "/upload/";  // Дир-я куда перемещать файл

                    if (move_uploaded_file($myfile, $uploaddir . $myfile_name)) {
                        print("Файл сохранён");
                    } else {
                        print("Ошибка");
                    }
                }
            }
            $name = htmlspecialchars($_POST["name"]);
            $phone = htmlspecialchars($_POST["phone"]);
            $email = htmlspecialchars($_POST["email"]);
            $question = htmlspecialchars($_POST["question"]);
            $file = 'https://loftdc.ru/upload/' . $myfile_name;
            $subject = "Заявка с формы Вызов замерщика - модалка";
            $message = '<html><head><title>' . $subject . '</title></head><body>				
        Телефон: <b>' . $phone . '</b><br>
        Почта: <b>' . $email . '</b><br>
        Картинка: <b>' . $file . ' - Ссылка на изображение</b><br>
        Комментарий: <b>' . $question . '</b><br>	<br>
        От куда пришел запрос: ' . $_SERVER['HTTP_REFERER'] . '</body></html>';
            $mail = mail($to, $subject, $message, $headers);

            if ($mail)
                echo 'Сообщение отправлено';
            else echo '<div class="notification_error">' . $error . '</div>';
            break;




        case 'get_product':
            $name = htmlspecialchars($_POST["name"]);
            $phone = htmlspecialchars($_POST["phone"]);
            $email = htmlspecialchars($_POST["email"]);
            $prod_name = htmlspecialchars($_POST["prod_name"]);
            $prod_img = htmlspecialchars($_POST["prod_img"]);
            $question = htmlspecialchars($_POST["question"]);
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
