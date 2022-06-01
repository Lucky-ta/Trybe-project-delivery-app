const UseController = (req, res) => {
    const answer = await UserService.login(req.body);
    return answer;
};
