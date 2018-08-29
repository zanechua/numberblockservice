<?php

namespace App\Http\Controllers;

use App\Models\Number;
use App\Models\NumberHistory;
use Illuminate\Http\Request;

class NumberController extends Controller
{
    /**
     * @api {get} /number/index  Show the available numbers
     * @apiSampleRequest /api/number/index
     * @apiHeader  [Accept=application/json] application/json
     * @apiHeader  Content-Type              application/json
     * @apiVersion 1.0.0
     * @apiName IndexNumber
     * @apiGroup Number
     *
     * @apiParam {Number} offset Offset for Records to be Retrieved
     * @apiParam {Number} limit Limit Number of Records to Retrieve
     *
     * @apiSuccess {Number} id Number ID.
     * @apiSuccess {Number} number Phone Number
     * @apiSuccess {Number} status_id Status ID.
     * @apiSuccess {Number} customer_id Customer ID.
     * @apiSuccess {String} created_at Created Date of the Record.
     * @apiSuccess {String} updated_at Last Update Date of the Record.
     * @apiParamExample {json} Request-Example:
     * curl -X GET http://numberblockservice.test/api/number/index
     *
     *
     * @apiSuccess (Success 2xx) 200/OK Numbers successfully retrieved.
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
     *   "numbers": [{
     *       "id": 4,
     *       "number": "61234567",
     *       "status_id": "1",
     *       "customer_id": "2",
     *       "created_at": "2018-02-13 16:43:25",
     *       "updated_at": "2018-02-13 16:43:25"
     *   },
     *   ...]
     *
     * @apiError 401/Unauthorized Varied, See Responses.
     * @apiErrorExample 401 Unauthorized Response:
     *  HTTP/1.1 401 Unauthorized
     *  {
     *     "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
     *     "status_code": 401
     *  }
     *
     * @apiErrorExample 401 Request Issue Response:
     *  HTTP/1.1 401 Unauthorized
     *  {
     *     "message": "Wrong number of segments",
     *     "status_code": 401
     *  }
     *
     * @apiError 403/Forbidden You do not have the Privileges to retrieve the Record.
     *
     * @apiErrorExample 403 Forbidden Response:
     *  HTTP/1.1 403 Forbidden
     *  {
     *     "message": "Forbidden",
     *     "status_code": 403
     *  }
     *
     * @apiError 500/InternalError An Internal Error has occurred.
     *
     * @apiErrorExample 500 Internal Error Response:
     *  HTTP/1.1 500 Internal Error
     *  {
     *     "message": "Internal Error",
     *     "status_code": 500
     *  }
     *
     */

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $offset = $request->input("offset") != null ? $request->input("offset") : "0";
        $limit = $request->input("limit") != null ? $request->input("limit") : "50";
        $status_id = $request->input("status_id") != null ? $request->input("limit") : "10";
        //Assume 10 is all available numbers
        $numbers = Number::where('status_id', $status_id)->skip($offset)->take($limit)->get();

        return response()->json($numbers);
    }

    /**
     * @api {get} /number/{number}/history  Show the history of modifications to a number
     * @apiSampleRequest /api/number/{number}/history
     * @apiHeader  [Accept=application/json] application/json
     * @apiHeader  Content-Type              application/json
     * @apiVersion 1.0.0
     * @apiName HistoryNumber
     * @apiGroup Number
     *
     * @apiParam {Number} number ID of Number
     * @apiParam {Number} offset Offset for Records to be Retrieved
     * @apiParam {Number} limit Limit Number of Records to Retrieve
     *
     *
     * @apiSuccess {Number} id NumberHistory ID.
     * @apiSuccess {Number} number_id Number ID
     * @apiSuccess {Number} customer_id Customer ID.
     * @apiSuccess {Number} action_id Status ID.
     * @apiSuccess {String} created_at Created Date of the Record.
     * @apiSuccess {String} updated_at Last Update Date of the Record.
     * @apiParamExample {json} Request-Example:
     * curl -X GET http://numberblockservice.test/api/number/{number}/history
     *
     *
     * @apiSuccess (Success 2xx) 200/OK NumberHistory's successfully retrieved.
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
     *   "history": [{
     *       "id": 4,
     *       "number_id": "2",
     *       "customer_id": "2",
     *       "action_id": "1",
     *       "created_at": "2018-02-13 16:43:25",
     *       "updated_at": "2018-02-13 16:43:25"
     *   },
     *   ...]
     *
     * @apiError 401/Unauthorized Varied, See Responses.
     * @apiErrorExample 401 Unauthorized Response:
     *  HTTP/1.1 401 Unauthorized
     *  {
     *     "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
     *     "status_code": 401
     *  }
     *
     * @apiErrorExample 401 Request Issue Response:
     *  HTTP/1.1 401 Unauthorized
     *  {
     *     "message": "Wrong number of segments",
     *     "status_code": 401
     *  }
     *
     * @apiError 403/Forbidden You do not have the Privileges to retrieve the Record.
     *
     * @apiErrorExample 403 Forbidden Response:
     *  HTTP/1.1 403 Forbidden
     *  {
     *     "message": "Forbidden",
     *     "status_code": 403
     *  }
     *
     * @apiError 500/InternalError An Internal Error has occurred.
     *
     * @apiErrorExample 500 Internal Error Response:
     *  HTTP/1.1 500 Internal Error
     *  {
     *     "message": "Internal Error",
     *     "status_code": 500
     *  }
     *
     */

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param Number $number
     * @return \Illuminate\Http\Response
     */
    public function history(Request $request, Number $number)
    {
        $offset = $request->input("offset") != null ? $request->input("offset") : "0";
        $limit = $request->input("limit") != null ? $request->input("limit") : "50";

        $history = $number->history()->skip($offset)->take($limit)->get();

        return response()->json($history);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {

    }

    /**
     * @api {post} /number/store Create a Number
     * @apiSampleRequest /api/number/store
     * @apiHeader  [Accept=application/json] application/json
     * @apiHeader  Content-Type              application/json
     * @apiVersion 1.0.0
     * @apiName CreateNumber
     * @apiGroup Number
     *
     * @apiParam {Number} number Phone Number.
     * @apiParam {Number} status_id Status ID.
     * @apiParam {Number} [customer_id] Optional Customer ID.
     * @apiParamExample {json} Request-Example:
     *  {
     *     "number": "61234567",
     *     "status_id": "0",
     *     "customer_id": "0",
     *  }
     *
     * @apiSuccess (Success 2xx) 201/Created Number Successfully Created.
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 201 OK
     *  {
     *      "Successfully Completed Transaction"
     *  }
     *
     * @apiError 401/Unauthorized Varied, See Responses.
     * @apiErrorExample 401 Unauthorized Response:
     *  HTTP/1.1 401 Unauthorized
     *  {
     *     "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
     *     "status_code": 401
     *  }
     *
     * @apiErrorExample 401 Request Issue Response:
     *  HTTP/1.1 401 Unauthorized
     *  {
     *     "message": "Wrong number of segments",
     *     "status_code": 401
     *  }
     *
     * @apiError 403/Forbidden You do not have the Privileges to retrieve the Record.
     *
     * @apiErrorExample 403 Forbidden Response:
     *  HTTP/1.1 403 Forbidden
     *  {
     *     "message": "Forbidden",
     *     "status_code": 403
     *  }
     *
     * @apiError 500/InternalError An Internal Error has occurred.
     *
     * @apiErrorExample 500 Internal Error Response:
     *  HTTP/1.1 500 Internal Error
     *  {
     *     "message": "Internal Error",
     *     "status_code": 500
     *  }
     *
     */

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return void
     */
    public function store(Request $request)
    {
        $number = new Number;
        $number->fill($request->all());
        $number->save();

        return response()->setStatusCode(201)->json(["message" => "Number successfully created"]);
    }

    /**
     * @api {post} /number/assign Assign a Number
     * @apiSampleRequest /api/number/assign
     * @apiHeader  [Accept=application/json] application/json
     * @apiHeader  Content-Type              application/json
     * @apiVersion 1.0.0
     * @apiName AssignNumber
     * @apiGroup Number
     *
     * @apiParam {Number} selected_number Phone Number.
     * @apiParam {Number} customer_id Customer ID.
     * @apiParamExample {json} Request-Example:
     *  {
     *     "selected_number": "61234567",
     *     "customer_id": "0",
     *  }
     *
     * @apiSuccess (Success 2xx) 200/OK Number Successfully Assigned.
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
     *  {
     *      "Number successfully assigned"
     *  }
     *
     * @apiError 401/Unauthorized Varied, See Responses.
     * @apiErrorExample 401 Unauthorized Response:
     *  HTTP/1.1 401 Unauthorized
     *  {
     *     "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
     *     "status_code": 401
     *  }
     *
     * @apiErrorExample 401 Request Issue Response:
     *  HTTP/1.1 401 Unauthorized
     *  {
     *     "message": "Wrong number of segments",
     *     "status_code": 401
     *  }
     *
     * @apiError 403/Forbidden You do not have the Privileges to retrieve the Record.
     *
     * @apiErrorExample 403 Forbidden Response:
     *  HTTP/1.1 403 Forbidden
     *  {
     *     "message": "Forbidden",
     *     "status_code": 403
     *  }
     *
     * @apiError 500/InternalError An Internal Error has occurred Varied, See Responses.
     *
     * @apiErrorExample 500 Internal Error Response:
     *  HTTP/1.1 500 Internal Error
     *  {
     *     "message": "Internal Error",
     *     "status_code": 500
     *  }
     *
     * @apiErrorExample 500 Internal Error Response:
     *  HTTP/1.1 500 Internal Error
     *  {
     *     "message": "Number is under quarantine",
     *     "status_code": 500
     *  }
     *
     * @apiErrorExample 500 Internal Error Response:
     *  HTTP/1.1 500 Internal Error
     *  {
     *     "message": "Number is already assigned to a user",
     *     "status_code": 500
     *  }
     *
     */

    /**
     * Assign a number to a customer
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function assign(Request $request)
    {
        $selectedNumber = $request->input("selected_number") != null ? $request->input("selected_number") : "0";

        $number = Number::where('number', $selectedNumber);
        if($number->status == 2)
        {
            return response()->setStatusCode(500)->json(["message" => "Number is under quarantine"]);
        }
        else if ($number->status == 1)
        {
            return response()->setStatusCode(500)->json(["message" => "Number is already assigned to a user"]);
        }
        else
        {
            $number->fill($request->all());
            $number->save();
        }

        return response()->setStatusCode(200)->json(["message" => "Number successfully assigned"]);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Number $number
     * @return void
     */
    public function show(Number $number)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Number $number
     * @return void
     */
    public function edit(Number $number)
    {
        //
    }

    /**
     * @api {post} /number/{number}/update Update a Number
     * @apiSampleRequest /api/number/{number}/update
     * @apiHeader  [Accept=application/json] application/json
     * @apiHeader  Content-Type              application/json
     * @apiVersion 1.0.0
     * @apiName UpdateNumber
     * @apiGroup Number
     *
     * @apiParam {Number} number Number ID.
     * @apiParam {Number} status_id Status ID.
     * @apiParam {Number} [customer_id] Optional Customer ID.
     * @apiParamExample {json} Request-Example:
     *  {
     *     "status_id": "0",
     *     "customer_id": "0",
     *  }
     *
     * @apiSuccess (Success 2xx) 200/OK Number Successfully Created.
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 201 OK
     *  {
     *      "Number successfully updated"
     *  }
     *
     * @apiError 401/Unauthorized Varied, See Responses.
     * @apiErrorExample 401 Unauthorized Response:
     *  HTTP/1.1 401 Unauthorized
     *  {
     *     "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
     *     "status_code": 401
     *  }
     *
     * @apiErrorExample 401 Request Issue Response:
     *  HTTP/1.1 401 Unauthorized
     *  {
     *     "message": "Wrong number of segments",
     *     "status_code": 401
     *  }
     *
     * @apiError 403/Forbidden You do not have the Privileges to retrieve the Record.
     *
     * @apiErrorExample 403 Forbidden Response:
     *  HTTP/1.1 403 Forbidden
     *  {
     *     "message": "Forbidden",
     *     "status_code": 403
     *  }
     *
     * @apiError 500/InternalError An Internal Error has occurred.
     *
     * @apiErrorExample 500 Internal Error Response:
     *  HTTP/1.1 500 Internal Error
     *  {
     *     "message": "Internal Error",
     *     "status_code": 500
     *  }
     *
     */

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\Number $number
     * @return void
     */
    public function update(Request $request, Number $number)
    {
        $number->fill($request->all());
        $number->save();

        return response()->setStatusCode(200)->json(["message" => "Number successfully updated"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Number $number
     * @return void
     */
    public function destroy(Number $number)
    {

    }
}
