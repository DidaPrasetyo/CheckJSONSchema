import * as chai from "chai";
import chaiJsonSchemaAjv from "chai-json-schema-ajv";
import supertest from "supertest";

import recipeSchema from '../schemas/schema.js'

chai.use(chaiJsonSchemaAjv)

const { expect } = chai

const request = supertest('https://dummyjson.com')

describe('Testing Recipes Schema', function() {
    it('Get All Recipes', async function() {
        const res = await request.get('/recipes')
        expect(res.body).to.be.jsonSchema(recipeSchema)
    
    })
    it('Get 1 Recipes', async function() {
        const res = await request.get('/recipes/1')
        expect(res.body).to.be.jsonSchema(recipeSchema)
    
    })
})
