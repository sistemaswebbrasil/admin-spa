<?php
header("Access-Control-Allow-Origin: *");

$request_method = $_SERVER["REQUEST_METHOD"];
/**
 * Só será aceitado requisições do método POST
 */

if ($request_method == 'GET') {
    echo '
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>EXATA Sistemas</title>
        <link rel="shortcut icon" href="favicon.ico" >
        </head>
        <frameset rows="0,*" border="0">
        <frame name="header" scrolling="no" noresize target="main">
        <frame name="main" src="http://www.exatasistemas.com/site/">
        <noframes>
        <body>
        </body>
        </noframes>
        </frameset>
        </html>
    ';
}

if ($request_method == 'POST') {
    $encriptado  = $_POST['pwd2_'];
    $descriptado = descriptar($encriptado);

    /**
     * Pego a senha gravada no arquivo
     * @var [type]
     */
    $str  = file_get_contents("file.json");
    $json = json_decode($str, true);

    if ($descriptado != $json['pwd2_']) {
        header("HTTP/1.0 403 Forbidden");
        header('Content-Type: application/json');
        echo json_encode(array(
            'ErrorCode'    => 403,
            'ErrorMessage' => 'Você não está autorizado para esta ação',
        ));
        exit(0);
    }

    /**
     * Verifico se foi enviado um arquivo para o servidor
     */
    if (isset($_FILES["arquivo"])) {
        $uploaddir = 'news';

        /**
         * Verifico se foi passado o diretório do upload pela requisição
         */
        if (isset($_POST['diretorio'])) {
            $uploaddir = $_POST['diretorio'];
            // if (substr($uploaddir, -1) !== "\\") {
            //     $uploaddir = $uploaddir . "\\";
            // }
        }

        /**
         * Crio o diretório se ele não existe
         */
        if (!file_exists($uploaddir)) {
            mkdir($uploaddir, 0777, true);
        }

        $uploadfile = $uploaddir . '/' . basename($_FILES['arquivo']['name']);

        // echo json_encode(array($uploadfile));
        if (move_uploaded_file($_FILES['arquivo']['tmp_name'], $uploadfile)) {
            //echo json_encode(array('Upload criado com sucesso'), JSON_UNESCAPED_UNICODE);
            echo json_encode(array('Upload criado com sucesso'));
        } else {
            header("HTTP/1.0 400 Forbidden");
            header('Content-Type: application/json');
            echo json_encode(array(
                'ErrorCode'    => 400,
                'ErrorMessage' => 'Falha ao obter o arquivo!',
            ));
            exit(0);
        }

        exit(0);
    }

    header("HTTP/1.0 400 Forbidden");
    header('Content-Type: application/json');
    echo json_encode(array(
        'ErrorCode'    => 400,
        'ErrorMessage' => 'Requisição inválida',
    ));
    exit(0);
}

/**
 * Encriptar uma string retornando 44 caracteres
 * @param  [type] $string [description]
 * @return [type]         [description]
 */
function encriptar($string)
{
    $key = 'ChvExata600rj';
    $iv  = mcrypt_create_iv(
        mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC),
        MCRYPT_DEV_URANDOM
    );
    $encrypted = base64_encode(
        $iv .
        mcrypt_encrypt(
            MCRYPT_RIJNDAEL_128,
            hash('sha256', $key, true),
            $string,
            MCRYPT_MODE_CBC,
            $iv
        )
    );
    return $encrypted;
}

/**
 * Descriptografar uma senha
 * @param  [type] $encrypted [description]
 * @return [type]            [description]
 */
function descriptar($encrypted)
{
    $key  = 'ChvExata600rj';
    $data = base64_decode($encrypted);
    $iv   = substr($data, 0, mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC));

    $decrypted = rtrim(
        mcrypt_decrypt(
            MCRYPT_RIJNDAEL_128,
            hash('sha256', $key, true),
            substr($data, mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC)),
            MCRYPT_MODE_CBC,
            $iv
        ),
        "\0"
    );
    return $decrypted;
}
