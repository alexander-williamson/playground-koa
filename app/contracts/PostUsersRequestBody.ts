import joi from "joi";

export const Validator = joi
  .object<PostUsersRequestBody>({
    name: joi.string().required(),
    age: joi.number().integer().optional(),
  })
  .required();

export type PostUsersRequestBody = {
  name: string;
  age?: number;
};
