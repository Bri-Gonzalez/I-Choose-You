# Project Overview

## Project Name

I Choose You

## Project Description

This app will allow a user to choose their starter Pokemon so they can begin their journey as a trainer.
The user will select one of 3 pokeballs. The Pokeballs will be labeled by element type: grass, fire, and water. Once the user selects the element type they want, the app will generate back a random Pokemon name and image of that type.

## API and Data Sample

[PokeAPI](https://pokeapi.co/)

JSON 
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
![wireframe](wireframe1.png)


### MVP/PostMVP

#### MVP 

- Use the PokeAPI to return the names and sprites of different Pokemon
- Render data on page 
- Allow user to select a Pokeball button by element type (Fire, Grass or Water), and then get back a Pokemon name and sprite for the element type selected

#### PostMVP  

- Create a Home page where user chooses to "Select their starter Pokemon" or "Catch Pokemon"
- Add a "Catch Pokemon" page:

   * User will click a button to get back randomly generated Pokemon with the Pokemon's name and sprite 
   * User will be able to decide whether to "catch" the Pokemon or "set it free"
   * Save the caught Pokemon

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 27 - 29| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 30| Project Approval/ Core Application Structure (HTML, CSS, JS) | Incomplete
|August 31| Pseudocode / Actual Code | Incomplete
|September 1| CSS Styling | Incomplete
|September 2| Complete MVP | Incomplete
|Septmeber 3| Presentations | Incomplete 

## Priority Matrix
![Matrix](matrix.png)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML Structure | H | 2hrs | - | - |
| CSS Classes & IDs | H | 2hrs | - | - |
| Setting Variables/Query Selecting/Adding Event Listeners | H | 2hrs| - | - |
| Logic for randomizing data from API  | H | 5hrs| - | - |
| Getting specific data from API and then randomizing it | H | 5hrs| - | - |
| Appending Variables to Page | H | 2hrs | - | - |
| Building HTML components | H | 3hrs| - | - |
| CSS Style Header and Instructions | M | 4hrs| - | - |
| CSS Style Buttons | M | 5hrs| - | - |
| CSS Style Pokemon Container | M | 5hrs| - | - |
| CSS Style Background | L | 4hrs| - | - |
| CSS Style Fonts/Colors | L | 2hrs| - | - |
| Media Query App | H | 4hrs| - | - |
| Total |  | 45hrs | - | - |

## Code Snippet

This code takes specific Pokemon IDs, randomizes them by index, and then assigns the random index back to a Pokemon ID within the fireType array. This piece of code allows me to grab a random Pokemon of a specific type. I wouldn't have been able to do this straight from the API.  

```
let fireType = [4, 25, 37, 58, 77, 126];
  let randomFire = Math.floor(Math.random() * fireType.length);
  let randomPokemonID = fireType[randomFire];
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
