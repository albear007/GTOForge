from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def root():
    return {"message": "GTOForge backend is live."}


@router.post("/solve")
def solve_hand(hero: str, villain: str):
    result = f"Mock solving: {hero} vs {villain}"
    # result = cfr.solve_preflop(hero, villain)
    return {"solution": result}
