export const create = async (model, data) => {
  try {
    return await model.create(data);
  } catch (err) {
    return err;
  }
};
export const read = async (model, data = {}) => {
  try {
    if (data && data.id) return await model.findOne(data);
    return await model.find(data);
  } catch (err) {
    return err;
  }
};
export const del = async (model, data) => {
  try {
    return await model.deleteOne(data);
  } catch (err) {
    return err;
  }
};
export const update = async (model, query, data) => {
  try {
    return await model.findOneAndUpdate(query, data);
  } catch (err) {
    return err;
  }
};
