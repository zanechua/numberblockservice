define({ "api": [
  {
    "type": "post",
    "url": "/number/assign",
    "title": "Assign a Number",
    "sampleRequest": [
      {
        "url": "/api/number/assign"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "AssignNumber",
    "group": "Number",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "selected_number",
            "description": "<p>Phone Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"selected_number\": \"61234567\",\n   \"customer_id\": \"0\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 2xx": [
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "200/OK",
            "description": "<p>Number Successfully Assigned.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"Number successfully assigned\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>Varied, See Responses.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>You do not have the Privileges to retrieve the Record.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500/InternalError",
            "description": "<p>An Internal Error has occurred Varied, See Responses.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Unauthorized Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n   \"status_code\": 401\n}",
          "type": "json"
        },
        {
          "title": "401 Request Issue Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"message\": \"Wrong number of segments\",\n   \"status_code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Forbidden Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n   \"message\": \"Forbidden\",\n   \"status_code\": 403\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Error Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n   \"message\": \"Internal Error\",\n   \"status_code\": 500\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Error Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n   \"message\": \"Number is under quarantine\",\n   \"status_code\": 500\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Error Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n   \"message\": \"Number is already assigned to a user\",\n   \"status_code\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/NumberController.php",
    "groupTitle": "Number"
  },
  {
    "type": "post",
    "url": "/number/store",
    "title": "Create a Number",
    "sampleRequest": [
      {
        "url": "/api/number/store"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "CreateNumber",
    "group": "Number",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Phone Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status_id",
            "description": "<p>Status ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "customer_id",
            "description": "<p>Optional Customer ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"number\": \"61234567\",\n   \"status_id\": \"0\",\n   \"customer_id\": \"0\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 2xx": [
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "201/Created",
            "description": "<p>Number Successfully Created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"Successfully Completed Transaction\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>Varied, See Responses.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>You do not have the Privileges to retrieve the Record.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500/InternalError",
            "description": "<p>An Internal Error has occurred.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Unauthorized Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n   \"status_code\": 401\n}",
          "type": "json"
        },
        {
          "title": "401 Request Issue Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"message\": \"Wrong number of segments\",\n   \"status_code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Forbidden Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n   \"message\": \"Forbidden\",\n   \"status_code\": 403\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Error Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n   \"message\": \"Internal Error\",\n   \"status_code\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/NumberController.php",
    "groupTitle": "Number"
  },
  {
    "type": "get",
    "url": "/number/{number}/history",
    "title": "Show the history of modifications to a number",
    "sampleRequest": [
      {
        "url": "/api/number/{number}/history"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "HistoryNumber",
    "group": "Number",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>ID of Number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset for Records to be Retrieved</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit Number of Records to Retrieve</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "curl -X GET http://numberblockservice.test/api/number/{number}/history",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>NumberHistory ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number_id",
            "description": "<p>Number ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "action_id",
            "description": "<p>Status ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Created Date of the Record.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Update Date of the Record.</p>"
          }
        ],
        "Success 2xx": [
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "200/OK",
            "description": "<p>NumberHistory's successfully retrieved.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n \"history\": [{\n     \"id\": 4,\n     \"number_id\": \"2\",\n     \"customer_id\": \"2\",\n     \"action_id\": \"1\",\n     \"created_at\": \"2018-02-13 16:43:25\",\n     \"updated_at\": \"2018-02-13 16:43:25\"\n },\n ...]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>Varied, See Responses.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>You do not have the Privileges to retrieve the Record.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500/InternalError",
            "description": "<p>An Internal Error has occurred.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Unauthorized Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n   \"status_code\": 401\n}",
          "type": "json"
        },
        {
          "title": "401 Request Issue Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"message\": \"Wrong number of segments\",\n   \"status_code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Forbidden Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n   \"message\": \"Forbidden\",\n   \"status_code\": 403\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Error Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n   \"message\": \"Internal Error\",\n   \"status_code\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/NumberController.php",
    "groupTitle": "Number"
  },
  {
    "type": "get",
    "url": "/number/index",
    "title": "Show the available numbers",
    "sampleRequest": [
      {
        "url": "/api/number/index"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "IndexNumber",
    "group": "Number",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset for Records to be Retrieved</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit Number of Records to Retrieve</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "curl -X GET http://numberblockservice.test/api/number/index",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Number ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Phone Number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status_id",
            "description": "<p>Status ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Created Date of the Record.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Update Date of the Record.</p>"
          }
        ],
        "Success 2xx": [
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "200/OK",
            "description": "<p>Numbers successfully retrieved.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n \"numbers\": [{\n     \"id\": 4,\n     \"number\": \"61234567\",\n     \"status_id\": \"1\",\n     \"customer_id\": \"2\",\n     \"created_at\": \"2018-02-13 16:43:25\",\n     \"updated_at\": \"2018-02-13 16:43:25\"\n },\n ...]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>Varied, See Responses.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>You do not have the Privileges to retrieve the Record.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500/InternalError",
            "description": "<p>An Internal Error has occurred.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Unauthorized Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n   \"status_code\": 401\n}",
          "type": "json"
        },
        {
          "title": "401 Request Issue Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"message\": \"Wrong number of segments\",\n   \"status_code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Forbidden Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n   \"message\": \"Forbidden\",\n   \"status_code\": 403\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Error Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n   \"message\": \"Internal Error\",\n   \"status_code\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/NumberController.php",
    "groupTitle": "Number"
  },
  {
    "type": "post",
    "url": "/number/{number}/update",
    "title": "Update a Number",
    "sampleRequest": [
      {
        "url": "/api/number/{number}/update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "UpdateNumber",
    "group": "Number",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Number ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status_id",
            "description": "<p>Status ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "customer_id",
            "description": "<p>Optional Customer ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"status_id\": \"0\",\n   \"customer_id\": \"0\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 2xx": [
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "200/OK",
            "description": "<p>Number Successfully Created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"Number successfully updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401/Unauthorized",
            "description": "<p>Varied, See Responses.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>You do not have the Privileges to retrieve the Record.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500/InternalError",
            "description": "<p>An Internal Error has occurred.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 Unauthorized Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n   \"status_code\": 401\n}",
          "type": "json"
        },
        {
          "title": "401 Request Issue Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"message\": \"Wrong number of segments\",\n   \"status_code\": 401\n}",
          "type": "json"
        },
        {
          "title": "403 Forbidden Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n   \"message\": \"Forbidden\",\n   \"status_code\": 403\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Error Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n   \"message\": \"Internal Error\",\n   \"status_code\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/NumberController.php",
    "groupTitle": "Number"
  }
] });
