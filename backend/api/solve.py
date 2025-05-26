from fastapi import APIRouter
from models.schemas import SolveRequest, SolverOutput
from solver.engine import solve_gto

router = APIRouter()


@router.post("/solve", response_model=SolverOutput)
def solve_api(payload: SolveRequest):
    return solve_gto(payload)
