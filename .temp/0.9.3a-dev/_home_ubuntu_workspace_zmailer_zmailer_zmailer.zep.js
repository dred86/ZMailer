[
    {
        "type": "namespace",
        "name": "ZMailer",
        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "ZMailer",
        "abstract": 0,
        "final": 0,
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "server",
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 5,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "port",
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 6,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "username",
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 7,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "password",
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 8,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "secure",
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 9,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "version",
                    "default": {
                        "type": "double",
                        "value": "0.1",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 9,
                        "char": 22
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 11,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "SMTPAuth",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 11,
                        "char": 25
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 13,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "XMailer",
                    "default": {
                        "type": "string",
                        "value": "zMailer",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 13,
                        "char": 28
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 14,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "Priority",
                    "default": {
                        "type": "int",
                        "value": "3",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 14,
                        "char": 21
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 16,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "From",
                    "default": {
                        "type": "string",
                        "value": "",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 16,
                        "char": 18
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 17,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "FromName",
                    "default": {
                        "type": "string",
                        "value": "",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 17,
                        "char": 22
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 18,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "ReplyTo",
                    "default": {
                        "type": "string",
                        "value": "",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 18,
                        "char": 21
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 19,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "ReplyToName",
                    "default": {
                        "type": "string",
                        "value": "",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 19,
                        "char": 25
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 21,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "Subject",
                    "default": {
                        "type": "string",
                        "value": "",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 21,
                        "char": 21
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 22,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "Message",
                    "default": {
                        "type": "string",
                        "value": "",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 22,
                        "char": 21
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 24,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "charset",
                    "default": {
                        "type": "string",
                        "value": "\\\"utf-8\\\"",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 24,
                        "char": 30
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 25,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "contentType",
                    "default": {
                        "type": "string",
                        "value": "multipart\/alternative",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 25,
                        "char": 46
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 26,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "transferEncodeing",
                    "default": {
                        "type": "string",
                        "value": "8bit",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 26,
                        "char": 35
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 27,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "altBody",
                    "default": {
                        "type": "string",
                        "value": "",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 27,
                        "char": 21
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 28,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "isLogin",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 28,
                        "char": 24
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 29,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "recipients",
                    "default": {
                        "type": "empty-array",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 29,
                        "char": 24
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 30,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "cc",
                    "default": {
                        "type": "empty-array",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 30,
                        "char": 16
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 31,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "bcc",
                    "default": {
                        "type": "empty-array",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 31,
                        "char": 17
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 32,
                    "char": 7
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "property",
                    "name": "attachments",
                    "default": {
                        "type": "empty-array",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 32,
                        "char": 25
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 33,
                    "char": 8
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "property",
                    "name": "conn",
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 34,
                    "char": 8
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "property",
                    "name": "newline",
                    "default": {
                        "type": "string",
                        "value": "\\r\\n",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 34,
                        "char": 26
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 35,
                    "char": 8
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "property",
                    "name": "localhost",
                    "default": {
                        "type": "string",
                        "value": "localhost",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 35,
                        "char": 33
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 36,
                    "char": 8
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "property",
                    "name": "timeout",
                    "default": {
                        "type": "string",
                        "value": "15",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 36,
                        "char": 24
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 37,
                    "char": 8
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "property",
                    "name": "debug",
                    "default": {
                        "type": "bool",
                        "value": "false",
                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                        "line": 37,
                        "char": 23
                    },
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 41,
                    "char": 7
                }
            ],
            "methods": [
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setParams",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "parameters",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 41,
                            "char": 44
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "key",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 42,
                                    "char": 16
                                },
                                {
                                    "variable": "value",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 42,
                                    "char": 23
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 44,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "not",
                                    "left": {
                                        "type": "fcall",
                                        "name": "is_array",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "parameters",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 44,
                                                    "char": 32
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 44,
                                                "char": 32
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 44,
                                        "char": 33
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 44,
                                    "char": 33
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 44,
                                "char": 34
                            },
                            "statements": [
                                {
                                    "type": "fcall",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "die",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "Zmail error: Parameters not array",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 46,
                                                    "char": 52
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 46,
                                                "char": 52
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 46,
                                        "char": 53
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 47,
                                    "char": 9
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 48,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "variable",
                                "value": "parameters",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 48,
                                "char": 38
                            },
                            "key": "key",
                            "value": "value",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "list",
                                        "left": {
                                            "type": "fcall",
                                            "name": "property_exists",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 49,
                                                        "char": 36
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 49,
                                                    "char": 36
                                                },
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "key",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 49,
                                                        "char": 40
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 49,
                                                    "char": 40
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 49,
                                            "char": 41
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 49,
                                        "char": 42
                                    },
                                    "statements": [
                                        {
                                            "type": "mcall",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 50,
                                                    "char": 19
                                                },
                                                "name": "setParam",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "key",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 50,
                                                            "char": 32
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 50,
                                                        "char": 32
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "value",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 50,
                                                            "char": 39
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 50,
                                                        "char": 39
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 50,
                                                "char": 40
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 51,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 52,
                                    "char": 9
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 53,
                            "char": 5
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 41,
                    "last-line": 55,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setParam",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "key",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 55,
                            "char": 37
                        },
                        {
                            "type": "parameter",
                            "name": "value",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 55,
                            "char": 48
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable-dynamic-object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "key",
                                    "expr": {
                                        "type": "variable",
                                        "value": "value",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 56,
                                        "char": 32
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 56,
                                    "char": 32
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 57,
                            "char": 5
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 55,
                    "last-line": 61,
                    "char": 19
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "method",
                    "name": "connect",
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "equals",
                                "left": {
                                    "type": "fcall",
                                    "name": "strtolower",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "fcall",
                                                "name": "trim",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 62,
                                                                "char": 27
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "secure",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 62,
                                                                "char": 34
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 62,
                                                            "char": 34
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 62,
                                                        "char": 34
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 62,
                                                "char": 35
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 62,
                                            "char": 35
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 62,
                                    "char": 38
                                },
                                "right": {
                                    "type": "string",
                                    "value": "ssl",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 62,
                                    "char": 46
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 62,
                                "char": 46
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "server",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "string",
                                                    "value": "ssl:\/\/",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 63,
                                                    "char": 32
                                                },
                                                "right": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 63,
                                                        "char": 39
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "server",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 63,
                                                        "char": 46
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 63,
                                                    "char": 46
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 63,
                                                "char": 46
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 63,
                                            "char": 46
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 64,
                                    "char": 3
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 65,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "conn",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "fsockopen",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 65,
                                                        "char": 35
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "server",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 65,
                                                        "char": 42
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 65,
                                                    "char": 42
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 65,
                                                "char": 42
                                            },
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 65,
                                                        "char": 49
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "port",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 65,
                                                        "char": 54
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 65,
                                                    "char": 54
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 65,
                                                "char": 54
                                            },
                                            {
                                                "parameter": {
                                                    "type": "null",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 65,
                                                    "char": 60
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 65,
                                                "char": 60
                                            },
                                            {
                                                "parameter": {
                                                    "type": "null",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 65,
                                                    "char": 66
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 65,
                                                "char": 66
                                            },
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 65,
                                                        "char": 73
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "timeout",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 65,
                                                        "char": 81
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 65,
                                                    "char": 81
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 65,
                                                "char": 81
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 65,
                                        "char": 82
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 65,
                                    "char": 82
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 66,
                            "char": 4
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-equals",
                                "left": {
                                    "type": "fcall",
                                    "name": "substr",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 66,
                                                    "char": 18
                                                },
                                                "name": "getServerResponse",
                                                "call-type": 1,
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 66,
                                                "char": 38
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 66,
                                            "char": 38
                                        },
                                        {
                                            "parameter": {
                                                "type": "int",
                                                "value": "0",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 66,
                                                "char": 41
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 66,
                                            "char": 41
                                        },
                                        {
                                            "parameter": {
                                                "type": "int",
                                                "value": "3",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 66,
                                                "char": 44
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 66,
                                            "char": 44
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 66,
                                    "char": 47
                                },
                                "right": {
                                    "type": "string",
                                    "value": "220",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 66,
                                    "char": 55
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 66,
                                "char": 55
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "bool",
                                        "value": "false",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 66,
                                        "char": 69
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 66,
                                    "char": 71
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 67,
                            "char": 8
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 67,
                                "char": 14
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 68,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 61,
                    "last-line": 70,
                    "char": 17
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "method",
                    "name": "auth",
                    "statements": [
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 71,
                                    "char": 8
                                },
                                "name": "sendServer",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 71,
                                                "char": 25
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "conn",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 71,
                                                "char": 30
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 71,
                                            "char": 30
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 71,
                                        "char": 30
                                    },
                                    {
                                        "parameter": {
                                            "type": "concat",
                                            "left": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "string",
                                                    "value": "HELO ",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 71,
                                                    "char": 40
                                                },
                                                "right": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 71,
                                                        "char": 47
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "localhost",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 71,
                                                        "char": 58
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 71,
                                                    "char": 58
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 71,
                                                "char": 58
                                            },
                                            "right": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 71,
                                                    "char": 65
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "newline",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 71,
                                                    "char": 73
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 71,
                                                "char": 73
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 71,
                                            "char": 73
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 71,
                                        "char": 73
                                    }
                                ],
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 71,
                                "char": 74
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 72,
                            "char": 6
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 72,
                                    "char": 8
                                },
                                "name": "getServerResponse",
                                "call-type": 1,
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 72,
                                "char": 28
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 73,
                            "char": 4
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "equals",
                                "left": {
                                    "type": "fcall",
                                    "name": "strtolower",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "fcall",
                                                "name": "trim",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 73,
                                                                "char": 27
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "secure",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 73,
                                                                "char": 34
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 73,
                                                            "char": 34
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 73,
                                                        "char": 34
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 73,
                                                "char": 35
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 73,
                                            "char": 35
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 73,
                                    "char": 38
                                },
                                "right": {
                                    "type": "string",
                                    "value": "tls",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 73,
                                    "char": 46
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 73,
                                "char": 46
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 74,
                                            "char": 9
                                        },
                                        "name": "sendServer",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 74,
                                                        "char": 26
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "conn",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 74,
                                                        "char": 31
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 74,
                                                    "char": 31
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 74,
                                                "char": 31
                                            },
                                            {
                                                "parameter": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "string",
                                                        "value": "STARTTLS",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 74,
                                                        "char": 44
                                                    },
                                                    "right": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 74,
                                                            "char": 51
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "newline",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 74,
                                                            "char": 59
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 74,
                                                        "char": 59
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 74,
                                                    "char": 59
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 74,
                                                "char": 59
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 74,
                                        "char": 60
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 75,
                                    "char": 5
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "not-equals",
                                        "left": {
                                            "type": "fcall",
                                            "name": "substr",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 75,
                                                            "char": 19
                                                        },
                                                        "name": "getServerResponse",
                                                        "call-type": 1,
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 75,
                                                        "char": 39
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 75,
                                                    "char": 39
                                                },
                                                {
                                                    "parameter": {
                                                        "type": "int",
                                                        "value": "0",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 75,
                                                        "char": 41
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 75,
                                                    "char": 41
                                                },
                                                {
                                                    "parameter": {
                                                        "type": "int",
                                                        "value": "3",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 75,
                                                        "char": 43
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 75,
                                                    "char": 43
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 75,
                                            "char": 46
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": "220",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 75,
                                            "char": 54
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 75,
                                        "char": 54
                                    },
                                    "statements": [
                                        {
                                            "type": "return",
                                            "expr": {
                                                "type": "bool",
                                                "value": "false",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 75,
                                                "char": 68
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 75,
                                            "char": 70
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 76,
                                    "char": 28
                                },
                                {
                                    "type": "fcall",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "stream_context_set_option",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 76,
                                                        "char": 35
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "conn",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 76,
                                                        "char": 40
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 76,
                                                    "char": 40
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 76,
                                                "char": 40
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "ssl",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 76,
                                                    "char": 47
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 76,
                                                "char": 47
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "verify_peer",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 76,
                                                    "char": 62
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 76,
                                                "char": 62
                                            },
                                            {
                                                "parameter": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 76,
                                                    "char": 69
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 76,
                                                "char": 69
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 76,
                                        "char": 70
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 77,
                                    "char": 28
                                },
                                {
                                    "type": "fcall",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "stream_context_set_option",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 77,
                                                        "char": 35
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "conn",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 77,
                                                        "char": 40
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 77,
                                                    "char": 40
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 77,
                                                "char": 40
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "ssl",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 77,
                                                    "char": 47
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 77,
                                                "char": 47
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "verify_peer_name",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 77,
                                                    "char": 67
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 77,
                                                "char": 67
                                            },
                                            {
                                                "parameter": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 77,
                                                    "char": 74
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 77,
                                                "char": 74
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 77,
                                        "char": 75
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 78,
                                    "char": 28
                                },
                                {
                                    "type": "fcall",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "stream_context_set_option",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 78,
                                                        "char": 35
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "conn",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 78,
                                                        "char": 40
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 78,
                                                    "char": 40
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 78,
                                                "char": 40
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "ssl",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 78,
                                                    "char": 47
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 78,
                                                "char": 47
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "allow_self_signed",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 78,
                                                    "char": 68
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 78,
                                                "char": 68
                                            },
                                            {
                                                "parameter": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 78,
                                                    "char": 74
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 78,
                                                "char": 74
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 78,
                                        "char": 75
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 79,
                                    "char": 30
                                },
                                {
                                    "type": "fcall",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "stream_socket_enable_crypto",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 79,
                                                        "char": 37
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "conn",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 79,
                                                        "char": 42
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 79,
                                                    "char": 42
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 79,
                                                "char": 42
                                            },
                                            {
                                                "parameter": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 79,
                                                    "char": 48
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 79,
                                                "char": 48
                                            },
                                            {
                                                "parameter": {
                                                    "type": "constant",
                                                    "value": "STREAM_CRYPTO_METHOD_TLS_CLIENT",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 79,
                                                    "char": 81
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 79,
                                                "char": 81
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 79,
                                        "char": 82
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 80,
                                    "char": 7
                                },
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 80,
                                            "char": 9
                                        },
                                        "name": "sendServer",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 80,
                                                        "char": 26
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "conn",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 80,
                                                        "char": 31
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 80,
                                                    "char": 31
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 80,
                                                "char": 31
                                            },
                                            {
                                                "parameter": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "string",
                                                            "value": "HELO ",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 80,
                                                            "char": 41
                                                        },
                                                        "right": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 80,
                                                                "char": 48
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "localhost",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 80,
                                                                "char": 59
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 80,
                                                            "char": 59
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 80,
                                                        "char": 59
                                                    },
                                                    "right": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 80,
                                                            "char": 66
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "newline",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 80,
                                                            "char": 74
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 80,
                                                        "char": 74
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 80,
                                                    "char": 74
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 80,
                                                "char": 74
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 80,
                                        "char": 75
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 81,
                                    "char": 5
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "not-equals",
                                        "left": {
                                            "type": "fcall",
                                            "name": "substr",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 81,
                                                            "char": 19
                                                        },
                                                        "name": "getServerResponse",
                                                        "call-type": 1,
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 81,
                                                        "char": 39
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 81,
                                                    "char": 39
                                                },
                                                {
                                                    "parameter": {
                                                        "type": "int",
                                                        "value": "0",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 81,
                                                        "char": 42
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 81,
                                                    "char": 42
                                                },
                                                {
                                                    "parameter": {
                                                        "type": "int",
                                                        "value": "3",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 81,
                                                        "char": 45
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 81,
                                                    "char": 45
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 81,
                                            "char": 48
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": "250",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 81,
                                            "char": 56
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 81,
                                        "char": 56
                                    },
                                    "statements": [
                                        {
                                            "type": "return",
                                            "expr": {
                                                "type": "bool",
                                                "value": "false",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 81,
                                                "char": 70
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 81,
                                            "char": 72
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 82,
                                    "char": 3
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 84,
                            "char": 4
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 84,
                                    "char": 11
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "SMTPAuth",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 84,
                                    "char": 21
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 84,
                                "char": 21
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 85,
                                            "char": 9
                                        },
                                        "name": "sendServer",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 85,
                                                        "char": 26
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "conn",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 85,
                                                        "char": 31
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 85,
                                                    "char": 31
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 85,
                                                "char": 31
                                            },
                                            {
                                                "parameter": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "string",
                                                        "value": "AUTH LOGIN",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 85,
                                                        "char": 46
                                                    },
                                                    "right": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 85,
                                                            "char": 53
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "newline",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 85,
                                                            "char": 61
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 85,
                                                        "char": 61
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 85,
                                                    "char": 61
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 85,
                                                "char": 61
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 85,
                                        "char": 62
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 86,
                                    "char": 5
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "list",
                                        "left": {
                                            "type": "not-equals",
                                            "left": {
                                                "type": "fcall",
                                                "name": "substr",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "mcall",
                                                            "variable": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 86,
                                                                "char": 20
                                                            },
                                                            "name": "getServerResponse",
                                                            "call-type": 1,
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 86,
                                                            "char": 40
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 86,
                                                        "char": 40
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "int",
                                                            "value": "0",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 86,
                                                            "char": 43
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 86,
                                                        "char": 43
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "int",
                                                            "value": "3",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 86,
                                                            "char": 46
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 86,
                                                        "char": 46
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 86,
                                                "char": 49
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "334",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 86,
                                                "char": 56
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 86,
                                            "char": 56
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 86,
                                        "char": 58
                                    },
                                    "statements": [
                                        {
                                            "type": "return",
                                            "expr": {
                                                "type": "bool",
                                                "value": "false",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 86,
                                                "char": 72
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 86,
                                            "char": 74
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 87,
                                    "char": 7
                                },
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 87,
                                            "char": 9
                                        },
                                        "name": "sendServer",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 87,
                                                        "char": 26
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "conn",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 87,
                                                        "char": 31
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 87,
                                                    "char": 31
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 87,
                                                "char": 31
                                            },
                                            {
                                                "parameter": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "fcall",
                                                        "name": "base64_encode",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "property-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "this",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 87,
                                                                        "char": 52
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "username",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 87,
                                                                        "char": 61
                                                                    },
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 87,
                                                                    "char": 61
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 87,
                                                                "char": 61
                                                            }
                                                        ],
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 87,
                                                        "char": 63
                                                    },
                                                    "right": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 87,
                                                            "char": 70
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "newline",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 87,
                                                            "char": 78
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 87,
                                                        "char": 78
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 87,
                                                    "char": 78
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 87,
                                                "char": 78
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 87,
                                        "char": 79
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 88,
                                    "char": 5
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "list",
                                        "left": {
                                            "type": "not-equals",
                                            "left": {
                                                "type": "fcall",
                                                "name": "substr",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "mcall",
                                                            "variable": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 88,
                                                                "char": 20
                                                            },
                                                            "name": "getServerResponse",
                                                            "call-type": 1,
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 88,
                                                            "char": 40
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 88,
                                                        "char": 40
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "int",
                                                            "value": "0",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 88,
                                                            "char": 43
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 88,
                                                        "char": 43
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "int",
                                                            "value": "3",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 88,
                                                            "char": 46
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 88,
                                                        "char": 46
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 88,
                                                "char": 49
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "334",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 88,
                                                "char": 56
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 88,
                                            "char": 56
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 88,
                                        "char": 58
                                    },
                                    "statements": [
                                        {
                                            "type": "return",
                                            "expr": {
                                                "type": "bool",
                                                "value": "false",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 88,
                                                "char": 72
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 88,
                                            "char": 74
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 89,
                                    "char": 7
                                },
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 89,
                                            "char": 9
                                        },
                                        "name": "sendServer",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 89,
                                                        "char": 26
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "conn",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 89,
                                                        "char": 31
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 89,
                                                    "char": 31
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 89,
                                                "char": 31
                                            },
                                            {
                                                "parameter": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "fcall",
                                                        "name": "base64_encode",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "property-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "this",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 89,
                                                                        "char": 52
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "password",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 89,
                                                                        "char": 61
                                                                    },
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 89,
                                                                    "char": 61
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 89,
                                                                "char": 61
                                                            }
                                                        ],
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 89,
                                                        "char": 63
                                                    },
                                                    "right": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 89,
                                                            "char": 70
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "newline",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 89,
                                                            "char": 78
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 89,
                                                        "char": 78
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 89,
                                                    "char": 78
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 89,
                                                "char": 78
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 89,
                                        "char": 79
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 90,
                                    "char": 5
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "list",
                                        "left": {
                                            "type": "not-equals",
                                            "left": {
                                                "type": "fcall",
                                                "name": "substr",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "mcall",
                                                            "variable": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 90,
                                                                "char": 20
                                                            },
                                                            "name": "getServerResponse",
                                                            "call-type": 1,
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 90,
                                                            "char": 40
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 90,
                                                        "char": 40
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "int",
                                                            "value": "0",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 90,
                                                            "char": 43
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 90,
                                                        "char": 43
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "int",
                                                            "value": "3",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 90,
                                                            "char": 46
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 90,
                                                        "char": 46
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 90,
                                                "char": 49
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "235",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 90,
                                                "char": 56
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 90,
                                            "char": 56
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 90,
                                        "char": 58
                                    },
                                    "statements": [
                                        {
                                            "type": "return",
                                            "expr": {
                                                "type": "bool",
                                                "value": "false",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 90,
                                                "char": 72
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 90,
                                            "char": 74
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 91,
                                    "char": 3
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 92,
                            "char": 8
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 92,
                                "char": 14
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 93,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 70,
                    "last-line": 96,
                    "char": 17
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "RFCDate",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "tz",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 97,
                                    "char": 9
                                },
                                {
                                    "variable": "tzs",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 97,
                                    "char": 14
                                },
                                {
                                    "variable": "result",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 97,
                                    "char": 22
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 98,
                            "char": 8
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tz",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "date",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "char",
                                                    "value": "Z",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 98,
                                                    "char": 23
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 98,
                                                "char": 23
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 98,
                                        "char": 24
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 98,
                                    "char": 24
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 99,
                            "char": 8
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tzs",
                                    "expr": {
                                        "type": "ternary",
                                        "left": {
                                            "type": "list",
                                            "left": {
                                                "type": "less",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "tz",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 99,
                                                    "char": 20
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "0",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 99,
                                                    "char": 23
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 99,
                                                "char": 23
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 99,
                                            "char": 25
                                        },
                                        "right": {
                                            "type": "char",
                                            "value": "-",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 99,
                                            "char": 31
                                        },
                                        "extra": {
                                            "type": "char",
                                            "value": "+",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 99,
                                            "char": 36
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 99,
                                        "char": 36
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 99,
                                    "char": 36
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 100,
                            "char": 8
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tz",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "abs",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "tz",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 100,
                                                    "char": 21
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 100,
                                                "char": 21
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 100,
                                        "char": 22
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 100,
                                    "char": 22
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 101,
                            "char": 8
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "tz",
                                    "expr": {
                                        "type": "add",
                                        "left": {
                                            "type": "mul",
                                            "left": {
                                                "type": "cast",
                                                "left": "int",
                                                "right": {
                                                    "type": "list",
                                                    "left": {
                                                        "type": "div",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "tz",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 101,
                                                            "char": 23
                                                        },
                                                        "right": {
                                                            "type": "int",
                                                            "value": "3600",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 101,
                                                            "char": 28
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 101,
                                                        "char": 28
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 101,
                                                    "char": 29
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 101,
                                                "char": 29
                                            },
                                            "right": {
                                                "type": "int",
                                                "value": "100",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 101,
                                                "char": 34
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 101,
                                            "char": 34
                                        },
                                        "right": {
                                            "type": "div",
                                            "left": {
                                                "type": "list",
                                                "left": {
                                                    "type": "mod",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "tz",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 101,
                                                        "char": 39
                                                    },
                                                    "right": {
                                                        "type": "int",
                                                        "value": "3600",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 101,
                                                        "char": 44
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 101,
                                                    "char": 44
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 101,
                                                "char": 45
                                            },
                                            "right": {
                                                "type": "int",
                                                "value": "60",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 101,
                                                "char": 48
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 101,
                                            "char": 48
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 101,
                                        "char": 48
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 101,
                                    "char": 48
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 102,
                            "char": 8
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "result",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "sprintf",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "%s %s%04d",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 102,
                                                    "char": 38
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 102,
                                                "char": 38
                                            },
                                            {
                                                "parameter": {
                                                    "type": "fcall",
                                                    "name": "date",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "string",
                                                                "value": "D, j M Y H:i:s",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 102,
                                                                "char": 61
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 102,
                                                            "char": 61
                                                        }
                                                    ],
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 102,
                                                    "char": 62
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 102,
                                                "char": 62
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "tzs",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 102,
                                                    "char": 67
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 102,
                                                "char": 67
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "tz",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 102,
                                                    "char": 71
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 102,
                                                "char": 71
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 102,
                                        "char": 72
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 102,
                                    "char": 72
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 104,
                            "char": 11
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "result",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 104,
                                "char": 19
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 105,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 96,
                    "last-line": 107,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setFrom",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "address",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 107,
                            "char": 33
                        },
                        {
                            "type": "parameter",
                            "name": "name",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "string",
                                "value": "",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 107,
                                "char": 44
                            },
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 107,
                            "char": 44
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "From",
                                    "expr": {
                                        "type": "variable",
                                        "value": "address",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 108,
                                        "char": 27
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 108,
                                    "char": 27
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 109,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "FromName",
                                    "expr": {
                                        "type": "variable",
                                        "value": "name",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 109,
                                        "char": 28
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 109,
                                    "char": 28
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 110,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 107,
                    "last-line": 112,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "replyTo",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "address",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 112,
                            "char": 33
                        },
                        {
                            "type": "parameter",
                            "name": "name",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "string",
                                "value": "",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 112,
                                "char": 44
                            },
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 112,
                            "char": 44
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "ReplyTo",
                                    "expr": {
                                        "type": "variable",
                                        "value": "address",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 113,
                                        "char": 30
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 113,
                                    "char": 30
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 114,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "ReplyToName",
                                    "expr": {
                                        "type": "variable",
                                        "value": "name",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 114,
                                        "char": 31
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 114,
                                    "char": 31
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 115,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 112,
                    "last-line": 117,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "msg",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "message",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 117,
                            "char": 29
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "Message",
                                    "expr": {
                                        "type": "variable",
                                        "value": "message",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 118,
                                        "char": 30
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 118,
                                    "char": 30
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 119,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 117,
                    "last-line": 122,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "send",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "headers",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 122,
                                "char": 37
                            },
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 122,
                            "char": 37
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "email",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 123,
                                    "char": 15
                                },
                                {
                                    "variable": "message",
                                    "expr": {
                                        "type": "string",
                                        "value": "",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 123,
                                        "char": 29
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 123,
                                    "char": 29
                                },
                                {
                                    "variable": "boundary",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 123,
                                    "char": 39
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 124,
                            "char": 8
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "message",
                                    "expr": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 124,
                                            "char": 25
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "Message",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 124,
                                            "char": 33
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 124,
                                        "char": 33
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 124,
                                    "char": 33
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 125,
                            "char": 4
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 125,
                                        "char": 12
                                    },
                                    "name": "connect",
                                    "call-type": 1,
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 125,
                                    "char": 23
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 125,
                                "char": 23
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 125,
                                    "char": 31
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 126,
                            "char": 4
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "mcall",
                                    "variable": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 126,
                                        "char": 12
                                    },
                                    "name": "auth",
                                    "call-type": 1,
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 126,
                                    "char": 20
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 126,
                                "char": 20
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 126,
                                    "char": 28
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 128,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "boundary",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 128,
                                            "char": 29
                                        },
                                        "name": "generateBoundary",
                                        "call-type": 1,
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 128,
                                        "char": 48
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 128,
                                    "char": 48
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 131,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "email",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "string",
                                                "value": "Date: ",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 131,
                                                "char": 31
                                            },
                                            "right": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 131,
                                                    "char": 38
                                                },
                                                "name": "RFCDate",
                                                "call-type": 1,
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 131,
                                                "char": 49
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 131,
                                            "char": 49
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 131,
                                                "char": 56
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 131,
                                                "char": 64
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 131,
                                            "char": 64
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 131,
                                        "char": 64
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 131,
                                    "char": 64
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 132,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "email",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "string",
                                                            "value": "From: \\\"",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 132,
                                                            "char": 32
                                                        },
                                                        "right": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 132,
                                                                "char": 39
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "FromName",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 132,
                                                                "char": 49
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 132,
                                                            "char": 49
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 132,
                                                        "char": 49
                                                    },
                                                    "right": {
                                                        "type": "string",
                                                        "value": "\\\" <",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 132,
                                                        "char": 58
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 132,
                                                    "char": 58
                                                },
                                                "right": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 132,
                                                        "char": 65
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "From",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 132,
                                                        "char": 71
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 132,
                                                    "char": 71
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 132,
                                                "char": 71
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": ">",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 132,
                                                "char": 76
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 132,
                                            "char": 76
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 132,
                                                "char": 83
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 132,
                                                "char": 91
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 132,
                                            "char": 91
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 132,
                                        "char": 91
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 132,
                                    "char": 91
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 133,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 133,
                                    "char": 17
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "ReplyTo",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 133,
                                    "char": 26
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 133,
                                "char": 26
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "concat-assign",
                                            "variable": "email",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "concat",
                                                                "left": {
                                                                    "type": "string",
                                                                    "value": "Reply-To: \\\"",
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 134,
                                                                    "char": 37
                                                                },
                                                                "right": {
                                                                    "type": "property-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "this",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 134,
                                                                        "char": 44
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "ReplyToName",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 134,
                                                                        "char": 57
                                                                    },
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 134,
                                                                    "char": 57
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 134,
                                                                "char": 57
                                                            },
                                                            "right": {
                                                                "type": "string",
                                                                "value": "\\\" <",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 134,
                                                                "char": 66
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 134,
                                                            "char": 66
                                                        },
                                                        "right": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 134,
                                                                "char": 73
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "ReplyTo",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 134,
                                                                "char": 82
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 134,
                                                            "char": 82
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 134,
                                                        "char": 82
                                                    },
                                                    "right": {
                                                        "type": "string",
                                                        "value": ">",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 134,
                                                        "char": 88
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 134,
                                                    "char": 88
                                                },
                                                "right": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 134,
                                                        "char": 95
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "newline",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 134,
                                                        "char": 103
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 134,
                                                    "char": 103
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 134,
                                                "char": 103
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 134,
                                            "char": 103
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 135,
                                    "char": 9
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 137,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "email",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 137,
                                            "char": 26
                                        },
                                        "name": "setRecipients",
                                        "call-type": 1,
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 137,
                                        "char": 42
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 137,
                                    "char": 42
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 139,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-equals",
                                "left": {
                                    "type": "variable",
                                    "value": "headers",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 139,
                                    "char": 21
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 139,
                                    "char": 28
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 139,
                                "char": 28
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "concat-assign",
                                            "variable": "email",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "headers",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 139,
                                                    "char": 50
                                                },
                                                "right": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 139,
                                                        "char": 57
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "newline",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 139,
                                                        "char": 65
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 139,
                                                    "char": 65
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 139,
                                                "char": 65
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 139,
                                            "char": 65
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 139,
                                    "char": 67
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 141,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "email",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "string",
                                                "value": "Subject: ",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 141,
                                                "char": 32
                                            },
                                            "right": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 141,
                                                    "char": 39
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "Subject",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 141,
                                                    "char": 48
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 141,
                                                "char": 48
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 141,
                                            "char": 48
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 141,
                                                "char": 55
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 141,
                                                "char": 63
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 141,
                                            "char": 63
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 141,
                                        "char": 63
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 141,
                                    "char": 63
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 142,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "email",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "string",
                                            "value": "MIME-Version: 1.0",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 142,
                                            "char": 41
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 142,
                                                "char": 48
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 142,
                                                "char": 56
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 142,
                                            "char": 56
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 142,
                                        "char": 56
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 142,
                                    "char": 56
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 144,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "email",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "string",
                                                "value": "Message-ID: ",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 144,
                                                "char": 36
                                            },
                                            "right": {
                                                "type": "fcall",
                                                "name": "sprintf",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "string",
                                                            "value": "<%s@%s>",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 144,
                                                            "char": 55
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 144,
                                                        "char": 55
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "boundary",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 144,
                                                            "char": 65
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 144,
                                                        "char": 65
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "mcall",
                                                            "variable": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 144,
                                                                "char": 72
                                                            },
                                                            "name": "serverHostname",
                                                            "call-type": 1,
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 144,
                                                            "char": 89
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 144,
                                                        "char": 89
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 144,
                                                "char": 91
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 144,
                                            "char": 91
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 144,
                                                "char": 98
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 144,
                                                "char": 106
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 144,
                                            "char": 106
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 144,
                                        "char": 106
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 144,
                                    "char": 106
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 146,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-equals",
                                "left": {
                                    "type": "fcall",
                                    "name": "trim",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 146,
                                                    "char": 22
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "XMailer",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 146,
                                                    "char": 30
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 146,
                                                "char": 30
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 146,
                                            "char": 30
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 146,
                                    "char": 33
                                },
                                "right": {
                                    "type": "string",
                                    "value": "",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 146,
                                    "char": 38
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 146,
                                "char": 38
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "concat-assign",
                                            "variable": "email",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "string",
                                                        "value": "X-Mailer: ",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 146,
                                                        "char": 65
                                                    },
                                                    "right": {
                                                        "type": "fcall",
                                                        "name": "trim",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "property-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "this",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 146,
                                                                        "char": 77
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "XMailer",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 146,
                                                                        "char": 85
                                                                    },
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 146,
                                                                    "char": 85
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 146,
                                                                "char": 85
                                                            }
                                                        ],
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 146,
                                                        "char": 87
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 146,
                                                    "char": 87
                                                },
                                                "right": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 146,
                                                        "char": 94
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "newline",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 146,
                                                        "char": 102
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 146,
                                                    "char": 102
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 146,
                                                "char": 102
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 146,
                                            "char": 102
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 146,
                                    "char": 104
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 147,
                            "char": 4
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not-equals",
                                "left": {
                                    "type": "fcall",
                                    "name": "trim",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 147,
                                                    "char": 16
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "Priority",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 147,
                                                    "char": 25
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 147,
                                                "char": 25
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 147,
                                            "char": 25
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 147,
                                    "char": 28
                                },
                                "right": {
                                    "type": "string",
                                    "value": "",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 147,
                                    "char": 33
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 147,
                                "char": 33
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "concat-assign",
                                            "variable": "email",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "string",
                                                        "value": "X-Priority: ",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 147,
                                                        "char": 62
                                                    },
                                                    "right": {
                                                        "type": "fcall",
                                                        "name": "trim",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "property-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "this",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 147,
                                                                        "char": 74
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "Priority",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 147,
                                                                        "char": 83
                                                                    },
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 147,
                                                                    "char": 83
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 147,
                                                                "char": 83
                                                            }
                                                        ],
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 147,
                                                        "char": 85
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 147,
                                                    "char": 85
                                                },
                                                "right": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 147,
                                                        "char": 92
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "newline",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 147,
                                                        "char": 100
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 147,
                                                    "char": 100
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 147,
                                                "char": 100
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 147,
                                            "char": 100
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 147,
                                    "char": 102
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 149,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "equals",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 149,
                                        "char": 17
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "contentType",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 149,
                                        "char": 31
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 149,
                                    "char": 31
                                },
                                "right": {
                                    "type": "string",
                                    "value": "multipart\/alternative",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 149,
                                    "char": 57
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 149,
                                "char": 57
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "message",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 150,
                                                    "char": 32
                                                },
                                                "name": "multipartMessage",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "message",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 150,
                                                            "char": 57
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 150,
                                                        "char": 57
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "boundary",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 150,
                                                            "char": 67
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 150,
                                                        "char": 67
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 150,
                                                "char": 68
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 150,
                                            "char": 68
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 151,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "concat-assign",
                                            "variable": "email",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "string",
                                                            "value": "Content-Type: ",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 151,
                                                            "char": 42
                                                        },
                                                        "right": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 151,
                                                                "char": 49
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "contentType",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 151,
                                                                "char": 62
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 151,
                                                            "char": 62
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 151,
                                                        "char": 62
                                                    },
                                                    "right": {
                                                        "type": "string",
                                                        "value": ";",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 151,
                                                        "char": 68
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 151,
                                                    "char": 68
                                                },
                                                "right": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 151,
                                                        "char": 75
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "newline",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 151,
                                                        "char": 83
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 151,
                                                    "char": 83
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 151,
                                                "char": 83
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 151,
                                            "char": 83
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 152,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "concat-assign",
                                            "variable": "email",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "string",
                                                        "value": "    boundary=\\\"",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 152,
                                                        "char": 43
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "boundary",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 152,
                                                        "char": 54
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 152,
                                                    "char": 54
                                                },
                                                "right": {
                                                    "type": "string",
                                                    "value": "\\\"",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 152,
                                                    "char": 60
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 152,
                                                "char": 60
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 152,
                                            "char": 60
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 153,
                                    "char": 9
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "concat-assign",
                                            "variable": "email",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "string",
                                                            "value": "Content-Type: ",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 155,
                                                            "char": 42
                                                        },
                                                        "right": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 155,
                                                                "char": 49
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "contentType",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 155,
                                                                "char": 62
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 155,
                                                            "char": 62
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 155,
                                                        "char": 62
                                                    },
                                                    "right": {
                                                        "type": "string",
                                                        "value": "; charset=",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 155,
                                                        "char": 77
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 155,
                                                    "char": 77
                                                },
                                                "right": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 155,
                                                        "char": 84
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "charset",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 155,
                                                        "char": 92
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 155,
                                                    "char": 92
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 155,
                                                "char": 92
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 155,
                                            "char": 92
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 156,
                                    "char": 9
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 157,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "email",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 157,
                                                        "char": 26
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "newline",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 157,
                                                        "char": 35
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 157,
                                                    "char": 35
                                                },
                                                "right": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 157,
                                                        "char": 42
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "newline",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 157,
                                                        "char": 51
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 157,
                                                    "char": 51
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 157,
                                                "char": 51
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "message",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 157,
                                                "char": 61
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 157,
                                            "char": 61
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 157,
                                                "char": 68
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 157,
                                                "char": 76
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 157,
                                            "char": 76
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 157,
                                        "char": 76
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 157,
                                    "char": 76
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 158,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "email",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "string",
                                            "value": ".",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 158,
                                            "char": 25
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 158,
                                                "char": 32
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 158,
                                                "char": 40
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 158,
                                            "char": 40
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 158,
                                        "char": 40
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 158,
                                    "char": 40
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 161,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 161,
                                    "char": 14
                                },
                                "name": "sendServer",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 161,
                                                "char": 31
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "conn",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 161,
                                                "char": 36
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 161,
                                            "char": 36
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 161,
                                        "char": 36
                                    },
                                    {
                                        "parameter": {
                                            "type": "concat",
                                            "left": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "string",
                                                        "value": "MAIL FROM: <",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 161,
                                                        "char": 53
                                                    },
                                                    "right": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 161,
                                                            "char": 60
                                                        },
                                                        "name": "getMailAddr",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "property-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "this",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 161,
                                                                        "char": 78
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "From",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 161,
                                                                        "char": 83
                                                                    },
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 161,
                                                                    "char": 83
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 161,
                                                                "char": 83
                                                            }
                                                        ],
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 161,
                                                        "char": 85
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 161,
                                                    "char": 85
                                                },
                                                "right": {
                                                    "type": "string",
                                                    "value": ">",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 161,
                                                    "char": 90
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 161,
                                                "char": 90
                                            },
                                            "right": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 161,
                                                    "char": 97
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "newline",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 161,
                                                    "char": 105
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 161,
                                                "char": 105
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 161,
                                            "char": 105
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 161,
                                        "char": 105
                                    }
                                ],
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 161,
                                "char": 106
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 162,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 162,
                                    "char": 14
                                },
                                "name": "getServerResponse",
                                "call-type": 1,
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 162,
                                "char": 34
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 163,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 163,
                                    "char": 14
                                },
                                "name": "sendRecipients",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 163,
                                                "char": 35
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "recipients",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 163,
                                                "char": 46
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 163,
                                            "char": 46
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 163,
                                        "char": 46
                                    }
                                ],
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 163,
                                "char": 47
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 164,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 164,
                                    "char": 14
                                },
                                "name": "sendRecipients",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 164,
                                                "char": 35
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "cc",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 164,
                                                "char": 38
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 164,
                                            "char": 38
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 164,
                                        "char": 38
                                    }
                                ],
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 164,
                                "char": 39
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 165,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 165,
                                    "char": 14
                                },
                                "name": "sendRecipients",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 165,
                                                "char": 35
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "bcc",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 165,
                                                "char": 39
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 165,
                                            "char": 39
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 165,
                                        "char": 39
                                    }
                                ],
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 165,
                                "char": 40
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 167,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 167,
                                    "char": 14
                                },
                                "name": "sendServer",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 167,
                                                "char": 31
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "conn",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 167,
                                                "char": 36
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 167,
                                            "char": 36
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 167,
                                        "char": 36
                                    },
                                    {
                                        "parameter": {
                                            "type": "concat",
                                            "left": {
                                                "type": "string",
                                                "value": "DATA",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 167,
                                                "char": 45
                                            },
                                            "right": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 167,
                                                    "char": 52
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "newline",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 167,
                                                    "char": 60
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 167,
                                                "char": 60
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 167,
                                            "char": 60
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 167,
                                        "char": 60
                                    }
                                ],
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 167,
                                "char": 61
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 168,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 168,
                                    "char": 14
                                },
                                "name": "getServerResponse",
                                "call-type": 1,
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 168,
                                "char": 34
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 169,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 169,
                                    "char": 14
                                },
                                "name": "sendServer",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 169,
                                                "char": 31
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "conn",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 169,
                                                "char": 36
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 169,
                                            "char": 36
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 169,
                                        "char": 36
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "email",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 169,
                                            "char": 43
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 169,
                                        "char": 43
                                    }
                                ],
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 169,
                                "char": 44
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 170,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "not-equals",
                                    "left": {
                                        "type": "fcall",
                                        "name": "substr",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "mcall",
                                                    "variable": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 170,
                                                        "char": 25
                                                    },
                                                    "name": "getServerResponse",
                                                    "call-type": 1,
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 170,
                                                    "char": 45
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 170,
                                                "char": 45
                                            },
                                            {
                                                "parameter": {
                                                    "type": "int",
                                                    "value": "0",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 170,
                                                    "char": 48
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 170,
                                                "char": 48
                                            },
                                            {
                                                "parameter": {
                                                    "type": "int",
                                                    "value": "3",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 170,
                                                    "char": 51
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 170,
                                                "char": 51
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 170,
                                        "char": 54
                                    },
                                    "right": {
                                        "type": "string",
                                        "value": "250",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 170,
                                        "char": 61
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 170,
                                    "char": 61
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 170,
                                "char": 63
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "bool",
                                        "value": "false",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 170,
                                        "char": 77
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 170,
                                    "char": 79
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 171,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "bool",
                                "value": "true",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 171,
                                "char": 20
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 172,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 122,
                    "last-line": 174,
                    "char": 16
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "serverHostname",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "result",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 175,
                                    "char": 13
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 176,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "result",
                                    "expr": {
                                        "type": "string",
                                        "value": "localhost.localdomain",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 176,
                                        "char": 45
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 176,
                                    "char": 45
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 177,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "and",
                                    "left": {
                                        "type": "fcall",
                                        "name": "array_key_exists",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "SERVER_NAME",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 177,
                                                    "char": 43
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 177,
                                                "char": 43
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "_SERVER",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 177,
                                                    "char": 52
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 177,
                                                "char": 52
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 177,
                                        "char": 55
                                    },
                                    "right": {
                                        "type": "not",
                                        "left": {
                                            "type": "empty",
                                            "left": {
                                                "type": "list",
                                                "left": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "_SERVER",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 177,
                                                        "char": 71
                                                    },
                                                    "right": {
                                                        "type": "string",
                                                        "value": "SERVER_NAME",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 177,
                                                        "char": 85
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 177,
                                                    "char": 86
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 177,
                                                "char": 87
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 177,
                                            "char": 87
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 177,
                                        "char": 87
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 177,
                                    "char": 87
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 177,
                                "char": 88
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "result",
                                            "expr": {
                                                "type": "array-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "_SERVER",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 178,
                                                    "char": 33
                                                },
                                                "right": {
                                                    "type": "string",
                                                    "value": "SERVER_NAME",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 178,
                                                    "char": 47
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 178,
                                                "char": 48
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 178,
                                            "char": 48
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 179,
                                    "char": 9
                                }
                            ],
                            "elseif_statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "list",
                                        "left": {
                                            "type": "and",
                                            "left": {
                                                "type": "fcall",
                                                "name": "function_exists",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "string",
                                                            "value": "gethostname",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 179,
                                                            "char": 47
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 179,
                                                        "char": 47
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 179,
                                                "char": 50
                                            },
                                            "right": {
                                                "type": "not-identical",
                                                "left": {
                                                    "type": "fcall",
                                                    "name": "gethostname",
                                                    "call-type": 1,
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 179,
                                                    "char": 68
                                                },
                                                "right": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 179,
                                                    "char": 75
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 179,
                                                "char": 75
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 179,
                                            "char": 75
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 179,
                                        "char": 77
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "result",
                                                    "expr": {
                                                        "type": "fcall",
                                                        "name": "gethostname",
                                                        "call-type": 1,
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 180,
                                                        "char": 36
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 180,
                                                    "char": 36
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 181,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 181,
                                    "char": 16
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "list",
                                        "left": {
                                            "type": "not-identical",
                                            "left": {
                                                "type": "fcall",
                                                "name": "php_uname",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "char",
                                                            "value": "n",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 181,
                                                            "char": 32
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 181,
                                                        "char": 32
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 181,
                                                "char": 36
                                            },
                                            "right": {
                                                "type": "bool",
                                                "value": "false",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 181,
                                                "char": 43
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 181,
                                            "char": 43
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 181,
                                        "char": 45
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "result",
                                                    "expr": {
                                                        "type": "fcall",
                                                        "name": "php_uname",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "char",
                                                                    "value": "n",
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 182,
                                                                    "char": 39
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 182,
                                                                "char": 39
                                                            }
                                                        ],
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 182,
                                                        "char": 40
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 182,
                                                    "char": 40
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 183,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 184,
                                    "char": 14
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 184,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "result",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 184,
                                "char": 22
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 185,
                            "char": 5
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 174,
                    "last-line": 187,
                    "char": 19
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "method",
                    "name": "sendRecipients",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "r",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 187,
                            "char": 35
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "empty",
                                "left": {
                                    "type": "list",
                                    "left": {
                                        "type": "variable",
                                        "value": "r",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 188,
                                        "char": 13
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 188,
                                    "char": 15
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 188,
                                "char": 15
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 188,
                                    "char": 25
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 189,
                            "char": 5
                        },
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "i",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 189,
                                    "char": 8
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 190,
                            "char": 5
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "fcall",
                                "name": "range",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "int",
                                            "value": "0",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 190,
                                            "char": 19
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 190,
                                        "char": 19
                                    },
                                    {
                                        "parameter": {
                                            "type": "sub",
                                            "left": {
                                                "type": "fcall",
                                                "name": "count",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "r",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 190,
                                                            "char": 28
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 190,
                                                        "char": 28
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 190,
                                                "char": 30
                                            },
                                            "right": {
                                                "type": "int",
                                                "value": "1",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 190,
                                                "char": 33
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 190,
                                            "char": 33
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 190,
                                        "char": 33
                                    }
                                ],
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 190,
                                "char": 34
                            },
                            "value": "i",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 192,
                                            "char": 9
                                        },
                                        "name": "sendServer",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 192,
                                                        "char": 26
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "conn",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 192,
                                                        "char": 31
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 192,
                                                    "char": 31
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 192,
                                                "char": 31
                                            },
                                            {
                                                "parameter": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "string",
                                                            "value": "RCPT TO: ",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 192,
                                                            "char": 44
                                                        },
                                                        "right": {
                                                            "type": "mcall",
                                                            "variable": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 192,
                                                                "char": 51
                                                            },
                                                            "name": "getMailAddr",
                                                            "call-type": 1,
                                                            "parameters": [
                                                                {
                                                                    "parameter": {
                                                                        "type": "array-access",
                                                                        "left": {
                                                                            "type": "variable",
                                                                            "value": "r",
                                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                            "line": 192,
                                                                            "char": 65
                                                                        },
                                                                        "right": {
                                                                            "type": "variable",
                                                                            "value": "i",
                                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                            "line": 192,
                                                                            "char": 67
                                                                        },
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 192,
                                                                        "char": 68
                                                                    },
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 192,
                                                                    "char": 68
                                                                }
                                                            ],
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 192,
                                                            "char": 70
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 192,
                                                        "char": 70
                                                    },
                                                    "right": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 192,
                                                            "char": 77
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "newline",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 192,
                                                            "char": 85
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 192,
                                                        "char": 85
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 192,
                                                    "char": 85
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 192,
                                                "char": 85
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 192,
                                        "char": 86
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 193,
                                    "char": 7
                                },
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 193,
                                            "char": 9
                                        },
                                        "name": "getServerResponse",
                                        "call-type": 1,
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 193,
                                        "char": 29
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 194,
                                    "char": 3
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 195,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 187,
                    "last-line": 197,
                    "char": 17
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "method",
                    "name": "setRecipients",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "to",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "string",
                                "value": "",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 197,
                                "char": 40
                            },
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 197,
                            "char": 40
                        },
                        {
                            "type": "parameter",
                            "name": "toName",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "string",
                                "value": "",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 197,
                                "char": 53
                            },
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 197,
                            "char": 53
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "r",
                                    "expr": {
                                        "type": "string",
                                        "value": "To: ",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 198,
                                        "char": 17
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 198,
                                    "char": 17
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 199,
                            "char": 5
                        },
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "i",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 199,
                                    "char": 8
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 200,
                            "char": 4
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "list",
                                    "left": {
                                        "type": "equals",
                                        "left": {
                                            "type": "variable",
                                            "value": "to",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 200,
                                            "char": 12
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": "",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 200,
                                            "char": 16
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 200,
                                        "char": 16
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 200,
                                    "char": 18
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 200,
                                "char": 18
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "concat-assign",
                                            "variable": "r",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "string",
                                                                "value": "\\\"",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 200,
                                                                "char": 33
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "toName",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 200,
                                                                "char": 42
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 200,
                                                            "char": 42
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": "\\\" <",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 200,
                                                            "char": 51
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 200,
                                                        "char": 51
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "to",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 200,
                                                        "char": 56
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 200,
                                                    "char": 56
                                                },
                                                "right": {
                                                    "type": "string",
                                                    "value": ">, ",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 200,
                                                    "char": 63
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 200,
                                                "char": 63
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 200,
                                            "char": 63
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 200,
                                    "char": 65
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 201,
                            "char": 4
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "greater",
                                "left": {
                                    "type": "fcall",
                                    "name": "count",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 201,
                                                    "char": 17
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "recipients",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 201,
                                                    "char": 28
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 201,
                                                "char": 28
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 201,
                                            "char": 28
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 201,
                                    "char": 30
                                },
                                "right": {
                                    "type": "int",
                                    "value": "0",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 201,
                                    "char": 34
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 201,
                                "char": 34
                            },
                            "statements": [
                                {
                                    "type": "for",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "range",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "int",
                                                    "value": "0",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 202,
                                                    "char": 23
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 202,
                                                "char": 23
                                            },
                                            {
                                                "parameter": {
                                                    "type": "sub",
                                                    "left": {
                                                        "type": "fcall",
                                                        "name": "count",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "property-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "this",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 202,
                                                                        "char": 36
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "recipients",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 202,
                                                                        "char": 47
                                                                    },
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 202,
                                                                    "char": 47
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 202,
                                                                "char": 47
                                                            }
                                                        ],
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 202,
                                                        "char": 49
                                                    },
                                                    "right": {
                                                        "type": "int",
                                                        "value": "1",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 202,
                                                        "char": 52
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 202,
                                                    "char": 52
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 202,
                                                "char": 52
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 202,
                                        "char": 53
                                    },
                                    "value": "i",
                                    "reverse": 0,
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "concat-assign",
                                                    "variable": "r",
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "array-access",
                                                            "left": {
                                                                "type": "property-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "this",
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 203,
                                                                    "char": 18
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "recipients",
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 203,
                                                                    "char": 29
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 203,
                                                                "char": 29
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "i",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 203,
                                                                "char": 31
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 203,
                                                            "char": 33
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": ",",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 203,
                                                            "char": 38
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 203,
                                                        "char": 38
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 203,
                                                    "char": 38
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 204,
                                            "char": 4
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 205,
                                    "char": 3
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 206,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "r",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "fcall",
                                            "name": "substr",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "r",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 206,
                                                        "char": 19
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 206,
                                                    "char": 19
                                                },
                                                {
                                                    "parameter": {
                                                        "type": "int",
                                                        "value": "0",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 206,
                                                        "char": 22
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 206,
                                                    "char": 22
                                                },
                                                {
                                                    "parameter": {
                                                        "type": "int",
                                                        "value": "-1",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 206,
                                                        "char": 26
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 206,
                                                    "char": 26
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 206,
                                            "char": 28
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 206,
                                                "char": 35
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 206,
                                                "char": 43
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 206,
                                            "char": 43
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 206,
                                        "char": 43
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 206,
                                    "char": 43
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 206,
                            "char": 65
                        },
                        {
                            "type": "empty",
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 207,
                            "char": 4
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "greater",
                                "left": {
                                    "type": "fcall",
                                    "name": "count",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 207,
                                                    "char": 17
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "cc",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 207,
                                                    "char": 20
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 207,
                                                "char": 20
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 207,
                                            "char": 20
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 207,
                                    "char": 22
                                },
                                "right": {
                                    "type": "int",
                                    "value": "0",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 207,
                                    "char": 26
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 207,
                                "char": 26
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "concat-assign",
                                            "variable": "r",
                                            "expr": {
                                                "type": "string",
                                                "value": "CC: ",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 208,
                                                "char": 18
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 208,
                                            "char": 18
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 209,
                                    "char": 6
                                },
                                {
                                    "type": "for",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "range",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "int",
                                                    "value": "0",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 209,
                                                    "char": 20
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 209,
                                                "char": 20
                                            },
                                            {
                                                "parameter": {
                                                    "type": "sub",
                                                    "left": {
                                                        "type": "fcall",
                                                        "name": "count",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "property-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "this",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 209,
                                                                        "char": 33
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "cc",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 209,
                                                                        "char": 36
                                                                    },
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 209,
                                                                    "char": 36
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 209,
                                                                "char": 36
                                                            }
                                                        ],
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 209,
                                                        "char": 38
                                                    },
                                                    "right": {
                                                        "type": "int",
                                                        "value": "1",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 209,
                                                        "char": 41
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 209,
                                                    "char": 41
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 209,
                                                "char": 41
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 209,
                                        "char": 42
                                    },
                                    "value": "i",
                                    "reverse": 0,
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "concat-assign",
                                                    "variable": "r",
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "array-access",
                                                            "left": {
                                                                "type": "property-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "this",
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 210,
                                                                    "char": 18
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "cc",
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 210,
                                                                    "char": 21
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 210,
                                                                "char": 21
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "i",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 210,
                                                                "char": 23
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 210,
                                                            "char": 25
                                                        },
                                                        "right": {
                                                            "type": "string",
                                                            "value": ",",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 210,
                                                            "char": 30
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 210,
                                                        "char": 30
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 210,
                                                    "char": 30
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 211,
                                            "char": 4
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 212,
                                    "char": 6
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "r",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "fcall",
                                                    "name": "substr",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "r",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 212,
                                                                "char": 20
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 212,
                                                            "char": 20
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "int",
                                                                "value": "0",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 212,
                                                                "char": 23
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 212,
                                                            "char": 23
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "int",
                                                                "value": "-1",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 212,
                                                                "char": 27
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 212,
                                                            "char": 27
                                                        }
                                                    ],
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 212,
                                                    "char": 29
                                                },
                                                "right": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 212,
                                                        "char": 36
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "newline",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 212,
                                                        "char": 44
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 212,
                                                    "char": 44
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 212,
                                                "char": 44
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 212,
                                            "char": 44
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 213,
                                    "char": 3
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 214,
                            "char": 8
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "r",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 214,
                                "char": 11
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 215,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 197,
                    "last-line": 217,
                    "char": 17
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "addTo",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "recipient",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 217,
                            "char": 33
                        },
                        {
                            "type": "parameter",
                            "name": "recipientName",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "string",
                                "value": "",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 217,
                                "char": 53
                            },
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 217,
                            "char": 53
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "recipientName",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "trim",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "fcall",
                                                    "name": "preg_replace",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "string",
                                                                "value": "\/[\\r\\n]+\/",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 218,
                                                                "char": 52
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 218,
                                                            "char": 52
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "string",
                                                                "value": "",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 218,
                                                                "char": 56
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 218,
                                                            "char": 56
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "recipientName",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 218,
                                                                "char": 71
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 218,
                                                            "char": 71
                                                        }
                                                    ],
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 218,
                                                    "char": 72
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 218,
                                                "char": 72
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 218,
                                        "char": 73
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 218,
                                    "char": 73
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 219,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-append",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "recipients",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "string",
                                                        "value": "\\\"",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 219,
                                                        "char": 33
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "recipientName",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 219,
                                                        "char": 49
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 219,
                                                    "char": 49
                                                },
                                                "right": {
                                                    "type": "string",
                                                    "value": "\\\" <",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 219,
                                                    "char": 58
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 219,
                                                "char": 58
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "recipient",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 219,
                                                "char": 70
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 219,
                                            "char": 70
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": ">",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 219,
                                            "char": 75
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 219,
                                        "char": 75
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 219,
                                    "char": 75
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 220,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 217,
                    "last-line": 222,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "clearRecipients",
                    "statements": [
                        {
                            "type": "unset",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 223,
                                        "char": 14
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "recipients",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 223,
                                        "char": 25
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 223,
                                    "char": 25
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 223,
                                "char": 26
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 224,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "recipients",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 224,
                                        "char": 28
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 224,
                                    "char": 28
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 225,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 222,
                    "last-line": 227,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "addCC",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "c",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 227,
                            "char": 25
                        },
                        {
                            "type": "parameter",
                            "name": "cName",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "string",
                                "value": "",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 227,
                                "char": 37
                            },
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 227,
                            "char": 37
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "cName",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "trim",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "fcall",
                                                    "name": "preg_replace",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "string",
                                                                "value": "\/[\\r\\n]+\/",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 228,
                                                                "char": 44
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 228,
                                                            "char": 44
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "string",
                                                                "value": "",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 228,
                                                                "char": 48
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 228,
                                                            "char": 48
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "cName",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 228,
                                                                "char": 55
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 228,
                                                            "char": 55
                                                        }
                                                    ],
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 228,
                                                    "char": 56
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 228,
                                                "char": 56
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 228,
                                        "char": 57
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 228,
                                    "char": 57
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 229,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-append",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "cc",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "string",
                                                        "value": "\\\"",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 229,
                                                        "char": 25
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "cName",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 229,
                                                        "char": 33
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 229,
                                                    "char": 33
                                                },
                                                "right": {
                                                    "type": "string",
                                                    "value": "\\\" <",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 229,
                                                    "char": 42
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 229,
                                                "char": 42
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "c",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 229,
                                                "char": 46
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 229,
                                            "char": 46
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": ">",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 229,
                                            "char": 51
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 229,
                                        "char": 51
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 229,
                                    "char": 51
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 230,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 227,
                    "last-line": 232,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "clearCC",
                    "statements": [
                        {
                            "type": "unset",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 233,
                                        "char": 14
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "cc",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 233,
                                        "char": 17
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 233,
                                    "char": 17
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 233,
                                "char": 18
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 234,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "cc",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 234,
                                        "char": 20
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 234,
                                    "char": 20
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 235,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 232,
                    "last-line": 237,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "addBCC",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "bc",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 237,
                            "char": 27
                        },
                        {
                            "type": "parameter",
                            "name": "bcName",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "string",
                                "value": "",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 237,
                                "char": 40
                            },
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 237,
                            "char": 40
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "bcName",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "trim",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "fcall",
                                                    "name": "preg_replace",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "string",
                                                                "value": "\/[\\r\\n]+\/",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 238,
                                                                "char": 45
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 238,
                                                            "char": 45
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "string",
                                                                "value": "",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 238,
                                                                "char": 49
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 238,
                                                            "char": 49
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "bcName",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 238,
                                                                "char": 57
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 238,
                                                            "char": 57
                                                        }
                                                    ],
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 238,
                                                    "char": 58
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 238,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 238,
                                        "char": 59
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 238,
                                    "char": 59
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 239,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-append",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "bcc",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "string",
                                                        "value": "\\\"",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 239,
                                                        "char": 26
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "bcName",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 239,
                                                        "char": 35
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 239,
                                                    "char": 35
                                                },
                                                "right": {
                                                    "type": "string",
                                                    "value": "\\\" <",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 239,
                                                    "char": 44
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 239,
                                                "char": 44
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "bc",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 239,
                                                "char": 49
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 239,
                                            "char": 49
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": ">",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 239,
                                            "char": 54
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 239,
                                        "char": 54
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 239,
                                    "char": 54
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 240,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 237,
                    "last-line": 242,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "clearBCC",
                    "statements": [
                        {
                            "type": "unset",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 243,
                                        "char": 14
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "bcc",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 243,
                                        "char": 18
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 243,
                                    "char": 18
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 243,
                                "char": 19
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 244,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "bcc",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 244,
                                        "char": 21
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 244,
                                    "char": 21
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 245,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 242,
                    "last-line": 247,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "addAttachment",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "filePath",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 247,
                            "char": 40
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-append",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "attachments",
                                    "expr": {
                                        "type": "variable",
                                        "value": "filePath",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 248,
                                        "char": 37
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 248,
                                    "char": 37
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 249,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 247,
                    "last-line": 251,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "clearAttachments",
                    "statements": [
                        {
                            "type": "unset",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 252,
                                        "char": 14
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "attachments",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 252,
                                        "char": 26
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 252,
                                    "char": 26
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 252,
                                "char": 27
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 253,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "attachments",
                                    "expr": {
                                        "type": "empty-array",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 253,
                                        "char": 29
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 253,
                                    "char": 29
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 254,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 251,
                    "last-line": 256,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "isHTML",
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "contentType",
                                    "expr": {
                                        "type": "string",
                                        "value": "text\/html",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 257,
                                        "char": 38
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 257,
                                    "char": 38
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 258,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 256,
                    "last-line": 260,
                    "char": 16
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "method",
                    "name": "multipartMessage",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "htmlpart",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 260,
                            "char": 44
                        },
                        {
                            "type": "parameter",
                            "name": "boundary",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 260,
                            "char": 54
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "parts",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 261,
                                    "char": 12
                                },
                                {
                                    "variable": "altBoundary",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 261,
                                    "char": 25
                                },
                                {
                                    "variable": "i",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 261,
                                    "char": 28
                                },
                                {
                                    "variable": "attachment",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 261,
                                    "char": 40
                                },
                                {
                                    "variable": "filename",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 261,
                                    "char": 50
                                },
                                {
                                    "variable": "ext",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 261,
                                    "char": 55
                                },
                                {
                                    "variable": "message",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 261,
                                    "char": 64
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 263,
                            "char": 4
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "equals",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 263,
                                            "char": 11
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "altBody",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 263,
                                            "char": 21
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 263,
                                        "char": 21
                                    },
                                    "right": {
                                        "type": "string",
                                        "value": "",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 263,
                                        "char": 25
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 263,
                                    "char": 25
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 263,
                                "char": 27
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "altBody",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 263,
                                                    "char": 54
                                                },
                                                "name": "strip_html_tags",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "htmlpart",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 263,
                                                            "char": 79
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 263,
                                                        "char": 79
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 263,
                                                "char": 80
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 263,
                                            "char": 80
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 263,
                                    "char": 82
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 266,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "altBoundary",
                                    "expr": {
                                        "type": "variable",
                                        "value": "boundary",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 266,
                                        "char": 29
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 266,
                                    "char": 29
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 267,
                            "char": 10
                        },
                        {
                            "type": "fcall",
                            "expr": {
                                "type": "fcall",
                                "name": "ob_start",
                                "call-type": 1,
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 267,
                                "char": 13
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 268,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "parts",
                                    "expr": {
                                        "type": "string",
                                        "value": "",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 268,
                                        "char": 17
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 268,
                                    "char": 17
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 275,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "parts",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "string",
                                                "value": "--",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 275,
                                                "char": 20
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "altBoundary",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 275,
                                                "char": 34
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 275,
                                            "char": 34
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 275,
                                                "char": 41
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 275,
                                                "char": 49
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 275,
                                            "char": 49
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 275,
                                        "char": 49
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 275,
                                    "char": 49
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 276,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "parts",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "string",
                                                "value": "Content-Type: text\/plain; charset=",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 276,
                                                "char": 51
                                            },
                                            "right": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 276,
                                                    "char": 58
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "charset",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 276,
                                                    "char": 67
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 276,
                                                "char": 67
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 276,
                                            "char": 67
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 276,
                                                "char": 74
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 276,
                                                "char": 82
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 276,
                                            "char": 82
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 276,
                                        "char": 82
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 276,
                                    "char": 82
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 277,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "parts",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "string",
                                                    "value": "Content-Transfer-Encoding: ",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 277,
                                                    "char": 44
                                                },
                                                "right": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 277,
                                                        "char": 51
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "transferEncodeing",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 277,
                                                        "char": 70
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 277,
                                                    "char": 70
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 277,
                                                "char": 70
                                            },
                                            "right": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 277,
                                                    "char": 77
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "newline",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 277,
                                                    "char": 86
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 277,
                                                "char": 86
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 277,
                                            "char": 86
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 277,
                                                "char": 93
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 277,
                                                "char": 101
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 277,
                                            "char": 101
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 277,
                                        "char": 101
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 277,
                                    "char": 101
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 278,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "parts",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 278,
                                                    "char": 20
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "altBody",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 278,
                                                    "char": 29
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 278,
                                                "char": 29
                                            },
                                            "right": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 278,
                                                    "char": 36
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "newline",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 278,
                                                    "char": 45
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 278,
                                                "char": 45
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 278,
                                            "char": 45
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 278,
                                                "char": 52
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 278,
                                                "char": 60
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 278,
                                            "char": 60
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 278,
                                        "char": 60
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 278,
                                    "char": 60
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 280,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "parts",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "string",
                                                "value": "--",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 280,
                                                "char": 20
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "altBoundary",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 280,
                                                "char": 34
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 280,
                                            "char": 34
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 280,
                                                "char": 41
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 280,
                                                "char": 49
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 280,
                                            "char": 49
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 280,
                                        "char": 49
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 280,
                                    "char": 49
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 281,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "parts",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "string",
                                                "value": "Content-Type: text\/html; charset=",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 281,
                                                "char": 51
                                            },
                                            "right": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 281,
                                                    "char": 58
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "charset",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 281,
                                                    "char": 67
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 281,
                                                "char": 67
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 281,
                                            "char": 67
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 281,
                                                "char": 74
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 281,
                                                "char": 82
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 281,
                                            "char": 82
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 281,
                                        "char": 82
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 281,
                                    "char": 82
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 282,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "parts",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "string",
                                                    "value": "Content-Transfer-Encoding: ",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 282,
                                                    "char": 45
                                                },
                                                "right": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 282,
                                                        "char": 52
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "transferEncodeing",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 282,
                                                        "char": 71
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 282,
                                                    "char": 71
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 282,
                                                "char": 71
                                            },
                                            "right": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 282,
                                                    "char": 78
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "newline",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 282,
                                                    "char": 87
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 282,
                                                "char": 87
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 282,
                                            "char": 87
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 282,
                                                "char": 94
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 282,
                                                "char": 102
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 282,
                                            "char": 102
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 282,
                                        "char": 102
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 282,
                                    "char": 102
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 283,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "parts",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "variable",
                                                "value": "htmlpart",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 283,
                                                "char": 24
                                            },
                                            "right": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 283,
                                                    "char": 31
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "newline",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 283,
                                                    "char": 40
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 283,
                                                "char": 40
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 283,
                                            "char": 40
                                        },
                                        "right": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 283,
                                                "char": 47
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "newline",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 283,
                                                "char": 55
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 283,
                                            "char": 55
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 283,
                                        "char": 55
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 283,
                                    "char": 55
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 287,
                            "char": 4
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "greater",
                                "left": {
                                    "type": "fcall",
                                    "name": "count",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 287,
                                                    "char": 17
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "attachments",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 287,
                                                    "char": 29
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 287,
                                                "char": 29
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 287,
                                            "char": 29
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 287,
                                    "char": 31
                                },
                                "right": {
                                    "type": "int",
                                    "value": "0",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 287,
                                    "char": 35
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 287,
                                "char": 35
                            },
                            "statements": [
                                {
                                    "type": "for",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "range",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "int",
                                                    "value": "0",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 288,
                                                    "char": 20
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 288,
                                                "char": 20
                                            },
                                            {
                                                "parameter": {
                                                    "type": "sub",
                                                    "left": {
                                                        "type": "fcall",
                                                        "name": "count",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "property-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "this",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 288,
                                                                        "char": 33
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "attachments",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 288,
                                                                        "char": 45
                                                                    },
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 288,
                                                                    "char": 45
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 288,
                                                                "char": 45
                                                            }
                                                        ],
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 288,
                                                        "char": 47
                                                    },
                                                    "right": {
                                                        "type": "int",
                                                        "value": "1",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 288,
                                                        "char": 50
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 288,
                                                    "char": 50
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 288,
                                                "char": 50
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 288,
                                        "char": 51
                                    },
                                    "value": "i",
                                    "reverse": 0,
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "attachment",
                                                    "expr": {
                                                        "type": "fcall",
                                                        "name": "chunk_split",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "fcall",
                                                                    "name": "base64_encode",
                                                                    "call-type": 1,
                                                                    "parameters": [
                                                                        {
                                                                            "parameter": {
                                                                                "type": "fcall",
                                                                                "name": "file_get_contents",
                                                                                "call-type": 1,
                                                                                "parameters": [
                                                                                    {
                                                                                        "parameter": {
                                                                                            "type": "array-access",
                                                                                            "left": {
                                                                                                "type": "property-access",
                                                                                                "left": {
                                                                                                    "type": "variable",
                                                                                                    "value": "this",
                                                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                                                    "line": 289,
                                                                                                    "char": 71
                                                                                                },
                                                                                                "right": {
                                                                                                    "type": "variable",
                                                                                                    "value": "attachments",
                                                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                                                    "line": 289,
                                                                                                    "char": 83
                                                                                                },
                                                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                                                "line": 289,
                                                                                                "char": 83
                                                                                            },
                                                                                            "right": {
                                                                                                "type": "variable",
                                                                                                "value": "i",
                                                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                                                "line": 289,
                                                                                                "char": 85
                                                                                            },
                                                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                                            "line": 289,
                                                                                            "char": 86
                                                                                        },
                                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                                        "line": 289,
                                                                                        "char": 86
                                                                                    }
                                                                                ],
                                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                                "line": 289,
                                                                                "char": 87
                                                                            },
                                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                            "line": 289,
                                                                            "char": 87
                                                                        }
                                                                    ],
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 289,
                                                                    "char": 88
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 289,
                                                                "char": 88
                                                            }
                                                        ],
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 289,
                                                        "char": 89
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 289,
                                                    "char": 89
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 290,
                                            "char": 7
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "filename",
                                                    "expr": {
                                                        "type": "fcall",
                                                        "name": "basename",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "array-access",
                                                                    "left": {
                                                                        "type": "property-access",
                                                                        "left": {
                                                                            "type": "variable",
                                                                            "value": "this",
                                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                            "line": 290,
                                                                            "char": 34
                                                                        },
                                                                        "right": {
                                                                            "type": "variable",
                                                                            "value": "attachments",
                                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                            "line": 290,
                                                                            "char": 46
                                                                        },
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 290,
                                                                        "char": 46
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "i",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 290,
                                                                        "char": 48
                                                                    },
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 290,
                                                                    "char": 49
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 290,
                                                                "char": 49
                                                            }
                                                        ],
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 290,
                                                        "char": 50
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 290,
                                                    "char": 50
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 291,
                                            "char": 7
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "ext",
                                                    "expr": {
                                                        "type": "fcall",
                                                        "name": "pathinfo",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "filename",
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 291,
                                                                    "char": 32
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 291,
                                                                "char": 32
                                                            },
                                                            {
                                                                "parameter": {
                                                                    "type": "constant",
                                                                    "value": "PATHINFO_EXTENSION",
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 291,
                                                                    "char": 52
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 291,
                                                                "char": 52
                                                            }
                                                        ],
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 291,
                                                        "char": 53
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 291,
                                                    "char": 53
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 292,
                                            "char": 7
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "concat-assign",
                                                    "variable": "parts",
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "string",
                                                                "value": "--",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 292,
                                                                "char": 22
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "boundary",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 292,
                                                                "char": 33
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 292,
                                                            "char": 33
                                                        },
                                                        "right": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 292,
                                                                "char": 40
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "newline",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 292,
                                                                "char": 48
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 292,
                                                            "char": 48
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 292,
                                                        "char": 48
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 292,
                                                    "char": 48
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 293,
                                            "char": 7
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "concat-assign",
                                                    "variable": "parts",
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "concat",
                                                                "left": {
                                                                    "type": "concat",
                                                                    "left": {
                                                                        "type": "concat",
                                                                        "left": {
                                                                            "type": "string",
                                                                            "value": "Content-Type: application\/",
                                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                            "line": 293,
                                                                            "char": 46
                                                                        },
                                                                        "right": {
                                                                            "type": "variable",
                                                                            "value": "ext",
                                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                            "line": 293,
                                                                            "char": 52
                                                                        },
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 293,
                                                                        "char": 52
                                                                    },
                                                                    "right": {
                                                                        "type": "string",
                                                                        "value": "; name=\\\"",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 293,
                                                                        "char": 66
                                                                    },
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 293,
                                                                    "char": 66
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "filename",
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 293,
                                                                    "char": 77
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 293,
                                                                "char": 77
                                                            },
                                                            "right": {
                                                                "type": "string",
                                                                "value": "\\\"",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 293,
                                                                "char": 84
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 293,
                                                            "char": 84
                                                        },
                                                        "right": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 293,
                                                                "char": 91
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "newline",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 293,
                                                                "char": 99
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 293,
                                                            "char": 99
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 293,
                                                        "char": 99
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 293,
                                                    "char": 99
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 294,
                                            "char": 7
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "concat-assign",
                                                    "variable": "parts",
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "string",
                                                            "value": "Content-Transfer-Encoding: base64",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 294,
                                                            "char": 53
                                                        },
                                                        "right": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 294,
                                                                "char": 60
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "newline",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 294,
                                                                "char": 68
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 294,
                                                            "char": 68
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 294,
                                                        "char": 68
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 294,
                                                    "char": 68
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 295,
                                            "char": 7
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "concat-assign",
                                                    "variable": "parts",
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "concat",
                                                            "left": {
                                                                "type": "concat",
                                                                "left": {
                                                                    "type": "concat",
                                                                    "left": {
                                                                        "type": "string",
                                                                        "value": "Content-Disposition: attachment; filename=\\\"",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 295,
                                                                        "char": 64
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "filename",
                                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                        "line": 295,
                                                                        "char": 75
                                                                    },
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 295,
                                                                    "char": 75
                                                                },
                                                                "right": {
                                                                    "type": "string",
                                                                    "value": "\\\"",
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 295,
                                                                    "char": 82
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 295,
                                                                "char": 82
                                                            },
                                                            "right": {
                                                                "type": "property-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "this",
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 295,
                                                                    "char": 89
                                                                },
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "newline",
                                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                    "line": 295,
                                                                    "char": 98
                                                                },
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 295,
                                                                "char": 98
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 295,
                                                            "char": 98
                                                        },
                                                        "right": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 295,
                                                                "char": 105
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "newline",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 295,
                                                                "char": 113
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 295,
                                                            "char": 113
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 295,
                                                        "char": 113
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 295,
                                                    "char": 113
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 296,
                                            "char": 7
                                        },
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "concat-assign",
                                                    "variable": "parts",
                                                    "expr": {
                                                        "type": "concat",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "attachment",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 296,
                                                            "char": 28
                                                        },
                                                        "right": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 296,
                                                                "char": 35
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "newline",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 296,
                                                                "char": 43
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 296,
                                                            "char": 43
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 296,
                                                        "char": 43
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 296,
                                                    "char": 43
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 297,
                                            "char": 4
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 298,
                                    "char": 3
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 300,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "concat-assign",
                                    "variable": "parts",
                                    "expr": {
                                        "type": "concat",
                                        "left": {
                                            "type": "concat",
                                            "left": {
                                                "type": "string",
                                                "value": "--",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 300,
                                                "char": 20
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "boundary",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 300,
                                                "char": 31
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 300,
                                            "char": 31
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": "--",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 300,
                                            "char": 37
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 300,
                                        "char": 37
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 300,
                                    "char": 37
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 302,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "message",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "ob_get_clean",
                                        "call-type": 1,
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 302,
                                        "char": 31
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 302,
                                    "char": 31
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 303,
                            "char": 8
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "parts",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 303,
                                "char": 15
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 304,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 260,
                    "last-line": 306,
                    "char": 17
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "method",
                    "name": "generateBoundary",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "fcall",
                                "name": "md5",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "fcall",
                                            "name": "uniqid",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "fcall",
                                                        "name": "time",
                                                        "call-type": 1,
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 307,
                                                        "char": 27
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 307,
                                                    "char": 27
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 307,
                                            "char": 28
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 307,
                                        "char": 28
                                    }
                                ],
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 307,
                                "char": 29
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 315,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 306,
                    "last-line": 317,
                    "char": 17
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "method",
                    "name": "getMailAddr",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "emailaddr",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 317,
                            "char": 40
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "addr",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 318,
                                    "char": 11
                                },
                                {
                                    "variable": "strSpace",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 318,
                                    "char": 21
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 319,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "addr",
                                    "expr": {
                                        "type": "variable",
                                        "value": "emailaddr",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 319,
                                        "char": 23
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 319,
                                    "char": 23
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 320,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "strSpace",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "strrpos",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "emailaddr",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 320,
                                                    "char": 35
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 320,
                                                "char": 35
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": " ",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 320,
                                                    "char": 40
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 320,
                                                "char": 40
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 320,
                                        "char": 41
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 320,
                                    "char": 41
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 321,
                            "char": 4
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "greater",
                                    "left": {
                                        "type": "variable",
                                        "value": "strSpace",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 321,
                                        "char": 15
                                    },
                                    "right": {
                                        "type": "int",
                                        "value": "0",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 321,
                                        "char": 18
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 321,
                                    "char": 18
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 321,
                                "char": 20
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "addr",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "substr",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "emailaddr",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 322,
                                                            "char": 31
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 322,
                                                        "char": 31
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "add",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "strSpace",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 322,
                                                                "char": 42
                                                            },
                                                            "right": {
                                                                "type": "int",
                                                                "value": "1",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 322,
                                                                "char": 45
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 322,
                                                            "char": 45
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 322,
                                                        "char": 45
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 322,
                                                "char": 46
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 322,
                                            "char": 46
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 323,
                                    "char": 6
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "addr",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "str_replace",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "string",
                                                            "value": "<",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 323,
                                                            "char": 30
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 323,
                                                        "char": 30
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "string",
                                                            "value": "",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 323,
                                                            "char": 33
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 323,
                                                        "char": 33
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "addr",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 323,
                                                            "char": 39
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 323,
                                                        "char": 39
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 323,
                                                "char": 40
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 323,
                                            "char": 40
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 324,
                                    "char": 6
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "addr",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "str_replace",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "string",
                                                            "value": ">",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 324,
                                                            "char": 30
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 324,
                                                        "char": 30
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "string",
                                                            "value": "",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 324,
                                                            "char": 33
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 324,
                                                        "char": 33
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "addr",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 324,
                                                            "char": 39
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 324,
                                                        "char": 39
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 324,
                                                "char": 40
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 324,
                                            "char": 40
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 325,
                                    "char": 3
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 326,
                            "char": 8
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "addr",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 326,
                                "char": 14
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 327,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 317,
                    "last-line": 329,
                    "char": 17
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "method",
                    "name": "randID",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "len",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 329,
                            "char": 29
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "index",
                                    "expr": {
                                        "type": "string",
                                        "value": "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 330,
                                        "char": 80
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 330,
                                    "char": 80
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 331,
                            "char": 6
                        },
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "out",
                                    "expr": {
                                        "type": "string",
                                        "value": "",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 331,
                                        "char": 16
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 331,
                                    "char": 16
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 332,
                            "char": 6
                        },
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "t",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 332,
                                    "char": 9
                                },
                                {
                                    "variable": "r",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 332,
                                    "char": 12
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 333,
                            "char": 6
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "fcall",
                                "name": "range",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "int",
                                            "value": "0",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 333,
                                            "char": 20
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 333,
                                        "char": 20
                                    },
                                    {
                                        "parameter": {
                                            "type": "sub",
                                            "left": {
                                                "type": "variable",
                                                "value": "len",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 333,
                                                "char": 26
                                            },
                                            "right": {
                                                "type": "int",
                                                "value": "1",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 333,
                                                "char": 29
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 333,
                                            "char": 29
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 333,
                                        "char": 29
                                    }
                                ],
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 333,
                                "char": 30
                            },
                            "value": "t",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "r",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "rand",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "int",
                                                            "value": "0",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 334,
                                                            "char": 20
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 334,
                                                        "char": 20
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "int",
                                                            "value": "61",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 334,
                                                            "char": 23
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 334,
                                                        "char": 23
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 334,
                                                "char": 24
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 334,
                                            "char": 24
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 335,
                                    "char": 8
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "out",
                                            "expr": {
                                                "type": "concat",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "out",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 335,
                                                    "char": 20
                                                },
                                                "right": {
                                                    "type": "fcall",
                                                    "name": "substr",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "index",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 335,
                                                                "char": 34
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 335,
                                                            "char": 34
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "r",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 335,
                                                                "char": 37
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 335,
                                                            "char": 37
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "int",
                                                                "value": "1",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 335,
                                                                "char": 40
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 335,
                                                            "char": 40
                                                        }
                                                    ],
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 335,
                                                    "char": 41
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 335,
                                                "char": 41
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 335,
                                            "char": 41
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 336,
                                    "char": 4
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 337,
                            "char": 9
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "out",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 337,
                                "char": 14
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 338,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 329,
                    "last-line": 340,
                    "char": 17
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "method",
                    "name": "sendServer",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "conn",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 340,
                            "char": 34
                        },
                        {
                            "type": "parameter",
                            "name": "data",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 340,
                            "char": 40
                        }
                    ],
                    "statements": [
                        {
                            "type": "fcall",
                            "expr": {
                                "type": "fcall",
                                "name": "fputs",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 341,
                                                "char": 14
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "conn",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 341,
                                                "char": 19
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 341,
                                            "char": 19
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 341,
                                        "char": 19
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "data",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 341,
                                            "char": 25
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 341,
                                        "char": 25
                                    }
                                ],
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 341,
                                "char": 26
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 342,
                            "char": 4
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 342,
                                    "char": 11
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "debug",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 342,
                                    "char": 17
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 342,
                                "char": 17
                            },
                            "statements": [
                                {
                                    "type": "echo",
                                    "expressions": [
                                        {
                                            "type": "concat",
                                            "left": {
                                                "type": "variable",
                                                "value": "data",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 342,
                                                "char": 29
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "<br>",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 342,
                                                "char": 37
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 342,
                                            "char": 37
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 342,
                                    "char": 39
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 343,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 340,
                    "last-line": 345,
                    "char": 17
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "method",
                    "name": "getServerResponse",
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "data",
                                    "expr": {
                                        "type": "string",
                                        "value": "",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 346,
                                        "char": 22
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 346,
                                    "char": 22
                                },
                                {
                                    "variable": "str",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 346,
                                    "char": 27
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 347,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "str",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "fgets",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 347,
                                                        "char": 30
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "conn",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 347,
                                                        "char": 35
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 347,
                                                    "char": 35
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 347,
                                                "char": 35
                                            },
                                            {
                                                "parameter": {
                                                    "type": "int",
                                                    "value": "4096",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 347,
                                                    "char": 40
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 347,
                                                "char": 40
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 347,
                                        "char": 41
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 347,
                                    "char": 41
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 348,
                            "char": 13
                        },
                        {
                            "type": "while",
                            "expr": {
                                "type": "variable",
                                "value": "str",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 348,
                                "char": 19
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "concat-assign",
                                            "variable": "data",
                                            "expr": {
                                                "type": "variable",
                                                "value": "str",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 349,
                                                "char": 25
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 349,
                                            "char": 25
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 350,
                                    "char": 12
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "equals",
                                        "left": {
                                            "type": "fcall",
                                            "name": "substr",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "str",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 350,
                                                        "char": 24
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 350,
                                                    "char": 24
                                                },
                                                {
                                                    "parameter": {
                                                        "type": "int",
                                                        "value": "3",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 350,
                                                        "char": 27
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 350,
                                                    "char": 27
                                                },
                                                {
                                                    "parameter": {
                                                        "type": "int",
                                                        "value": "1",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 350,
                                                        "char": 30
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 350,
                                                    "char": 30
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 350,
                                            "char": 33
                                        },
                                        "right": {
                                            "type": "string",
                                            "value": " ",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 350,
                                            "char": 39
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 350,
                                        "char": 39
                                    },
                                    "statements": [
                                        {
                                            "type": "break",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 350,
                                            "char": 48
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 351,
                                    "char": 13
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "str",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "fgets",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 351,
                                                                "char": 32
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "conn",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 351,
                                                                "char": 37
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 351,
                                                            "char": 37
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 351,
                                                        "char": 37
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "int",
                                                            "value": "4096",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 351,
                                                            "char": 42
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 351,
                                                        "char": 42
                                                    }
                                                ],
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 351,
                                                "char": 43
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 351,
                                            "char": 43
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 352,
                                    "char": 9
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 353,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 353,
                                    "char": 17
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "debug",
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 353,
                                    "char": 23
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 353,
                                "char": 23
                            },
                            "statements": [
                                {
                                    "type": "echo",
                                    "expressions": [
                                        {
                                            "type": "concat",
                                            "left": {
                                                "type": "variable",
                                                "value": "data",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 353,
                                                "char": 35
                                            },
                                            "right": {
                                                "type": "string",
                                                "value": "<br>",
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 353,
                                                "char": 43
                                            },
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 353,
                                            "char": 43
                                        }
                                    ],
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 353,
                                    "char": 45
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 354,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "data",
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 354,
                                "char": 20
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 355,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 345,
                    "last-line": 357,
                    "char": 17
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "strip_html_tags",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "text",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 357,
                            "char": 38
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "text",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "preg_replace",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<head[^>]*?>.*?<\/head>@siu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 361,
                                                                "char": 34
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 361,
                                                            "char": 34
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<style[^>]*?>.*?<\/style>@siu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 362,
                                                                "char": 36
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 362,
                                                            "char": 36
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<script[^>]*?.*?<\/script>@siu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 363,
                                                                "char": 37
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 363,
                                                            "char": 37
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<object[^>]*?.*?<\/object>@siu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 364,
                                                                "char": 37
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 364,
                                                            "char": 37
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<embed[^>]*?.*?<\/embed>@siu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 365,
                                                                "char": 35
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 365,
                                                            "char": 35
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<applet[^>]*?.*?<\/applet>@siu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 366,
                                                                "char": 37
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 366,
                                                            "char": 37
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<noframes[^>]*?.*?<\/noframes>@siu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 367,
                                                                "char": 41
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 367,
                                                            "char": 41
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<noscript[^>]*?.*?<\/noscript>@siu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 368,
                                                                "char": 41
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 368,
                                                            "char": 41
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<noembed[^>]*?.*?<\/noembed>@siu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 369,
                                                                "char": 39
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 369,
                                                            "char": 39
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<form[^>]*?.*?<\/form>@siu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 370,
                                                                "char": 33
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 370,
                                                            "char": 33
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<((br)|(hr))>@iu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 373,
                                                                "char": 24
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 373,
                                                            "char": 24
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<\/?((address)|(blockquote)|(center)|(del))@iu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 374,
                                                                "char": 53
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 374,
                                                            "char": 53
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<\/?((div)|(h[1-9])|(ins)|(isindex)|(p)|(pre))@iu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 375,
                                                                "char": 56
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 375,
                                                            "char": 56
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<\/?((dir)|(dl)|(dt)|(dd)|(li)|(menu)|(ol)|(ul))@iu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 376,
                                                                "char": 58
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 376,
                                                            "char": 58
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<\/?((table)|(th)|(td)|(caption))@iu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 377,
                                                                "char": 43
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 377,
                                                            "char": 43
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<\/?((form)|(button)|(fieldset)|(legend)|(input))@iu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 378,
                                                                "char": 59
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 378,
                                                            "char": 59
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<\/?((label)|(select)|(optgroup)|(option)|(textarea))@iu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 379,
                                                                "char": 63
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 379,
                                                            "char": 63
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "@<\/?((frameset)|(frame)|(iframe))@iu",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 380,
                                                                "char": 43
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 380,
                                                            "char": 43
                                                        }
                                                    ],
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 380,
                                                    "char": 44
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 380,
                                                "char": 44
                                            },
                                            {
                                                "parameter": {
                                                    "type": "array",
                                                    "left": [
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": " ",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 382,
                                                                "char": 8
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 382,
                                                            "char": 8
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": " ",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 382,
                                                                "char": 13
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 382,
                                                            "char": 13
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": " ",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 382,
                                                                "char": 18
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 382,
                                                            "char": 18
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": " ",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 382,
                                                                "char": 23
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 382,
                                                            "char": 23
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": " ",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 382,
                                                                "char": 28
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 382,
                                                            "char": 28
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": " ",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 382,
                                                                "char": 33
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 382,
                                                            "char": 33
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": " ",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 382,
                                                                "char": 38
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 382,
                                                            "char": 38
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": " ",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 382,
                                                                "char": 43
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 382,
                                                            "char": 43
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": " ",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 382,
                                                                "char": 48
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 382,
                                                            "char": 48
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": " ",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 382,
                                                                "char": 53
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 382,
                                                            "char": 53
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": " ",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 383,
                                                                "char": 8
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 383,
                                                            "char": 8
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "\\n\\$0",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 383,
                                                                "char": 17
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 383,
                                                            "char": 17
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "\\n\\$0",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 383,
                                                                "char": 26
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 383,
                                                            "char": 26
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "\\n\\$0",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 383,
                                                                "char": 35
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 383,
                                                            "char": 35
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "\\n\\$0",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 383,
                                                                "char": 44
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 383,
                                                            "char": 44
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "\\n\\$0",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 383,
                                                                "char": 53
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 383,
                                                            "char": 53
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "\\n\\$0",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 384,
                                                                "char": 12
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 384,
                                                            "char": 12
                                                        },
                                                        {
                                                            "value": {
                                                                "type": "string",
                                                                "value": "\\n\\$0",
                                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                                "line": 384,
                                                                "char": 21
                                                            },
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 384,
                                                            "char": 21
                                                        }
                                                    ],
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 384,
                                                    "char": 22
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 384,
                                                "char": 22
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "text",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 385,
                                                    "char": 9
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 385,
                                                "char": 9
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 385,
                                        "char": 10
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 385,
                                    "char": 10
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 388,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "text",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "preg_replace",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "\/(^[\\r\\n]*|[\\r\\n]+)[\\s\\t]*[\\r\\n]+\/",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 388,
                                                    "char": 63
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 388,
                                                "char": 63
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "\\n",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 388,
                                                    "char": 69
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 388,
                                                "char": 69
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "text",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 388,
                                                    "char": 75
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 388,
                                                "char": 75
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 388,
                                        "char": 76
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 388,
                                    "char": 76
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 390,
                            "char": 5
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "text",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "preg_replace",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "\/\\n( )*\/",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 390,
                                                    "char": 37
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 390,
                                                "char": 37
                                            },
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "\\n",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 390,
                                                    "char": 43
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 390,
                                                "char": 43
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "text",
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 390,
                                                    "char": 49
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 390,
                                                "char": 49
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 390,
                                        "char": 50
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 390,
                                    "char": 50
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 393,
                            "char": 8
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "fcall",
                                "name": "trim",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "fcall",
                                            "name": "strip_tags",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "text",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 393,
                                                        "char": 32
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 393,
                                                    "char": 32
                                                }
                                            ],
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 393,
                                            "char": 33
                                        },
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 393,
                                        "char": 33
                                    }
                                ],
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 393,
                                "char": 34
                            },
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 394,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 357,
                    "last-line": 395,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "debug",
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "debug",
                                    "expr": {
                                        "type": "bool",
                                        "value": "true",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 396,
                                        "char": 25
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 396,
                                    "char": 25
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 397,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 395,
                    "last-line": 399,
                    "char": 16
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__destruct",
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 400,
                                        "char": 11
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "conn",
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 400,
                                        "char": 16
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 400,
                                    "char": 16
                                },
                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                "line": 400,
                                "char": 17
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 401,
                                            "char": 9
                                        },
                                        "name": "sendServer",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 401,
                                                        "char": 26
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "conn",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 401,
                                                        "char": 31
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 401,
                                                    "char": 31
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 401,
                                                "char": 31
                                            },
                                            {
                                                "parameter": {
                                                    "type": "concat",
                                                    "left": {
                                                        "type": "string",
                                                        "value": "QUIT",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 401,
                                                        "char": 40
                                                    },
                                                    "right": {
                                                        "type": "property-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 401,
                                                            "char": 47
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "newline",
                                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                            "line": 401,
                                                            "char": 55
                                                        },
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 401,
                                                        "char": 55
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 401,
                                                    "char": 55
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 401,
                                                "char": 55
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 401,
                                        "char": 56
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 402,
                                    "char": 7
                                },
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                            "line": 402,
                                            "char": 9
                                        },
                                        "name": "getServerResponse",
                                        "call-type": 1,
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 402,
                                        "char": 29
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 403,
                                    "char": 9
                                },
                                {
                                    "type": "fcall",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "fclose",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 403,
                                                        "char": 16
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "conn",
                                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                        "line": 403,
                                                        "char": 21
                                                    },
                                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                    "line": 403,
                                                    "char": 21
                                                },
                                                "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                                "line": 403,
                                                "char": 21
                                            }
                                        ],
                                        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                        "line": 403,
                                        "char": 22
                                    },
                                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                                    "line": 404,
                                    "char": 3
                                }
                            ],
                            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                            "line": 405,
                            "char": 2
                        }
                    ],
                    "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
                    "line": 399,
                    "last-line": 407,
                    "char": 16
                }
            ],
            "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/home\/ubuntu\/workspace\/zmailer\/zmailer\/zmailer.zep",
        "line": 3,
        "char": 5
    }
]