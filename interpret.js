var interpret = function(command) {
    let a = command.split("()").join("o");
    a = a.split("(").join("");
    a = a.split(")").join("");
    return a
};
