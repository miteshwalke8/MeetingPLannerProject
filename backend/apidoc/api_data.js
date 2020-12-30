define({ "api": [
  {
    "group": "Create",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meeting/create",
    "title": "Create Meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purpose",
            "description": "<p>Purpose of the meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "start",
            "description": "<p>Start date-time of meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "end",
            "description": "<p>End date-time of meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inviter",
            "description": "<p>userId of the Admin who created meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invitee",
            "description": "<p>userId of normal user for whom meeting created (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inviterEmail",
            "description": "<p>email address of the Admin who created meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inviteeEmail",
            "description": "<p>email address of normal user for whom meeting created (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization Token(body param/header/query param) of the admin who created meeting (body param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\":false,\n     \"message\":\"Meeting created\",\n     \"status\":200,\n     \"data\":{\n              \"meetingId\":\"9CjoVE17X\",\n              \"title\":\"Testing\",\n              \"inviter\":\"n-jehKP5r\",\n              \"invitee\":\"7WMr_3O_D\",\n              \"purpose\":\"Testing of the project\",\n              \"start\":\"2020-12-2T16:00:30.000Z\",\n              \"end\":\"2020-12-2T17:00:30.000Z\",\n              \"location\":\"Home\",\n              \"inviterEmail\":\"miteshwalke14@gmail.com\",\n              \"inviteeEmail\":\"abhi@gmail.com\",\n              \"timestamp\":\"2020-12-2T06:15:38.000Z\",\n              \"_id\":\"5d106a8a9b8b2e3528a6330d\",\n              \"__v\":0\n            }\n      }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Create",
    "name": "PostApiV1MeetingCreate"
  },
  {
    "group": "Delete",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meeting/delete/:meetingId",
    "title": "Delete Meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>Meeting Id of the meeting which is to be deleted</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization Token of the admin who delete the meeting</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\":false,\n      \"message\":\"Meeting deleted\",\n      \"status\":200,\n      \"data\":{\n              \"meetingId\":\"xnRqTIECP\",\n              \"title\":\"training\",\n              \"inviter\":\"n-jehKP5r\",\n              \"invitee\":\"7WMr_3O_D\",\n              \"purpose\":\"training of the project\",\n              \"start\":\"2020-12-23T11:00:12.000Z\",\n              \"end\":\"2020-12-23T12:00:12.000Z\",\n              \"location\":\"Home \",\n              \"inviterEmail\":\"miteshwalke14@gmail.com\",\n              \"inviteeEmail\":\"nakuul@gmail.com\",\n              \"timestamp\":\"2020-12-2T06:41:27.000Z\",\n              \"_id\":\"5d10709769fe1f3c58b5db90\",\n              \"__v\":0\n            }\n      }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Delete",
    "name": "PostApiV1MeetingDeleteMeetingid"
  },
  {
    "group": "Read",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meeting/getByInvitee/:inviteeId",
    "title": "Get Meetings by invitee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization(body param/header/query param) Token of the admin (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inviteeId",
            "description": "<p>User ID of normal user for whom meetings created (body param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http stataus code, result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\":false,\n      \"message\":\"Meeting found\",\n      \"status\":200,\n      \"data\":[\n              {\n                \"meetingId\":\"hmO4fh-WT\",\n                \"title\":\"Testing project\",\n                \"inviter\":\"n-jehKP5r\",\n                \"invitee\":\"7WMr_3O_D\",\n                \"purpose\":\"Testing of the project\",\n                \"start\":\"2020-12-2T15:00:05.000Z\",\n                \"end\":\"2020-12-2T16:00:05.000Z\",\n                \"location\":\"Home\",\n                \"inviterEmail\":\"miteshwalke14@gmail.com\",\n                \"inviteeEmail\":\"omkar@gmail.com\",\n                \"timestamp\":\"2020-12-2T06:05:35.000Z\"\n              },\n              {\n                \"meetingId\":\"CSNuqYFDp\",\n                \"title\":\"Interview\",\n                \"inviter\":\"n-jehKP5r\",\n                \"invitee\":\"7WMr_3O_D\",\n                \"purpose\":\"Interview\",\n                \"start\":\"2020-12-28T15:00:00.000Z\",\n                \"end\":\"2020-12-29T16:00:00.000Z\",\n                \"location\":\"Home\",\n                \"inviterEmail\":\"miteshwalke14@gmail.com\",\n                \"inviteeEmail\":\"omkar@gmail.com\",\n                \"timestamp\":\"2020-12-2T06:38:00.000Z\"\n              }\n            ]\n          }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Read",
    "name": "GetApiV1MeetingGetbyinviteeInviteeid"
  },
  {
    "group": "Read",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meeting/getByInviter/:inviterId",
    "title": "Get Meetings by inviter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization(body param/header/query param) Token of the admin (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inviterId",
            "description": "<p>User ID of admin who created meeting (body param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http stataus code, result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\":false,\n      \"message\":\"Meeting found\",\n      \"status\":200,\n      \"data\":[\n              {\n                \"meetingId\":\"hmO4fh-WT\",\n              \"title\":\"Testing project\",\n              \"inviter\":\"n-jehKP5r\",\n              \"invitee\":\"7WMr_3O_D\",\n              \"purpose\":\"Testing of the project\",\n              \"start\":\"2020-12-2T15:00:05.000Z\",\n              \"end\":\"2020-12-2T16:00:05.000Z\",\n              \"location\":\"Home\",\n              \"inviterEmail\":\"miteshwalke14@gmail.com\",\n              \"inviteeEmail\":\"omkar@gmail.com\",\n              \"timestamp\":\"2020-12-2T06:05:35.000Z\"\n            },\n            {\n              \"meetingId\":\"CSNuqYFDp\",\n              \"title\":\"Interview\",\n              \"inviter\":\"n-jehKP5r\",\n              \"invitee\":\"7WMr_3O_D\",\n              \"purpose\":\"Interview\",\n              \"start\":\"2020-12-28T15:00:00.000Z\",\n              \"end\":\"2020-12-29T16:00:00.000Z\",\n              \"location\":\"Home\",\n              \"inviterEmail\":\"miteshwalke14@gmail.com\",\n              \"inviteeEmail\":\"omkar@gmail.com\",\n              \"timestamp\":\"2020-12-2T06:38:00.000Z\"\n            },\n            {\n              \"meetingId\":\"xnRqTIECP\",\n              \"title\":\"training\",\n              \"inviter\":\"n-jehKP5r\",\n              \"invitee\":\"qG8N0b3yL\",\n              \"purpose\":\"training of the project\",\n              \"start\":\"2020-12-23T11:00:12.000Z\",\n              \"end\":\"2020-12-23T12:00:12.000Z\",\n              \"location\":\"Home\",\n              \"inviterEmail\":\"miteshwalke14@gmail.com\",\n              \"inviteeEmail\":\"nakuul@gmail.com\",\n              \"timestamp\":\"2020-12-2T06:41:27.000Z\"\n            }\n          ]\n        }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Read",
    "name": "GetApiV1MeetingGetbyinviterInviterid"
  },
  {
    "group": "Read",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meeting/getByInviterAndInvitee",
    "title": "Get Meetings by combination of inviter and invitee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization(body param/header/query param) Token of the admin (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inviter",
            "description": "<p>userId of admin who created meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invitee",
            "description": "<p>userId of normal user for whom meeting created (body param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http stataus code, result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\":false,\n      \"message\":\"Meeting found\",\n      \"status\":200,\n      \"data\":[\n              {\n                \"meetingId\":\"hmO4fh-WT\",\n                \"title\":\"Testing project\",\n                \"inviter\":\"n-jehKP5r\",\n                \"invitee\":\"7WMr_3O_D\",\n                \"purpose\":\"Testing of the project\",\n                \"start\":\"2020-12-2T15:00:05.000Z\",\n                \"end\":\"2020-12-2T16:00:05.000Z\",\n                \"location\":\"Home\",\n                \"inviterEmail\":\"miteshwalke14@gmail.com\",\n                \"inviteeEmail\":\"omkar@gmail.com\",\n                \"timestamp\":\"2020-12-2T06:05:35.000Z\"\n              },\n              {\n                \"meetingId\":\"CSNuqYFDp\",\n                \"title\":\"Interview\",\n                \"inviter\":\"n-jehKP5r\",\n                \"invitee\":\"7WMr_3O_D\",\n                \"purpose\":\"Interview\",\n                \"start\":\"2020-12-28T15:00:00.000Z\",\n                \"end\":\"2020-12-29T16:00:00.000Z\",\n                \"location\":\"Home\",\n                \"inviterEmail\":\"miteshwalke14@gmail.com\",\n                \"inviteeEmail\":\"omkar@gmail.com\",\n                \"timestamp\":\"2020-12-2T06:38:00.000Z\"\n              }\n            ]\n          }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Read",
    "name": "GetApiV1MeetingGetbyinviterandinvitee"
  },
  {
    "group": "Update",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/meeting/update/:meetingId",
    "title": "Update meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>Meeting ID of the meeting</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purpose",
            "description": "<p>Purpose of the meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "start",
            "description": "<p>Start date-time of meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "end",
            "description": "<p>End date-time of meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inviter",
            "description": "<p>userId of the Admin who created meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invitee",
            "description": "<p>userId of normal user for whom meeting created (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inviterEmail",
            "description": "<p>email address of the Admin who created meeting (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inviteeEmail",
            "description": "<p>email address of normal user for whom meeting created (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization Token(body param/header/query param) of the admin who created meeting (body param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\":false,\n      \"message\":\"Meeting updated\",\n      \"status\":200,\n      \"data\":{\"n\":1,\"nModified\":1,\"ok\":1}\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Update",
    "name": "PutApiV1MeetingUpdateMeetingid"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users",
    "title": "Get all users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query params/body params/header)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n          \"error\": false,\n          \"message\": \"User found\",\n          \"status\": 200,\n          \"data\": [\n              {\n                  \"userId\":\"ux-XfMpDy\",\n                  \"userName\":\"abhi\",\n                  \"firstName\":\"abhishek\",\n                  \"lastName\":\"hedaoo\",\n                  \"password\":\"$2a$10$/Jq3uKS..MhpcLZ3jPTxGuIurGbLiGQTqQw6gjwYM2CKXQTT3AmvO\",\n                  \"mobileNumber\":3333333335,\n                  \"countryCode\":\"91\",\n                  \"isAdmin\":false,\n                  \"email\":\"abhi@gmail.com\"\n                },\n              {\n                  \"userId\":\"SmlBIt5LP\",\n                  \"userName\":\"mw-admin\",\n                  \"firstName\":\"Mitesh\",\n                  \"lastName\":\"Walke\",\n                  \"password\":\"$2a$10$DLRLPP4UVON/yZ3uVIB2.u7jR3AD2SKuto12aFYXOcyg.9rOmHiF2\",\n                  \"mobileNumber\":2222234456,\n                  \"countryCode\":\"91\",\n                  \"isAdmin\":true,\n                  \"email\":\"miteshwalke888@gmail.com\"\n                },\n          ]\n      }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n       \"error\": true,\n       \"message\": \"User not found\",\n       \"status\": 404,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "GetApiV1Users"
  },
  {
    "group": "User",
    "type": "get",
    "url": "/api/v1/users/:userId",
    "title": "Get user by userId",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"User found\",\n      \"status\": 200,\n      \"data\": {\n                 \"userId\":\"SmlBIt5LP\",\n                 \"userName\":\"mw-admin\",\n                 \"firstName\":\"Mitesh\",\n                 \"lastName\":\"Walke\",\n                 \"password\":\"$2a$10$DLRLPP4UVON/yZ3uVIB2.u7jR3AD2SKuto12aFYXOcyg.9rOmHiF2\",\n                 \"mobileNumber\":2222234456,\n                 \"countryCode\":\"91\",\n                 \"isAdmin\":true,\n                 \"email\":\"miteshwalke888@gmail.com\"\n              }\n          }\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n       \"error\": true,\n       \"message\": \"User not found\",\n       \"status\": 404,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "GetApiV1UsersUserid"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/delete",
    "title": "Delete User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query params/body params/header)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id of the user (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"User deleted\",\n      \"status\": 200,\n      \"data\": [\n          {\n            \"userId\":\"SmlBIt5LP\",\n            \"userName\":\"mw-admin\",\n            \"firstName\":\"Mitesh\",\n            \"lastName\":\"Walke\",\n            \"password\":\"$2a$10$DLRLPP4UVON/yZ3uVIB2.u7jR3AD2SKuto12aFYXOcyg.9rOmHiF2\",\n            \"mobileNumber\":2222234456,\n            \"countryCode\":\"91\",\n            \"isAdmin\":true,\n            \"email\":\"miteshwalke888@gmail.com\"\n            \"__v\": 0\n          }\n      ]\n  }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n       \"error\": true,\n       \"message\": \"User not found\",\n       \"status\": 404,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "GetApiV1UsersUseridDelete"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/forgotPassword",
    "title": "Forgot Password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\":false,\n       \"message\":\"email send successfully for password reset\",\n       \"status\":200,\n       \"data\":{\n           \"error\":false,\n           \"message\":\"Email sent successfully to reset the password\",\n           \"status\":200,\n           \"data\":\"email sent\"\n       }\n       }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n       \"error\": true,\n       \"message\": \"User not found with this email\",\n       \"status\": 404,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersForgotpassword"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user. (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"Login Successful\",\n     \"status\": 200,\n     \"data\": {\n         \"authToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6InM5VHlsNkZFNSIsImlhdCI6MTYwNDkxODYwNjgzNiwiZXhwIjoxNjA1MDA1MDA2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJNZWV0aW5nIFBsYW5uZXIiLCJkYXRhIjp7InVzZXJJZCI6Ik9rdXZQXzlsNSIsImZpcnN0TmFtZSI6Im1pdGVzaCIsImxhc3ROYW1lIjoid2Fsa2UiLCJlbWFpbCI6Im1pdGVzaHdhbGtlNDc5QGdtYWlsLmNvbSIsIm1vYmlsZU51bWJlciI6MTg0OTg1OTg1OTg5LCJjb3VudHJ5Q29kZSI6IjkxIiwiaXNBZG1pbiI6dHJ1ZX19.TQOgbzi2eUERglMvig5VQN4Kujmo12IXeuvV8qMKI6M\",\n         \"userDetails\":{\n             \"userId\":\"SmlBIt5LP\",\n             \"userName\":\"mw-admin\",\n             \"firstName\":\"Mitesh\",\n             \"lastName\":\"Walke\",\n             \"mobileNumber\":2222234456,\n             \"countryCode\":\"91\",\n             \"isAdmin\":true,\n             \"email\":\"miteshwalke888@gmail.com\"\n           }\n     }\n }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n       \"error\": true,\n       \"message\": \"Invalid Password\",\n       \"status\": 400,\n       \"data\": null\n      }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n\t    \"error\": true,\n\t    \"message\": \"User not found with this email id\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout/:userId",
    "title": "Logout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID of the user (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization Token of user (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\":false,\n        \"message\":\"Logged out\",\n        \"status\":200,\n        \"data\":null\n        }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersLogoutUserid"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetPassword",
    "title": "Reset Password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "userId",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id of the user (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\":false,\n       \"message\":\"Pasword changed\",\n       \"status\":200,\n       \"data\":{\n           \"error\":false,\n           \"message\":\"Password changed\",\n           \"status\":200,\n           \"data\":null\n       }\n   }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "Signup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>User name of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile number of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>Country code of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>Boolean value if singup as an admin then true else false. (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"User created\",\n      \"status\": 200,\n      \"data\": {\n          \"userId\":\"SmlBIt5LP\",\n          \"userName\":\"mw-admin\",\n          \"firstName\":\"Mitesh\",\n          \"lastName\":\"Walke\",\n          \"mobileNumber\":2222222223,\n          \"countryCode\":\"91\",\n          \"isAdmin\":true,\n          \"_id\":\"5d1040176198f60554fed037\",\n          \"email\":\"mw12@gmail.com\",\n          \"__v\":0\n      }\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersSignup"
  }
] });
