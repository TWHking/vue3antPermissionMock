const express = require('express')
const app = express()
const loginData = require('./data/login.json')//登录数据
const permissionData = require('./data/permission.json')//权限数据
const tableData = require('./data/tableData.json')//表格数据
const port = 8000

app.get("/login",((req,res)=>{//登录
  res.send(loginData)
}))

app.get("/user",((req,res)=>{//用户数据
  res.send(loginData)
}))

app.get("/tableData",((req,res)=>{//表格数据
  setTimeout(()=>{//延迟返回
    res.send(tableData)
  },1000)
}))

app.post("/permission",((req,res)=>{//用户权限列表
  res.send(permissionData)
}))

app.listen(port,()=>{
  console.log("启动成功",`http://localhost:${port}`)
})