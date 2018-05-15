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

                <form action="#">
                <div class="form-group">
                    <label for="dir">Diretório</label>
                    <input type="text" class="form-control" name="diretorio" placeholder="Ex: exata/backups" id="diretorio">
                    <small id="emailHelp" class="form-text text-muted">Se vazio , envia para a raiz uploads</small>
                    <input type="text" name="teste"/>
                </div>
                <div class="form-group">
                    <div id="upload" class="dropzone">

                    </div>
                </div>
                <button type="submit" id="enviar" class="btn btn-primary" >Enviar</button>
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

                // document.getElementById("enviar").addEventListener("click", function(){
                //     prevent
                //     //document.getElementById("demo").innerHTML = "Hello World";
                // });


                // $("#cpa-form").submit(function(e){
                //     return false;
                // });

                document.getElementById("enviar").addEventListener("click", function(event){
                    event.preventDefault();
                    myDropzone.processQueue();
                });

                Dropzone.autoDiscover = false;
                var myDropzone = new Dropzone("div#upload",
                    {
                        url: "#",
                        dictDefaultMessage: 'Arraste os arquivos ou clique aqui',
                        maxFiles : 5,
                        success: function(file, response){
                            console.log(response);
                            Swal('Sucesso', response.message, 'success');
                        },
                    }
                );

                myDropzone.on("addedfile", function(file) {
                    // console.log(file);
                });

                myDropzone.on("error", function(file,error) {
                    if (error.message) {
                        Swal('Oops...', error.message, 'error');
                        return;
                    }
                    Swal('Oops...', error, 'error');
                    myDropzone.removeFile(file);
                });

                myDropzone.on("sending", function(sending) {
                    // console.log(sending);
                });

                myDropzone.on("success", function(file,success) {
                    // console.log(success);
                    myDropzone.removeFile(file);
                });

                myDropzone.on("complete", function(complete) {
                    console.log("complete");
                    console.log(complete);
                });

                myDropzone.on("queuecomplete", function(queuecomplete) {
                    console.log("queuecomplete");
                    console.log(queuecomplete);
                });
                // myDropzone.options.params = { diretorio: document.getElementById("diretorio").value };
                myDropzone.options.uploadMultiple = true;
                myDropzone.options.maxFilesize = 500;
                myDropzone.options.maxFiles = 5;
                myDropzone.options.autoProcessQueue = false;
                myDropzone.options.addRemoveLinks = true;
                myDropzone.options.renameFile = true;
                myDropzone.options.forceFallback = true;
                //Traduções
                myDropzone.options.dictDefaultMessage = "Arquivos arrastados";
                myDropzone.options.dictFallbackMessage = "Navegador não compatível";
                myDropzone.options.dictFallbackText = "Falha";
                myDropzone.options.dictDefaultMessage = "Aquivos descartados";
                myDropzone.options.dictFallbackMessage = "Navegador não suportado";
                myDropzone.options.dictFallbackText = "Erro detectado";
                myDropzone.options.dictFileTooBig = "Os arquivos podem ter até {{maxFilesize}} MB , mas este tem {{filesize}} MB";
                myDropzone.options.dictInvalidFileType = "Tipo de arquivo inválido";
                myDropzone.options.dictResponseError = "Falha ao enviar para o servidor: {{statusCode}}";
                myDropzone.options.dictCancelUpload = "Cancelar Upload";
                myDropzone.options.dictUploadCanceled = "Cancelar";
                myDropzone.options.dictCancelUploadConfirmation = "Cancelar upload deste arquivo";
                myDropzone.options.dictRemoveFile = "Excluir";
                myDropzone.options.dictRemoveFileConfirmation = "Arquivo será removido da fila";
                myDropzone.options.dictMaxFilesExceeded = "Número máximo de arquivos por {{maxFiles}} atingido";
                // myDropzone.options.dictFileSizeUnits = "MB";
                myDropzone.options.dictDefaultMessage = "Arraste os arquivos ou clique aqui";
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
            $storeFolder = 'uploads'.$ds. $_POST['diretorio'];
        }

        $targetPath = dirname(__FILE__) . $ds . $storeFolder ;
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