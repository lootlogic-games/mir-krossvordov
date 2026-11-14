/* LOOTLOGIC · 150 validated crossword stages. right/down coordinates are zero-based. */
const LEVELS = Object.freeze([
  {
    "id": 1,
    "chapter": 1,
    "title": "Тайна короны",
    "letters": [
      "К",
      "О",
      "Р",
      "О",
      "Н",
      "А"
    ],
    "cols": 7,
    "rows": 7,
    "words": [
      {
        "word": "КОРОНА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "НОРА",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОРА",
        "x": 0,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ОКНО",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КРОНА",
        "x": 2,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РОК",
      "ОКО",
      "РАНО",
      "РАК",
      "КОН"
    ]
  },
  {
    "id": 2,
    "chapter": 1,
    "title": "Звёздная тропа",
    "letters": [
      "П",
      "Л",
      "А",
      "Н",
      "Е",
      "Т",
      "А"
    ],
    "cols": 8,
    "rows": 6,
    "words": [
      {
        "word": "ПЛАНЕТА",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ПЛЕН",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ЛЕНТА",
        "x": 3,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ПЛАН",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПЕНА",
        "x": 7,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ЛЕТА",
      "ЛАПА",
      "ПАН",
      "НАЛЕТ",
      "ТЕЛА"
    ]
  },
  {
    "id": 3,
    "chapter": 1,
    "title": "Ромашковая поляна",
    "letters": [
      "Р",
      "О",
      "М",
      "А",
      "Ш",
      "К",
      "А"
    ],
    "cols": 8,
    "rows": 7,
    "words": [
      {
        "word": "РОМАШКА",
        "x": 1,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ШАР",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КАША",
        "x": 7,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КОМАР",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОШМАР",
        "x": 0,
        "y": 1,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "МОРА",
      "РАК",
      "МОР",
      "КОРА",
      "МАК"
    ]
  },
  {
    "id": 4,
    "chapter": 1,
    "title": "Палитра феи",
    "letters": [
      "К",
      "А",
      "Р",
      "Т",
      "И",
      "Н",
      "А"
    ],
    "cols": 7,
    "rows": 9,
    "words": [
      {
        "word": "КАРТИНА",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ТКАНИ",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "НИТКА",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "РАНА",
        "x": 2,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "КАРТА",
        "x": 0,
        "y": 4,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "КАНАТ",
      "РАК",
      "ИКРА",
      "ТАРА",
      "ТИР"
    ]
  },
  {
    "id": 5,
    "chapter": 1,
    "title": "Лесной капитан",
    "letters": [
      "К",
      "А",
      "П",
      "И",
      "Т",
      "А",
      "Н"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "КАПИТАН",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ПАНИКА",
        "x": 5,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "КАНТ",
        "x": 4,
        "y": 7,
        "direction": "right"
      },
      {
        "word": "КАНАТ",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПАТИНА",
        "x": 3,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ПАН",
      "КАТ",
      "КИТ",
      "КАПА"
    ]
  },
  {
    "id": 6,
    "chapter": 1,
    "title": "Зеркальный ручей",
    "letters": [
      "З",
      "Е",
      "Р",
      "К",
      "А",
      "Л",
      "О"
    ],
    "cols": 7,
    "rows": 8,
    "words": [
      {
        "word": "ЗЕРКАЛО",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "КОРА",
        "x": 4,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ОЗЕРА",
        "x": 0,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КОЗА",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ЛАЗЕР",
        "x": 2,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "РАК",
      "ЛАЗ",
      "РОЗА",
      "ЗАЛ",
      "КОЛ"
    ]
  },
  {
    "id": 7,
    "chapter": 1,
    "title": "Лучик солнца",
    "letters": [
      "С",
      "О",
      "Л",
      "Н",
      "Ц",
      "Е"
    ],
    "cols": 6,
    "rows": 9,
    "words": [
      {
        "word": "СОЛНЦЕ",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "СЕНО",
        "x": 0,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "СОН",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "НОС",
        "x": 1,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "СЛОН",
        "x": 1,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "СЕЛ",
      "ЛЕС",
      "ЦЕЛО"
    ]
  },
  {
    "id": 8,
    "chapter": 1,
    "title": "Тихий берег",
    "letters": [
      "Б",
      "Е",
      "Р",
      "Е",
      "Г",
      "А"
    ],
    "cols": 10,
    "rows": 6,
    "words": [
      {
        "word": "БЕРЕГА",
        "x": 2,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ГЕРБ",
        "x": 5,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ГРАБ",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "БЕГ",
        "x": 0,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "БЕРЕГ",
        "x": 5,
        "y": 5,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РАБ",
      "БАР"
    ]
  },
  {
    "id": 9,
    "chapter": 1,
    "title": "Снежная фея",
    "letters": [
      "С",
      "Н",
      "Е",
      "Ж",
      "И",
      "Н",
      "К",
      "А"
    ],
    "cols": 11,
    "rows": 5,
    "words": [
      {
        "word": "СНЕЖИНКА",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "НИЖЕ",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ЖЕНА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "САНИ",
        "x": 7,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "НИНА",
        "x": 7,
        "y": 3,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "СЕНА"
    ]
  },
  {
    "id": 10,
    "chapter": 1,
    "title": "Праздник лепестков",
    "letters": [
      "Л",
      "Е",
      "П",
      "Е",
      "С",
      "Т",
      "О",
      "К"
    ],
    "cols": 8,
    "rows": 9,
    "words": [
      {
        "word": "ЛЕПЕСТОК",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "СТОЛ",
        "x": 4,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "СТЕКЛО",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПЕСТО",
        "x": 3,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ПЛЕСК",
        "x": 0,
        "y": 4,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "КЛЕСТ",
      "ПОЛЕ",
      "СТОК",
      "ЛЕТО",
      "ТЕЛО",
      "ПЕСК"
    ]
  },
  {
    "id": 11,
    "chapter": 2,
    "title": "Первый компас",
    "letters": [
      "К",
      "О",
      "М",
      "П",
      "А",
      "С"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "КОМПАС",
        "x": 2,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КОСА",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "СКОП",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "СПАМ",
        "x": 7,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КОМА",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ПОКА",
        "x": 1,
        "y": 4,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "МАК",
      "СОМ",
      "МОПС",
      "СОК"
    ]
  },
  {
    "id": 12,
    "chapter": 2,
    "title": "Свет фонаря",
    "letters": [
      "Ф",
      "О",
      "Н",
      "А",
      "Р",
      "И",
      "К"
    ],
    "cols": 8,
    "rows": 7,
    "words": [
      {
        "word": "ФОНАРИК",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КИНО",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "НОРА",
        "x": 2,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КРАН",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "ИКРА",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОРАН",
        "x": 3,
        "y": 1,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РАК",
      "КОН",
      "ФОН",
      "РИФ"
    ]
  },
  {
    "id": 13,
    "chapter": 2,
    "title": "Каменная пирамида",
    "letters": [
      "П",
      "И",
      "Р",
      "А",
      "М",
      "И",
      "Д",
      "А"
    ],
    "cols": 10,
    "rows": 5,
    "words": [
      {
        "word": "ПИРАМИДА",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ДАМА",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПИР",
        "x": 0,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "МИР",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПАРА",
        "x": 7,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "РАМА",
        "x": 6,
        "y": 4,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РАД",
      "ДАР"
    ]
  },
  {
    "id": 14,
    "chapter": 2,
    "title": "Долина самоцветов",
    "letters": [
      "С",
      "А",
      "М",
      "О",
      "Ц",
      "В",
      "Е",
      "Т"
    ],
    "cols": 8,
    "rows": 9,
    "words": [
      {
        "word": "САМОЦВЕТ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ТЕМА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ЦВЕТ",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "СОВЕТ",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "СВЕТ",
        "x": 2,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "МЕСТО",
        "x": 0,
        "y": 1,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ЦВЕТА",
      "МАТ",
      "САМ",
      "МОСТ",
      "ОВЕС"
    ]
  },
  {
    "id": 15,
    "chapter": 2,
    "title": "Мост над озером",
    "letters": [
      "М",
      "О",
      "С",
      "Т",
      "И",
      "К"
    ],
    "cols": 7,
    "rows": 9,
    "words": [
      {
        "word": "МОСТИК",
        "x": 1,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "СИТО",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОТ",
        "x": 4,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "МОСТ",
        "x": 1,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "СТОК",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "СТОИМ",
        "x": 0,
        "y": 4,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "СОМ",
      "ТОК",
      "ТОМ",
      "ТИК"
    ]
  },
  {
    "id": 16,
    "chapter": 2,
    "title": "Радуга над горами",
    "letters": [
      "Р",
      "А",
      "Д",
      "У",
      "Г",
      "А"
    ],
    "cols": 9,
    "rows": 6,
    "words": [
      {
        "word": "РАДУГА",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "АУРА",
        "x": 5,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "РАГУ",
        "x": 5,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ДУГА",
        "x": 7,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ГРУДА",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ГРАД",
        "x": 0,
        "y": 1,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "РАД",
      "ДРУГ",
      "ДАР"
    ]
  },
  {
    "id": 17,
    "chapter": 2,
    "title": "Сладкий пикник",
    "letters": [
      "К",
      "О",
      "Н",
      "Ф",
      "Е",
      "Т",
      "А"
    ],
    "cols": 7,
    "rows": 8,
    "words": [
      {
        "word": "КОНФЕТА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ФЕТА",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ОКЕАН",
        "x": 1,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КОФЕ",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ФАКТ",
        "x": 6,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ЕНОТ",
        "x": 2,
        "y": 1,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ФОН",
      "ТОН",
      "КОТ",
      "НОТА",
      "ТАНК"
    ]
  },
  {
    "id": 18,
    "chapter": 2,
    "title": "Карусель облаков",
    "letters": [
      "К",
      "А",
      "Р",
      "У",
      "С",
      "Е",
      "Л",
      "Ь"
    ],
    "cols": 8,
    "rows": 7,
    "words": [
      {
        "word": "КАРУСЕЛЬ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "РУСЬ",
        "x": 2,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "РЕКА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РУКА",
        "x": 1,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "СЕЛЬ",
        "x": 2,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "РУЛЬ",
        "x": 7,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ЛУК",
      "ЛАК",
      "РАК",
      "ЛЕС",
      "СУК"
    ]
  },
  {
    "id": 19,
    "chapter": 2,
    "title": "Остров черепахи",
    "letters": [
      "Ч",
      "Е",
      "Р",
      "Е",
      "П",
      "А",
      "Х",
      "А"
    ],
    "cols": 8,
    "rows": 7,
    "words": [
      {
        "word": "ЧЕРЕПАХА",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "РЕПА",
        "x": 2,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ЧЕРЕП",
        "x": 0,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ПРАХ",
        "x": 2,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ПАРА",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ХРАП",
        "x": 5,
        "y": 3,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ПЕРА",
      "ЧЕХ",
      "ПАР"
    ]
  },
  {
    "id": 20,
    "chapter": 2,
    "title": "Мелодия воды",
    "letters": [
      "М",
      "Е",
      "Л",
      "О",
      "Д",
      "И",
      "Я"
    ],
    "cols": 9,
    "rows": 8,
    "words": [
      {
        "word": "МЕЛОДИЯ",
        "x": 2,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "МИЛО",
        "x": 2,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "МОДЕЛИ",
        "x": 5,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ДОЛЯ",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ИДЕЯ",
        "x": 7,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ДЕЛО",
        "x": 0,
        "y": 5,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "МЕД",
      "МОЛ",
      "ЛЕД",
      "ДОМ"
    ]
  },
  {
    "id": 21,
    "chapter": 3,
    "title": "Старый родник",
    "letters": [
      "Р",
      "О",
      "Д",
      "Н",
      "И",
      "К"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "РОДНИК",
        "x": 3,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "КОД",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РОД",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "КИНО",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ДИКО",
        "x": 7,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ДРОН",
        "x": 5,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ДНО",
        "x": 5,
        "y": 4,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "РОК",
      "ДОН"
    ]
  },
  {
    "id": 22,
    "chapter": 3,
    "title": "Загадка призрака",
    "letters": [
      "П",
      "Р",
      "И",
      "З",
      "Р",
      "А",
      "К"
    ],
    "cols": 10,
    "rows": 7,
    "words": [
      {
        "word": "ПРИЗРАК",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ПАРК",
        "x": 6,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ИКРА",
        "x": 1,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ПАРИ",
        "x": 6,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ПРИКАЗ",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПРИЗ",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КИПА",
        "x": 0,
        "y": 2,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ПИР",
      "ПАР",
      "РАК"
    ]
  },
  {
    "id": 23,
    "chapter": 3,
    "title": "Покои королевы",
    "letters": [
      "К",
      "О",
      "Р",
      "О",
      "Л",
      "Е",
      "В",
      "А"
    ],
    "cols": 10,
    "rows": 7,
    "words": [
      {
        "word": "КОРОЛЕВА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ОРЕЛ",
        "x": 1,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КОРА",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "РЕКА",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "КОРАЛ",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОРОВА",
        "x": 4,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ВОЛК",
        "x": 0,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОВЕР",
        "x": 5,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ЛЕВ",
      "ВЕК",
      "РАК",
      "ЛАК",
      "РОВ",
      "КОЛ"
    ]
  },
  {
    "id": 24,
    "chapter": 3,
    "title": "Книга волшебника",
    "letters": [
      "В",
      "О",
      "Л",
      "Ш",
      "Е",
      "Б",
      "Н",
      "И",
      "К"
    ],
    "cols": 10,
    "rows": 7,
    "words": [
      {
        "word": "ВОЛШЕБНИК",
        "x": 1,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КЛЕН",
        "x": 9,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "БЛОК",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ВОИН",
        "x": 2,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "БЛИН",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КИНО",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ШЕЛК",
        "x": 5,
        "y": 1,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "БОК",
      "ЛЕВ",
      "ЛОВ",
      "ВЕК"
    ]
  },
  {
    "id": 25,
    "chapter": 3,
    "title": "Сокровище короля",
    "letters": [
      "С",
      "О",
      "К",
      "Р",
      "О",
      "В",
      "И",
      "Щ",
      "Е"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "СОКРОВИЩЕ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "СЕРО",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РОВ",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "РИС",
        "x": 0,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ВОР",
        "x": 3,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "КОВЕР",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ОВЕС",
        "x": 1,
        "y": 3,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "СОК",
      "КОС",
      "ВЕК"
    ]
  },
  {
    "id": 26,
    "chapter": 3,
    "title": "Запретный лабиринт",
    "letters": [
      "Л",
      "А",
      "Б",
      "И",
      "Р",
      "И",
      "Н",
      "Т"
    ],
    "cols": 8,
    "rows": 9,
    "words": [
      {
        "word": "ЛАБИРИНТ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ЛИТР",
        "x": 5,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "БРАТ",
        "x": 4,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ЛИРА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "БЛИН",
        "x": 4,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "ЛАТИН",
        "x": 1,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "БИНТ",
        "x": 3,
        "y": 7,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "БАР",
      "БАЛ",
      "ТИР",
      "БИТА"
    ]
  },
  {
    "id": 27,
    "chapter": 3,
    "title": "Сад бабочек",
    "letters": [
      "Б",
      "А",
      "Б",
      "О",
      "Ч",
      "К",
      "А"
    ],
    "cols": 10,
    "rows": 6,
    "words": [
      {
        "word": "БАБОЧКА",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ОБА",
        "x": 0,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "БАБА",
        "x": 2,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "БОК",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "БОЧКА",
        "x": 5,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "БОБ",
        "x": 2,
        "y": 4,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "БАК"
    ]
  },
  {
    "id": 28,
    "chapter": 3,
    "title": "Календарь судеб",
    "letters": [
      "К",
      "А",
      "Л",
      "Е",
      "Н",
      "Д",
      "А",
      "Р",
      "Ь"
    ],
    "cols": 10,
    "rows": 7,
    "words": [
      {
        "word": "КАЛЕНДАРЬ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ЛАК",
        "x": 0,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КРАН",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ДАР",
        "x": 2,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "КАНДАЛ",
        "x": 4,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ДАЛЬ",
        "x": 5,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ЛАРЕК",
        "x": 5,
        "y": 5,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "НАРД",
      "КАРЕ"
    ]
  },
  {
    "id": 29,
    "chapter": 3,
    "title": "Шоколадный зал",
    "letters": [
      "Ш",
      "О",
      "К",
      "О",
      "Л",
      "А",
      "Д"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "ШОКОЛАД",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ДАЛ",
        "x": 6,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ШОК",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ОКО",
        "x": 1,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ШКОЛА",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОД",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "ЛАД",
        "x": 6,
        "y": 6,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КОЛ",
      "ЛАК",
      "ОДА"
    ]
  },
  {
    "id": 30,
    "chapter": 3,
    "title": "Финал путешествия",
    "letters": [
      "П",
      "У",
      "Т",
      "Е",
      "Ш",
      "Е",
      "С",
      "Т",
      "В",
      "И",
      "Е"
    ],
    "cols": 11,
    "rows": 7,
    "words": [
      {
        "word": "ПУТЕШЕСТВИЕ",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ШЕСТ",
        "x": 5,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "СЕТИ",
        "x": 10,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ВЕСТИ",
        "x": 8,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "СВЕТ",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ШЕСТВИЕ",
        "x": 3,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "ТЕСТ",
        "x": 1,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ПУСТ",
      "ВЕС",
      "СЕТ"
    ]
  },
  {
    "id": 31,
    "chapter": 4,
    "title": "Загадка «Сакура»",
    "letters": [
      "С",
      "А",
      "К",
      "У",
      "Р",
      "А"
    ],
    "cols": 8,
    "rows": 7,
    "words": [
      {
        "word": "САКУРА",
        "x": 2,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "КАРА",
        "x": 3,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "АУРА",
        "x": 5,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "РУКА",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "КРАСА",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КУРА",
        "x": 1,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "АРКА",
        "x": 1,
        "y": 6,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РАК",
      "СУК",
      "УРА"
    ]
  },
  {
    "id": 32,
    "chapter": 4,
    "title": "Загадка «Вишенка»",
    "letters": [
      "В",
      "И",
      "Ш",
      "Е",
      "Н",
      "К",
      "А"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "ВИШЕНКА",
        "x": 2,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "НИВА",
        "x": 3,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ВЕНА",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "НИКА",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ВЕК",
        "x": 6,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ШИНА",
        "x": 1,
        "y": 3,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ИВА"
    ]
  },
  {
    "id": 33,
    "chapter": 4,
    "title": "Загадка «Колибри»",
    "letters": [
      "К",
      "О",
      "Л",
      "И",
      "Б",
      "Р",
      "И"
    ],
    "cols": 7,
    "rows": 7,
    "words": [
      {
        "word": "КОЛИБРИ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КОЛ",
        "x": 1,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "БЛОК",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "РОЛИК",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "КОЛИ",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "БОК",
        "x": 1,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "БОР",
        "x": 5,
        "y": 1,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ЛОБ",
      "РОБ",
      "РОК"
    ]
  },
  {
    "id": 34,
    "chapter": 4,
    "title": "Загадка «Соловей»",
    "letters": [
      "С",
      "О",
      "Л",
      "О",
      "В",
      "Е",
      "Й"
    ],
    "cols": 9,
    "rows": 8,
    "words": [
      {
        "word": "СОЛОВЕЙ",
        "x": 0,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ВОЛОС",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "СЛОЙ",
        "x": 0,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ВЕЛО",
        "x": 2,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "СЕЛО",
        "x": 4,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "СЛОВО",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ОВЕС",
        "x": 5,
        "y": 6,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ВЕС",
      "ЛЕВ",
      "ЛЕС",
      "ЛОВ",
      "СЕЛ"
    ]
  },
  {
    "id": 35,
    "chapter": 4,
    "title": "Загадка «Праздник»",
    "letters": [
      "П",
      "Р",
      "А",
      "З",
      "Д",
      "Н",
      "И",
      "К"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "ПРАЗДНИК",
        "x": 1,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ЗНАК",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КАДР",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "НАРД",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КРАН",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ИКРА",
        "x": 8,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "КИПА",
        "x": 1,
        "y": 5,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "НИКА",
      "ПАРИ",
      "ПАРК",
      "ПИКА",
      "ПРИЗ",
      "ПРИКАЗ",
      "ДАР"
    ]
  },
  {
    "id": 36,
    "chapter": 4,
    "title": "Загадка «Рассвет»",
    "letters": [
      "Р",
      "А",
      "С",
      "С",
      "В",
      "Е",
      "Т"
    ],
    "cols": 9,
    "rows": 6,
    "words": [
      {
        "word": "РАССВЕТ",
        "x": 2,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "РЕВ",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "СЕРА",
        "x": 5,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "РЕСТ",
        "x": 2,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ВЕС",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "СВЕТ",
        "x": 0,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "АРТ",
        "x": 4,
        "y": 3,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "СЕТ"
    ]
  },
  {
    "id": 37,
    "chapter": 4,
    "title": "Загадка «Журавлик»",
    "letters": [
      "Ж",
      "У",
      "Р",
      "А",
      "В",
      "Л",
      "И",
      "К"
    ],
    "cols": 8,
    "rows": 9,
    "words": [
      {
        "word": "ЖУРАВЛИК",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ВИРАЖ",
        "x": 6,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ВИЛКА",
        "x": 2,
        "y": 7,
        "direction": "right"
      },
      {
        "word": "РУКАВ",
        "x": 4,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ЖИЛА",
        "x": 0,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "КУРА",
        "x": 2,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ИКРА",
        "x": 2,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ЛИРА",
      "ЛУЖА",
      "РУКА",
      "ВАЛ",
      "ВИР",
      "ЖАР",
      "ЖИР"
    ]
  },
  {
    "id": 38,
    "chapter": 4,
    "title": "Загадка «Гармония»",
    "letters": [
      "Г",
      "А",
      "Р",
      "М",
      "О",
      "Н",
      "И",
      "Я"
    ],
    "cols": 8,
    "rows": 10,
    "words": [
      {
        "word": "ГАРМОНИЯ",
        "x": 0,
        "y": 8,
        "direction": "right"
      },
      {
        "word": "ГИМН",
        "x": 3,
        "y": 6,
        "direction": "down"
      },
      {
        "word": "МИГРА",
        "x": 1,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "МАНГО",
        "x": 1,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "НОРМА",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "МАГИЯ",
        "x": 7,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "АРМИЯ",
        "x": 1,
        "y": 2,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ГОРА",
      "ГОРН",
      "ГРОМ",
      "ИГРА",
      "МОРА",
      "НОГА",
      "НОРА"
    ]
  },
  {
    "id": 39,
    "chapter": 4,
    "title": "Загадка «Аромат»",
    "letters": [
      "А",
      "Р",
      "О",
      "М",
      "А",
      "Т"
    ],
    "cols": 7,
    "rows": 9,
    "words": [
      {
        "word": "АРОМАТ",
        "x": 1,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "МОРА",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "АТОМ",
        "x": 5,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "РАМА",
        "x": 3,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "МАРТ",
        "x": 2,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "РОТА",
        "x": 3,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "ТАРА",
        "x": 0,
        "y": 8,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "АРТ",
      "МАТ",
      "МОР",
      "РОМ",
      "ТОМ",
      "ТОР"
    ]
  },
  {
    "id": 40,
    "chapter": 4,
    "title": "Загадка «Кимоно»",
    "letters": [
      "К",
      "И",
      "М",
      "О",
      "Н",
      "О"
    ],
    "cols": 9,
    "rows": 5,
    "words": [
      {
        "word": "КИМОНО",
        "x": 1,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "КОМ",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОН",
        "x": 6,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "КИНО",
        "x": 1,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "МОК",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ОКНО",
        "x": 4,
        "y": 1,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ОКО"
    ]
  },
  {
    "id": 41,
    "chapter": 5,
    "title": "Загадка «Скорпион»",
    "letters": [
      "С",
      "К",
      "О",
      "Р",
      "П",
      "И",
      "О",
      "Н"
    ],
    "cols": 10,
    "rows": 5,
    "words": [
      {
        "word": "СКОРПИОН",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "СКОРО",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ОКНО",
        "x": 6,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ПРОК",
        "x": 9,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КИНО",
        "x": 2,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ОРИОН",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ПРОСО",
        "x": 3,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РИСК",
      "СКОП",
      "СНОП",
      "СПОР",
      "КОН",
      "КОС",
      "НОС"
    ]
  },
  {
    "id": 42,
    "chapter": 5,
    "title": "Загадка «Комета»",
    "letters": [
      "К",
      "О",
      "М",
      "Е",
      "Т",
      "А"
    ],
    "cols": 6,
    "rows": 9,
    "words": [
      {
        "word": "КОМЕТА",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "КОМА",
        "x": 0,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "АТОМ",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "МЕТА",
        "x": 3,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "КАТ",
        "x": 2,
        "y": 8,
        "direction": "right"
      },
      {
        "word": "АКТ",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ТЕМА",
        "x": 2,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "КОМ",
      "КОТ",
      "МАК",
      "МАТ",
      "МОК",
      "ТОК",
      "ТОМ"
    ]
  },
  {
    "id": 43,
    "chapter": 5,
    "title": "Загадка «Степной»",
    "letters": [
      "С",
      "Т",
      "Е",
      "П",
      "Н",
      "О",
      "Й"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "СТЕПНОЙ",
        "x": 1,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ЕНОТ",
        "x": 2,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "СТОП",
        "x": 1,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ПОСТ",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "СЕНО",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ПЕСТО",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "СНОП",
        "x": 3,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "НЕТ",
      "НОС",
      "СЕТ",
      "СОН",
      "ТОН",
      "ТОП"
    ]
  },
  {
    "id": 44,
    "chapter": 5,
    "title": "Загадка «Пирамиды»",
    "letters": [
      "П",
      "И",
      "Р",
      "А",
      "М",
      "И",
      "Д",
      "Ы"
    ],
    "cols": 9,
    "rows": 6,
    "words": [
      {
        "word": "ПИРАМИДЫ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ДЫМ",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ПАР",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ПИР",
        "x": 1,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "МИР",
        "x": 6,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ПАРИ",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ДАР",
        "x": 4,
        "y": 1,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РАД"
    ]
  },
  {
    "id": 45,
    "chapter": 5,
    "title": "Загадка «География»",
    "letters": [
      "Г",
      "Е",
      "О",
      "Г",
      "Р",
      "А",
      "Ф",
      "И",
      "Я"
    ],
    "cols": 9,
    "rows": 6,
    "words": [
      {
        "word": "ГЕОГРАФИЯ",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ГОРЕ",
        "x": 2,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ИГРА",
        "x": 7,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "РОГ",
        "x": 0,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РИФ",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РЕГА",
        "x": 4,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ГОРА",
        "x": 4,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ФЕЯ"
    ]
  },
  {
    "id": 46,
    "chapter": 5,
    "title": "Загадка «Археология»",
    "letters": [
      "А",
      "Р",
      "Х",
      "Е",
      "О",
      "Л",
      "О",
      "Г",
      "И",
      "Я"
    ],
    "cols": 10,
    "rows": 8,
    "words": [
      {
        "word": "АРХЕОЛОГИЯ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ГОРА",
        "x": 6,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ГОРЕ",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ОРЕХИ",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ГРЕХ",
        "x": 3,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ИГЛА",
        "x": 4,
        "y": 7,
        "direction": "right"
      },
      {
        "word": "ГОРОХ",
        "x": 0,
        "y": 6,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ИГРА",
      "ЛИГА",
      "ЛИРА",
      "ОРЕЛ",
      "ОРЕХ",
      "РЕГА",
      "ГОЛ"
    ]
  },
  {
    "id": 47,
    "chapter": 5,
    "title": "Загадка «Лампочка»",
    "letters": [
      "Л",
      "А",
      "М",
      "П",
      "О",
      "Ч",
      "К",
      "А"
    ],
    "cols": 8,
    "rows": 9,
    "words": [
      {
        "word": "ЛАМПОЧКА",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ПОЛКА",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ЛАМПА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КАПА",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ПАЛКА",
        "x": 3,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ЛАПКА",
        "x": 0,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "КОЛА",
        "x": 3,
        "y": 7,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КОМА",
      "ЛАМА",
      "ЛАПА",
      "МАЛО",
      "ПОКА",
      "КОЛ",
      "КОМ"
    ]
  },
  {
    "id": 48,
    "chapter": 5,
    "title": "Загадка «Картофель»",
    "letters": [
      "К",
      "А",
      "Р",
      "Т",
      "О",
      "Ф",
      "Е",
      "Л",
      "Ь"
    ],
    "cols": 9,
    "rows": 9,
    "words": [
      {
        "word": "КАРТОФЕЛЬ",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "КОТЕЛ",
        "x": 4,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ОТЕЛЬ",
        "x": 2,
        "y": 7,
        "direction": "right"
      },
      {
        "word": "АЛЬТ",
        "x": 8,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КАРЕ",
        "x": 6,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ЛАРЕК",
        "x": 2,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "КОЛА",
        "x": 2,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "КОРА",
      "КОФЕ",
      "КРОТ",
      "ЛЕТА",
      "ЛЕТО",
      "ОРЕЛ",
      "РАТЬ"
    ]
  },
  {
    "id": 49,
    "chapter": 5,
    "title": "Загадка «Крокодил»",
    "letters": [
      "К",
      "Р",
      "О",
      "К",
      "О",
      "Д",
      "И",
      "Л"
    ],
    "cols": 8,
    "rows": 7,
    "words": [
      {
        "word": "КРОКОДИЛ",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "КОЛИ",
        "x": 3,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "РОЛИК",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ДОЛ",
        "x": 1,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ДИКО",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ДОК",
        "x": 5,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КРИК",
        "x": 7,
        "y": 3,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "КОД",
      "КОК",
      "КОЛ",
      "ОКО",
      "РОД",
      "РОК"
    ]
  },
  {
    "id": 50,
    "chapter": 5,
    "title": "Загадка «Апельсин»",
    "letters": [
      "А",
      "П",
      "Е",
      "Л",
      "Ь",
      "С",
      "И",
      "Н"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "АПЕЛЬСИН",
        "x": 1,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ЛАНЬ",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ЛИСА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ЛЕСА",
        "x": 6,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ПЕНЬ",
        "x": 8,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ПИЛА",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ПЕНА",
        "x": 2,
        "y": 5,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ПЛАН",
      "ПЛЕН",
      "САНИ",
      "СЕЛЬ",
      "СЕНА",
      "СИЛА",
      "ЕЛЬ"
    ]
  },
  {
    "id": 51,
    "chapter": 6,
    "title": "Загадка «Полярник»",
    "letters": [
      "П",
      "О",
      "Л",
      "Я",
      "Р",
      "Н",
      "И",
      "К"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "ПОЛЯРНИК",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КОЛ",
        "x": 2,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КОЛИ",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПРОК",
        "x": 4,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "КОН",
        "x": 7,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "РОЛИК",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КИНО",
        "x": 3,
        "y": 6,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ПИР",
      "ПОЛ",
      "РОК"
    ]
  },
  {
    "id": 52,
    "chapter": 6,
    "title": "Загадка «Айсберг»",
    "letters": [
      "А",
      "Й",
      "С",
      "Б",
      "Е",
      "Р",
      "Г"
    ],
    "cols": 8,
    "rows": 7,
    "words": [
      {
        "word": "АЙСБЕРГ",
        "x": 1,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ГРАБ",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РЕГА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "БАР",
        "x": 6,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "БЕГ",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "СЕРА",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ГЕРБ",
        "x": 7,
        "y": 3,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "РАБ",
      "РАЙ"
    ]
  },
  {
    "id": 53,
    "chapter": 6,
    "title": "Загадка «Снегопад»",
    "letters": [
      "С",
      "Н",
      "Е",
      "Г",
      "О",
      "П",
      "А",
      "Д"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "СНЕГОПАД",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "НАДО",
        "x": 6,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "НОГА",
        "x": 4,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "СЕНО",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "САПОГ",
        "x": 3,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "СЕНА",
        "x": 3,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ПЕНА",
        "x": 1,
        "y": 6,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "СНЕГ",
      "СНОП",
      "ГОД",
      "ДНО",
      "ДОН",
      "ЕДА",
      "НОС"
    ]
  },
  {
    "id": 54,
    "chapter": 6,
    "title": "Загадка «Снежок»",
    "letters": [
      "С",
      "Н",
      "Е",
      "Ж",
      "О",
      "К"
    ],
    "cols": 9,
    "rows": 5,
    "words": [
      {
        "word": "СНЕЖОК",
        "x": 3,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "НОС",
        "x": 7,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "НОЖ",
        "x": 4,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "КОС",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "СЕНО",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "КОН",
        "x": 3,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "СОК",
        "x": 0,
        "y": 1,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "СОН"
    ]
  },
  {
    "id": 55,
    "chapter": 6,
    "title": "Загадка «Кристалл»",
    "letters": [
      "К",
      "Р",
      "И",
      "С",
      "Т",
      "А",
      "Л",
      "Л"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "КРИСТАЛЛ",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ИКРА",
        "x": 1,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ЛИСА",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ЛИРА",
        "x": 3,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КИСА",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ИСКРА",
        "x": 4,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "АИСТ",
        "x": 8,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ЛИСТ",
      "ЛИТР",
      "РИСК",
      "СИЛА",
      "СКАТ",
      "АКТ",
      "АРТ"
    ]
  },
  {
    "id": 56,
    "chapter": 6,
    "title": "Загадка «Полярка»",
    "letters": [
      "П",
      "О",
      "Л",
      "Я",
      "Р",
      "К",
      "А"
    ],
    "cols": 8,
    "rows": 9,
    "words": [
      {
        "word": "ПОЛЯРКА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ПОКА",
        "x": 1,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ПОЛКА",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КАПЛЯ",
        "x": 3,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ПАРК",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "КОЛА",
        "x": 3,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "КОРА",
        "x": 0,
        "y": 8,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ПОРА",
      "ПРОК",
      "КОЛ",
      "ЛАК",
      "ПАК",
      "ПАР",
      "ПОЛ"
    ]
  },
  {
    "id": 57,
    "chapter": 6,
    "title": "Загадка «Сверкание»",
    "letters": [
      "С",
      "В",
      "Е",
      "Р",
      "К",
      "А",
      "Н",
      "И",
      "Е"
    ],
    "cols": 9,
    "rows": 8,
    "words": [
      {
        "word": "СВЕРКАНИЕ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КАРЕ",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ИКРА",
        "x": 5,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ВЕСНА",
        "x": 0,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ВЕНА",
        "x": 2,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ИСКРА",
        "x": 7,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "СЕВЕР",
        "x": 3,
        "y": 6,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КИСА",
      "КРАН",
      "НЕРВ",
      "НИВА",
      "НИКА",
      "РЕКА",
      "РИСК"
    ]
  },
  {
    "id": 58,
    "chapter": 6,
    "title": "Загадка «Мандарин»",
    "letters": [
      "М",
      "А",
      "Н",
      "Д",
      "А",
      "Р",
      "И",
      "Н"
    ],
    "cols": 9,
    "rows": 6,
    "words": [
      {
        "word": "МАНДАРИН",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "РАМА",
        "x": 5,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ДАР",
        "x": 4,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "РАНА",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ДАМА",
        "x": 0,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "НИНА",
        "x": 2,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "НАРД",
        "x": 5,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "МИР",
      "РАД"
    ]
  },
  {
    "id": 59,
    "chapter": 6,
    "title": "Загадка «Коробочка»",
    "letters": [
      "К",
      "О",
      "Р",
      "О",
      "Б",
      "О",
      "Ч",
      "К",
      "А"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "КОРОБОЧКА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "БРАК",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОЧКА",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "БОЧКА",
        "x": 0,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОБРА",
        "x": 5,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "КОРОБ",
        "x": 3,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "КОРА",
        "x": 0,
        "y": 6,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КРАБ",
      "БАК",
      "БАР",
      "БОК",
      "БОР",
      "КОК",
      "ОБА"
    ]
  },
  {
    "id": 60,
    "chapter": 6,
    "title": "Загадка «Карандаш»",
    "letters": [
      "К",
      "А",
      "Р",
      "А",
      "Н",
      "Д",
      "А",
      "Ш"
    ],
    "cols": 9,
    "rows": 8,
    "words": [
      {
        "word": "КАРАНДАШ",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "КАРА",
        "x": 3,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КАША",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "АРКА",
        "x": 6,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КАДР",
        "x": 5,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "КРАН",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "НАРД",
        "x": 4,
        "y": 4,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "РАНА",
      "ДАР",
      "РАД",
      "РАК",
      "ШАР"
    ]
  },
  {
    "id": 61,
    "chapter": 7,
    "title": "Загадка «Коралл»",
    "letters": [
      "К",
      "О",
      "Р",
      "А",
      "Л",
      "Л"
    ],
    "cols": 9,
    "rows": 5,
    "words": [
      {
        "word": "КОРАЛЛ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КОЛА",
        "x": 5,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "РАК",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "КОРА",
        "x": 5,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ЛАК",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОЛ",
        "x": 1,
        "y": 2,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "РОК"
    ]
  },
  {
    "id": 62,
    "chapter": 7,
    "title": "Загадка «Маракуйя»",
    "letters": [
      "М",
      "А",
      "Р",
      "А",
      "К",
      "У",
      "Й",
      "Я"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "МАРАКУЙЯ",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "МУРКА",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "АРКА",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КАРА",
        "x": 4,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "МАРКА",
        "x": 0,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "АУРА",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "КАЙМА",
        "x": 7,
        "y": 3,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "КРАЙ",
      "КУРА",
      "МАЯК",
      "МРАК",
      "МУКА",
      "РАМА",
      "РУКА"
    ]
  },
  {
    "id": 63,
    "chapter": 7,
    "title": "Загадка «Крабик»",
    "letters": [
      "К",
      "Р",
      "А",
      "Б",
      "И",
      "К"
    ],
    "cols": 9,
    "rows": 6,
    "words": [
      {
        "word": "КРАБИК",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "КИРКА",
        "x": 5,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КРИК",
        "x": 0,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КРАБ",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "БАК",
        "x": 2,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ИКРА",
        "x": 5,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "БРАК",
        "x": 8,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "БАР",
      "РАБ",
      "РАК"
    ]
  },
  {
    "id": 64,
    "chapter": 7,
    "title": "Загадка «Ракушка»",
    "letters": [
      "Р",
      "А",
      "К",
      "У",
      "Ш",
      "К",
      "А"
    ],
    "cols": 10,
    "rows": 5,
    "words": [
      {
        "word": "РАКУШКА",
        "x": 3,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "КАРА",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РУКА",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КУРА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "АУРА",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "АРКА",
        "x": 0,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КАША",
        "x": 3,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РАК",
      "УРА",
      "ШАР"
    ]
  },
  {
    "id": 65,
    "chapter": 7,
    "title": "Загадка «Парусник»",
    "letters": [
      "П",
      "А",
      "Р",
      "У",
      "С",
      "Н",
      "И",
      "К"
    ],
    "cols": 11,
    "rows": 6,
    "words": [
      {
        "word": "ПАРУСНИК",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ИСКРА",
        "x": 7,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КРАН",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПАРУС",
        "x": 6,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "КИСА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КИПА",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ИКРА",
        "x": 7,
        "y": 1,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КУРА",
      "НИКА",
      "ПАРИ",
      "ПАРК",
      "ПАУК",
      "ПИКА",
      "РИСК"
    ]
  },
  {
    "id": 66,
    "chapter": 7,
    "title": "Загадка «Тропики»",
    "letters": [
      "Т",
      "Р",
      "О",
      "П",
      "И",
      "К",
      "И"
    ],
    "cols": 9,
    "rows": 6,
    "words": [
      {
        "word": "ТРОПИКИ",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ПРОК",
        "x": 2,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ПОРТ",
        "x": 2,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "КОТ",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПИР",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КРОТ",
        "x": 5,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "КИТ",
        "x": 0,
        "y": 2,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "РОК",
      "ТИК",
      "ТИР",
      "ТОК",
      "ТОП",
      "ТОР"
    ]
  },
  {
    "id": 67,
    "chapter": 7,
    "title": "Загадка «Кораблик»",
    "letters": [
      "К",
      "О",
      "Р",
      "А",
      "Б",
      "Л",
      "И",
      "К"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "КОРАБЛИК",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КОБРА",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "БЛОК",
        "x": 0,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "БРАК",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КОЛБА",
        "x": 7,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "РОЛИК",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "КИРКА",
        "x": 2,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ИКРА",
      "КОЛА",
      "КОЛИ",
      "КОРА",
      "КРАБ",
      "КРИК",
      "ЛИРА"
    ]
  },
  {
    "id": 68,
    "chapter": 7,
    "title": "Загадка «Открытка»",
    "letters": [
      "О",
      "Т",
      "К",
      "Р",
      "Ы",
      "Т",
      "К",
      "А"
    ],
    "cols": 8,
    "rows": 7,
    "words": [
      {
        "word": "ОТКРЫТКА",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ТОРТ",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "РОТА",
        "x": 1,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КРОТ",
        "x": 1,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "АКТ",
        "x": 6,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "КОРА",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ТРАКТ",
        "x": 1,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "АРТ",
      "КАТ",
      "КОК",
      "КОТ",
      "РАК",
      "РОК",
      "ТОК"
    ]
  },
  {
    "id": 69,
    "chapter": 7,
    "title": "Загадка «Костюмер»",
    "letters": [
      "К",
      "О",
      "С",
      "Т",
      "Ю",
      "М",
      "Е",
      "Р"
    ],
    "cols": 9,
    "rows": 9,
    "words": [
      {
        "word": "КОСТЮМЕР",
        "x": 1,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "СМОТР",
        "x": 2,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "КРЕМ",
        "x": 8,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "ТРЕСК",
        "x": 1,
        "y": 8,
        "direction": "right"
      },
      {
        "word": "МЕСТО",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "МЕТРО",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КРЕСТ",
        "x": 0,
        "y": 2,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КРОТ",
      "МОРЕ",
      "МОСТ",
      "РЕСТ",
      "РОСТ",
      "СКОТ",
      "СТОК"
    ]
  },
  {
    "id": 70,
    "chapter": 7,
    "title": "Загадка «Остановка»",
    "letters": [
      "О",
      "С",
      "Т",
      "А",
      "Н",
      "О",
      "В",
      "К",
      "А"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "ОСТАНОВКА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ВАТА",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КАНТ",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОСА",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "НОТА",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КАНАТ",
        "x": 3,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "ТОСКА",
        "x": 0,
        "y": 2,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ОКНО",
      "СКАТ",
      "СКОТ",
      "СОВА",
      "СТОК",
      "ТАНК",
      "ВОСТОК"
    ]
  },
  {
    "id": 71,
    "chapter": 8,
    "title": "Загадка «Амфора»",
    "letters": [
      "А",
      "М",
      "Ф",
      "О",
      "Р",
      "А"
    ],
    "cols": 7,
    "rows": 7,
    "words": [
      {
        "word": "АМФОРА",
        "x": 1,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "РАМА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ФОРМА",
        "x": 4,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "МОРА",
        "x": 2,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ФАРА",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "МОР",
        "x": 4,
        "y": 5,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РОМ"
    ]
  },
  {
    "id": 72,
    "chapter": 8,
    "title": "Загадка «Минотавр»",
    "letters": [
      "М",
      "И",
      "Н",
      "О",
      "Т",
      "А",
      "В",
      "Р"
    ],
    "cols": 10,
    "rows": 8,
    "words": [
      {
        "word": "МИНОТАВР",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "АВТОР",
        "x": 3,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ВИТА",
        "x": 1,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ВИНО",
        "x": 6,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "АТОМ",
        "x": 3,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "НОРМА",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "МОТИВ",
        "x": 5,
        "y": 7,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ВОИН",
      "МАРТ",
      "МОРА",
      "НИВА",
      "НОРА",
      "НОТА",
      "РАНО"
    ]
  },
  {
    "id": 73,
    "chapter": 8,
    "title": "Загадка «Скульптор»",
    "letters": [
      "С",
      "К",
      "У",
      "Л",
      "Ь",
      "П",
      "Т",
      "О",
      "Р"
    ],
    "cols": 9,
    "rows": 8,
    "words": [
      {
        "word": "СКУЛЬПТОР",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "КРОТ",
        "x": 1,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "КОСТЬ",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "КУСТ",
        "x": 6,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "СПОРТ",
        "x": 8,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "СУРОК",
        "x": 2,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "КУПОЛ",
        "x": 3,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ЛОСЬ",
      "ПЛОТ",
      "ПОРТ",
      "ПОСТ",
      "ПРОК",
      "ПУТЬ",
      "РОСТ"
    ]
  },
  {
    "id": 74,
    "chapter": 8,
    "title": "Загадка «Акрополь»",
    "letters": [
      "А",
      "К",
      "Р",
      "О",
      "П",
      "О",
      "Л",
      "Ь"
    ],
    "cols": 9,
    "rows": 9,
    "words": [
      {
        "word": "АКРОПОЛЬ",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ОПОРА",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КОРА",
        "x": 1,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "ПОЛКА",
        "x": 2,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ПАРК",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПОКА",
        "x": 5,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "КОЛА",
        "x": 0,
        "y": 2,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ПОРА",
      "ПРОК",
      "КОРОЛЬ",
      "КОЛ",
      "ЛАК",
      "ОКО",
      "ПАК"
    ]
  },
  {
    "id": 75,
    "chapter": 8,
    "title": "Загадка «Колонна»",
    "letters": [
      "К",
      "О",
      "Л",
      "О",
      "Н",
      "Н",
      "А"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "КОЛОННА",
        "x": 2,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "КОЛА",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КАНОН",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОН",
        "x": 6,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ОКНО",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ЛОНА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КОЛ",
        "x": 5,
        "y": 6,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ЛАК",
      "ОКО"
    ]
  },
  {
    "id": 76,
    "chapter": 8,
    "title": "Загадка «Мифология»",
    "letters": [
      "М",
      "И",
      "Ф",
      "О",
      "Л",
      "О",
      "Г",
      "И",
      "Я"
    ],
    "cols": 11,
    "rows": 5,
    "words": [
      {
        "word": "МИФОЛОГИЯ",
        "x": 2,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ГОЛ",
        "x": 7,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ЛОМ",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "МИГ",
        "x": 9,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ИМЯ",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "МИЛО",
        "x": 0,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ЛЯГ",
        "x": 2,
        "y": 4,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "МИФ",
      "МОЛ"
    ]
  },
  {
    "id": 77,
    "chapter": 8,
    "title": "Загадка «Карман»",
    "letters": [
      "К",
      "А",
      "Р",
      "М",
      "А",
      "Н"
    ],
    "cols": 7,
    "rows": 9,
    "words": [
      {
        "word": "КАРМАН",
        "x": 1,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "МРАК",
        "x": 3,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "МАРКА",
        "x": 1,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "АРКА",
        "x": 5,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "МАНКА",
        "x": 1,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КАРА",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КРАН",
        "x": 0,
        "y": 1,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РАМА",
      "РАНА",
      "МАК",
      "РАК"
    ]
  },
  {
    "id": 78,
    "chapter": 8,
    "title": "Загадка «Романтика»",
    "letters": [
      "Р",
      "О",
      "М",
      "А",
      "Н",
      "Т",
      "И",
      "К",
      "А"
    ],
    "cols": 9,
    "rows": 8,
    "words": [
      {
        "word": "РОМАНТИКА",
        "x": 0,
        "y": 7,
        "direction": "right"
      },
      {
        "word": "КОРАН",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "МАНКА",
        "x": 1,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КРОНА",
        "x": 3,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "КОМАР",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КАРТА",
        "x": 7,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КАНАТ",
        "x": 2,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "МАРКА",
      "НИТКА",
      "НОРМА",
      "ТКАНИ",
      "АРКА",
      "АТОМ",
      "ИКРА"
    ]
  },
  {
    "id": 79,
    "chapter": 8,
    "title": "Загадка «Дорожник»",
    "letters": [
      "Д",
      "О",
      "Р",
      "О",
      "Ж",
      "Н",
      "И",
      "К"
    ],
    "cols": 11,
    "rows": 5,
    "words": [
      {
        "word": "ДОРОЖНИК",
        "x": 3,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ОДИН",
        "x": 3,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ДРОН",
        "x": 5,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ДИКО",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ОРИОН",
        "x": 9,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ОКНО",
        "x": 6,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "КИНО",
        "x": 7,
        "y": 4,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РОДНИК",
      "ДНО",
      "ДОК",
      "ДОН",
      "ЖИР",
      "КОД",
      "КОН"
    ]
  },
  {
    "id": 80,
    "chapter": 8,
    "title": "Загадка «Столица»",
    "letters": [
      "С",
      "Т",
      "О",
      "Л",
      "И",
      "Ц",
      "А"
    ],
    "cols": 7,
    "rows": 8,
    "words": [
      {
        "word": "СТОЛИЦА",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "АИСТ",
        "x": 1,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ЛИЦО",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ЛИСА",
        "x": 4,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "СИТО",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "СИЛА",
        "x": 3,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ЛИСТ",
        "x": 5,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "СТОЛ",
      "ЛИС",
      "ОСА"
    ]
  },
  {
    "id": 81,
    "chapter": 9,
    "title": "Загадка «Караоке»",
    "letters": [
      "К",
      "А",
      "Р",
      "А",
      "О",
      "К",
      "Е"
    ],
    "cols": 9,
    "rows": 6,
    "words": [
      {
        "word": "КАРАОКЕ",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "РЕКА",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КАРЕ",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КАРА",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОК",
        "x": 6,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "КОРА",
        "x": 8,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "АРКА",
        "x": 3,
        "y": 3,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РАК",
      "РОК"
    ]
  },
  {
    "id": 82,
    "chapter": 9,
    "title": "Загадка «Техника»",
    "letters": [
      "Т",
      "Е",
      "Х",
      "Н",
      "И",
      "К",
      "А"
    ],
    "cols": 7,
    "rows": 9,
    "words": [
      {
        "word": "ТЕХНИКА",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ТАНК",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "НИТКА",
        "x": 3,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ТКАНИ",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "НАТЕК",
        "x": 0,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "КАНТ",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "НИКА",
        "x": 2,
        "y": 1,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ТИНА",
      "АКТ",
      "КАТ",
      "КИТ",
      "НЕТ",
      "ТИК",
      "ХИТ"
    ]
  },
  {
    "id": 83,
    "chapter": 9,
    "title": "Загадка «Компьютер»",
    "letters": [
      "К",
      "О",
      "М",
      "П",
      "Ь",
      "Ю",
      "Т",
      "Е",
      "Р"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "КОМПЬЮТЕР",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КРОТ",
        "x": 8,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ПЕРО",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КРЕМ",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПОРТ",
        "x": 2,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "МЕТРО",
        "x": 6,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "МОРЕ",
        "x": 0,
        "y": 1,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ПРОК",
      "ЮМОР",
      "КОМ",
      "КОТ",
      "МОК",
      "МОР",
      "РОК"
    ]
  },
  {
    "id": 84,
    "chapter": 9,
    "title": "Загадка «Дракон»",
    "letters": [
      "Д",
      "Р",
      "А",
      "К",
      "О",
      "Н"
    ],
    "cols": 9,
    "rows": 5,
    "words": [
      {
        "word": "ДРАКОН",
        "x": 3,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КАДР",
        "x": 3,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "НАРОД",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОРА",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "КРОНА",
        "x": 3,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "КОРАН",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ДРОН",
        "x": 1,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "КРАН",
      "НАДО",
      "НАРД",
      "НОРА",
      "ОРДА",
      "РАНО",
      "ДАР"
    ]
  },
  {
    "id": 85,
    "chapter": 9,
    "title": "Загадка «Роботика»",
    "letters": [
      "Р",
      "О",
      "Б",
      "О",
      "Т",
      "И",
      "К",
      "А"
    ],
    "cols": 8,
    "rows": 9,
    "words": [
      {
        "word": "РОБОТИКА",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ТОКИО",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РОБОТ",
        "x": 3,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КОРОБ",
        "x": 6,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ОТРОК",
        "x": 1,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ТАБОР",
        "x": 3,
        "y": 7,
        "direction": "right"
      },
      {
        "word": "КОБРА",
        "x": 7,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "БИТА",
      "БОРТ",
      "БРАК",
      "БРАТ",
      "ИКРА",
      "КОРА",
      "КРАБ"
    ]
  },
  {
    "id": 86,
    "chapter": 9,
    "title": "Загадка «Самурай»",
    "letters": [
      "С",
      "А",
      "М",
      "У",
      "Р",
      "А",
      "Й"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "САМУРАЙ",
        "x": 1,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "МАЙ",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РАЙ",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "АУРА",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "САМ",
        "x": 3,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "САРАЙ",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "РАМА",
        "x": 0,
        "y": 4,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "УРА"
    ]
  },
  {
    "id": 87,
    "chapter": 9,
    "title": "Загадка «Киберпанк»",
    "letters": [
      "К",
      "И",
      "Б",
      "Е",
      "Р",
      "П",
      "А",
      "Н",
      "К"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "КИБЕРПАНК",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "РЕПКА",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КАРЕ",
        "x": 4,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КИРКА",
        "x": 0,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КИПА",
        "x": 0,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "БРАК",
        "x": 2,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ИКРА",
        "x": 6,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "КРАБ",
      "КРАН",
      "КРИК",
      "НИКА",
      "ПАРИ",
      "ПАРК",
      "ПЕНА"
    ]
  },
  {
    "id": 88,
    "chapter": 9,
    "title": "Загадка «Аниматор»",
    "letters": [
      "А",
      "Н",
      "И",
      "М",
      "А",
      "Т",
      "О",
      "Р"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "АНИМАТОР",
        "x": 1,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "НОРА",
        "x": 2,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "МАРТ",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "АТОМ",
        "x": 5,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "НОТА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "МОРА",
        "x": 7,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "НОРМА",
        "x": 1,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РАМА",
      "РАНА",
      "РАНО",
      "РАНТ",
      "РИТМ",
      "РОТА",
      "ТАРА"
    ]
  },
  {
    "id": 89,
    "chapter": 9,
    "title": "Загадка «Телефон»",
    "letters": [
      "Т",
      "Е",
      "Л",
      "Е",
      "Ф",
      "О",
      "Н"
    ],
    "cols": 10,
    "rows": 5,
    "words": [
      {
        "word": "ТЕЛЕФОН",
        "x": 1,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "НЕТ",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ФЛОТ",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ТОН",
        "x": 7,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ЛЕТО",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ЕНОТ",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ТЕЛО",
        "x": 0,
        "y": 1,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ФОН"
    ]
  },
  {
    "id": 90,
    "chapter": 9,
    "title": "Загадка «Планшет»",
    "letters": [
      "П",
      "Л",
      "А",
      "Н",
      "Ш",
      "Е",
      "Т"
    ],
    "cols": 9,
    "rows": 8,
    "words": [
      {
        "word": "ПЛАНШЕТ",
        "x": 2,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "НАЛЕТ",
        "x": 3,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ПЕНА",
        "x": 5,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ЛЕНТА",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПЛЕН",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ЛЕТА",
        "x": 1,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ПЛАН",
        "x": 1,
        "y": 4,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ТЕЛА",
      "НЕТ",
      "ПАН"
    ]
  },
  {
    "id": 91,
    "chapter": 10,
    "title": "Загадка «Ветерок»",
    "letters": [
      "В",
      "Е",
      "Т",
      "Е",
      "Р",
      "О",
      "К"
    ],
    "cols": 9,
    "rows": 6,
    "words": [
      {
        "word": "ВЕТЕРОК",
        "x": 2,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ВЕТЕР",
        "x": 3,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КОВЕР",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ВЕК",
        "x": 8,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ВОР",
        "x": 5,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "КРОВ",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "КРОТ",
        "x": 1,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "КОТ",
      "РЕВ",
      "РОВ",
      "РОК",
      "ТОК",
      "ТОР"
    ]
  },
  {
    "id": 92,
    "chapter": 10,
    "title": "Загадка «Прохлада»",
    "letters": [
      "П",
      "Р",
      "О",
      "Х",
      "Л",
      "А",
      "Д",
      "А"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "ПРОХЛАДА",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ПАРАД",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПАРА",
        "x": 7,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ПЛОД",
        "x": 1,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ПОРА",
        "x": 4,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ОРДА",
        "x": 5,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ЛАПА",
        "x": 4,
        "y": 7,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ПРАХ",
      "ХРАП",
      "ДАЛ",
      "ДАР",
      "ДОЛ",
      "ЛАД",
      "ОДА"
    ]
  },
  {
    "id": 93,
    "chapter": 10,
    "title": "Загадка «Подсолнух»",
    "letters": [
      "П",
      "О",
      "Д",
      "С",
      "О",
      "Л",
      "Н",
      "У",
      "Х"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "ПОДСОЛНУХ",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ПЛОД",
        "x": 5,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "СЛОН",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ХОЛОД",
        "x": 8,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "СНОП",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ПОХОД",
        "x": 4,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "СЛУХ",
        "x": 1,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ДНО",
      "ДОЛ",
      "ДОН",
      "ДУХ",
      "НОС",
      "ПОЛ",
      "ПУД"
    ]
  },
  {
    "id": 94,
    "chapter": 10,
    "title": "Загадка «Ромашки»",
    "letters": [
      "Р",
      "О",
      "М",
      "А",
      "Ш",
      "К",
      "И"
    ],
    "cols": 8,
    "rows": 9,
    "words": [
      {
        "word": "РОМАШКИ",
        "x": 1,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ИКРА",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "МОРА",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КОМА",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КОМАР",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "МРАК",
        "x": 1,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "КОРА",
        "x": 1,
        "y": 5,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "КОШМАР",
      "КОМ",
      "МАК",
      "МИР",
      "МОК",
      "МОР",
      "РАК"
    ]
  },
  {
    "id": 95,
    "chapter": 10,
    "title": "Загадка «Розмарин»",
    "letters": [
      "Р",
      "О",
      "З",
      "М",
      "А",
      "Р",
      "И",
      "Н"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "РОЗМАРИН",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "РАНО",
        "x": 4,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "НОРМА",
        "x": 0,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "МОРА",
        "x": 3,
        "y": 7,
        "direction": "right"
      },
      {
        "word": "ЗИМА",
        "x": 6,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "НОРА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ЗОНА",
        "x": 3,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "РОЗА",
      "МИР",
      "МОР",
      "НИЗ",
      "РАЗ",
      "РОМ"
    ]
  },
  {
    "id": 96,
    "chapter": 10,
    "title": "Загадка «Мелисса»",
    "letters": [
      "М",
      "Е",
      "Л",
      "И",
      "С",
      "С",
      "А"
    ],
    "cols": 8,
    "rows": 7,
    "words": [
      {
        "word": "МЕЛИССА",
        "x": 1,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ЛЕСА",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ЛЕС",
        "x": 6,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "СИЛА",
        "x": 5,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ЛИСА",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "ЛИС",
        "x": 5,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "САМИ",
        "x": 4,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "МЕЛ",
      "САМ",
      "СЕЛ"
    ]
  },
  {
    "id": 97,
    "chapter": 10,
    "title": "Загадка «Медаль»",
    "letters": [
      "М",
      "Е",
      "Д",
      "А",
      "Л",
      "Ь"
    ],
    "cols": 10,
    "rows": 6,
    "words": [
      {
        "word": "МЕДАЛЬ",
        "x": 2,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ЕДА",
        "x": 4,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ЛАД",
        "x": 6,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ЕЛЬ",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ДАЛЬ",
        "x": 6,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "МЕЛЬ",
        "x": 2,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ДАЛ",
        "x": 0,
        "y": 4,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ЛЕД",
      "МЕД",
      "МЕЛ"
    ]
  },
  {
    "id": 98,
    "chapter": 10,
    "title": "Загадка «Лепестки»",
    "letters": [
      "Л",
      "Е",
      "П",
      "Е",
      "С",
      "Т",
      "К",
      "И"
    ],
    "cols": 9,
    "rows": 8,
    "words": [
      {
        "word": "ЛЕПЕСТКИ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ЛИСТ",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПЕСК",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "СЕТИ",
        "x": 1,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "КЛЕСТ",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ПЛЕСК",
        "x": 4,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ПЕСКИ",
        "x": 4,
        "y": 6,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КИТ",
      "ЛЕС",
      "ЛИС",
      "СЕЛ",
      "СЕТ",
      "ТИК"
    ]
  },
  {
    "id": 99,
    "chapter": 10,
    "title": "Загадка «Виноград»",
    "letters": [
      "В",
      "И",
      "Н",
      "О",
      "Г",
      "Р",
      "А",
      "Д"
    ],
    "cols": 8,
    "rows": 7,
    "words": [
      {
        "word": "ВИНОГРАД",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ВОИН",
        "x": 1,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ВОДА",
        "x": 7,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ВИНО",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ВРАГ",
        "x": 3,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ГАРД",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "НАРОД",
        "x": 2,
        "y": 5,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ГОРА",
      "ГОРД",
      "ГОРН",
      "ГРАД",
      "ДВОР",
      "ДИВА",
      "ДИВО"
    ]
  },
  {
    "id": 100,
    "chapter": 10,
    "title": "Загадка «Трамвай»",
    "letters": [
      "Т",
      "Р",
      "А",
      "М",
      "В",
      "А",
      "Й"
    ],
    "cols": 7,
    "rows": 10,
    "words": [
      {
        "word": "ТРАМВАЙ",
        "x": 0,
        "y": 8,
        "direction": "right"
      },
      {
        "word": "РАМА",
        "x": 3,
        "y": 6,
        "direction": "down"
      },
      {
        "word": "ТРАВА",
        "x": 5,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ВАТА",
        "x": 3,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ТАРА",
        "x": 6,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ВРАТА",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "МАРТ",
        "x": 0,
        "y": 5,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "АРТ",
      "МАЙ",
      "МАТ",
      "РАЙ"
    ]
  },
  {
    "id": 101,
    "chapter": 11,
    "title": "Загадка «Перекат»",
    "letters": [
      "П",
      "Е",
      "Р",
      "Е",
      "К",
      "А",
      "Т"
    ],
    "cols": 7,
    "rows": 9,
    "words": [
      {
        "word": "ПЕРЕКАТ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "РЕПКА",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "КАРЕ",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РЕКА",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "РЕПА",
        "x": 1,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "ПАРК",
        "x": 0,
        "y": 8,
        "direction": "right"
      },
      {
        "word": "ПЕРА",
        "x": 5,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "АКТ",
      "АРТ",
      "КАТ",
      "ПАК",
      "ПАР",
      "РАК"
    ]
  },
  {
    "id": 102,
    "chapter": 11,
    "title": "Загадка «Радужка»",
    "letters": [
      "Р",
      "А",
      "Д",
      "У",
      "Ж",
      "К",
      "А"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "РАДУЖКА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КАРА",
        "x": 5,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КАДР",
        "x": 1,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "РУДА",
        "x": 5,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "АУРА",
        "x": 8,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "КУРА",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "АРКА",
        "x": 4,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РУКА",
      "УДАР",
      "ДАР",
      "ЖАР",
      "ЖУК",
      "РАД",
      "РАК"
    ]
  },
  {
    "id": 103,
    "chapter": 11,
    "title": "Загадка «Водоросль»",
    "letters": [
      "В",
      "О",
      "Д",
      "О",
      "Р",
      "О",
      "С",
      "Л",
      "Ь"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "ВОДОРОСЛЬ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "СЛОВО",
        "x": 0,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ВОР",
        "x": 4,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "СОЛЬ",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ДВОР",
        "x": 2,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ЛОСЬ",
        "x": 7,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ВОЛОС",
        "x": 1,
        "y": 5,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ДОЛ",
      "ЛОВ",
      "РОВ",
      "РОД"
    ]
  },
  {
    "id": 104,
    "chapter": 11,
    "title": "Загадка «Источник»",
    "letters": [
      "И",
      "С",
      "Т",
      "О",
      "Ч",
      "Н",
      "И",
      "К"
    ],
    "cols": 11,
    "rows": 7,
    "words": [
      {
        "word": "ИСТОЧНИК",
        "x": 3,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ЧИСТО",
        "x": 7,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ИСТОК",
        "x": 3,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ТИСКИ",
        "x": 5,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "СКОТ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "СИТО",
        "x": 9,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КИНО",
        "x": 1,
        "y": 3,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "СТОК",
      "КИТ",
      "КОН",
      "КОС",
      "КОТ",
      "НОС",
      "СОК"
    ]
  },
  {
    "id": 105,
    "chapter": 11,
    "title": "Загадка «Породистый»",
    "letters": [
      "П",
      "О",
      "Р",
      "О",
      "Д",
      "И",
      "С",
      "Т",
      "Ы",
      "Й"
    ],
    "cols": 10,
    "rows": 9,
    "words": [
      {
        "word": "ПОРОДИСТЫЙ",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ПОРТ",
        "x": 1,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ПРОСО",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ТОРОС",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "СПОРТ",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "СТРОЙ",
        "x": 5,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ТОПОР",
        "x": 7,
        "y": 4,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ПОСТ",
      "РОСТ",
      "СИТО",
      "СОТЫ",
      "СПОР",
      "СТОП",
      "ПРОСТО"
    ]
  },
  {
    "id": 106,
    "chapter": 11,
    "title": "Загадка «Автомобиль»",
    "letters": [
      "А",
      "В",
      "Т",
      "О",
      "М",
      "О",
      "Б",
      "И",
      "Л",
      "Ь"
    ],
    "cols": 10,
    "rows": 7,
    "words": [
      {
        "word": "АВТОМОБИЛЬ",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "АЛЬТ",
        "x": 8,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "МОТИВ",
        "x": 4,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "МОЛВА",
        "x": 1,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "ВИТА",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "БИТА",
        "x": 6,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "АТОМ",
        "x": 0,
        "y": 2,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ИЛЬМ",
      "ЛОТО",
      "МАЛО",
      "МИЛО",
      "АЛЬБОМ",
      "БАЛ",
      "ВАЛ"
    ]
  },
  {
    "id": 107,
    "chapter": 11,
    "title": "Загадка «Светофор»",
    "letters": [
      "С",
      "В",
      "Е",
      "Т",
      "О",
      "Ф",
      "О",
      "Р"
    ],
    "cols": 8,
    "rows": 9,
    "words": [
      {
        "word": "СВЕТОФОР",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "РОСТ",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "РЕСТ",
        "x": 3,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "СВЕТ",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "СОВЕТ",
        "x": 1,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ТОРОС",
        "x": 7,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ОВЕС",
        "x": 4,
        "y": 8,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ФОРТ",
      "ФОТО",
      "ОСТРОВ",
      "ВЕС",
      "ВОР",
      "РЕВ",
      "РОВ"
    ]
  },
  {
    "id": 108,
    "chapter": 11,
    "title": "Загадка «Миниатюра»",
    "letters": [
      "М",
      "И",
      "Н",
      "И",
      "А",
      "Т",
      "Ю",
      "Р",
      "А"
    ],
    "cols": 11,
    "rows": 6,
    "words": [
      {
        "word": "МИНИАТЮРА",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "РАНТ",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РИТМ",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "МИНИ",
        "x": 0,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "РАНА",
        "x": 8,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "РАМА",
        "x": 7,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "МАРТ",
        "x": 0,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ТАРА",
      "ТИНА",
      "АРТ",
      "МАТ",
      "МИР",
      "ТИР"
    ]
  },
  {
    "id": 109,
    "chapter": 11,
    "title": "Загадка «Планировка»",
    "letters": [
      "П",
      "Л",
      "А",
      "Н",
      "И",
      "Р",
      "О",
      "В",
      "К",
      "А"
    ],
    "cols": 10,
    "rows": 7,
    "words": [
      {
        "word": "ПЛАНИРОВКА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КАНАЛ",
        "x": 9,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОРАН",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ВИЛКА",
        "x": 4,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ВОЛНА",
        "x": 5,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "КОПНА",
        "x": 0,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КРОНА",
        "x": 4,
        "y": 5,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ЛАПКА",
      "ЛИАНА",
      "ПАЛКА",
      "ПОЛКА",
      "ПРАВО",
      "РОЛИК",
      "АРКА"
    ]
  },
  {
    "id": 110,
    "chapter": 11,
    "title": "Загадка «Материал»",
    "letters": [
      "М",
      "А",
      "Т",
      "Е",
      "Р",
      "И",
      "А",
      "Л"
    ],
    "cols": 10,
    "rows": 6,
    "words": [
      {
        "word": "МАТЕРИАЛ",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ЛАМА",
        "x": 6,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ЛАТА",
        "x": 3,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ЛЕТА",
        "x": 6,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ЛИРА",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ЛИТР",
        "x": 4,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "МАРТ",
        "x": 9,
        "y": 1,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "МЕРА",
      "МЕТА",
      "РАМА",
      "РИТМ",
      "ТАРА",
      "ТЕЛА",
      "ТЕМА"
    ]
  },
  {
    "id": 111,
    "chapter": 12,
    "title": "Загадка «Долина»",
    "letters": [
      "Д",
      "О",
      "Л",
      "И",
      "Н",
      "А"
    ],
    "cols": 7,
    "rows": 8,
    "words": [
      {
        "word": "ДОЛИНА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ЛОНА",
        "x": 1,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ОДИН",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ДНО",
        "x": 2,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ДОЛ",
        "x": 4,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "НАДО",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ДАЛ",
        "x": 2,
        "y": 5,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ДОН",
      "ЛАД",
      "ОДА"
    ]
  },
  {
    "id": 112,
    "chapter": 12,
    "title": "Загадка «Природа»",
    "letters": [
      "П",
      "Р",
      "И",
      "Р",
      "О",
      "Д",
      "А"
    ],
    "cols": 9,
    "rows": 6,
    "words": [
      {
        "word": "ПРИРОДА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ОРДА",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПОРА",
        "x": 1,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ДАР",
        "x": 6,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ПАРИ",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ОДА",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ПАР",
        "x": 3,
        "y": 1,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ПИР",
      "РАД",
      "РОД"
    ]
  },
  {
    "id": 113,
    "chapter": 12,
    "title": "Загадка «Папоротник»",
    "letters": [
      "П",
      "А",
      "П",
      "О",
      "Р",
      "О",
      "Т",
      "Н",
      "И",
      "К"
    ],
    "cols": 10,
    "rows": 9,
    "words": [
      {
        "word": "ПАПОРОТНИК",
        "x": 0,
        "y": 7,
        "direction": "right"
      },
      {
        "word": "КОРАН",
        "x": 1,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "НИТКА",
        "x": 9,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "КРОНА",
        "x": 1,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ОПОРА",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОПНА",
        "x": 7,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "КАПОТ",
        "x": 2,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ОРИОН",
      "ОТРОК",
      "ПИРАТ",
      "ПИТОН",
      "ПОТОК",
      "ТКАНИ",
      "ТОКИО"
    ]
  },
  {
    "id": 114,
    "chapter": 12,
    "title": "Загадка «Росинка»",
    "letters": [
      "Р",
      "О",
      "С",
      "И",
      "Н",
      "К",
      "А"
    ],
    "cols": 10,
    "rows": 8,
    "words": [
      {
        "word": "РОСИНКА",
        "x": 3,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "КРОНА",
        "x": 9,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ОСИНА",
        "x": 5,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КОРАН",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ИСКРА",
        "x": 3,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КИНО",
        "x": 2,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ИКРА",
        "x": 0,
        "y": 5,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КИСА",
      "КОРА",
      "КОСА",
      "КРАН",
      "НИКА",
      "НОРА",
      "РАНО"
    ]
  },
  {
    "id": 115,
    "chapter": 12,
    "title": "Загадка «Тропинка»",
    "letters": [
      "Т",
      "Р",
      "О",
      "П",
      "И",
      "Н",
      "К",
      "А"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "ТРОПИНКА",
        "x": 1,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "НИТКА",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОПНА",
        "x": 6,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КРОНА",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ПИРАТ",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "КАПОТ",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОРАН",
        "x": 1,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ПИТОН",
      "ТКАНИ",
      "ТРОПА",
      "ИКРА",
      "КАНТ",
      "КИНО",
      "КИПА"
    ]
  },
  {
    "id": 116,
    "chapter": 12,
    "title": "Загадка «Тростник»",
    "letters": [
      "Т",
      "Р",
      "О",
      "С",
      "Т",
      "Н",
      "И",
      "К"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "ТРОСТНИК",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ИСТОК",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "СИТО",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РОСТ",
        "x": 5,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КИНО",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "РИСК",
        "x": 5,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КРОТ",
        "x": 5,
        "y": 6,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "СКОТ",
      "СТОК",
      "ТОРТ",
      "ТРОН",
      "КИТ",
      "КОН",
      "КОС"
    ]
  },
  {
    "id": 117,
    "chapter": 12,
    "title": "Загадка «Кустарник»",
    "letters": [
      "К",
      "У",
      "С",
      "Т",
      "А",
      "Р",
      "Н",
      "И",
      "К"
    ],
    "cols": 9,
    "rows": 9,
    "words": [
      {
        "word": "КУСТАРНИК",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ТРАНС",
        "x": 3,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ТКАНИ",
        "x": 1,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "АИСТ",
        "x": 7,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ИСКРА",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "НИТКА",
        "x": 3,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "КИРКА",
        "x": 0,
        "y": 1,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ИКРА",
      "КАНТ",
      "КИСА",
      "КРАН",
      "КРИК",
      "КУРА",
      "КУСТ"
    ]
  },
  {
    "id": 118,
    "chapter": 12,
    "title": "Загадка «Пионерка»",
    "letters": [
      "П",
      "И",
      "О",
      "Н",
      "Е",
      "Р",
      "К",
      "А"
    ],
    "cols": 11,
    "rows": 5,
    "words": [
      {
        "word": "ПИОНЕРКА",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "КОРАН",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ОПЕРА",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "КРОНА",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ОКЕАН",
        "x": 6,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ОПЕКА",
        "x": 0,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "КОПНА",
        "x": 6,
        "y": 2,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РЕПКА",
      "ИКРА",
      "КАРЕ",
      "КИНО",
      "КИПА",
      "КОРА",
      "КРАН"
    ]
  },
  {
    "id": 119,
    "chapter": 12,
    "title": "Загадка «Малиновка»",
    "letters": [
      "М",
      "А",
      "Л",
      "И",
      "Н",
      "О",
      "В",
      "К",
      "А"
    ],
    "cols": 9,
    "rows": 9,
    "words": [
      {
        "word": "МАЛИНОВКА",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ЛИАНА",
        "x": 8,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ЛИМОН",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ВОЛНА",
        "x": 2,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "ВИЛКА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "МАНКА",
        "x": 0,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "КАНАЛ",
        "x": 4,
        "y": 2,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "МОЛВА",
      "ВИНО",
      "ВОИН",
      "ВОЛК",
      "КИНО",
      "КОЛА",
      "КОЛИ"
    ]
  },
  {
    "id": 120,
    "chapter": 12,
    "title": "Загадка «Постановка»",
    "letters": [
      "П",
      "О",
      "С",
      "Т",
      "А",
      "Н",
      "О",
      "В",
      "К",
      "А"
    ],
    "cols": 10,
    "rows": 8,
    "words": [
      {
        "word": "ПОСТАНОВКА",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ПАСТА",
        "x": 9,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КАПОТ",
        "x": 0,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ПОТОК",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КОПНА",
        "x": 5,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "СОПКА",
        "x": 5,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "КАНАТ",
        "x": 3,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "СТОПА",
      "ТОСКА",
      "ВАТА",
      "КАНТ",
      "КАПА",
      "КОСА",
      "НОТА"
    ]
  },
  {
    "id": 121,
    "chapter": 13,
    "title": "Загадка «Листопад»",
    "letters": [
      "Л",
      "И",
      "С",
      "Т",
      "О",
      "П",
      "А",
      "Д"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "ЛИСТОПАД",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "СТОПА",
        "x": 2,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ЛИСА",
        "x": 0,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ЛИСТ",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПЛИТА",
        "x": 2,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "АИСТ",
        "x": 2,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ПЛАТО",
        "x": 5,
        "y": 3,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ПИЛА",
      "ПЛОД",
      "ПЛОТ",
      "ПОСТ",
      "СИЛА",
      "СИТО",
      "СТОЛ"
    ]
  },
  {
    "id": 122,
    "chapter": 13,
    "title": "Загадка «Каштан»",
    "letters": [
      "К",
      "А",
      "Ш",
      "Т",
      "А",
      "Н"
    ],
    "cols": 7,
    "rows": 7,
    "words": [
      {
        "word": "КАШТАН",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ТАНК",
        "x": 1,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КАНАТ",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КАША",
        "x": 3,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "АКТ",
        "x": 4,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "КАНТ",
        "x": 1,
        "y": 6,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КАТ"
    ]
  },
  {
    "id": 123,
    "chapter": 13,
    "title": "Загадка «Корзина»",
    "letters": [
      "К",
      "О",
      "Р",
      "З",
      "И",
      "Н",
      "А"
    ],
    "cols": 10,
    "rows": 8,
    "words": [
      {
        "word": "КОРЗИНА",
        "x": 2,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ЗНАК",
        "x": 5,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "КОРАН",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ЗАКОН",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КРОНА",
        "x": 5,
        "y": 7,
        "direction": "right"
      },
      {
        "word": "ЗОНА",
        "x": 4,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ИКРА",
        "x": 0,
        "y": 6,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КИНО",
      "КОЗА",
      "КОРА",
      "КРАН",
      "НИКА",
      "НОРА",
      "РАНО"
    ]
  },
  {
    "id": 124,
    "chapter": 13,
    "title": "Загадка «Зонтик»",
    "letters": [
      "З",
      "О",
      "Н",
      "Т",
      "И",
      "К"
    ],
    "cols": 6,
    "rows": 8,
    "words": [
      {
        "word": "ЗОНТИК",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КОТ",
        "x": 5,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ЗОНТ",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КИНО",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КИТ",
        "x": 3,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "КОН",
        "x": 3,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "НИЗ",
        "x": 3,
        "y": 7,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ТИК",
      "ТОК",
      "ТОН"
    ]
  },
  {
    "id": 125,
    "chapter": 13,
    "title": "Загадка «Листва»",
    "letters": [
      "Л",
      "И",
      "С",
      "Т",
      "В",
      "А"
    ],
    "cols": 6,
    "rows": 9,
    "words": [
      {
        "word": "ЛИСТВА",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ЛИСТ",
        "x": 0,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "СЛИВА",
        "x": 5,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "АИСТ",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ВИТА",
        "x": 4,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "СИЛА",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ЛИСА",
        "x": 0,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ВАЛ",
      "ИВА",
      "ЛИС"
    ]
  },
  {
    "id": 126,
    "chapter": 13,
    "title": "Загадка «Кладовая»",
    "letters": [
      "К",
      "Л",
      "А",
      "Д",
      "О",
      "В",
      "А",
      "Я"
    ],
    "cols": 10,
    "rows": 7,
    "words": [
      {
        "word": "КЛАДОВАЯ",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "ВОДА",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КЛАД",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ВОЛК",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КОЛА",
        "x": 5,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ЛОДКА",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ДОЛЯ",
        "x": 6,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ЛАВА",
      "ВАЛ",
      "ДАЛ",
      "ДОК",
      "ДОЛ",
      "КОД",
      "КОЛ"
    ]
  },
  {
    "id": 127,
    "chapter": 13,
    "title": "Загадка «Сумерки»",
    "letters": [
      "С",
      "У",
      "М",
      "Е",
      "Р",
      "К",
      "И"
    ],
    "cols": 8,
    "rows": 7,
    "words": [
      {
        "word": "СУМЕРКИ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "РИСК",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "МИР",
        "x": 2,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КРЕМ",
        "x": 4,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "РИС",
        "x": 0,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КУМИР",
        "x": 6,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "СУК"
    ]
  },
  {
    "id": 128,
    "chapter": 13,
    "title": "Загадка «Грибок»",
    "letters": [
      "Г",
      "Р",
      "И",
      "Б",
      "О",
      "К"
    ],
    "cols": 6,
    "rows": 7,
    "words": [
      {
        "word": "ГРИБОК",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "РОБ",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РОГ",
        "x": 3,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "БОР",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ИГРОК",
        "x": 2,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ГРИБ",
        "x": 1,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "БОК",
        "x": 4,
        "y": 4,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "РОК"
    ]
  },
  {
    "id": 129,
    "chapter": 13,
    "title": "Загадка «Октябрь»",
    "letters": [
      "О",
      "К",
      "Т",
      "Я",
      "Б",
      "Р",
      "Ь"
    ],
    "cols": 10,
    "rows": 5,
    "words": [
      {
        "word": "ОКТЯБРЬ",
        "x": 2,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "БОР",
        "x": 2,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "КРОТ",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "БОРТ",
        "x": 7,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КОТ",
        "x": 4,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "РОБ",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "БОК",
        "x": 7,
        "y": 1,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "РОК",
      "ТОК",
      "ТОР"
    ]
  },
  {
    "id": 130,
    "chapter": 13,
    "title": "Загадка «Кленовый»",
    "letters": [
      "К",
      "Л",
      "Е",
      "Н",
      "О",
      "В",
      "Ы",
      "Й"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "КЛЕНОВЫЙ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ВОЛК",
        "x": 5,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ВЕЛО",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ВЕНОК",
        "x": 2,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "КЛЕН",
        "x": 0,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ЛЫКО",
        "x": 5,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ВЕК",
        "x": 4,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КОЛ",
      "КОН",
      "ЛЕВ",
      "ЛОВ"
    ]
  },
  {
    "id": 131,
    "chapter": 14,
    "title": "Загадка «Луноход»",
    "letters": [
      "Л",
      "У",
      "Н",
      "О",
      "Х",
      "О",
      "Д"
    ],
    "cols": 7,
    "rows": 7,
    "words": [
      {
        "word": "ЛУНОХОД",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ДНО",
        "x": 6,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ХОЛОД",
        "x": 4,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ДУХ",
        "x": 4,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "УХО",
        "x": 2,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ДОЛ",
        "x": 0,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ДОН",
        "x": 2,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ХОД"
    ]
  },
  {
    "id": 132,
    "chapter": 14,
    "title": "Загадка «Корабль»",
    "letters": [
      "К",
      "О",
      "Р",
      "А",
      "Б",
      "Л",
      "Ь"
    ],
    "cols": 10,
    "rows": 7,
    "words": [
      {
        "word": "КОРАБЛЬ",
        "x": 3,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КОЛА",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОЛБА",
        "x": 4,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "КОРА",
        "x": 6,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "БЛОК",
        "x": 7,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КОБРА",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "БРАК",
        "x": 0,
        "y": 3,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "КРАБ",
      "БАК",
      "БАЛ",
      "БАР",
      "БОК",
      "БОР",
      "КОЛ"
    ]
  },
  {
    "id": 133,
    "chapter": 14,
    "title": "Загадка «Рыбалка»",
    "letters": [
      "Р",
      "Ы",
      "Б",
      "А",
      "Л",
      "К",
      "А"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "РЫБАЛКА",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "АРАБ",
        "x": 6,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "БРАК",
        "x": 4,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "РЫБКА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "БАЛКА",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "БАРКА",
        "x": 1,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "АРКА",
        "x": 1,
        "y": 4,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КАРА",
      "КРАБ",
      "РЫБА",
      "БАК",
      "БАЛ",
      "БАР",
      "ЛАК"
    ]
  },
  {
    "id": 134,
    "chapter": 14,
    "title": "Загадка «Горизонт»",
    "letters": [
      "Г",
      "О",
      "Р",
      "И",
      "З",
      "О",
      "Н",
      "Т"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "ГОРИЗОНТ",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "ИТОГ",
        "x": 0,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ГОРН",
        "x": 2,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ОРИОН",
        "x": 5,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ТОРГ",
        "x": 4,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ЗОНТ",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ТИГР",
        "x": 0,
        "y": 4,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ТРОН",
      "НИЗ",
      "РОГ",
      "ТИР",
      "ТОН",
      "ТОР"
    ]
  },
  {
    "id": 135,
    "chapter": 14,
    "title": "Загадка «Ракета»",
    "letters": [
      "Р",
      "А",
      "К",
      "Е",
      "Т",
      "А"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "РАКЕТА",
        "x": 1,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "РЕКА",
        "x": 2,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КАРТА",
        "x": 5,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КАРЕ",
        "x": 4,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "КАРА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ТАРА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "АРКА",
        "x": 1,
        "y": 1,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "АКТ",
      "АРТ",
      "КАТ",
      "РАК"
    ]
  },
  {
    "id": 136,
    "chapter": 14,
    "title": "Загадка «Матрос»",
    "letters": [
      "М",
      "А",
      "Т",
      "Р",
      "О",
      "С"
    ],
    "cols": 9,
    "rows": 8,
    "words": [
      {
        "word": "МАТРОС",
        "x": 0,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "МАРТ",
        "x": 0,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "МОСТ",
        "x": 5,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "РОСА",
        "x": 0,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "МОРА",
        "x": 5,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "СМОТР",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "АТОМ",
        "x": 8,
        "y": 2,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "РОСТ",
      "РОТА",
      "АРТ",
      "МАТ",
      "МОР",
      "ОСА",
      "РОМ"
    ]
  },
  {
    "id": 137,
    "chapter": 14,
    "title": "Загадка «Пароход»",
    "letters": [
      "П",
      "А",
      "Р",
      "О",
      "Х",
      "О",
      "Д"
    ],
    "cols": 9,
    "rows": 6,
    "words": [
      {
        "word": "ПАРОХОД",
        "x": 2,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ОПОРА",
        "x": 5,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ХРАП",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ОРДА",
        "x": 8,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ПОХОД",
        "x": 0,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ПРАХ",
        "x": 3,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ПОРА",
        "x": 0,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ДАР",
      "ОДА",
      "ПАР",
      "РАД",
      "РОД",
      "ХОД",
      "ХОР"
    ]
  },
  {
    "id": 138,
    "chapter": 14,
    "title": "Загадка «Фарватер»",
    "letters": [
      "Ф",
      "А",
      "Р",
      "В",
      "А",
      "Т",
      "Е",
      "Р"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "ФАРВАТЕР",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ВРАТА",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ФЕТА",
        "x": 0,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ТРАВА",
        "x": 1,
        "y": 7,
        "direction": "right"
      },
      {
        "word": "ФАРА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ВАТА",
        "x": 0,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ТАРА",
        "x": 2,
        "y": 5,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "АРТ",
      "РЕВ"
    ]
  },
  {
    "id": 139,
    "chapter": 14,
    "title": "Загадка «Комната»",
    "letters": [
      "К",
      "О",
      "М",
      "Н",
      "А",
      "Т",
      "А"
    ],
    "cols": 7,
    "rows": 8,
    "words": [
      {
        "word": "КОМНАТА",
        "x": 0,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "НОТА",
        "x": 5,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КАНТ",
        "x": 3,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "АТОМ",
        "x": 1,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "КОМА",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КАНАТ",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "МАНКА",
        "x": 1,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ТАНК",
      "АКТ",
      "КАТ",
      "КОМ",
      "КОН",
      "КОТ",
      "МАК"
    ]
  },
  {
    "id": 140,
    "chapter": 14,
    "title": "Загадка «Заморозка»",
    "letters": [
      "З",
      "А",
      "М",
      "О",
      "Р",
      "О",
      "З",
      "К",
      "А"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "ЗАМОРОЗКА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "КАРА",
        "x": 1,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "КОМАР",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "МАРКА",
        "x": 8,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "АРКА",
        "x": 5,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "ЗАМОК",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "МОРОЗ",
        "x": 1,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КОЗА",
      "КОМА",
      "КОРА",
      "МОРА",
      "МРАК",
      "РАМА",
      "РОЗА"
    ]
  },
  {
    "id": 141,
    "chapter": 15,
    "title": "Загадка «Облако»",
    "letters": [
      "О",
      "Б",
      "Л",
      "А",
      "К",
      "О"
    ],
    "cols": 10,
    "rows": 5,
    "words": [
      {
        "word": "ОБЛАКО",
        "x": 2,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "БАК",
        "x": 5,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КОЛА",
        "x": 2,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "БЛОК",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "БОК",
        "x": 7,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "КОЛБА",
        "x": 9,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "БАЛ",
        "x": 0,
        "y": 3,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КОЛ",
      "ЛАК",
      "ЛОБ",
      "ОБА",
      "ОКО"
    ]
  },
  {
    "id": 142,
    "chapter": 15,
    "title": "Загадка «Небосвод»",
    "letters": [
      "Н",
      "Е",
      "Б",
      "О",
      "С",
      "В",
      "О",
      "Д"
    ],
    "cols": 9,
    "rows": 7,
    "words": [
      {
        "word": "НЕБОСВОД",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ОВЕС",
        "x": 1,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ОБОД",
        "x": 6,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ОБЕД",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ДНО",
        "x": 6,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "ВЕС",
        "x": 4,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "СЕНО",
        "x": 3,
        "y": 5,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ДОН",
      "НОС",
      "СОН"
    ]
  },
  {
    "id": 143,
    "chapter": 15,
    "title": "Загадка «Парение»",
    "letters": [
      "П",
      "А",
      "Р",
      "Е",
      "Н",
      "И",
      "Е"
    ],
    "cols": 8,
    "rows": 7,
    "words": [
      {
        "word": "ПАРЕНИЕ",
        "x": 1,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ПАР",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПЕРА",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПАН",
        "x": 3,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ПАРИ",
        "x": 3,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "РЕПА",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ПЕНА",
        "x": 0,
        "y": 4,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ПИР"
    ]
  },
  {
    "id": 144,
    "chapter": 15,
    "title": "Загадка «Стрекоза»",
    "letters": [
      "С",
      "Т",
      "Р",
      "Е",
      "К",
      "О",
      "З",
      "А"
    ],
    "cols": 9,
    "rows": 8,
    "words": [
      {
        "word": "СТРЕКОЗА",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ОЗЕРА",
        "x": 2,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РЕЗАК",
        "x": 7,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КРЕСТ",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ТОСКА",
        "x": 0,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "КАРЕ",
        "x": 5,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "ТРЕСК",
        "x": 1,
        "y": 6,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КОЗА",
      "КОРА",
      "КОСА",
      "КРОТ",
      "РЕКА",
      "РЕСТ",
      "РОЗА"
    ]
  },
  {
    "id": 145,
    "chapter": 15,
    "title": "Загадка «Балкон»",
    "letters": [
      "Б",
      "А",
      "Л",
      "К",
      "О",
      "Н"
    ],
    "cols": 8,
    "rows": 7,
    "words": [
      {
        "word": "БАЛКОН",
        "x": 1,
        "y": 0,
        "direction": "right"
      },
      {
        "word": "БЛОК",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "КОЛБА",
        "x": 4,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "БАЛ",
        "x": 3,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "БАК",
        "x": 3,
        "y": 4,
        "direction": "down"
      },
      {
        "word": "ЛОНА",
        "x": 4,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "КОЛА",
        "x": 0,
        "y": 5,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "БОК",
      "КОЛ",
      "КОН",
      "ЛАК",
      "ЛОБ",
      "ОБА"
    ]
  },
  {
    "id": 146,
    "chapter": 15,
    "title": "Загадка «Солнечный»",
    "letters": [
      "С",
      "О",
      "Л",
      "Н",
      "Е",
      "Ч",
      "Н",
      "Ы",
      "Й"
    ],
    "cols": 9,
    "rows": 6,
    "words": [
      {
        "word": "СОЛНЕЧНЫЙ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "СЛОЙ",
        "x": 8,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "СЕЛО",
        "x": 4,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ЛЕС",
        "x": 2,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "СЕНО",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "СЛОН",
        "x": 6,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ЧЕЛО",
        "x": 0,
        "y": 1,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "НОС",
      "СЕЛ",
      "СОН"
    ]
  },
  {
    "id": 147,
    "chapter": 15,
    "title": "Загадка «Садовник»",
    "letters": [
      "С",
      "А",
      "Д",
      "О",
      "В",
      "Н",
      "И",
      "К"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "САДОВНИК",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "ДИВА",
        "x": 2,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ОСИНА",
        "x": 6,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "САДИК",
        "x": 0,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ВОИН",
        "x": 4,
        "y": 3,
        "direction": "down"
      },
      {
        "word": "ВИНО",
        "x": 3,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "ВОДА",
        "x": 1,
        "y": 0,
        "direction": "down"
      }
    ],
    "bonusWords": [
      "ДИВО",
      "ДИКО",
      "КИНО",
      "КИСА",
      "КОСА",
      "НАДО",
      "НИВА"
    ]
  },
  {
    "id": 148,
    "chapter": 15,
    "title": "Загадка «Радость»",
    "letters": [
      "Р",
      "А",
      "Д",
      "О",
      "С",
      "Т",
      "Ь"
    ],
    "cols": 9,
    "rows": 6,
    "words": [
      {
        "word": "РАДОСТЬ",
        "x": 0,
        "y": 3,
        "direction": "right"
      },
      {
        "word": "РОТА",
        "x": 1,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РОСТ",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "РОСА",
        "x": 3,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "РАТЬ",
        "x": 2,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "ОРДА",
        "x": 5,
        "y": 1,
        "direction": "right"
      },
      {
        "word": "АРТ",
        "x": 0,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ДАР",
      "ОДА",
      "ОСА",
      "РАД",
      "РОД",
      "САД",
      "ТОР"
    ]
  },
  {
    "id": 149,
    "chapter": 15,
    "title": "Загадка «Счастье»",
    "letters": [
      "С",
      "Ч",
      "А",
      "С",
      "Т",
      "Ь",
      "Е"
    ],
    "cols": 8,
    "rows": 8,
    "words": [
      {
        "word": "СЧАСТЬЕ",
        "x": 1,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "ЧЕТА",
        "x": 2,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "СЕТЬ",
        "x": 5,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "ЧАСТЬ",
        "x": 1,
        "y": 5,
        "direction": "right"
      },
      {
        "word": "СЕТ",
        "x": 3,
        "y": 5,
        "direction": "down"
      },
      {
        "word": "ЧЕСТЬ",
        "x": 0,
        "y": 7,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "ЧАС"
    ]
  },
  {
    "id": 150,
    "chapter": 15,
    "title": "Загадка «Странник»",
    "letters": [
      "С",
      "Т",
      "Р",
      "А",
      "Н",
      "Н",
      "И",
      "К"
    ],
    "cols": 8,
    "rows": 7,
    "words": [
      {
        "word": "СТРАННИК",
        "x": 0,
        "y": 2,
        "direction": "right"
      },
      {
        "word": "НИТКА",
        "x": 5,
        "y": 2,
        "direction": "down"
      },
      {
        "word": "ИСКРА",
        "x": 0,
        "y": 1,
        "direction": "down"
      },
      {
        "word": "ТКАНИ",
        "x": 3,
        "y": 0,
        "direction": "down"
      },
      {
        "word": "АИСТ",
        "x": 2,
        "y": 4,
        "direction": "right"
      },
      {
        "word": "ИКРА",
        "x": 2,
        "y": 6,
        "direction": "right"
      },
      {
        "word": "ТРАНС",
        "x": 3,
        "y": 0,
        "direction": "right"
      }
    ],
    "bonusWords": [
      "КАНТ",
      "КИСА",
      "КРАН",
      "НИКА",
      "НИНА",
      "РАНТ",
      "РИСК"
    ]
  }
]);
