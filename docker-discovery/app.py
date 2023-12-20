from fastapi import FastAPI
from fastapi.responses import JSONResponse
import uvicorn
import time

START = time.time()

app = FastAPI(debug=True)

RUNDATETIME = time.strftime("%Y-%m-%d %H:%M:%S")

@app.get("/")
def welcome(name:str):
    uptime = time.time() - START
    time.sleep(5)
    response = {"Status":200,
                "AppStarted":RUNDATETIME,
                "TotalRunTime":uptime,
                "Message":f"Thanks for using the App {name}"}
    return JSONResponse(response)

@app.get("/home")
def welcome(name:str):
    uptime = time.time() - START
    time.sleep(5)
    response = {"Status":200,
                "AppStarted":RUNDATETIME,
                "TotalRunTime":uptime,
                "Message":f"Thanks for using the App {name}"}
    return JSONResponse(response)

@app.get("/asy")
async def welcome(name:str):
    uptime = time.time() - START
    time.sleep(5)
    response = {"Status":200,
                "AppStarted":RUNDATETIME,
                "TotalRunTime":uptime,
                "Message":f"Thanks for using the App {name}"}
    return JSONResponse(response)

@app.get("/asy/home")
async def welcome(name:str):
    uptime = time.time() - START
    time.sleep(5)
    response = {"Status":200,
                "AppStarted":RUNDATETIME,
                "TotalRunTime":uptime,
                "Message":f"Thanks for using the App {name}"}
    return JSONResponse(response)

if __name__=="__main__":
    # uvicorn.run("app:app",host="localhost",port=8844,debug=True,reload=True)
    uvicorn.run("app:app",host="0.0.0.0",port=8844)  # dont pass "localhost" in host instead pass '0.0.0.0'