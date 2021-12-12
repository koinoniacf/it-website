export async function onRequestGet(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;
    try {
      console.log(env)
      var respond = respond + "env: " + env + "\n"
      var respond = respond + "env.: " + env.RebrandlyWorkspace + "\n"
      //var respond = respond + "test-key: " + (await env.tasks.get("test-key")) + "\n"
        return new Response(respond);
    } catch (error) {
      console.log(error)
      return new Response(error);
    }

  }