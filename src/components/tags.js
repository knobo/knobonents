
let id = 0;

export const newTag = (name) => ({name: name, id: id++});

export default newTag;

