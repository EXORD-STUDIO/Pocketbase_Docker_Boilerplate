routerAdd("GET", "/hello/:name", (c) => {
  let name = c.pathParam("name")

  return c.json(200, { "message": "Hello " + name })
})

onModelAfterUpdate((e) => {
  console.log("user updated...", e.model.get("email"))
}, "users")