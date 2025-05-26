from typing import List, Dict, Literal
from pydantic import BaseModel, Field


class StackConfig(BaseModel):
    hero: float = Field(..., alias="heroStack")
    villain: float = Field(..., alias="villainStack")
    bb: float = Field(..., alias="bigBlind")
    sb: float = Field(..., alias="smallBlind")
    ante: float = Field(0, alias="ante")


class PositionConfig(BaseModel):
    hero: str = Field(..., alias="heroPosition")
    villain: str = Field(..., alias="villainPosition")


class SolveRequest(BaseModel):
    hero: str  # e.g. "AhKh"
    villainRange: Dict[str, float]  # {"QQ": 100, "AKs": 50}
    board: List[str]  # ["Kd", "Jc", "2h"]
    stack: StackConfig
    positions: PositionConfig
    betSizes: List[float]
    gameType: Literal["cash", "tournament"]


class SolverOutput(BaseModel):
    bestAction: str
    frequencies: Dict[str, float]
    ev: float
    explanation: str
