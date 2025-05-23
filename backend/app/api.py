from fastapi import APIRouter

router = APIRouter()


# Test route to check if the server is running!
@router.get("/")
def root():
    return {"message": "GTOForge backend is live."}


# Route to solve a situation and return the solution.
@router.post("/solve")
def solve_hand(hero: str, villain: str):
    result = f"Mock solving: {hero} vs {villain}"
    # result = cfr.solve_preflop(hero, villain)
    return {"solution": result}
