const generateSlots = (limit) => Array.from({ length: limit }).map((_, key) => ({ id: key }));

export default generateSlots;
