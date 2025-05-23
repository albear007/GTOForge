from fastapi import FastAPI
from app.api import router

app = FastAPI(title="GTOForge API")

app.include_router(router)
