// Here we will put the zod description
// We let assume that the body of todo will be something like 
/*

{
title : 
description:
}
*/


const zod = require("zod")

const todoSchema  = zod.object({
    title: zod.string(),
    description : zod.string()
})

const idSchema = zod.object({
    id: zod.string()
})

module.exports = {
    todoSchema,
    idSchema
}