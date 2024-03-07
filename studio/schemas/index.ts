import {blockContentSchema} from './blockContent'
import {skillSchema} from './skill'
import {projectSchema} from './project'
import {experienceSchema} from './experience'

export const schemaTypes = [...blockContentSchema, ...skillSchema, ...projectSchema, ...experienceSchema]
