import { Exercise, ExerciseDifficulty } from "../entities/Exercise";

export default [
  {
    id: 1,
    name: "Приседания",
    description: "Приседания - это отличное упражнение для тренировки ног.",
    difficulty: ExerciseDifficulty.MEDIUM,
    resources: ["https://example.com/squats"],
    equipment: ["гантели"],
    tags: ["ноги", "сила"],
  },
  {
    id: 2,
    name: "Атжуманья",
    description: "",
    difficulty: ExerciseDifficulty.EASY,
    resources: ["https://m.youtube.com/watch?v=gUMA9Ke86nM"],
    equipment: [],
    tags: ["грудь", "сила"],
  },
  {
    id: 3,
    name: "Планка",
    description: "Планка помогает укрепить мышцы кора.",
    difficulty: ExerciseDifficulty.HARD,
    resources: ["https://example.com/plank"],
    equipment: [],
    tags: ["кор", "выносливость"],
  },
  {
    id: 4,
    name: "Бегитъ",
    description: "Бег - это отличное кардиоупражнение.",
    difficulty: ExerciseDifficulty.MEDIUM,
    resources: ["https://example.com/running"],
    equipment: ["кроссовки"],
    tags: ["кардио", "выносливость"],
  },
  {
    id: 5,
    name: "Становая тяга",
    description: "Становая тяга - одно из базовых силовых упражнений.",
    difficulty: ExerciseDifficulty.HARD,
    resources: ["https://example.com/deadlift"],
    equipment: ["штанга"],
    tags: ["сила", "спина"],
  },
  {
    id: 6,
    name: "Велосипед",
    description: "",
    difficulty: ExerciseDifficulty.EASY,
    resources: [],
    equipment: ["велосипед"],
    tags: ["кардио", "выносливость"],
  },
  {
    id: 7,
    name: "Тяга к поясу",
    description: "Это упражнение помогает развивать мышцы спины.",
    difficulty: ExerciseDifficulty.MEDIUM,
    resources: ["https://example.com/row"],
    equipment: ["штанга"],
    tags: ["спина", "сила"],
  },
  {
    id: 8,
    name: "Пресс",
    description: "Упражнения на пресс помогают укрепить мышцы живота.",
    difficulty: ExerciseDifficulty.EASY,
    resources: [],
    equipment: [],
    tags: ["кор", "сила"],
  },
  {
    id: 9,
    name: "Скручивания",
    description: "Скручивания - это классическое упражнение для пресса.",
    difficulty: ExerciseDifficulty.MEDIUM,
    resources: ["https://example.com/crunches"],
    equipment: [],
    tags: ["кор", "сила"],
  },
  {
    id: 10,
    name: "Прыжки на месте",
    description: "Прыжки на месте - это отличное кардио.",
    difficulty: ExerciseDifficulty.EASY,
    resources: [],
    equipment: [],
    tags: ["кардио", "выносливость"],
  },
  {
    id: 11,
    name: "Отжимания на брусьях",
    description: "Это упражнение развивает грудные и трицепсы.",
    difficulty: ExerciseDifficulty.HARD,
    resources: ["https://example.com/dips"],
    equipment: ["брусья"],
    tags: ["грудь", "сила"],
  },
  {
    id: 12,
    name: "Скакалка",
    description: "",
    difficulty: ExerciseDifficulty.EASY,
    resources: [],
    equipment: ["скакалка"],
    tags: ["кардио", "выносливость"],
  },
  {
    id: 13,
    name: "Махи ногами",
    description: "Махи ногами помогают развивать мышцы бедер.",
    difficulty: ExerciseDifficulty.MEDIUM,
    resources: ["https://example.com/leg-swings"],
    equipment: [],
    tags: ["ноги", "сила"],
  },
  {
    id: 14,
    name: "Бёрпи",
    description: "Бёрпи - это комплексное упражнение для всего тела.",
    difficulty: ExerciseDifficulty.HARD,
    resources: ["https://example.com/burpees"],
    equipment: [],
    tags: ["кардио", "сила"],
  },
  {
    id: 15,
    name: "Йога",
    description: "Йога помогает улучшить гибкость и расслабление.",
    difficulty: ExerciseDifficulty.MEDIUM,
    resources: ["https://example.com/yoga"],
    equipment: ["коврик"],
    tags: ["гибкость", "релаксация"],
  },
] satisfies Exercise[];
