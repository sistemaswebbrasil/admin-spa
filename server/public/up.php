<?php

header("Access-Control-Allow-Origin: *");

$request_method = $_SERVER["REQUEST_METHOD"];


if ($request_method == 'GET') {
    ?>
        <!doctype html>
        <html lang="en">
        <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/min/dropzone.min.css"> -->
            <link rel="stylesheet" href="https://rawgit.com/enyo/dropzone/master/dist/dropzone.css">
            <title>Hello, world!</title>
        </head>
        <body>
            <div class="container">

                <form action="#" id="my-awesome-dropzone" class="dropzone" style="border: 0px ;">
                <div class="form-group">
                    <label for="dir">Diretório</label>
                    <input type="text" class="form-control" name="diretorio" placeholder="Ex: exata/backups" id="diretorio">
                    <small id="emailHelp" class="form-text text-muted">Se vazio , envia para a raiz uploads</small>
                </div>

                <button type="submit" id="enviar" class="btn btn-primary" >Enviar</button>


                    <div class="dz-default dz-message" style="border: 2px solid rgba(0, 0, 0, 0.3);">
                        Teste
                        <span>Drop files here to upload</span>
                    </div>


                </form>




            </div>
            <!-- Optional JavaScript -->
            <!-- jQuery first, then Popper.js, then Bootstrap JS -->
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/min/dropzone.min.js" /> -->
            <script src="https://rawgit.com/enyo/dropzone/master/dist/dropzone.js"></script>
            <script src="https://unpkg.com/sweetalert2@7.18.0/dist/sweetalert2.all.js"></script>
            <!-- Include a polyfill for ES6 Promises (optional) for IE11, UC Browser and Android browser support -->
            <script src="https://cdn.jsdelivr.net/npm/promise-polyfill@7.1.0/dist/promise.min.js"></script>
            <script>
                Dropzone.options.myAwesomeDropzone = { // The camelized version of the ID of the form element
                    // The configuration we've talked about above
                    autoProcessQueue: false,
                    uploadMultiple: true,
                    parallelUploads: 100,
                    maxFiles: 100,
                    // The setting up of the dropzone
                    init: function() {
                        var myDropzone = this;
                        // First change the button to actually tell Dropzone to process the queue.
                        this.element.querySelector("button[type=submit]").addEventListener("click", function(e) {
                        // Make sure that the form isn't actually being sent.
                        e.preventDefault();
                        e.stopPropagation();
                        myDropzone.processQueue();
                        });
                        // Listen to the sendingmultiple event. In this case, it's the sendingmultiple event instead
                        // of the sending event because uploadMultiple is set to true.
                        this.on("sendingmultiple", function() {
                        // Gets triggered when the form is actually being sent.
                        // Hide the success button or the complete form.
                        });
                        this.on("successmultiple", function(files, response) {
                        // Gets triggered when the files have successfully been sent.
                        // Redirect user or notify of success.
                        });
                        this.on("errormultiple", function(files, response) {
                        // Gets triggered when there was an error sending the files.
                        // Maybe show form again, and notify user of error
                        });
                    }
                }
            </script>
        </body>
        </html>
    <?php
}

if ($request_method == 'POST') {
    // echo json_response("Não foi possível criar o arquivo ", 500);
    if (!empty($_FILES)) {
        $ds = DIRECTORY_SEPARATOR;
        $storeFolder = 'uploads';
        if (isset($_POST['diretorio']) && !empty($_POST['diretorio'])) {
            $storeFolder = 'uploads' . $ds . $_POST['diretorio'];
        }

        $targetPath = dirname(__FILE__) . $ds . $storeFolder;
        if (!file_exists($targetPath)) {
            if (!mkdir($targetPath, 0777, true)) {
                echo json_response("Não foi possível criar o diretório de upload: $targetPath <br>Verifique as permissões", 500);
                exit;
            }
        }
        $tempFile = $_FILES['file']['tmp_name'];
        $targetFile = $targetPath . $ds . basename($_FILES['file']['name']);
        if (move_uploaded_file($tempFile, $targetFile)) {
            echo json_encode(array('Upload criado com sucesso'));
        } else {
            echo json_response("Não foi possível criar o arquivo ", 500);
            exit;
        }
    }
}

function json_response($message = null, $code = 200)
{
    // clear the old headers
    header_remove();
    // set the actual code
    http_response_code($code);
    // set the header to make sure cache is forced
    header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
    // treat this as json
    header('Content-Type: application/json');
    $status = array(
        200 => '200 OK',
        400 => '400 Bad Request',
        422 => 'Unprocessable Entity',
        500 => '500 Internal Server Error'
    );
    // ok, validation error, or failure
    header('Status: ' . $status[$code]);
    // return the encoded json
    return json_encode(array(
        'status' => $code < 300, // success or not?
        'message' => $message
    ));
}

// if you are doing ajax with application-json headers
if (empty($_POST)) {
    $_POST = json_decode(file_get_contents("php://input"), true) ? : [];
}

?>