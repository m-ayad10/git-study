const client = require("./client")

async function init() {
    await client.expire("msg:3",10)
   const result=await client.get("msg:3")
   console.log(result)
}

init()