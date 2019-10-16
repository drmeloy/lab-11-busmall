export const compare = (array, choiceID) => {
    for (let i = 0; i < array.length; i++) {
        const choice = array[i];
        if (choice.id === choiceID) {
            return choice;
        }
    }
    return null;
};