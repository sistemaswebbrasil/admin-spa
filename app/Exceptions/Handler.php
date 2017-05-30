<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use config\app;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        \Illuminate\Auth\AuthenticationException::class,
        \Illuminate\Auth\Access\AuthorizationException::class,
        \Symfony\Component\HttpKernel\Exception\HttpException::class,
        \Illuminate\Database\Eloquent\ModelNotFoundException::class,
        \Illuminate\Session\TokenMismatchException::class,
        \Illuminate\Validation\ValidationException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    // public function render($request, Exception $exception)
    // {
    //     //return parent::render($request, $exception);
    //
    //
    //     $status = $exception->getCode() ;
    //     //$status = $exception->getCode() ;
    //
    //
    //     if( $status === 500 ){
    //       //return response()->json(['error' => $exception ], 500);
    //       return response()->json(['error' => 'Erro ao executar comando!!' ], 500);
    //       //return parent::render($request, $exception);
    //
    //     }
    //
    //     return parent::render($request, $exception);
    //     return response()->json(['error' => 'Erro ao executar comando!!' ], 500);
    //
    //
    //
    //     //return response()->json(['error' => $exception ], 500);
    // }

    public function render($request, Exception $e)
   {
       $error = $this->convertExceptionToResponse($e);
       $response = [];
       if($error->getStatusCode() == 500) {
           $response['error'] = $e->getMessage();
           if(\Config::get('app.debug')) {
               $response['trace'] = $e->getTraceAsString();
               $response['code'] = $e->getCode();
           }
           //return response()->json($response, $error->getStatusCode());
       }
       return parent::render($response, $e);
   }


    /**
     * Convert an authentication exception into an unauthenticated response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Auth\AuthenticationException  $exception
     * @return \Illuminate\Http\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if ($request->expectsJson()) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }

        return redirect()->guest('login');
    }
}
