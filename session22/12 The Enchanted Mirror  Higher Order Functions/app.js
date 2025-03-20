function magicMirror(message, transformFunction){
    const transrmedMessage = transformFunction(message)
    return `The mirror says: ${transrmedMessage}`
}

console.log(magicMirror("Will I be rich?", str => str.toUpperCase()));
