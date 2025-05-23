from fastapi import FastAPI
from app.api import router


# This is the main entry point for the FastAPI application.
app = FastAPI(title="GTOForge API")

app.include_router(router)
