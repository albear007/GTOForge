# ♠️ GTOForge

**GTOForge** is a creative, personal project that forms the base for a poker solver engine — with plans to layer on AI/ML-powered features for strategy analysis, natural language explanation, and player training. Built with flexibility in mind, this project explores the intersection of game theory, decision-making, and artificial intelligence in the context of poker.

---

## 📌 Features

- ✅ Hand evaluator using `treys`
- ✅ Preflop range parsing and management
- 🔁 Game tree construction with `networkx`
- 🔁 Counterfactual Regret Minimization (CFR) implementation
- 🔁 Streamlit-based interface for input/output
- 🧠 Planned: GPT-based natural language explanations
- 📊 Planned: Visual strategy maps and EV charts
- 🧠 Planned: ML-based player profiling and suggestion engine

---

## 📦 Tech Stack

- **Language**: Python 3.10+
- **Libraries**:
  - [`treys`](https://github.com/worldveil/treys) – Poker hand evaluator
  - `networkx` – Game tree modeling
  - `numpy`, `pandas` – Numerical and tabular processing
  - `streamlit` – Interactive app interface
  - `openai` – (planned) LLM explanation engine
  - `scikit-learn`, `torch`, or `transformers` – (planned) ML/AI expansion

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/gtoforge.git
cd gtoforge
```

### 2. Set up a virtual environment

```bash
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the app (Streamlit)

```bash
streamlit run app.py
```

---

## 📂 Project Structure

```
gtoforge/
├── solver/
│   ├── evaluator.py         # Poker hand evaluator using treys
│   ├── ranges.py            # Range parsing and manipulation
│   ├── cfr.py               # Core CFR implementation
│   └── tree_builder.py      # Builds and manages game trees
├── app.py                   # Streamlit app UI
├── requirements.txt
└── README.md
```

---

## 🧠 Future Roadmap

- [ ] Add full game tree traversal with multi-street decisions
- [ ] Incorporate LLM for explanation of strategy decisions (GPT-4 or fine-tuned model)
- [ ] Upload hand history for feedback and analysis
- [ ] Visualize mixed strategies with pie charts or game trees
- [ ] Build drill mode for decision training
- [ ] Incorporate opponent modeling and user-based leak detection

---

## 🤖 AI/ML Vision

Once the solver logic is functional, future additions will include:
- **LLM Explainability**: Use GPT or a fine-tuned model to explain solver outputs in plain English
- **Pattern Recognition**: Train classifiers on synthetic hands to spot player types or leaks
- **Personalized Recommendations**: Suggest drills or strategy articles based on mistakes

---

## 👨‍💻 Author

**[Your Name]**  
Poker player, ML/AI developer, and builder of creative decision tools.

> Feel free to fork, contribute, or reach out if you’re interested in collaborating!

---

## 📜 License

This project is licensed under the MIT License. See `LICENSE` for more information.
