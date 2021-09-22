# Project Overview

[PokéApps](https://bri-gonzalez.github.io/PokeApps/)

## Project Name

I Choose You

## Project Description

This app will allow a user to choose their starter Pokémon so they can begin their journey as a trainer.
The user will select one of 3 Poké Balls. The Poké Balls will be labeled by element type: grass, fire, and water. Once the user selects the element type they want, the app will generate back a random Pokémon name and image of that type.

## API and Data Sample

[PokeAPI](https://pokeapi.co/)

```{
  "id": 12,
  "name": "butterfree",
  "base_experience": 178,
  "height": 11,
  "is_default": true,
  "order": 16,
  "weight": 320,
  "abilities": [
    {
      "is_hidden": true,
      "slot": 3,
      "ability": {
        "name": "tinted-lens",
        "url": "https://pokeapi.co/api/v2/ability/110/"
      }
    }
  ],
  "forms": [
    {
      "name": "butterfree",
      "url": "https://pokeapi.co/api/v2/pokemon-form/12/"
    }
  ],
  "game_indices": [
    {
      "game_index": 12,
      "version": {
        "name": "white-2",
        "url": "https://pokeapi.co/api/v2/version/22/"
      }
    }
  ],
  "held_items": [
    {
      "item": {
        "name": "silver-powder",
        "url": "https://pokeapi.co/api/v2/item/199/"
      },
      "version_details": [
        {
          "rarity": 5,
          "version": {
            "name": "y",
            "url": "https://pokeapi.co/api/v2/version/24/"
          }
        }
      ]
    }
  ],
  "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/12/encounters",
  "moves": [
    {
      "move": {
        "name": "flash",
        "url": "https://pokeapi.co/api/v2/move/148/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          },
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          }
        }
      ]
    }
  ],
  "species": {
    "name": "butterfree",
    "url": "https://pokeapi.co/api/v2/pokemon-species/12/"
  },
  "sprites": {
    "back_female": "http://pokeapi.co/media/sprites/pokemon/back/female/12.png",
    "back_shiny_female": "http://pokeapi.co/media/sprites/pokemon/back/shiny/female/12.png",
    "back_default": "http://pokeapi.co/media/sprites/pokemon/back/12.png",
    "front_female": "http://pokeapi.co/media/sprites/pokemon/female/12.png",
    "front_shiny_female": "http://pokeapi.co/media/sprites/pokemon/shiny/female/12.png",
    "back_shiny": "http://pokeapi.co/media/sprites/pokemon/back/shiny/12.png",
    "front_default": "http://pokeapi.co/media/sprites/pokemon/12.png",
    "front_shiny": "http://pokeapi.co/media/sprites/pokemon/shiny/12.png",
    "other": {
      "dream_world": {},
      "official-artwork": {}
    },
    "versions": {
      "generation-i": {
        "red-blue": {},
        "yellow": {}
      },
      "generation-ii": {
        "crystal": {},
        "gold": {},
        "silver": {}
      },
      "generation-iii": {
        "emerald": {},
        "firered-leafgreen": {},
        "ruby-sapphire": {}
      },
      "generation-iv": {
        "diamond-pearl": {},
        "heartgold-soulsilver": {},
        "platinum": {}
      },
      "generation-v": {
        "black-white": {}
      },
      "generation-vi": {
        "omegaruby-alphasapphire": {},
        "x-y": {}
      },
      "generation-vii": {
        "icons": {},
        "ultra-sun-ultra-moon": {}
      },
      "generation-viii": {
        "icons": {}
      }
    }
  },
  "stats": [
    {
      "base_stat": 70,
      "effort": 0,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    }
  ],
  "types": [
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ]
}
```

## Wireframes

![wireframe](https://res.cloudinary.com/dfryxohde/image/upload/v1630329431/Screen_Shot_2021-08-30_at_7.47.10_AM_xnz0pa.png)

### MVP/PostMVP

#### MVP

- Use the PokeAPI to return the names and sprites of different Pokémon
- Render data on page
- Allow user to select a Poké Ball button by element type (Fire, Grass or Water), and then get back a Pokémon name and sprite for the element type selected

#### PostMVP

- Add a "PokéSearch" page:

  - Build a Pokédex
  - Allow user to search for a specific Pokémon and get back that Pokémon's data (name, picture, ID, type, height, weight, and base stats)
  - After user has searched a Pokémon, allow user to click left or right button to view the next Pokémon or previous based on index number
  - User will be able to favorite and save Pokémon

- Add a "Home" page where user can go between the apps "I Choose You" and "PokéResearch"

## Project Schedule

| Day            | Deliverable                                                  | Status   |
| -------------- | ------------------------------------------------------------ | -------- |
| August 27 - 29 | Prompt / Wireframes / Priority Matrix / Timeframes           | Complete |
| August 30      | Project Approval/ Core Application Structure (HTML, CSS, JS) | Complete |
| August 31      | Pseudocode / Actual Code                                     | Complete |
| September 1    | CSS Styling                                                  | Complete |
| September 2    | Complete MVP                                                 | Complete |
| Septmeber 3    | Presentations                                                | Complete |

## Priority Matrix

![Matrix](https://res.cloudinary.com/dfryxohde/image/upload/v1630329445/Priority_Matrix_1_kl8qks.jpg)

## Timeframes

| Component                                                | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Basic HTML Structure                                     |    H     |      2hrs      |      1hr      |     1hr     |
| CSS Classes & IDs                                        |    H     |      1hr       |      1hr      |     1hr     |
| Setting Variables/Query Selecting/Adding Event Listeners |    H     |      2hrs      |      2hr      |     2hr     |
| Logic for randomizing data from API                      |    H     |      4hrs      |     3hrs      |    3hrs     |
| Getting specific data from API and then randomizing it   |    H     |      5hrs      |     4hrs      |    4hrs     |
| Appending Variables to Page                              |    H     |      1hr       |      1hr      |     1hr     |
| Removing Old to Append New Output                        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Complete HTML                                            |    H     |      2hrs      |     2hrs      |    2hrs     |
| CSS Style Header and Instructions                        |    M     |      3hrs      |     2hrs      |    2hrs     |
| CSS Style Buttons                                        |    M     |      3hrs      |     2hrs      |    2hrs     |
| CSS Animate Buttons                                      |    L     |      3hrs      |     4hrs      |    4hrs     |
| CSS Create Pokémon Container                             |    H     |      2hrs      |      1hr      |     1hr     |
| CSS Style Pokémon Container Components                   |    M     |      3hrs      |     4hrs      |    4hrs     |
| CSS Style Background                                     |    L     |      2hrs      |      3hr      |     3hr     |
| CSS Style Fonts/Colors                                   |    L     |      2hrs      |     3hrs      |    3hrs     |
| Media Query App                                          |    H     |      2hrs      |     2hrs      |    2hrs     |
| Total                                                    |          |     40hrs      |     51hrs     |    39hrs    |

| Component                                                | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Post MVP - Basic HTML & CSS for PokeDex                  |    L     |      1hrs      |      1hr      |     1hr     |
| Post MVP - Creating Usable Search Function               |    L     |      3hrs      |      1hr      |     1hr     |
| Post MVP - Appending All Variables to Page               |    L     |      2hrs      |      2hr      |     2hr     |
| Post MVP - CSS Style Pokedex                             |    L     |      2hrs      |      2hr      |     2hr     |
| Post MVP - CSS Style Pokedex Page                        |    L     |      2hrs      |      3hr      |     3hr     |
| Post MVP - Create Home Page HTML                         |    L     |     30 min     |     30min     |    30min    |
| Post MVP - Link I Choose You and PokeSearch to Home Page |    L     |     30 min     |     30min     |    30min    |
| Post MVP - CSS Style Home Page                           |    L     |      1hr       |     3hrs      |    3hrs     |
| Post MVP - Create Links on I Choose You & PokeSearch     |    L     |      1hr       |      1hr      |     1hr     |
| Total                                                    |          |     13hrs      |     14hrs     |    14hrs    |

## Code Snippet

This code takes specific Pokémon IDs, randomizes them by index, and then assigns the random index number back to a Pokémon ID within the grassType array.

```
let grassType = [810, 495, 650, 722, 387, 152, 252, 1];
  let randomGrass = Math.floor(Math.random() * grassType.length);
  let randomPokemonID = grassType[randomGrass];
```

## Change Log

I decided to change the look of the pages. My original wireframe of I Choose You was white with red accents. Once I started the post MVP and made multiple webpages for this site, I felt that the red with white background was too plain and I wanted to create a color scheme that would be used throughout the website, yet make each page unique.
