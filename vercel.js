const { Router } = require("express")

{
    "version";2,
    "builds";[
         
        {
            "src": "./coba.js",
            "use": "@vercel/node"
        }

    ]
    "routes";[
        {  "src": "/(.*)",
            "dest": "/"}
    ]
    

}