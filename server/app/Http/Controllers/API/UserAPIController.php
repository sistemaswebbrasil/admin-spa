<?php


namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

use App\Http\Controllers\API\APIBaseController as APIBaseController;

use App\User;

use Validator;

class UserAPIController extends APIBaseController
{

    /**

     * Display a listing of the resource.

     *

     * @return \Illuminate\Http\Response

     */

    public function index()
    {
        $posts = User::all();

        return $this->sendResponse($posts->toArray(), 'Users retrieved successfully.');
    }


    /**

     * Store a newly created resource in storage.

     *

     * @param  \Illuminate\Http\Request  $request

     * @return \Illuminate\Http\Response

     */

    public function store(Request $request)
    {
        $input = $request->all();


        $validator = Validator::make($input, [

            'name' => 'required',

            'description' => 'required'

        ]);


        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }


        $post = User::create($input);


        return $this->sendResponse($post->toArray(), 'User created successfully.');
    }


    /**

     * Display the specified resource.

     *

     * @param  int  $id

     * @return \Illuminate\Http\Response

     */

    public function show($id)
    {
        $post = User::find($id);


        if (is_null($post)) {
            return $this->sendError('User not found.');
        }


        return $this->sendResponse($post->toArray(), 'User retrieved successfully.');
    }


    /**

     * Update the specified resource in storage.

     *

     * @param  \Illuminate\Http\Request  $request

     * @param  int  $id

     * @return \Illuminate\Http\Response

     */

    public function update(Request $request, $id)
    {
        $input = $request->all();


        $validator = Validator::make($input, [

            'name' => 'required',

            'description' => 'required'

        ]);


        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }


        $post = User::find($id);

        if (is_null($post)) {
            return $this->sendError('User not found.');
        }


        $post->name = $input['name'];

        $post->description = $input['description'];

        $post->save();


        return $this->sendResponse($post->toArray(), 'User updated successfully.');
    }


    /**

     * Remove the specified resource from storage.

     *

     * @param  int  $id

     * @return \Illuminate\Http\Response

     */

    public function destroy($id)
    {
        $post = User::find($id);


        if (is_null($post)) {
            return $this->sendError('User not found.');
        }


        $post->delete();


        return $this->sendResponse($id, 'Tag deleted successfully.');
    }
}
