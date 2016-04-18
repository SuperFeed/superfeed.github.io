define({ "api": [
  {
    "type": "get",
    "url": "/superfeed_version",
    "title": "Version",
    "group": "Info",
    "description": "<p>Returns the current API version</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>The current API version</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "functions/version/index.js",
    "groupTitle": "Info",
    "name": "GetSuperfeed_version",
    "sampleRequest": [
      {
        "url": "https://reoz4sq35d.execute-api.us-east-1.amazonaws.com/prod/superfeed_version"
      }
    ]
  },
  {
    "type": "get",
    "url": "/superfeed_getPosts",
    "title": "Get Posts",
    "group": "Posts",
    "description": "<p>Gets all posts from a location</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "location",
            "description": "<p>The coordinates of where the user is located</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Post[]",
            "optional": false,
            "field": "posts",
            "description": "<p>Array of posts from the requested location</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "functions/getPosts/index.js",
    "groupTitle": "Posts",
    "name": "GetSuperfeed_getposts",
    "sampleRequest": [
      {
        "url": "https://reoz4sq35d.execute-api.us-east-1.amazonaws.com/prod/superfeed_getPosts"
      }
    ]
  },
  {
    "type": "post",
    "url": "/superfeed_createPost",
    "title": "Create Post",
    "group": "Posts",
    "description": "<p>Creates a either a text or image post</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Author's FB id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Author's FB access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>The post's text body</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>The base64 encoded image</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Generated post id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "functions/createPost/index.js",
    "groupTitle": "Posts",
    "name": "PostSuperfeed_createpost",
    "sampleRequest": [
      {
        "url": "https://reoz4sq35d.execute-api.us-east-1.amazonaws.com/prod/superfeed_createPost"
      }
    ]
  },
  {
    "type": "post",
    "url": "/superfeed_likePost",
    "title": "Like Post",
    "group": "Posts",
    "description": "<p>Add the user to the list of people who have liked the post</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User's FB id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Author's FB access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "post",
            "description": "<p>The post's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "done",
            "description": "<p>True if liked the post, false if already liked</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "functions/likePost/index.js",
    "groupTitle": "Posts",
    "name": "PostSuperfeed_likepost",
    "sampleRequest": [
      {
        "url": "https://reoz4sq35d.execute-api.us-east-1.amazonaws.com/prod/superfeed_likePost"
      }
    ]
  },
  {
    "type": "post",
    "url": "/superfeed_unlikePost",
    "title": "Unlike Post",
    "group": "Posts",
    "description": "<p>Remove the user from the list of people who have liked the post</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User's FB id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Author's FB access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "post",
            "description": "<p>The post's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "done",
            "description": "<p>True if unliked the post, false if wasn't liked</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "functions/unlikePost/index.js",
    "groupTitle": "Posts",
    "name": "PostSuperfeed_unlikepost",
    "sampleRequest": [
      {
        "url": "https://reoz4sq35d.execute-api.us-east-1.amazonaws.com/prod/superfeed_unlikePost"
      }
    ]
  }
] });
