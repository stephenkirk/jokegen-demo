
# Retrieve a list of available categories.

- Two options - use this dynamically or just "encode" it
- Since we don't "own" the API, we assume categories can change over time (we don't have control over them)

https://api.chucknorris.io/jokes/categories

# Interaction model
Page has:
- Dropdown ("Category") alt list of buttons
- Button ("Generate")

# Interaction model and endpoints
(or: "how I want this to work")

- `GET https://api.chucknorris.io/jokes/random` if no category
- `GET  https://api.chucknorris.io/jokes/random?category={category}` if category set
- Dropdown values (categories) fetched dynamically from API
