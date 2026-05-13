import uvicorn
from fastapi import FastAPI
from api.router import router


app = FastAPI()
app.include_router(router)

@app.get('/')
async def root():
    return {'message': 'Hello, World!'}


if __name__ == '__main__':
    uvicorn.run('main:app', reload=True, host='0.0.0.0')
    