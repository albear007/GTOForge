from models.schemas import SolveRequest, SolverOutput


def solve_gto(config: SolveRequest) -> SolverOutput:
    # 🔁 For now, return mock results. Later swap in CFR logic here.
    return SolverOutput(
        bestAction="Bet 0.75",
        frequencies={"Check": 0.3, "Bet 0.75": 0.7},
        ev=1.25,
        explanation="Betting applies pressure on mid-pairs and draws.",
    )
