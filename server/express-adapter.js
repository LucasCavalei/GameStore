const expressAdapter = (router) => {
  return async (req, res) => {
    const httpRequest = {
      body: req.body,
    };
    const httpResponse = await router.execute(httpRequest);
    // console.log("sou response do adpter", httpResponse);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};

export { expressAdapter };
